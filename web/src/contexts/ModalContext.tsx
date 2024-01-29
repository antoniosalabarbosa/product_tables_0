import { 
    useState,
    createContext,
    PropsWithChildren
} from "react";

import { IContextModal } from "../typescript/interfaces/IModal";
import IUserRequest from "../typescript/interfaces/IUserRequest";

const ModalContext = createContext<IContextModal | null>(null);

const ModalContextProvider = ({ children }: PropsWithChildren)=>{

    const [modalVis, setModalVis] = useState(false);
    const [modalContent, setModalContent] = useState<IUserRequest>({
        name: "",
        price: ""
    });

    const values: IContextModal = {
        modalVis,
        setModalVis,
        modalContent,
        setModalContent
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