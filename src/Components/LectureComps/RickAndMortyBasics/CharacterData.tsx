import {DataList} from "@radix-ui/themes";

type characterData = {
    name: string;
    species: string;
}

export default function CharacterData({name, species}: characterData) {
    return (
        <DataList.Root orientation={{initial: "vertical", sm: "horizontal"}}>
            <DataList.Item>
                <DataList.Label>Name</DataList.Label>
                <DataList.Value>{name}</DataList.Value>
            </DataList.Item>
            <DataList.Item>
                <DataList.Label>Species</DataList.Label>
                <DataList.Value>
                    {species}
                </DataList.Value>
            </DataList.Item>
        </DataList.Root>
    )
}
