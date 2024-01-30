import { 
    useState,
    createContext,
    PropsWithChildren
} from "react";
import TModal from "../typescript/types/TModal";
import { IContextModal } from "../typescript/interfaces/IModal";
import IUserRequest from "../typescript/interfaces/IUserRequest";

const ModalContext = createContext<IContextModal | null>(null);

const ModalContextProvider = ({ children }: PropsWithChildren)=>{

    const [modalType, setModalType] = useState<TModal>("");
    const [modalVis, setModalVis] = useState(false);
    const [modalContent, setModalContent] = useState<IUserRequest>({
        _id: "",
        name: "",
        price: ""
    });

    const values: IContextModal = {
        modalVis,
        setModalVis,
        
        modalContent,
        setModalContent,

        modalType, 
        setModalType
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