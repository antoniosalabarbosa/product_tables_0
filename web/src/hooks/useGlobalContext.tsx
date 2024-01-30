import { useContext } from "react";
import { GlobalContext } from "../contexts/GlobalContext";

const useGlobalContext = ()=>{
    const context = useContext(GlobalContext);
    if(!context) throw new Error("Provider is missed");

    return context;
};

export default useGlobalContext;