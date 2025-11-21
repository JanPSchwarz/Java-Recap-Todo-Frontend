import {Button, Dialog} from "@radix-ui/themes";
import React from "react";
import {useModalStore} from "./TodoApp/Store/ModalStore.ts";

type modalPropsTypes = {
    children: React.ReactNode;
    buttonText: string;
    buttonVariant?: "classic" | "solid" | "soft" | "surface" | "outline" | "ghost" | undefined;
    title?: string;
    description?: string;
    onClose?: () => void;
    onOpen?: () => void;
}

export default function Modal(modalProps: modalPropsTypes) {

    const {modalOpen, setModalOpen} = useModalStore();


    return (
        <>
            <Dialog.Root open={modalOpen} onOpenChange={() => setModalOpen(!modalOpen)}>
                <Dialog.Trigger>
                    <Button variant={modalProps.buttonVariant ?? "classic"}>{modalProps.buttonText}</Button>
                </Dialog.Trigger>
                <Dialog.Content>
                    {modalProps.title &&
                        <Dialog.Title>{modalProps.title}</Dialog.Title>
                    }
                    {modalProps.description &&
                        <Dialog.Description>{modalProps.description}</Dialog.Description>}
                    {modalProps.children}
                </Dialog.Content>
            </Dialog.Root>
        </>
    )
}
