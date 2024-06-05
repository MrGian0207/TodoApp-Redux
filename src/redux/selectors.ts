import { stateType } from "../types/TodoType"
import { createSelector } from "reselect";

export const todoListSelector = ((state: stateType) => state.todoList);
export const searchTextSelector = ((state: stateType) => state.filters.search)
export const filterStatusSelector = ((state: stateType) => state.filters.status)
export const prioritesSelector = ((state: stateType) => state.filters.priorities)

export const todosRemainingSelector =
    createSelector(todoListSelector,
        filterStatusSelector,
        prioritesSelector,
        searchTextSelector,
        (todoList,
            status,
            priorities,
            searchText) => {
            switch (status) {
                case "All":
                    return todoList.filter((todo) => {
                        return priorities.length
                            ? priorities.includes(todo.priority) && todo.name.includes(searchText)
                            : todo.name.includes(searchText);
                    })
                case "Completed":
                    return todoList.filter((todo) => {
                        return priorities.length
                            ? priorities.includes(todo.priority) && todo.name.includes(searchText) && todo.completed
                            : todo.name.includes(searchText) && todo.completed;
                    })
                case "Todo":
                    return todoList.filter((todo) => {
                        return priorities.length
                            ? priorities.includes(todo.priority) && todo.name.includes(searchText) && !todo.completed
                            : todo.name.includes(searchText) && !todo.completed;
                    })
                default:
                    return todoList.filter((todo) => {
                        return todo.name.includes(searchText);
                    })
            }
        })