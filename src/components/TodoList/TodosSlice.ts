import { todoType } from "../../types/TodoType";

const todoListReducer = (state: todoType[], action: { type: string, payload: any }): todoType[] => {
    switch (action.type) {
        case 'todoList/addTodo': {
            return [
                ...state,
                action.payload
            ]
        }

        case 'todoList/toggleTodoStatus': {
            return state.map(todo =>
                todo.id === action.payload
                    ? { ...todo, completed: !todo.completed }
                    : todo);
        }


        default:
            return state;
    }

};

export default todoListReducer;