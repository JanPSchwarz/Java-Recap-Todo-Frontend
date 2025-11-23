import type {todoType} from "../Types/TodoAppTypes.ts";
import {Box, Flex, Grid, Heading, Text} from "@radix-ui/themes";
import Todo from "./Todo.tsx";
import {useTodoStore} from "../Store/TodoStore.ts";

type sectionsType = {
    status: "OPEN" | "IN_PROGRESS" | "DONE",
    title: string
}

export function TodoBoard() {

    const {allTodos, loading} = useTodoStore();


    const sections: sectionsType[] = [
        {
            status: "OPEN",
            title: "To-Do"
        },
        {
            status: "IN_PROGRESS",
            title: "Doing"
        },
        {
            status: "DONE",
            title: "Done"
        },];

    return (
        <>
            <Grid columns={{initial: "1", xs: "3"}} gap="3" width="auto">
                {sections.map((section) => (
                    <Flex key={section.status} justify={"start"} gap={"3"} direction={"column"}>
                        <Heading align={"center"}>{section.title}</Heading>
                        <RenderTodoByStatus status={section.status} todos={allTodos}/>
                    </Flex>
                ))}
            </Grid>
            {allTodos.length == 0 && !loading && (
                <>
                    <img src={"/nothinghere.svg"} alt={"Nothing found"} className={"object-contain w-1/3 m-auto"}/>
                    <Text align={"center"} className={"text-[var(--accent-9)]"}>No todos, create one or have a
                        rest</Text>
                </>
            )}
        </>
    )
}

function RenderTodoByStatus({status, todos}: { status: "OPEN" | "IN_PROGRESS" | "DONE", todos: todoType[] }) {
    const filteredTodos = todos.filter((todo) => todo.status === status);

    return (
        <>
            {
                filteredTodos.map((todo) => (
                    <Box key={todo.id} my={"2"} width={"100%"}>
                        <Todo key={todo.id} todo={todo}/>
                    </Box>
                ))
            }
        </>
    )
}
