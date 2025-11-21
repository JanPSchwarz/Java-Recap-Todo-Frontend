import {type blogPost, blogPosts} from "../../../../lib/BlogPosts.ts";
import {Flex} from "@radix-ui/themes";
import BlogPost from "./BlogPost.tsx";

export default function BlogPosts() {

    return (
        <Flex direction="column" align={"center"} gap={"6"}>
            {[...blogPosts]
                .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
                .map((post: blogPost) => (
                    <BlogPost key={post.title} props={post}/>
                ))}
        </Flex>
    )

}