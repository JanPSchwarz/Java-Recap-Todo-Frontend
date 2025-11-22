import {Button, Container, Dialog, Flex, RadioGroup, Text, TextField} from "@radix-ui/themes";
import React, {useState} from "react";
import {useTodoStore} from "../Store/TodoStore.ts";
import type {todoTypeDTO} from "../Types/TodoAppTypes.ts";

type createTodoProps = {
    status?: "OPEN" | "IN_PROGRESS" | "DONE" | undefined;
}

export default function CreateTodo({status}: createTodoProps) {

    const [isLoading, setIsLoading] = useState<boolean>(false);

    const {createTodo} = useTodoStore();

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData.entries());


        if (!data.description || (data.description as string).trim() === "") {
            return;
        }

        setIsLoading(true);
        createTodo(data as todoTypeDTO);
    }

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
                    <Button loading={isLoading} type={"submit"}>Submit</Button>
                    <Dialog.Close>
                        <Button variant={"soft"}>Close</Button>
                    </Dialog.Close>
                </Flex>
            </form>
        </Container>

    )
}

/*
type todoTypeDTO = {
    description: string;
    status: "OPEN" | "IN_PROGRESS" | "DONE";
}
* */
