import axios from "axios";
import {Button} from "@radix-ui/themes";
import {useState} from "react";
import type {RickAndMortyCharacterType} from "../../../../lib/RickAndMortyCharacters.ts";
import CharactersView from "../RickAndMortyBasics/CharactersView.tsx";
import {useGlobalCallOutStore} from "../../TodoApp/Store/GlobalCallOutStore.ts";

export default function Axios() {

    const [allCharacters, setAllCharacters] = useState<RickAndMortyCharacterType[]>();
    const [loading, setLoading] = useState<boolean>(false);

    const {setGlobalCallOut} = useGlobalCallOutStore();

    const getRickAndMortyData = () => {
        setLoading(true);
        axios.get('https://rickandmortyapi.com/api/char').then((response) => {
            setAllCharacters(response.data.results);
        }).catch((error) => {
            console.error(error);
            setGlobalCallOut(error.message, "error");
        }).finally(() => {
            setLoading(false);
        })
    }

    return (
        <>
            <Button mb={"7"} onClick={getRickAndMortyData} loading={loading}>
                Fetch R&M Characters with Axios
            </Button>
            {allCharacters && <CharactersView filteredChars={allCharacters}/>}
        </>
    )
}
