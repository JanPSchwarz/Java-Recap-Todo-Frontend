import {Container, Flex} from "@radix-ui/themes";
import Todo from "./Todo.tsx";
import {useTodoStore} from "../Store/TodoStore.ts";
import {motion} from "motion/react";

export default function DoneSection() {
    const {allTodos} = useTodoStore();
    const todos = allTodos.filter((todo) => todo.status === "DONE");

    return (
        <>
            <Container maxWidth={"800px"}>
                <Flex justify={"center"} gap={"3"} direction={"column"}>
                    {todos.map((todo) => (
                        <motion.div
                            initial={{scale: 0.9, y: 10}}
                            animate={{scale: 1, y: 0}}
                            transition={{duration: 0.4}}
                            key={todo.id}
                        >
                            <Todo todo={todo}/>
                        </motion.div>
                    ))}
                </Flex>
            </Container>
        </>
    )
}
