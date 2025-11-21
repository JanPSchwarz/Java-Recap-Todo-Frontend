import * as React from "react";
import {useEffect} from "react";
import {Flex} from "@radix-ui/themes";
import Navigation from "./Components/Navigation.tsx";
import Footer from "./Components/Footer.tsx";
import {useGlobalAlertStore} from "./Components/TodoApp/Store/GlobalAlertStore.ts";
import Alert from "./Components/Alert.tsx";

export default function Layout({children}: { children: React.ReactNode }) {

    const {showAlert, alertType, alertMessage, hideGlobalAlert} = useGlobalAlertStore();

    useEffect(() => {
        let timeout: number | undefined;
        if (showAlert) {
            timeout = setTimeout(() => {
                hideGlobalAlert();
            }, 3000)
        }

        return () => {
            if (timeout) {
                clearTimeout(timeout);
            }
        }
    }, [hideGlobalAlert, showAlert])

    return (
        <Flex direction={"column"} width={"100vw"} maxWidth={"1500px"} minHeight={"100dvh"} p={"1rem 2rem"} gap={"3"}>
            {showAlert && <Alert message={alertMessage} type={alertType}/>}
            <Navigation/>
            {children}
            <Footer/>
        </Flex>
    )
}