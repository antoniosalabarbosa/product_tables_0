import {
    Dispatch,
    SetStateAction
} from "react";

import IUserRequest from "./IUserRequest";

export interface IContextModal {
    modalVis: boolean;
    setModalVis: Dispatch<SetStateAction<boolean>>;
    modalContent: IUserRequest,
    setModalContent: Dispatch<SetStateAction<IUserRequest>>
}

interface IModal{
    
}

export default IModal;