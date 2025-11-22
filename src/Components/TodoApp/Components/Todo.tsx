import {Button, Card, Flex, IconButton, Text} from "@radix-ui/themes";
import type {todoType} from "../Types/TodoAppTypes.ts";
import {ArrowLeftIcon, ArrowRightIcon, Pencil2Icon} from "@radix-ui/react-icons";
import {useTodoStore} from "../Store/TodoStore.ts";
import AlertDialogBase from "../../AlertDialogBase.tsx";

export default function Todo({todo}: { todo: todoType }) {

    const {deleteTodo} = useTodoStore();

    const getTodoStatusColor = () => {
        switch (todo.status) {
            case "OPEN":
                return "var(--red-5)";
            case "IN_PROGRESS":
                return "var(--blue-5)";
            case "DONE":
                return "var(--green-5)";
            default:
                return "red";
        }
    }

    const getStatusText = () => {
        switch (todo.status) {
            case "OPEN":
                return "open";
            case "IN_PROGRESS":
                return "doing";
            case "DONE":
                return "done";
            default:
                return "";
        }
    }

    const deleteTodoHandler = () => {
        deleteTodo(todo.id);
    }

    return (
        <Card style={{background: getTodoStatusColor()}}>
            <Flex justify={"center"} align={"start"} gap={"3"} direction={"column"}>
                <Flex justify={"between"} className={"w-full"}>
                    <Text className={"italic"} weight={"light"} size={"1"}>{getStatusText()}</Text>
                    <AlertDialogBase onConfirm={deleteTodoHandler}
                                     id={todo.id}
                                     title={"Are you sure you want to Delete this?"}>
                        <Text className={"italic"}>
                            {todo.description}
                        </Text>
                    </AlertDialogBase>
                </Flex>
                <Text className={"w-full"} wrap={"wrap"}>{todo.description}</Text>
                <Flex gap={"1"} justify={"between"} className={"w-full"}>
                    <Button size={"1"}>
                        Edit
                        <Pencil2Icon/>
                    </Button>
                    {todo.status === "OPEN" &&
                        <IconButton variant={"soft"} size={"1"}><ArrowRightIcon/></IconButton>
                    }
                    {todo.status === "IN_PROGRESS" &&
                        (<Flex gap={"3"}>
                            <IconButton variant={"soft"} size={"1"}><ArrowLeftIcon/></IconButton>
                            <IconButton variant={"soft"} size={"1"}><ArrowRightIcon/></IconButton>
                        </Flex>)
                    }
                    {todo.status === "DONE" &&
                        <Flex gap={"3"}>
                            <IconButton variant={"soft"} size={"1"}>
                                <ArrowLeftIcon/></IconButton>
                        </Flex>
                    }
                </Flex>
            </Flex>
        </Card>
    )
}

/*
type todoType = {
    id: string;
    description: string;
    status: "OPEN" | "IN_PROGRESS" | "DONE";
}
* */
