import {Button, Container, Dialog, Flex, RadioGroup, Text, TextField} from "@radix-ui/themes";
import React, {useEffect} from "react";
import {useTodoStore} from "../Store/TodoStore.ts";
import type {todoTypeDTO} from "../Types/TodoAppTypes.ts";
import TodoError from "./TodoError.tsx";
import {AnimatePresence, motion} from "motion/react";

type createTodoProps = {
    status?: "OPEN" | "IN_PROGRESS" | "DONE" | undefined;
}

export default function CreateTodo({status}: createTodoProps) {

    const {createTodo, loading, error, resetError} = useTodoStore();

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData.entries());


        if (!data.description || (data.description as string).trim() === "") {
            return;
        }

        createTodo(data as todoTypeDTO);
    }

    useEffect(() => {
        return () => {
            // Clear fetch error on unmount
            if (error) {
                resetError();
            }
        }
    }, [])

    return (

        <Container my={"3"}>
            <form onSubmit={handleSubmit} className={"flex flex-col gap-4"}>
                <Text as={"label"} htmlFor={"description"}>
                    Description:
                </Text>
                <TextField.Root required={true} id={"description"} name={"description"} placeholder={"Laundry.."}/>
                <RadioGroup.Root name={"status"} defaultValue={status as string ?? "OPEN"} size={"3"}>
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

/*
type todoTypeDTO = {
    description: string;
    status: "OPEN" | "IN_PROGRESS" | "DONE";
}
* */
