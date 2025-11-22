import {create} from "zustand/react";

type useAlertStoreType = {
    showCallOut: boolean;
    alertMessage: string;
    alertType: "success" | "error" | "info";
    setGlobalCallOut: (message: string, type: "success" | "error" | "info") => void;
    hideGlobalCallout: () => void;
}

const useGlobalCallOutStore = create<useAlertStoreType>((set) => ({
    showCallOut: false,
    alertMessage: "",
    alertType: "info",
    setGlobalCallOut: (message: string, type: "success" | "error" | "info") => set(() => ({
        showCallOut: true,
        alertMessage: message,
        alertType: type
    })),
    hideGlobalCallout: () => set(() => ({
        showCallOut: false,
        alertMessage: "",
        alertType: "info"
    }))
}));


export {useGlobalCallOutStore};