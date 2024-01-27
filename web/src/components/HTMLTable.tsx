import { PropsWithChildren } from "react";
import UserRequest from "../typescript/interfaces/UserRequest";

const HTMLTableRow = ({name, price}: UserRequest)=>{
    return (
        <tr>
            <td>{ name }</td>
            <td>{ price }</td>
        </tr>
    );
}

const HTMLTable = ({ children }: PropsWithChildren)=>{
    return (
        <table className="table_container">
            <caption>1º Bimestre</caption>

            <thead className="table_head">
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
            </thead>

            <tbody className="table_body">
                { children }
            </tbody>
        </table>
    );
};

export {
    HTMLTable,
    HTMLTableRow
};