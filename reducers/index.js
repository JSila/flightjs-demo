import assign from 'lodash.assign'
import uuid from "node-uuid"

const todos = (state = [], action) => {
    switch (action.type) {
    case 'todos.add':
        let todo = {
            name: action.name,
            id: uuid.v1(),
            completed: false
        }
        return [...state, todo];
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
    case 'todos.getAll':
        return action.todos;
    default:
        return state
    }
};

export default todos
