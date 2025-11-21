import {Card, Flex, Heading} from "@radix-ui/themes";
import type {RickAndMortyCharacterType} from "../../../../lib/RickAndMortyCharacters.ts";
import DetailsViewData from "./DetailsViewData.tsx";


export default function CharactersDetailsView({character}: { character: RickAndMortyCharacterType }) {

    return (
        <>
            <Flex direction={"column"} align={"center"} gap={"4"}>
                <Heading color={"blue"} my={"3"} size={"7"}>{character.name}</Heading>
                <img src={character.image} alt={character.name} className={"rounded-2xl"}/>
                <Card>
                    <DetailsViewData character={character}/>
                </Card>
            </Flex>
        </>
    )
}


/*
type RickAndMortyCharacterType = {
    id: number;
    name: string;
    species: string;
    image: string;
    [key: string]: unknown;
}
* */
