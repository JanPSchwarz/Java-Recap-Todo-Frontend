import {create} from "zustand/react";

type useModalStoreType = {
    modalOpen: boolean;
    setModalOpen: (modalOpen: boolean) => void;
}

const useModalStore = create<useModalStoreType>((set) => ({
    modalOpen: false,
    setModalOpen: (modalOpen: boolean) => set({modalOpen}),
}));


export {useModalStore};