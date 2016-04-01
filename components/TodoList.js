import flight from 'flightjs'
import withRedux from '../mixins/with-redux';
import TodoItem from './TodoItem'
import includes from 'lodash.includes'
import without from 'lodash.without'

export default flight.component(function () {
    var self = this;
    this.displayedTodoIds = [];
    this.removeId = function(event, data) {
        self.displayedTodoIds = without(self.displayedTodoIds, data.id);
    };
    this.after('initialize', function() {
        this.on(document, 'removeTodo', this.removeId);

        let $ul = this.$node;
        this.store.subscribe(function(state) {
            state.forEach(function(todo) {
                if (includes(self.displayedTodoIds, todo.id)) {
                    return;
                }

                self.displayedTodoIds.push(todo.id);
                TodoItem.createAndAttachTo(todo, $ul);
            });
        });
    });
}, withRedux)