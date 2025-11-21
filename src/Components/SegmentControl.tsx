import {Flex, SegmentedControl} from "@radix-ui/themes";

export type componentTypes = {
    handleSegmentChange: (value: string) => void,
    currentSegment: string,
    segment: { value: string, title: string, shortTitle: string }[]
}

export default function SegmentControl({handleSegmentChange, currentSegment, segment}: componentTypes) {
    return (

        <Flex align={"start"} mt={"5"}>
            <SegmentedControl.Root onValueChange={handleSegmentChange} size={"2"} value={currentSegment}
                                   variant={"classic"} radius={"full"}>
                {segment.map(({value, shortTitle}) =>
                    <SegmentedControl.Item value={value} key={value}>{shortTitle}</SegmentedControl.Item>
                )}
            </SegmentedControl.Root>
        </Flex>
    )
}
