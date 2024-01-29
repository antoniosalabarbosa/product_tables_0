import useModalContext from "../hooks/useModalContext";
import Pencil from "../img/pencil.svg";
import "../styles/components/modal.scss";

const Modal = ()=>{
    
    const { setModalVis } = useModalContext();

    function handlePutInformations(){
        setModalVis(false);
    }

    return (
        <div className="modal_container">
            <div className="modal">
                <div className="body_modal">
                    <img src={ Pencil } alt="#" />
                    <span>Edit</span>
                    <p>Click in "Confirm" to save yours informations.</p>

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