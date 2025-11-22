import {Callout} from "@radix-ui/themes";
import {InfoCircledIcon} from "@radix-ui/react-icons";

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

        <Callout.Root className={"absolute top-12 right-12"} color={getAlertColor()}>
            <Callout.Icon>
                <InfoCircledIcon/>
            </Callout.Icon>
            <Callout.Text>
                {message}
            </Callout.Text>
        </Callout.Root>


    )
}
