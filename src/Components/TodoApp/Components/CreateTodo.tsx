import {Button, Container, Dialog, Flex, RadioGroup, Text, TextField} from "@radix-ui/themes";
import React, {useState} from "react";
import axios from "axios";
import {useGlobalAlertStore} from "../Store/GlobalAlertStore.ts";
import {useModalStore} from "../Store/ModalStore.ts";

type createTodoProps = {
    status?: "OPEN" | "IN_PROGRESS" | "DONE" | undefined;
}

export default function CreateTodo({status}: createTodoProps) {

    const [isLoading, setIsLoading] = useState<boolean>(false);

    const {setModalOpen} = useModalStore();
    const {setGlobalAlert} = useGlobalAlertStore();

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData.entries());


        if (!data.description || (data.description as string).trim() === "") {
            return;
        }

        console.log(data);
        setIsLoading(true);
        axios.post("/api/todo", data).then((response) => {
            setGlobalAlert("Todo created successfully", "success");
            console.log("Todo created:", response.data);
        }).catch((error) => {
            console.error("Error creating todo:", error);
            setGlobalAlert(error.message || "Failed to create todo", "error");
        }).finally(() => {
            setModalOpen(false)
            setIsLoading(false);
        });
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
