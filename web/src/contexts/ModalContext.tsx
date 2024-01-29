import { 
    useState,
    createContext,
    PropsWithChildren
} from "react";

import { IContextModal } from "../typescript/interfaces/IModal";

const ModalContext = createContext<IContextModal | null>(null);

const ModalContextProvider = ({ children }: PropsWithChildren)=>{

    const [modalVis, setModalVis] = useState(false);

    const values: IContextModal = {
        modalVis,
        setModalVis
    };

    return (
        <ModalContext.Provider value={values}>
            { children }
        </ModalContext.Provider>
    );
};

export { 
    ModalContext,
    ModalContextProvider
};