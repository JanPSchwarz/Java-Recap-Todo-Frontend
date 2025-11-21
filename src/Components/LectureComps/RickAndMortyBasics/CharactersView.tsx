import type {RickAndMortyCharacterType} from "../../../../lib/RickAndMortyCharacters.ts";
import {Button, Text} from "@radix-ui/themes";
import SingleCharacter from "./SingleCharacter.tsx";
import useLocalStorageState from "use-local-storage-state";


export default function CharactersView({filteredChars}: { filteredChars: RickAndMortyCharacterType[] }) {

    const [, setCurrentLecture] = useLocalStorageState<string>("currentLecture");

    return (
        <>
            {filteredChars.length > 0 ? (
                filteredChars.map((character: RickAndMortyCharacterType) => (
                    <SingleCharacter key={character.id} character={character}/>
                ))) : (
                <>
                    <Text color={"red"} weight={"bold"} my={"6"}>No data</Text>
                    <Button onClick={() => {
                        setCurrentLecture("form-lecture")
                    }}>
                        Create new character
                    </Button>
                </>
            )}
        </>
    )
}
