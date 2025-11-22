import {AlertDialog, Button, Flex, IconButton} from "@radix-ui/themes";
import {Cross2Icon} from "@radix-ui/react-icons";
import {useAlertDialogStore} from "./TodoApp/Store/AlertDialogStore.ts";

type alertDialogBaseProps = {
    id: string;
    children?: React.ReactNode;
    buttonText?: string;
    title?: string;
    description?: string;
    onConfirm: () => void;
    onCancel?: () => void;
}

export default function AlertDialogBase(alertDialogBaseProps: alertDialogBaseProps) {
    const {showAlertDialog, setShowAlertDialog} = useAlertDialogStore();

    const handleClose = () => {
        if (alertDialogBaseProps.onCancel) {
            alertDialogBaseProps.onCancel();
        }
        setShowAlertDialog("");
    }

    const handleOpenChange = () => {
        if (showAlertDialog === alertDialogBaseProps.id) {
            setShowAlertDialog("");
            return;
        }

        setShowAlertDialog(alertDialogBaseProps.id);
    }

    return (
        <AlertDialog.Root open={showAlertDialog === alertDialogBaseProps.id}
                          onOpenChange={handleOpenChange}>
            <AlertDialog.Trigger>
                {alertDialogBaseProps.buttonText ?
                    <Button variant={"ghost"}>
                        {alertDialogBaseProps.buttonText}
                    </Button>
                    :
                    <IconButton variant={"ghost"}>
                        <Cross2Icon/>
                    </IconButton>
                }
            </AlertDialog.Trigger>
            <AlertDialog.Content>
                {alertDialogBaseProps.title &&
                    <AlertDialog.Title>
                        {alertDialogBaseProps.title}
                    </AlertDialog.Title>}
                {alertDialogBaseProps.description &&
                    <AlertDialog.Description>
                        {alertDialogBaseProps.description}
                    </AlertDialog.Description>
                }

                {alertDialogBaseProps.children}

                <Flex gap="3" mt="4" justify="end">
                    <AlertDialog.Cancel>
                        <Button onClick={handleClose} variant="soft" color="gray">
                            Cancel
                        </Button>
                    </AlertDialog.Cancel>
                    <AlertDialog.Action>
                        <Button onClick={alertDialogBaseProps.onConfirm} variant="solid" color="red">
                            Confirm
                        </Button>
                    </AlertDialog.Action>
                </Flex>

            </AlertDialog.Content>
        </AlertDialog.Root>
    )
}
