import {Container, Flex} from "@radix-ui/themes";
import Todo from "./Todo.tsx";
import {useTodoStore} from "../Store/TodoStore.ts";
import {motion} from "motion/react";

export default function TodoSection() {

    const allTodos = useTodoStore((state) => state.allTodos);

    return (
        <>
            <Container maxWidth={"800px"}>
                <Flex justify={"center"} gap={"3"} direction={"column"}>
                    {allTodos.filter((todo) => todo.status === "OPEN").map((todo) => (
                        <motion.div
                            initial={{scale: 0.9, y: 10}}
                            animate={{scale: 1, y: 0}}
                            transition={{duration: 0.4}}
                            key={todo.id}
                        >
                            <Todo key={todo.id} todo={todo}/>
                        </motion.div>
                    ))}
                </Flex>
            </Container>
        </>
    )
}
