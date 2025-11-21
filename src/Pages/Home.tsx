import {Container, Flex, Heading, Link, Text} from "@radix-ui/themes";
import {Link as RouterLink} from "react-router-dom";
import PageHeading from "../Components/PageHeading.tsx";

export default function Home() {

    return (
        <>
            <PageHeading title={"Home"}/>
            <Container className={""}>
                <Flex direction={"column"} align={"center"} gap={"9"}>
                    <Heading as={"h2"} align={"center"} size={"5"}>Welcome to my little learning project </Heading>
                    <Flex justify={"center"} my={"6"} align={"center"} gap={"9"}>
                        <img src={"react.svg"} alt={"react logo"} className={"object-contain w-36"}/>
                        <img src={"java.svg"} alt={"java logo"} className={"object-contain w-36"}/>
                    </Flex>
                    <Text as={"p"} align={"center"}>See <Link asChild>
                        <RouterLink to={"/lectures"}>Lectures</RouterLink>
                    </Link>
                        &nbsp;for more information about my learning journey!
                    </Text>
                </Flex>
            </Container>
        </>
    )
}
