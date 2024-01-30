import {
    useRef,
    PropsWithChildren
} from "react";
import useGlobalContext from "../hooks/useGlobalContext";
import useModalContext from "../hooks/useModalContext";
import { 
    deleteProduct, 
    putProduct
} from "../libs/axios";
import Input from "./Input";
import IUserRequest from "../typescript/interfaces/IUserRequest";
import IModal from "../typescript/interfaces/IModal";
import Pencil from "../img/pencil.svg";
import "../styles/components/modal.scss";

const Modal = ({ type, name, price, itemId }: PropsWithChildren<IModal>)=>{
    
    const { setCounterRender } = useGlobalContext();
    const { setModalVis } = useModalContext();

    const inputModalName = useRef<HTMLInputElement>(null);
    const inputModalPrice = useRef<HTMLInputElement>(null);

    async function handlePutProduct({ _id, name, price }: IUserRequest){
        await putProduct(
            "/api/Products/putProduct/", 
            _id, 
            { _id, name, price }
        )
        .then(()=> setCounterRender( render => render + 1 ));
    };

    async function handleDeleteProduct(_id: string){
        await deleteProduct("/api/Products/deleteProduct/", _id)
        .then(()=> setCounterRender( render => render + 1));
    };

    return (
        <div className="modal_container">
            <div className="modal">
                <div className="body_modal">
                    <img src={ Pencil } alt="#" />
                    <span> { type } </span>
                    <p>Click in "Confirm" to complete.</p>

                    <div className="modal_input_box">
                    {
                        (type === "Edit") ?
                        <>
                            <label htmlFor="name_product">
                                <Input
                                    ref={inputModalName}
                                    _id={`name_product_${itemId}`}
                                    type="text"
                                    textContent={name}
                                />
                            </label>

                            <label htmlFor="price_product">
                                <Input
                                    ref={inputModalPrice}
                                    _id={`price_product_${itemId}`}
                                    type="text"
                                    textContent={price}
                                />
                            </label>
                        </>
                        : 
                        (
                        (type === "Delete") ?
                        <table>
                            <tbody>
                                <tr>
                                    <td>{ name }</td>
                                    <td>{ price }</td>
                                </tr>
                            </tbody>
                        </table>
                        : ""
                        )
                    }
                    </div>

                    <div className="model_button_box">
                        <button 
                            className="btn_confirm"
                            onClick={()=>{
                                setModalVis(false);

                                if(
                                    type === "Edit" &&
                                    inputModalName.current &&
                                    inputModalPrice.current
                                ) {
                                    handlePutProduct({ 
                                        _id: itemId,
                                        name: inputModalName.current.value,
                                        price: inputModalPrice.current.value
                                    });
                                };
                                if(type === "Delete") handleDeleteProduct(itemId);
                            }}
                        >
                            Confirm
                        </button>
                        
                        <button 
                            className="btn_cancel"
                            onClick={()=> setModalVis(false)}
                        >
                            Cancel
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;