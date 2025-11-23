import TodoAppControls from "../Components/TodoApp/Components/TodoAppControls.tsx";
import PageHeading from "../Components/PageHeading.tsx";
import useLocalStorageState from "use-local-storage-state";
import {TodoBoard} from "../Components/TodoApp/Components/TodoBoard.tsx";
import TodoSection from "../Components/TodoApp/Components/TodoSection.tsx";
import DoingSection from "../Components/TodoApp/Components/DoingSection.tsx";
import DoneSection from "../Components/TodoApp/Components/DoneSection.tsx";
import PageNotFound from "../Components/PageNotFound.tsx";
import {Box, Button, Flex, IconButton, Spinner} from "@radix-ui/themes";
import {useTodoStore} from "../Components/TodoApp/Store/TodoStore.ts";
import Modal from "../Components/Modal.tsx";
import CreateTodo from "../Components/TodoApp/Components/CreateTodo.tsx";
import {useEffect} from "react";
import {ReloadIcon} from "@radix-ui/react-icons";


export default function TodoApp() {
    const [currentSection] = useLocalStorageState<string>("todoSection", {defaultValue: "board"});

    const {loading, fetchAllTodos, allTodos, createExampleTodos} = useTodoStore();


    useEffect(() => {
            fetchAllTodos()
        }, []
    );


    const renderSection = () => {
        switch (currentSection) {
            case "board":
                return <TodoBoard/>;
            case "to-do":
                return <TodoSection/>;
            case "doing":
                return <DoingSection/>;
            case "done":
                return <DoneSection/>;
            default:
                return <PageNotFound/>;
        }
    }

    const getCurrentStatusBySection = () => {
        switch (currentSection) {
            case "to-do":
                return "OPEN";
            case "doing":
                return "IN_PROGRESS";
            case "done":
                return "DONE";
            default:
                return undefined;
        }
    }

    const handleCreateExamples = () => {
        createExampleTodos();
    }

    const handleReload = () => {
        if (loading) return;

        fetchAllTodos();
    }

    return (
        <>
            <TodoAppControls/>
            <PageHeading title={"Todo-App"}/>
            <Box style={{position: "relative"}} className={"mb-4"}>
                <Spinner size={"3"} style={{position: "absolute", top: "50%", transform: "translateY(-50%)"}}
                         loading={loading}/>
                <Flex align={"center"} gap={"3"} className={"w-full"} justify={"end"}>
                    {allTodos.length == 0 && !loading &&
                        <Button disabled={loading} onClick={handleCreateExamples}>
                            Create Examples
                        </Button>
                    }
                    {!loading &&
                        <IconButton variant={"surface"} loading={loading} onClick={handleReload}>
                            <ReloadIcon/>
                        </IconButton>}
                    <Modal id={"createTodo"} title={"Todo"} description={"Create a new To-Do"}
                           buttonText={"New Todo"}>
                        <CreateTodo status={getCurrentStatusBySection()}/>
                    </Modal>
                </Flex>
            </Box>
            {renderSection()}
        </>
    )
}
