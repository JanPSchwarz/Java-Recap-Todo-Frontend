import {create} from "zustand/react";

type useAlertStoreType = {
    showAlert: boolean;
    alertMessage: string;
    alertType: "success" | "error" | "info";
    setGlobalAlert: (message: string, type: "success" | "error" | "info") => void;
    hideGlobalAlert: () => void;
}

const useGlobalAlertStore = create<useAlertStoreType>((set) => ({
    showAlert: false,
    alertMessage: "",
    alertType: "info",
    setGlobalAlert: (message: string, type: "success" | "error" | "info") => set(() => ({
        showAlert: true,
        alertMessage: message,
        alertType: type
    })),
    hideGlobalAlert: () => set(() => ({
        showAlert: false,
        alertMessage: "",
        alertType: "info"
    }))
}));


export {useGlobalAlertStore};