import {create} from "zustand";
import axios from "axios";
import type {todoErrorResponse, todoType, todoTypeDTO} from "../Types/TodoAppTypes.ts";
import {useGlobalCallOutStore} from "./GlobalCallOutStore.ts";
import {useModalStore} from "./ModalStore.ts";

type useTodoStoretype = {
    loading: boolean;
    setIsLoading: (loading: boolean) => void;
    error: todoErrorResponse | null;
    setError: (error: todoErrorResponse) => void;
    resetFetchError: () => void;
    allTodos: todoType[];
    fetchAllTodos: () => void;
    createTodo: (newTodo: todoTypeDTO) => void;
    deleteTodo: (id: string) => void;
    updateTodo: (id: string, updatedFields: todoTypeDTO) => void;
    promoteTodo: (todo: todoType) => void;
    demoteTodo: (todo: todoType) => void;
}

const useTodoStore = create<useTodoStoretype>((set, get) => ({
    loading: false,

    allTodos: [],

    error: null,

    setError: (error: todoErrorResponse) => set({error}),

    resetFetchError: () => set({error: null}),

    setIsLoading: (loading: boolean) => set({loading}),

    fetchAllTodos: () => {
        set({loading: true});
        axios.get("/api/todo")
            .then(
                (response) => {
                    set({allTodos: response.data});
                    console.log("fetch all todos")
                }
            )
            .catch(
                (error) => {
                    useGlobalCallOutStore.getState().setGlobalCallOut(error.response?.data?.error || "Failed to fetch todos", "error");
                    console.error("Error fetching todos:", error);
                }
            )
            .finally(() => set({loading: false}));
    },

    createTodo: (newTodo: todoTypeDTO) => {
        set({loading: true});
        axios.post("/api/todo", newTodo)
            .then((response) => {
                console.log("Todo created:", response.data);
                useGlobalCallOutStore.getState().setGlobalCallOut("Todo created successfully", "success");
                get().fetchAllTodos();
                useModalStore.getState().setModalOpen("");
            })
            .catch((error) => {
                console.error("Error creating todo:", error);
                useGlobalCallOutStore.getState().setGlobalCallOut(error.response?.data?.error || "Failed to create todo", "error");
                set({error: error.response?.data || null});
            })
            .finally(() => {
                set({loading: false});
            });
    },

    deleteTodo: (id: string) => {
        set({loading: true});
        axios.delete(`/api/todo/${id}`)
            .then((response) => {
                useGlobalCallOutStore.getState().setGlobalCallOut("Todo deleted successfully", "success");
                console.log("Todo deleted:", response.data);
                get().fetchAllTodos();
            })
            .catch((error) => {
                console.error("Error deleting todo:", error);
                useGlobalCallOutStore.getState().setGlobalCallOut(error.response?.data?.error || "Failed to delete todo", "error");
            })
            .finally(() => {
                set({loading: false});
            });
    },

    updateTodo: (id: string, updatedFields: todoTypeDTO) => {
        set({loading: true});
        axios.put(`/api/todo/${id}`, updatedFields)
            .then((response) => {
                console.log("Todo updated:", response.data);
                useGlobalCallOutStore.getState().setGlobalCallOut("Todo updated successfully", "success");
                get().fetchAllTodos();
                useModalStore.getState().setModalOpen("");
            })
            .catch((error) => {
                console.error("Error updating todo:", error);
                useGlobalCallOutStore.getState().setGlobalCallOut(error.response?.data?.error || "Failed to update todo", "error");
                set({error: error.response?.data || null});
            })
            .finally(() => {
                set({loading: false});
            });
    },

    promoteTodo: (todo: todoType) => {
        set({loading: true});

        const newStatus = todo.status === "OPEN" ? "IN_PROGRESS" : todo.status === "IN_PROGRESS" ? "DONE" : null;

        if (!newStatus) {
            return;
        }

        const updatedTodo = {...todo, status: newStatus};


        axios.put(`/api/todo/${todo.id}`, updatedTodo)
            .then((response) => {
                console.log("Todo promoted:", response.data);
                useGlobalCallOutStore.getState().setGlobalCallOut("Todo promoted successfully", "success");
                get().fetchAllTodos();
            })
            .catch((error) => {
                console.error("Error promoting todo:", error);
                useGlobalCallOutStore.getState().setGlobalCallOut(error.response?.data?.error || "Failed to promote todo", "error");
            })
            .finally(() => {
                set({loading: false});
            });
    },

    demoteTodo: (todo: todoType) => {
        set({loading: true});

        const newStatus = todo.status === "DONE" ? "IN_PROGRESS" : todo.status === "IN_PROGRESS" ? "OPEN" : null;

        if (!newStatus) {
            return;
        }

        const updatedTodo = {...todo, status: newStatus};
        axios.put(`/api/todo/${todo.id}`, updatedTodo)
            .then((response) => {
                console.log("Todo demoted:", response.data);
                useGlobalCallOutStore.getState().setGlobalCallOut("Todo demoted successfully", "success");
                get().fetchAllTodos();
            })
            .catch((error) => {
                console.error("Error demoting todo:", error);
                useGlobalCallOutStore.getState().setGlobalCallOut(error.response?.data?.error || "Failed to demote todo", "error");
            })
            .finally(() => {
                set({loading: false});
            });
    }
}));


export {useTodoStore};