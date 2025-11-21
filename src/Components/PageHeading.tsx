import {Heading, Separator} from "@radix-ui/themes";

export default function PageHeading({title}: { title: string }) {


    return (
        <>
            <Heading size={"7"} as={"h1"} className={"text-[var(--accent-9)]"} align={"center"} mt={"6"}>
                {title ?? "Page not found"}
            </Heading>
            <Separator orientation={"horizontal"} decorative size={"4"} my={"5"}/>
        </>
    )
}
