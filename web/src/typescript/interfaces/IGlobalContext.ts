import { 
    Dispatch, 
    SetStateAction 
} from "react";

interface IGlobalContext{
    countRender: number;
    setCounterRender: Dispatch<SetStateAction<number>>
}

export default IGlobalContext;