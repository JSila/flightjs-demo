import withRedux from '../mixins/with-redux';
import { addTodo } from '../actions'

export default flight.component(function() {
    this.attributes({
        inputSelector: 'input#name'
    });

    this.getTodoName = function() {
        var s = this.$name.val();
        this.$name.val('');
        return s;
    };

    this.submit = function(event) {
        event.preventDefault();
        let todo = {
            name: this.getTodoName(),
            completed: false
        };
        this.store.dispatch(addTodo(todo));
    };

    this.after('initialize', function() {
        this.$name = this.select('inputSelector');
        this.on('submit', this.submit);
    });
}, withRedux);