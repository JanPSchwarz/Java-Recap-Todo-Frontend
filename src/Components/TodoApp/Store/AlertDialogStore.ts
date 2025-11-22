import {create} from "zustand/react";

type useAlertDialogStoreType = {
    showAlertDialog: string;
    setShowAlertDialog: (id: string) => void;
}

const useAlertDialogStore = create<useAlertDialogStoreType>((set) => ({
    showAlertDialog: "",
    setShowAlertDialog: (id: string) => {
        set({showAlertDialog: id});
    }
}));


export {useAlertDialogStore};