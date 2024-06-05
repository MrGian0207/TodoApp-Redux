import { filtersType } from "../../types/TodoType";


const filtersReducer = (state: filtersType, action: { type: string, payload: any }): filtersType => {
    switch (action.type) {
        case 'filters/searchFilterChange': {
            return {
                ...state,
                search: action.payload,
            }
        }
        case 'filters/statusFilterChange': { 
            return {
               ...state,
                status: action.payload,
            }
        }

        case 'filters/priorityFilterChange': {
            return {
                ...state,
                priorities: action.payload,
            }
         }

        default:
            return state;
    }

};

export default filtersReducer;