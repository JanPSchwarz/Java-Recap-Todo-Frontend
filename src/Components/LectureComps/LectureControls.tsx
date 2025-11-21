import type {componentTypes} from "../SegmentControl.tsx";
import SegmentControl from "../SegmentControl.tsx";

export default function LectureControls({handleSegmentChange, currentSegment, segment}: componentTypes) {

    return (
        <SegmentControl handleSegmentChange={handleSegmentChange} currentSegment={currentSegment} segment={segment}/>
    )
}
