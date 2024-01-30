import { 
    useState,
    useEffect
 } from "react";

import { 
    HTMLTable, 
    HTMLTableRow 
} from "../components/HTMLTable";
import useGlobalContext from "../hooks/useGlobalContext";
import useModalContext from "../hooks/useModalContext";
import { getProducts } from "../libs/axios";
import Modal from "../components/Modal";
import IUserRequest from "../typescript/interfaces/IUserRequest";
import "../styles/pages/table.scss";

const Table = ()=>{

    const { countRender } = useGlobalContext();

    const { 
        modalVis, 
        modalContent,
        modalType
    } = useModalContext();

    const [dataAPI, setDataAPI] = useState([] as IUserRequest[]);

    async function getData(){
        const response: IUserRequest[] = await getProducts("/api/Products/getProducts");
        setDataAPI(response);
    }

    useEffect(()=>{
        if(countRender) getData();
    }, [countRender]);

    return (
        <section>              
            <HTMLTable>
                {
                    dataAPI &&
                    dataAPI.map(({ _id, name, price }) => {
                        return (
                            <HTMLTableRow
                                key={_id}
                                _id={_id}
                                name={name}
                                price={price}
                            />
                        );
                    })
                }
            </HTMLTable>

            {
                (modalVis && (modalType) != "") &&
                <Modal
                    itemId={modalContent._id}
                    type={modalType}
                    name={modalContent.name}
                    price={modalContent.price}
                />
            }
        </section>
    );
};

export default Table;