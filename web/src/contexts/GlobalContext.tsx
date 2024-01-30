import { 
    useState,
    createContext,
    PropsWithChildren
} from "react";
import IGlobalContext from "../typescript/interfaces/IGlobalContext";

const GlobalContext = createContext<IGlobalContext | null>(null);

const GlobalContextProvider = ({ children }: PropsWithChildren)=>{

    const [countRender, setCounterRender] = useState(1);

    const values: IGlobalContext = {
        countRender,
        setCounterRender
    }

    return (
        <GlobalContext.Provider value={values}>
            { children }
        </GlobalContext.Provider>
    );
};

export {
    GlobalContext,
    GlobalContextProvider
};