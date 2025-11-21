import {Button, Flex, Grid, Text} from "@radix-ui/themes";
import {useState} from "react";
import {useNavigate} from "react-router-dom";

export default function CounterLecture() {

    const [counter, setCounter] = useState<number>(0);
    const navigate = useNavigate();

    const increaseCounter = () => {
        setCounter(prevCounter => prevCounter + 1);

        if (counter + 1 >= 5) {
            doEnough();
        }
    }

    const decreaseCounter = () => {
        setCounter(prevCounter => prevCounter - 1);
    }

    const doEnough = () => {
        navigate("/blog");
    }

    return (
        <>
            <Flex direction="column" align={"center"} gap={"4"}>
                <Text as={"p"}>{counter}</Text>
                <Grid columns={"repeat(2, auto)"} gap={"4"}>
                    <Button color={"green"} onClick={increaseCounter}>
                        Increase Counter
                    </Button>
                    <Button color={"red"} onClick={decreaseCounter}>
                        Decrease Counter
                    </Button>
                </Grid>
            </Flex>
        </>
    )
}
