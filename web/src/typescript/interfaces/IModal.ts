import {
    Dispatch,
    SetStateAction
} from "react";
import IUserRequest from "./IUserRequest";
import TModal from "../types/TModal";

interface IModal{
    type: TModal;
    name: string;
    price: string; 
}

export interface IContextModal {
    modalVis: boolean;
    setModalVis: Dispatch<SetStateAction<boolean>>;
    modalContent: IUserRequest;
    setModalContent: Dispatch<SetStateAction<IUserRequest>>;
    modalType: TModal, 
    setModalType: Dispatch<SetStateAction<TModal>>
}

export default IModal;