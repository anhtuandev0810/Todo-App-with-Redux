//Co the su dung createSelector cho de hinh dung hon.

// export const todoListSelector = (state) => {
//     const todoRemaining = state.todoList.filter((todo) => {
//         return todo.name.includes(state.filters.search);
//     });
//     return todoRemaining;
// };
// export const searchSelector = (state) => state.filters.search;
import { createSelector } from 'reselect';

export const searchSelector = (state) => state.filters.search;
export const statusFilterSelector = (state) => state.filters.status;
export const priorityFilterSelector = (state) => state.filters.priority;
export const todoListSelector = (state) => state.todoList;

export const todoRemainingSelector = createSelector(
    todoListSelector,
    statusFilterSelector,
    priorityFilterSelector,
    searchSelector,
    (todoList, status, priority, searchText) => {
        return todoList.filter((todo) => {
            if(status === 'All' ) {
                return priority.length ? todo.name.includes(searchText) && priority.includes(todo.priority) : todo.name.includes(searchText);
            }
            return (todo.name.includes(searchText) && status === 'Completed' ? todo.completed : !todo.completed) && (priority.length ? priority.includes(todo.priority) : true);
        })
    }
)