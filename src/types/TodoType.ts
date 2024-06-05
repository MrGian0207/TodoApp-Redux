export type filtersType = {
    search: string;
    status: string;
    priorities: string[];
}

export type todoType = {
    id: string;
    name: string;
    completed: boolean;
    priority: "Low" | "Medium" | "High";
};

export type stateType = {
    filters: filtersType,
    todoList: todoType[]
};
