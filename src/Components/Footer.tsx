import {Container, Flex, Separator, Text} from "@radix-ui/themes";

export default function Footer() {

    return (
        <>
            <Container asChild mt={"4"} className={"flex justify-end"}>
                <footer>
                    <Flex justify={"center"} align={"center"} direction={"column"} gap={"4"}>
                        <Separator size={"4"}/>
                        <Text>neueFische Java - FrontEnd</Text>
                        <Text>@2025 All rights served.</Text>
                    </Flex>
                </footer>
            </Container>
        </>
    )
}
