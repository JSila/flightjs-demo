import { TodoItem } from '.'
import includes from 'lodash.includes'
import without from 'lodash.without'
import { receiveTodos } from '../actions/index'
import withRedux from '../mixins/with-redux'
import withLocalStorage from '../mixins/with-local-storage'

export default flight.component(function () {
    var self = this;
    this.displayedTodoIds = [];
    this.removeId = function(event, data) {
        self.displayedTodoIds = without(self.displayedTodoIds, data.id);
    };
    this.checkLocalStorage = function() {
        let todos = this.localStorage.get('todos');
        if(todos) {
            this.store.dispatch(
                receiveTodos(todos)
            );
        }
        this.trigger(document, 'hideLoader');
    };
    this.after('initialize', function() {
        this.on(document, 'removeTodo', this.removeId);

        let $ul = this.$node;
        this.store.subscribe(function(state) {
            self.localStorage.set('todos', state);
            state.forEach(function(todo) {
                if (includes(self.displayedTodoIds, todo.id)) {
                    return;
                }

                self.displayedTodoIds.push(todo.id);
                TodoItem.createAndAttachTo(todo, $ul);
            });
        });
        this.checkLocalStorage();
    });
}, withRedux, withLocalStorage);