import {Avatar, Box, Button, Card, Flex} from "@radix-ui/themes";
import CharacterData from "./CharacterData.tsx";
import type {RickAndMortyCharacterType} from "../../../../lib/RickAndMortyCharacters.ts";
import {Link as RouterLink} from "react-router-dom";

export default function SingleCharacter({character}: { character: RickAndMortyCharacterType }) {

    return (
        <Box minWidth={"60vw"}>
            <Card>
                <Flex gap={"6"}>
                    <Avatar src={character.image} fallback={"T"} size={"9"}/>
                    <CharacterData name={character.name} species={character.species}/>
                </Flex>
                <Flex justify={"end"}>
                    <Button asChild variant={"surface"}>
                        <RouterLink to={`/lectures/r&m-details/${character.id}`}>See Details</RouterLink>
                    </Button>
                </Flex>
            </Card>
        </Box>
    )
}
