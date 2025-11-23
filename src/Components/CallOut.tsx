import {Callout} from "@radix-ui/themes";
import {InfoCircledIcon} from "@radix-ui/react-icons";
import {motion} from "motion/react";

type alertPropsTypes = {
    message: string;
    type: "success" | "error" | "info";
}

export default function CallOut({message, type}: alertPropsTypes) {

    const getAlertColor = () => {
        switch (type) {
            case "success":
                return "green";
            case "error":
                return "red";
            case "info":
                return "blue";
            default:
                return "blue"
        }
    }

    return (
        <motion.div
            initial={{opacity: 0, x: "100%"}}
            animate={{opacity: 1, x: 0}}
            exit={{opacity: 0, x: "100%"}}
            transition={{duration: 0.3}}
            className={"absolute top-12 right-12"}
        >
            <Callout.Root color={getAlertColor()}>
                <Callout.Icon>
                    <InfoCircledIcon/>
                </Callout.Icon>
                <Callout.Text>
                    {message}
                </Callout.Text>
            </Callout.Root>
        </motion.div>
    )
}
