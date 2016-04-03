export const addTodo = (name) => {
    return {
        type: 'todos.add',
        name
    }
};

export const removeTodo = (id) => {
    return {
        type: 'todos.remove',
        id
    }
};

export const toggleTodo = (id) => {
    return {
        type: 'todos.toggle',
        id
    }
};

export const receiveTodos = (todos) => {
    return {
        type: 'todos.getAll',
        todos
    }
};