import assign from 'lodash.assign'

var nextId = 0;

const todos = (state = [], action) => {
    switch (action.type) {
    case 'todos.add':
        action.todo.id = nextId++;
        return [...state, action.todo];
    case 'todos.remove':
        return state.filter((t) => t.id != action.id);
    case 'todos.toggle':
        return state.map((t) => {
            if (t.id == action.id) {
                return assign({}, t, {
                    completed: !t.completed
                });
            } else {
                return t;
            }
        });
    default:
        return state
    }
};

export default todos
