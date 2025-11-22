import {create} from "zustand";
import axios from "axios";
import type {todoType, todoTypeDTO} from "../Types/TodoAppTypes.ts";
import {useGlobalCallOutStore} from "./GlobalCallOutStore.ts";
import {useModalStore} from "./ModalStore.ts";

type useTodoStoretype = {
    loading: boolean;
    setIsLoading: (loading: boolean) => void;
    allTodos: todoType[];
    fetchAllTodos: () => void;
    createTodo: (newTodo: todoTypeDTO) => void;
    deleteTodo: (id: string) => void;
}

const useTodoStore = create<useTodoStoretype>((set, get) => ({
    loading: false,

    allTodos: [],

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
                    useGlobalCallOutStore.getState().setGlobalCallOut(error.message || "Failed to fetch todos", "error");
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
            })
            .catch((error) => {
                console.error("Error creating todo:", error);
                useGlobalCallOutStore.getState().setGlobalCallOut(error.message || "Failed to create todo", "error");
            })
            .finally(() => {
                useModalStore.getState().setModalOpen(false);
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
                useGlobalCallOutStore.getState().setGlobalCallOut(error.message || "Failed to delete todo", "error");
            })
            .finally(() => {
                set({loading: false});
            });
    }
}));


export {useTodoStore};