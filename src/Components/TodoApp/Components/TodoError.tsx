import {Callout} from "@radix-ui/themes";
import {InfoCircledIcon} from "@radix-ui/react-icons";
import type {todoErrorResponse} from "../Types/TodoAppTypes.ts";


export default function TodoError({todoError}: { todoError: todoErrorResponse }) {

    return (
        <Callout.Root my={"4"} color={"red"} variant={"soft"}>
            <Callout.Text size={"4"} weight={"bold"}>Error!</Callout.Text>
            {todoError.status &&
                <Callout.Text size={"2"} weight={"light"}>
                    Http Status: {todoError.status}
                </Callout.Text>
            }
            <Callout.Icon>
                <InfoCircledIcon/>
            </Callout.Icon>
            <Callout.Text>{todoError.error}</Callout.Text>
        </Callout.Root>
    )
}
