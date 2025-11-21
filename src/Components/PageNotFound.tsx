import {Button, Flex, Grid, Inset, Text} from "@radix-ui/themes";

export default function PageNotFound() {
    return (
        <>

            <Flex direction={"column"} minHeight={"full"} gap={"4"} justify={"center"} align={"center"}>
                <Inset side={"bottom"}>
                    <img src={"/404.svg"} alt={"Page not found"} className={"w-full"}/>
                </Inset>
                <Flex direction={"column"} gap={"6"}>
                    <Text size={{initial: "3", md: "4"}} align={"center"} weight={"bold"}>
                        Sorry, the page you are looking for does not exist. Please check the URL or return to the
                        homepage.
                    </Text>
                    <Grid gap={"5"} columns={"repeat(2, 6rem)"} justify={"center"}>
                        <Button>
                            Homepage
                        </Button> <Button>
                        Back
                    </Button>
                    </Grid>
                </Flex>

            </Flex>


        </>
    )
}
