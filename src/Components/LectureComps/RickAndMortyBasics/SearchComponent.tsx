import {Box, IconButton, TextField} from "@radix-ui/themes";
import {MagnifyingGlassIcon, ResetIcon} from "@radix-ui/react-icons";


type searchComponentProps = {
    handleSearch: (event: React.ChangeEvent<HTMLInputElement>) => void;
    reset: () => void;
    value: string
}

export default function SearchComponent({handleSearch, value, reset}: searchComponentProps) {
    return (
        <Box minWidth={"250px"} m={"auto"}>
            <TextField.Root placeholder={"Search character..."} value={value} onChange={handleSearch}>
                <TextField.Slot><MagnifyingGlassIcon height="16" width="16"/></TextField.Slot>
                <TextField.Slot side={"right"}>
                    <IconButton variant={"ghost"} onClick={reset}>
                        <ResetIcon/>
                    </IconButton>
                </TextField.Slot>
            </TextField.Root>
        </Box>

    )
}
