import { 
    useState,
    useEffect
 } from "react";

import { 
    HTMLTable, 
    HTMLTableRow 
} from "../components/HTMLTable";
import useModalContext from "../hooks/useModalContext";
import { getApi } from "../libs/axios";
import IUserRequest from "../typescript/interfaces/IUserRequest";
import "../styles/pages/table.scss";
import Modal from "../components/Modal";

const Table = ()=>{

    const { modalVis, modalContent } = useModalContext();

    const [dataAPI, setDataAPI] = useState([] as IUserRequest[]);

    async function getData(){
        const response: IUserRequest[] = await getApi("/api/Products/getProducts");
        setDataAPI(response);
    }

    useEffect(()=>{ getData() }, []);

    return (
        <section>              
            <HTMLTable>
                {
                    dataAPI &&
                    dataAPI.map(({ _id, name, price }) => {
                        return (
                            <HTMLTableRow
                                key={_id}
                                name={name}
                                price={price}
                            />
                        );
                    })
                }
            </HTMLTable>

            {
                modalVis &&
                <Modal
                    type="Edit"
                    name={modalContent.name}
                    price={modalContent.price}
                />
            }
        </section>
    );
};

export default Table;