import { useContext } from "react";
import { ModalContext } from "../contexts/ModalContext";

const useModalContext = ()=>{
    const context = useContext(ModalContext);
    if(!context) throw new Error("Provider is missed");

    return context;
};

export default useModalContext;