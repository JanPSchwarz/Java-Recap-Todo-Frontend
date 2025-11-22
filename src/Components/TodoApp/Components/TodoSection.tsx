import {Container, Flex} from "@radix-ui/themes";
import Todo from "./Todo.tsx";
import {useTodoStore} from "../Store/TodoStore.ts";

export default function TodoSection() {
    
    const allTodos = useTodoStore((state) => state.allTodos);

    return (
        <>
            <Container maxWidth={"800px"}>
                <Flex justify={"center"} gap={"3"} direction={"column"}>
                    {allTodos.filter((todo) => todo.status === "OPEN").map((todo) => (
                        <Todo key={todo.id} todo={todo}/>
                    ))}
                </Flex>
            </Container>
        </>
    )
}
