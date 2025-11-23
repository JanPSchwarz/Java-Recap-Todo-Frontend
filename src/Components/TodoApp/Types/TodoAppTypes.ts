export type todoType = {
    id: string;
    description: string;
    status: "OPEN" | "IN_PROGRESS" | "DONE";
}

export type todoTypeDTO = {
    description: string;
    status: "OPEN" | "IN_PROGRESS" | "DONE";
}

export type todoErrorResponse = {
    timeStamp?: string;
    id?: string;
    status?: number;
    error: string;
}