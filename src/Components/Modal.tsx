import {Button, Dialog} from "@radix-ui/themes";
import React from "react";
import {useModalStore} from "./TodoApp/Store/ModalStore.ts";

type modalPropsTypes = {
    id: string;
    children: React.ReactNode;
    buttonText: string;
    icon?: React.ReactNode;
    buttonSize?: "1" | "2" | "3" | "4";
    buttonVariant?: "classic" | "solid" | "soft" | "surface" | "outline" | "ghost" | undefined;
    title?: string;
    description?: string;
    onClose?: () => void;
    onOpen?: () => void;
}

export default function Modal(modalProps: modalPropsTypes) {

    const {id: openModalId, setModalOpen} = useModalStore();

    const handleOpenChange = (open: boolean) => {
        setModalOpen(open ? modalProps.id : "");

    }

    return (
        <Dialog.Root open={openModalId == modalProps.id}
                     onOpenChange={(open: boolean) => {
                         handleOpenChange(open)
                     }}>
            <Dialog.Trigger>
                <Button size={modalProps.buttonSize ?? "2"}
                        variant={modalProps.buttonVariant ?? "classic"}>
                    {modalProps.buttonText}
                    {modalProps.icon && modalProps.icon}
                </Button>
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
    )
}
