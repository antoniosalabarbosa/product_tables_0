import {
    Dispatch,
    SetStateAction
} from "react";

export interface IContextModal {
    modalVis: boolean;
    setModalVis: Dispatch<SetStateAction<boolean>>;
}

interface IModal{
    tittle?: string;
    description?: string;
    img?: string;
}

export default IModal;