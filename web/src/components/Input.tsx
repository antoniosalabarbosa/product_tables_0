import {
    useState,
    forwardRef,
    PropsWithChildren,
    ForwardedRef
} from "react";

import InputElement from "../typescript/interfaces/InputElement";

const Input = forwardRef( 
    function Input(
        props: PropsWithChildren<InputElement>, 
        ref: ForwardedRef<HTMLInputElement>
    ){

        const { _id, type, textContent } = props;
        const [inputContent, setInputContent] = useState(textContent);

        return (
            <input
                ref={ ref }
                id={ _id }
                type={ type }
                className="inputModal"
                value={inputContent}
                onChange={ e => {
                    setInputContent(e.currentTarget.value);
                }}
            />
        );
    }
);

export default Input;