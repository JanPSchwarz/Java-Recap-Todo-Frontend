import {Button, Container, Flex, TextField} from "@radix-ui/themes";
import {type ChangeEvent, type FormEvent, useRef, useState} from "react";
import type {RickAndMortyCharacterType} from "../../../../lib/RickAndMortyCharacters.ts";
import {useRickAndMortyStore} from "../../../Stores/RickAndMortyStore.tsx";
import {useGlobalCallOutStore} from "../../TodoApp/Store/GlobalCallOutStore.ts";

type formElementType = {
    label: string;
    name: string;
    type: inputType;
    placeholder: string;
    required: boolean;
}

type inputType =
    "number"
    | "text"
    | "url"
    | "search"
    | "time"
    | "hidden"
    | "tel"
    | "email"
    | "date"
    | "datetime-local"
    | "month"
    | "password"
    | "week"
    | undefined

type formElementProps = {
    showCreatedCharacter: (character: RickAndMortyCharacterType) => void;
}

export default function NewCharacterForm({showCreatedCharacter}: formElementProps) {
    const formRef = useRef<HTMLFormElement>(null);
    const [isFormValid, setIsFormValid] = useState<boolean>(false);

    const {createCharacter} = useRickAndMortyStore();

    const {setGlobalCallOut} = useGlobalCallOutStore();

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (!formRef.current?.checkValidity()) return;

        if (formRef.current) {
            const formData = new FormData(formRef.current);
            const data = Object.fromEntries(formData.entries());

            if (!data.image) {
                data.image = "https://rickandmortyapi.com/api/character/avatar/19.jpeg";
            }

            const characterData: RickAndMortyCharacterType = {
                ...data as unknown as RickAndMortyCharacterType,
                id: Date.now(),
            }

            console.log("Form data", data);

            formRef.current.reset();
            showCreatedCharacter(characterData);
            createCharacter(characterData);
            setGlobalCallOut("Character created successfully!", "success");
        }
    }

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        event.preventDefault();
        if (formRef.current) {
            setIsFormValid(formRef.current.checkValidity());
        }
    }

    const formElements: formElementType[] = [
        {
            label: "Name:",
            name: "name",
            type: "text",
            placeholder: "Name..",
            required: true
        }, {
            label: "Species:",
            name: "species",
            type: "text",
            placeholder: "Species..",
            required: true
        },
        {
            label: "Image:",
            name: "image",
            type: "url",
            placeholder: "Image URL..",
            required: false
        }
    ]
    return (
        <Container maxWidth={"400px"} my={"4"}>
            <form ref={formRef} onSubmit={handleSubmit} className={"flex flex-col gap-6"}>
                {formElements.map((formElement: formElementType, index) => (
                    <Flex direction={"column"} gap={"2"} key={index}>
                        <label htmlFor={formElement.name}>{formElement.label}</label>
                        <TextField.Root onChange={handleChange}
                                        name={formElement.name}
                                        id={formElement.name}
                                        type={formElement.type}
                                        placeholder={formElement.placeholder}
                                        required={formElement.required}></TextField.Root>
                    </Flex>
                ))}
                <Button
                    disabled={!isFormValid}
                    type={"submit"}>Submit</Button>
            </form>
        </Container>
    )
}

// default unknown image:
// https://rickandmortyapi.com/api/character/avatar/19.jpeg

/*
type RickAndMortyCharacterType = {
    id: number;
    name: string;
    species: string;
    image: string;
    [key: string]: unknown;
}
*/
