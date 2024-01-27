import { PropsWithChildren } from "react";
import UserRequest from "../typescript/interfaces/UserRequest";
import Edit from "../img/pencil.svg";
import Delete from "../img/trash.png";

const HTMLTableRow = ({name, price}: UserRequest)=>{
    return (
        <tr>
            <td>{ name }</td>
            <td>{ price }</td>
            <td className="button_box">
                <button className="btn_edit">
                    <span>Edit</span>
                    <img src={Edit} alt="Edit" />
                </button>

                <button className="btn_delete">
                    <span>Delete</span>
                    <img src={Delete} alt="Delete" />
                </button>
            </td>
        </tr>
    );
}

const HTMLTable = ({ children }: PropsWithChildren)=>{
    return (
        <table className="table_container">
            <caption>Products</caption>

            <thead className="table_head">
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                    <th className="controls_column">Controls</th>
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