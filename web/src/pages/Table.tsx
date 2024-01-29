import { useState, useEffect } from "react";
import { getApi } from "../libs/axios";
import { HTMLTable, HTMLTableRow } from "../components/HTMLTable";
import IUserRequest from "../typescript/interfaces/IUserRequest";
import "../styles/pages/table.scss";

const Table = ()=>{

    const [dataAPI, setDataAPI] = useState([] as IUserRequest[]);

    async function getData(){
        const response: IUserRequest[] = await getApi("/api/Products/getProducts");
        setDataAPI(response);
    }

    useEffect(()=>{ getData() }, []);

    return (
        <HTMLTable>
            {
                dataAPI &&
                dataAPI.map(({ _id, name, price })=>{
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
    );
};

export default Table;