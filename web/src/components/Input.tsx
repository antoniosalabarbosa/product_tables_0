import {
    useState,
    PropsWithChildren
} from "react";

import InputElement from "../typescript/interfaces/InputElement";

const Input = ({ 
    _id, type, textContent
}: PropsWithChildren<InputElement>)=>{

    const [inputContent, setInputContent] = useState(textContent);

    return (
        <input
            id={ _id }
            type={ type }
            className="inputModal"
            value={inputContent}
            onChange={ e => {
                setInputContent(e.currentTarget.value);
            }}
        />
    );
};

export default Input;