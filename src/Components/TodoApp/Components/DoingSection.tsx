import type {todoType} from "../Types/TodoAppTypes.ts";

import Todo from "./Todo.tsx";
import {Container, Flex} from "@radix-ui/themes";

export default function DoingSection() {
    const exampleTodo = {
        id: "1",
        description: "Beispiel Todo",
        status: "IN_PROGRESS" as const,
    }
    const exampleTodo2 = {
        id: "1",
        description: "Beispiel Todo asdasdasdasdasdasdasd asdasdasdasdasdasdasdasdasdasdasdasd",
        status: "IN_PROGRESS" as const,
    }
    const todos: todoType[] = [exampleTodo, exampleTodo2];

    return (
        <>
            <Container maxWidth={"800px"}>
                <Flex justify={"center"} gap={"3"} direction={"column"}>
                    {todos.map((todo) => (
                        <Todo todo={todo}/>
                    ))}
                </Flex>
            </Container>
        </>
    )
}
