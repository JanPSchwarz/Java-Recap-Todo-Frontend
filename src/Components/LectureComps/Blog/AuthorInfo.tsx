import {Button, Flex, Popover, Strong, Text} from "@radix-ui/themes";
import {type authorInfo} from "../../../../lib/BlogPosts.ts";

/*
author_infos: {
            name: "Lena Meier",
            age: 32,
            location: "Berlin, Deutschland",
            background: "Journalistin mit Fokus auf digitale Kultur und moderne Lebensstile."
        }
*/

export default function AuthorInfo({props}: { props: authorInfo }) {
    return (
        <Popover.Root>


            <Popover.Trigger>
                <Button variant={"ghost"}>
                    {props.name}
                </Button>
            </Popover.Trigger>


            <Popover.Content maxWidth={"95vw"}>
                <Flex direction={"column"} gap={"2"}>
                    <Text as={"p"} size={"2"}>About: <Strong>{props.name}</Strong></Text>
                    <Text as={"p"} size={"2"}>Age: {props.age}</Text>
                    <Text as={"p"} size={"2"}>Location: {props.location}</Text>
                    <Text wrap={"wrap"} className={"italic"} color={"gold"}>
                        {props.background}
                    </Text>
                </Flex>
            </Popover.Content>

        </Popover.Root>
    )
}