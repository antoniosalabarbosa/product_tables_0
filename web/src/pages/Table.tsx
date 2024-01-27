import { useState, useEffect } from "react";
import { getApi } from "../libs/axios";
import { HTMLTable, HTMLTableRow } from "../components/HTMLTable";
import UserRequest from "../typescript/interfaces/UserRequest";

const Table = ()=>{

    const [dataAPI, setDataAPI] = useState([] as UserRequest[]);

    async function getData(){
        const response: UserRequest[] = await getApi("products");
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