import { stateType, } from "../types/TodoType";
import filtersReducer from "../components/Filters/FiltersSlice";
import todoListReducer from "../components/TodoList/TodosSlice";
// import { combineReducers } from "redux";

const initState: stateType = {
    filters: {
        search: "",
        status: "All",
        priorities: [],
    },
    todoList: [
        { id: '1', name: "Learn Javascript", completed: false, priority: "Medium" },
        { id: '2', name: "Learn React", completed: true, priority: "High" },
        { id: '3', name: "Learn Redux", completed: false, priority: "Low" },
    ]
}

const rootReducer = (state: stateType = initState, action: {type: string, payload: any}) => {
    return { 
        filters: filtersReducer(state.filters, action),
        todoList: todoListReducer(state.todoList, action)
    }
}

// const rootReducer = combineReducers({
//     filters: filtersReducer,
//     todoList: todoListReducer,
// })


export default rootReducer;