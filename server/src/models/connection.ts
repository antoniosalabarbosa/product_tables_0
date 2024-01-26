import { connect } from "mongoose";

const connectionURL = "mongodb://localhost:27017/products_table_0";

const connection = async ()=>{
    return (
        await connect(connectionURL)
        .then(r => r)
        // .then(()=> console.log("Database: On"))
        .catch((err)=> console.log("Database: Off"))
    );
};

export {
    connectionURL,
    connection
};