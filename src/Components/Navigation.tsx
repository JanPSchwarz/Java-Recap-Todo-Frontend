import {Flex, Separator, TabNav} from "@radix-ui/themes";
import {NavPages, type page} from "../../lib/Pages.tsx";
import {Link, useLocation} from "react-router-dom";

export default function Navigation() {

    const {pathname} = useLocation();

    return (
        <Flex>
            <TabNav.Root className={"flex justify-center h-full items-center"}>
                {NavPages.map((page: page, index: number) => {
                    return (
                        <>
                            <TabNav.Link asChild key={page.href} active={pathname === page.href}>
                                <Link to={page.href}>{page.title}</Link>
                            </TabNav.Link>
                            {index < NavPages.length - 1 && <Separator orientation={"vertical"} decorative/>}
                        </>
                    )
                })}
            </TabNav.Root>
        </Flex>
    )
}