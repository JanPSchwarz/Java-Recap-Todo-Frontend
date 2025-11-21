import SegmentControl from "../../SegmentControl.tsx";
import useLocalStorageState from "use-local-storage-state";

type section = {
    value: string;
    title: string;
    shortTitle: string;
}

export default function TodoAppControls() {
    const [currentSection, setCurrentSection] = useLocalStorageState<string>("todoSection", {defaultValue: "board"});

    const sections: section[] = [
        {value: "board", title: "Board", shortTitle: "Board"},
        {value: "to-do", title: "To-Do", shortTitle: "To-Do"},
        {value: "doing", title: "Doing", shortTitle: "Doing"},
        {value: "done", title: "Done", shortTitle: "Done"},
    ];

    const handleSectionChange = (value: string) => {
        setCurrentSection(value);
    }

    return (
        <SegmentControl handleSegmentChange={handleSectionChange} currentSegment={currentSection} segment={sections}/>
    )
}
