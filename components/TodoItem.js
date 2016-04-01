import flight from 'flightjs'
import Mustache from 'mustache'
import withRedux from '../mixins/with-redux'
import { toggleTodo, removeTodo } from '../actions'
import withTeardownAndRemoveNode from '../mixins/with-teardown-and-remove-node'

let TodoItem = flight.component(function () {
    this.attributes({
        name: 'span',
        removeBtn: 'i'
    });
    this.toggle = function() {
        this.store.dispatch(toggleTodo(this.node.dataset.id));
        this.$name.toggleClass('line-through');
    };
    this.remove = function() {
        let id = parseInt(this.node.dataset.id);
        this.store.dispatch(removeTodo(id));
        this.trigger(document, 'removeTodo', { id });
        this.teardownAndRemoveNode();
    };
    this.after('initialize', function () {
        this.$name = this.select('name');
        this.$removeBtn = this.select('removeBtn');
        this.on(this.$name, 'click', this.toggle);
        this.on(this.$removeBtn, 'click', this.remove);
    });
}, withRedux, withTeardownAndRemoveNode);

TodoItem.createAndAttachTo = function(todo, $ul) {
    let $todo = $(TodoItem.markup(todo));
    $ul.append($todo);
    TodoItem.attachTo($todo)
};

TodoItem.markup = function(todo) {
    return Mustache.render('<li data-id="{{ id }}"><span class="{{#completed}}line-through{{/completed}}">{{ name }}</span> <i>&#10007;</i></li>', todo);
};

export default TodoItem;
