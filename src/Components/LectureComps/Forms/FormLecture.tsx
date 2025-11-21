import {Heading} from "@radix-ui/themes";
import NewCharacterForm from "./NewCharacterForm.tsx";
import {useState} from "react";
import type {RickAndMortyCharacterType} from "../../../../lib/RickAndMortyCharacters.ts";
import SingleCharacter from "../RickAndMortyBasics/SingleCharacter.tsx";


export default function FormLecture() {

    const [createdCharacter, setCreatedCharacter] = useState<RickAndMortyCharacterType>();

    const showCreatedCharacter = (character: RickAndMortyCharacterType) => {
        setCreatedCharacter(character);
    }


    return (
        <>
            <Heading align={"center"} color={"amber"} mt={"6"}>Create a new R&M Character</Heading>
            <NewCharacterForm showCreatedCharacter={showCreatedCharacter}/>
            {createdCharacter && <SingleCharacter character={createdCharacter}/>}
        </>
    )
}

