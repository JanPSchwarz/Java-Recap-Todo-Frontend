import {useTodoStore} from "../Store/TodoStore.ts";

import Todo from "./Todo.tsx";
import {Container, Flex} from "@radix-ui/themes";

export default function DoingSection() {


    const {allTodos} = useTodoStore();
    const todos = allTodos.filter((todo) => todo.status === "IN_PROGRESS");

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
