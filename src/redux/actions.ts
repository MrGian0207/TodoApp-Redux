export const addTodo = (data: any) => {
    return {
        type: 'todoList/addTodo',
        payload: data,
    }
}

export const searchFilterChange = (text: any) => {
    return {
        type: 'filters/searchFilterChange',
        payload: text
    }
}

export const statusFilterChange = (status: any) => {
    return {
        type: 'filters/statusFilterChange',
        payload: status
    }
}

export const priorityFilterChange = (priorities: any) => {
    return {
        type: 'filters/priorityFilterChange',
        payload: priorities
    }
}

export const toggleTodoStatus = (todoId: any) => {
    return {
        type: 'todoList/toggleTodoStatus',
        payload: todoId 
    }
}