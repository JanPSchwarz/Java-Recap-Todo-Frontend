import {create} from "zustand/react";

type useModalStoreType = {
    id: string;
    setModalOpen: (id: string) => void;
}

const useModalStore = create<useModalStoreType>((set) => ({
    id: "",
    setModalOpen: (id: string) => set({id}),
}));


export {useModalStore};