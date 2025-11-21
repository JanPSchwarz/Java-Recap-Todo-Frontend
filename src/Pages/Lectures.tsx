import CounterLecture from "../Components/LectureComps/Counter/CounterLecture.tsx";
import useLocalStorageState from "use-local-storage-state";
import PageNotFound from "../Components/PageNotFound.tsx";
import RickAndMortyBasic from "../Components/LectureComps/RickAndMortyBasics/RickAndMortyBasic.tsx";
import FormLecture from "../Components/LectureComps/Forms/FormLecture.tsx";
import BlogPosts from "../Components/LectureComps/Blog/BlogPosts.tsx";
import PageHeading from "../Components/PageHeading.tsx";
import Axios from "../Components/LectureComps/Axios/Axios.tsx";
import LectureControls from "../Components/LectureComps/LectureControls.tsx";

type lecture = {
    value: string;
    title: string;
    shortTitle: string;
}

export default function Lectures() {

    const [currentLecture, setCurrentLecture] = useLocalStorageState<string>("currentLecture", {defaultValue: "counter-lecture"});

    const lectures: lecture[] = [
        {value: "blog-lecture", title: "Blog Lecture", shortTitle: "Blog"},
        {value: "counter-lecture", title: "Counter Lecture", shortTitle: "Counter"},
        {value: "rick-lecture", title: "Rick and Morty Lecture", shortTitle: "Rick&M"},
        {value: "form-lecture", title: "Forms", shortTitle: "Forms"},
        {value: "axios-lecture", title: "Axios", shortTitle: "Axios"}
    ];

    const handleLectureChange = (value: string) => {
        setCurrentLecture(value);
    }

    const renderLecture = () => {
        switch (currentLecture) {
            case "counter-lecture":
                return <CounterLecture/>;
            case "blog-lecture":
                return <BlogPosts/>;
            case "rick-lecture":
                return <RickAndMortyBasic/>;
            case "form-lecture":
                return <FormLecture/>;
            case "axios-lecture":
                return <Axios/>;
            default:
                return <PageNotFound/>;
        }
    }

    return (
        <>
            <LectureControls handleSegmentChange={handleLectureChange} currentSegment={currentLecture}
                             segment={lectures}/>
            <PageHeading
                title={"Lectures" + ` - ${lectures.find(lecture => lecture.value === currentLecture)?.shortTitle}`}/>
            {renderLecture()}
        </>
    )
}
