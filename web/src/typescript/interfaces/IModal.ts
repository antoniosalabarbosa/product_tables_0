import {
    Dispatch,
    SetStateAction
} from "react";

import IUserRequest from "./IUserRequest";

interface IModal{
    type?: "Edit" | "Delete";
    name: string;
    price: string; 
}

export interface IContextModal {
    type?: "Edit" | "Delete"
    modalVis: boolean;
    setModalVis: Dispatch<SetStateAction<boolean>>;
    modalContent: IUserRequest,
    setModalContent: Dispatch<SetStateAction<IUserRequest>>
}

export default IModal;