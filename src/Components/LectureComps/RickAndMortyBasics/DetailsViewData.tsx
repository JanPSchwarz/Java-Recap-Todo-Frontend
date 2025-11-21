import type {RickAndMortyCharacterType} from "../../../../lib/RickAndMortyCharacters.ts";
import {DataList} from "@radix-ui/themes";

export default function DetailsViewData({character}: { character: RickAndMortyCharacterType }) {

    return (
        <>
            <DataList.Root orientation={{initial: "vertical", sm: "horizontal"}}>
                <DataList.Item>
                    <DataList.Label>Name</DataList.Label>
                    <DataList.Value>{character.name}</DataList.Value>
                </DataList.Item>
                <DataList.Item>
                    <DataList.Label>Species</DataList.Label>
                    <DataList.Value>
                        {character.species}
                    </DataList.Value>
                </DataList.Item>
                <DataList.Item>
                    <DataList.Label>Gender</DataList.Label>
                    <DataList.Value>
                        {character.gender}
                    </DataList.Value>
                </DataList.Item>
                <DataList.Item>
                    <DataList.Label>From</DataList.Label>
                    <DataList.Value>
                        {character.origin?.name || "unknown"}
                    </DataList.Value>
                </DataList.Item>
                <DataList.Item>
                    <DataList.Label>Location</DataList.Label>
                    <DataList.Value>
                        {character.location?.name || "unknown"}
                    </DataList.Value>
                </DataList.Item>
                <DataList.Item>
                    <DataList.Label>In Episodes</DataList.Label>
                    <DataList.Value className={"max-w-[300px]"}>
                        {character.episode?.map((episode) => (episode.split("/").pop())).join(", ") || "unknown"}
                    </DataList.Value>
                </DataList.Item>
            </DataList.Root>
        </>
    )
}

/*
{
        "id": 1,
        "name": "Rick Sanchez",
        "status": "Alive",
        "species": "Human",
        "type": "",
        "gender": "Male",
        "origin": {
            "name": "Earth (C-137)",
            "url": "https://rickandmortyapi.com/api/location/1"
        },
        "location": {
            "name": "Citadel of Ricks",
            "url": "https://rickandmortyapi.com/api/location/3"
        },
        "image": "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
        "episode": [
            "https://rickandmortyapi.com/api/episode/1",
            "https://rickandmortyapi.com/api/episode/2",
        ],
        "url": "https://rickandmortyapi.com/api/character/1",
        "created": "2017-11-04T18:48:46.250Z"
    },
* */
