import {type blogPost} from "../../../../lib/BlogPosts.ts";
import {Box, Button, Card, Flex, Heading, Inset, Text} from "@radix-ui/themes";
import AuthorInfo from "./AuthorInfo.tsx";

/*
 type blogPost = {
    title: string;
    subtitle: string;
    content: string;
    author: string;
    date: string;
    image_url: string;
    author_infos: authorInfo;
}
* */

export default function BlogPost({props}: { props: blogPost }) {
    return (
        <Box display={"block"} maxWidth={"1000px"}>
            <Card>
                <Flex gap={"2"} p={"4"} direction={"column"}>
                    <Flex justify={"between"} direction={{initial: "column", md: "row"}} gap={"4"}>
                        <Flex gap={"3"} direction={"column"}>
                            <Heading
                                as={"h2"}
                                weight={"medium"}
                            >{props.title}</Heading>
                            <Text as={"p"} color={"blue"} weight={"bold"} size={"4"}>
                                {props.subtitle}
                            </Text>
                            <Text
                                as={"p"}
                                size={"2"}
                                className={"italic"}
                            >Von <AuthorInfo props={props.author_infos}/> am {new Date(props.date).toLocaleDateString()}
                            </Text>
                        </Flex>
                        <Inset side={"right"} p={"current"}>
                            <Box width={{initial: "16rem", md: "12rem"}} m={"auto"}>
                                <img src={props.image_url} alt={"digital detox"}
                                     className={"rounded-md m-auto object-contain block p-1"}/>
                            </Box>
                        </Inset>
                    </Flex>
                    <Text
                        size={"3"}
                    >
                        {props.content}
                    </Text>
                </Flex>
                <Flex justify={"end"}>
                    <Button variant={"soft"}>
                        Weiterlesen
                    </Button>
                </Flex>
            </Card>
        </Box>
    )
}