import {create} from "zustand/react";
import type {RickAndMortyCharacterType} from "../../lib/RickAndMortyCharacters.ts";
import {RickAndMortyCharacters} from "../../lib/RickAndMortyCharacters.ts";

type RickAndMortyStoreType = {
    allChars: RickAndMortyCharacterType[];
    createCharacter: (character: RickAndMortyCharacterType) => void;
}

const useRickAndMortyStore = create<RickAndMortyStoreType>((set) => ({
    allChars: RickAndMortyCharacters,
    createCharacter: (character: RickAndMortyCharacterType) => set((state) => ({
        allChars: [...state.allChars, character]
    })),
}));


export {useRickAndMortyStore};