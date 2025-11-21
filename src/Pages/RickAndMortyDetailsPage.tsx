import {Link, useParams} from "react-router-dom";
import {useRickAndMortyStore} from "../Stores/RickAndMortyStore.tsx";
import type {RickAndMortyCharacterType} from "../../lib/RickAndMortyCharacters.ts";
import PageNotFound from "../Components/PageNotFound.tsx";
import CharactersDetailsView from "../Components/LectureComps/RickAndMortyBasics/CharactersDetailsView.tsx";
import PageHeading from "../Components/PageHeading.tsx";
import {ArrowLeftIcon} from "@radix-ui/react-icons"
import {IconButton} from "@radix-ui/themes";


export default function RickAndMortyDetailsPage() {

    const {allChars} = useRickAndMortyStore();

    const {id} = useParams<{ id: string }>()

    const character: RickAndMortyCharacterType | undefined = allChars.find(char => char.id === Number(id));

    if (!character) {
        return <PageNotFound/>
    }

    return (
        <>
            <PageHeading title={"R&M Character Details"}/>
            <Link to={"/lectures"}>
                <IconButton variant={"outline"}>
                    <ArrowLeftIcon/>
                </IconButton>
            </Link>
            <CharactersDetailsView character={character}/>
        </>
    )
}

