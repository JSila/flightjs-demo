export const addTodo = (todo) => {
    return {
        type: 'todos.add',
        todo
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
