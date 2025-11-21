import {RickAndMortyCharacters, type RickAndMortyCharacterType} from "../../../../lib/RickAndMortyCharacters.ts";
import {Flex} from "@radix-ui/themes";
import {useState} from "react";
import SearchComponent from "./SearchComponent.tsx";
import CharactersView from "./CharactersView.tsx";
import {useRickAndMortyStore} from "../../../Stores/RickAndMortyStore.tsx";


/*
type RickAndMortyCharacter = {
    id: number;
    name: string;
    species: string;
    image: string;
    [key: string]: unknown;
}
*/

export default function RickAndMortyBasic() {

    const {allChars} = useRickAndMortyStore();

    const [filteredChars, setFilteredChars] = useState<RickAndMortyCharacterType[]>(allChars);


    const [searchQuery, setSearchQuery] = useState<string>("");

    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {

        event.preventDefault();

        const query = event.target.value;
        setSearchQuery(query);

        const filteredCharacters = allChars.filter(character =>
            character.name.toLowerCase().includes(query.toLowerCase())
        );

        setFilteredChars(filteredCharacters);
    }

    const resetSearchQuery = () => {
        if (!searchQuery) return;

        setSearchQuery("");
        setFilteredChars(RickAndMortyCharacters);
    }


    return (
        <>
            <Flex direction="column" align={"center"} justify={"center"} gap={"5"}>
                <SearchComponent handleSearch={handleSearch} reset={resetSearchQuery} value={searchQuery}/>
                <CharactersView filteredChars={filteredChars}/>
            </Flex>
        </>
    )
}
