import {Container, Flex} from "@radix-ui/themes";
import Todo from "./Todo.tsx";
import {useTodoStore} from "../Store/TodoStore.ts";

export default function DoneSection() {
    const {allTodos} = useTodoStore();
    const todos = allTodos.filter((todo) => todo.status === "DONE");

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
