import {Card, Flex, IconButton, Text} from "@radix-ui/themes";
import type {todoType} from "../Types/TodoAppTypes.ts";
import {ArrowLeftIcon, ArrowRightIcon, Pencil2Icon} from "@radix-ui/react-icons";
import {useTodoStore} from "../Store/TodoStore.ts";
import AlertDialogBase from "../../AlertDialogBase.tsx";
import Modal from "../../Modal.tsx";
import UpdateTodo from "./UpdateTodo.tsx";

export default function Todo({todo}: { todo: todoType }) {

    const {deleteTodo, promoteTodo, demoteTodo} = useTodoStore();


    const getTodoStatusColor = () => {
        switch (todo.status) {
            case "OPEN":
                return "var(--red-a4)";
            case "IN_PROGRESS":
                return "var(--blue-a4)";
            case "DONE":
                return "var(--jade-a4)";
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

    const handlePromoteTodo = () => {
        promoteTodo(todo);
    }

    const handleDemoteTodo = () => {
        demoteTodo(todo);
    }

    return (
        <Card style={{background: getTodoStatusColor()}}>
            <Flex justify={"center"} align={"start"} gap={"3"} direction={"column"}>
                <Flex justify={"between"} className={"w-full"}>
                    <Text className={"italic"} weight={"light"} size={"1"}>{getStatusText()}</Text>
                    <AlertDialogBase onConfirm={deleteTodoHandler}
                                     id={todo.id}
                                     title={"Delete"}
                                     description={"Are you sure you want to delete this todo?"}>
                        <Text className={"italic"}>
                            {todo.description}
                        </Text>
                    </AlertDialogBase>
                </Flex>
                <Text className={"w-full"} wrap={"wrap"}>{todo.description}</Text>
                <Flex gap={"1"} justify={"between"} className={"w-full"}>
                    <Modal id={todo.id} buttonText={"Edit"} buttonSize={"1"} icon={<Pencil2Icon/>} title={"Edit"}
                           description={"Edit Todo"}>
                        <UpdateTodo todoId={todo.id}/>
                    </Modal>
                    {todo.status === "OPEN" &&
                        <IconButton onClick={handlePromoteTodo} variant={"soft"}
                                    size={"1"}><ArrowRightIcon/></IconButton>
                    }
                    {todo.status === "IN_PROGRESS" &&
                        (<Flex gap={"3"}>
                            <IconButton variant={"soft"} size={"1"}
                                        onClick={handleDemoteTodo}><ArrowLeftIcon/></IconButton>
                            <IconButton variant={"soft"} size={"1"}
                                        onClick={handlePromoteTodo}><ArrowRightIcon/></IconButton>
                        </Flex>)
                    }
                    {todo.status === "DONE" &&
                        <Flex gap={"3"}>
                            <IconButton onClick={handleDemoteTodo} variant={"soft"} size={"1"}>
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
