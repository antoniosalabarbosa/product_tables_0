import { PropsWithChildren } from "react";
import useModalContext from "../hooks/useModalContext";
import Input from "./Input";
import IModal from "../typescript/interfaces/IModal";
import Pencil from "../img/pencil.svg";
import "../styles/components/modal.scss";

const Modal = ({ type, name, price }: PropsWithChildren<IModal>)=>{
    
    const { setModalVis } = useModalContext();

    function handlePutInformations(){
        setModalVis(false);
    }

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
                                    id="name_product"
                                    type="text"
                                    textContent={name}
                                />
                            </label>

                            <label htmlFor="price_product">
                                <Input
                                    id="price_product"
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
                            onClick={handlePutInformations}
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