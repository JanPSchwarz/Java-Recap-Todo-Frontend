import type {todoTypeDTO} from "../Types/TodoAppTypes.ts";
import {useEffect} from "react";
import {Button, Container, Dialog, Flex, RadioGroup, Text, TextField} from "@radix-ui/themes";
import {useTodoStore} from "../Store/TodoStore.ts";
import {AnimatePresence, motion} from "motion/react";
import TodoError from "./TodoError.tsx";

export default function UpdateTodo({todoId}: {
    todoId: string
}) {

    const {updateTodo, loading, error, resetFetchError, allTodos, setError} = useTodoStore();


    const todoToUpdate = allTodos.find((todo) => todo.id === todoId);

    console.log(todoToUpdate);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData.entries());


        if (!data.description || (data.description as string).trim() === "") {
            return;
        }

        if (data.description === todoToUpdate?.description && data.status === todoToUpdate.status) {
            setError({error: "No changes made"});
            return;
        }

        updateTodo(todoId, data as todoTypeDTO);
    }

    useEffect(() => {
        return () => {
            // Clear fetch error on unmount
            if (error) {
                resetFetchError();
            }
        }
    }, [])

    return (

        <Container my={"3"}>
            <form onSubmit={handleSubmit} className={"flex flex-col gap-4"}>
                <Text as={"label"} htmlFor={"description"}>
                    Description:
                </Text>
                <TextField.Root required={true} defaultValue={todoToUpdate?.description} id={"description"}
                                name={"description"} placeholder={"Laundry.."}/>
                <RadioGroup.Root name={"status"} defaultValue={todoToUpdate?.status} size={"3"}>
                    <Flex justify={"between"}>
                        <RadioGroup.Item value={"OPEN"}
                                         id={"open"}>To-Do</RadioGroup.Item>
                        <RadioGroup.Item value={"IN_PROGRESS"} id={"open"}>Doing</RadioGroup.Item>
                        <RadioGroup.Item value={"DONE"} id={"open"}>Done</RadioGroup.Item>
                    </Flex>
                </RadioGroup.Root>
                <Flex justify={"between"} gap={"5"}>
                    <Button loading={loading} type={"submit"}>Submit</Button>
                    <Dialog.Close>
                        <Button variant={"soft"}>Close</Button>
                    </Dialog.Close>
                </Flex>
            </form>
            <AnimatePresence>
                {error && !loading &&
                    <motion.div
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        exit={{opacity: 0}}
                        transition={{duration: 0.3}}
                    >
                        <TodoError todoError={error}/>
                    </motion.div>
                }
            </AnimatePresence>
        </Container>

    )
}
