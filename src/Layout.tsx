import * as React from "react";
import {useEffect} from "react";
import {Flex} from "@radix-ui/themes";
import Navigation from "./Components/Navigation.tsx";
import Footer from "./Components/Footer.tsx";
import {useGlobalCallOutStore} from "./Components/TodoApp/Store/GlobalCallOutStore.ts";
import CallOut from "./Components/CallOut.tsx";

export default function Layout({children}: { children: React.ReactNode }) {

    const {showCallOut, alertType, alertMessage, hideGlobalCallout} = useGlobalCallOutStore();

    useEffect(() => {
        let timeout: number | undefined;
        if (showCallOut) {
            timeout = setTimeout(() => {
                hideGlobalCallout();
            }, 3000)
        }

        return () => {
            if (timeout) {
                clearTimeout(timeout);
            }
        }
    }, [hideGlobalCallout, showCallOut])

    return (
        <Flex direction={"column"} width={"100vw"} maxWidth={"1500px"} minHeight={"100dvh"} p={"1rem 2rem"} gap={"3"}>
            {showCallOut && <CallOut message={alertMessage} type={alertType}/>}
            <Navigation/>
            {children}
            <Footer/>
        </Flex>
    )
}