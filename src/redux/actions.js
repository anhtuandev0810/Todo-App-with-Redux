export const addTodo = (data) => {
    return {
        type: 'todoList/addTodo',
        payload: data
    };
};

export const searchFilter = (text) => {
    return {
        type: 'filters/searchFilter',
        payload: text
    };
};

export const statusChange = (status) => {
    return {
        type: 'filters/statusChange',
        payload: status,
    };
};

export const priorityChange = (priority) => {
    return {
        type: 'filters/priorityChange',
        payload: priority
    };
};

export const toggleStatus = (id) => {
    return {
        type: 'todoList/toggleStatus',
        payload: id
    }
}