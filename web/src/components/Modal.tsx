import { PropsWithChildren } from "react";
import "../styles/components/modal.scss";
import IModal from "../typescript/interfaces/IModal";

const Modal = ({ tittle, description, img }: PropsWithChildren<IModal>)=>{
    return (
        <div className="modal_container">
            <div className="modal">
                <div className="header_modal">
                    <button>&times;</button>
                </div>
                <div className="body_modal">
                    <img src={ img } alt="#" />
                    <span>{ tittle }</span>
                    <p>{ description }</p>

                    <div className="model_button_box">
                        <button className="btn_confirm">Confirm</button>
                        <button className="btn_cancel">Cancel</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;