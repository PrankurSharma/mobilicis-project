import { useEffect, useContext } from "react";
import { MainContext } from "./mainContext";
import Axios from 'axios';
import TableComponent from "./TableComponent";

function Main() {
    const { data, data2, data3, data4, set_data, set_data2, set_data3, set_data4 } = useContext(MainContext);

    useEffect(() => {
        Axios.get("https://mobilicis-backend-3vyg.onrender.com/read1").then((response) => {
            set_data(response.data);
        });
        Axios.get("https://mobilicis-backend-3vyg.onrender.com/read2").then((response) => {
            set_data2(response.data);
        });
        Axios.get("https://mobilicis-backend-3vyg.onrender.com/read3").then((response) => {
            set_data3(response.data);
        });
        Axios.get("https://mobilicis-backend-3vyg.onrender.com/read4").then((response) => {
            set_data4(response.data);
        });
    }, []);
    return (
        <div className="main">
            <h2> Users with income less than $5 and car brand either BMW or Mercedes </h2>
            <TableComponent data={data}/>
            <h2> Male users with income greater than 10000 </h2>
            <TableComponent data={data2}/>
            <h2> Users whose last name starts with the letter M, quote character length is greater than 15 and their email consists of their last name. </h2>
            <TableComponent data={data3}/>
            <h2> Users who have a car of brand “BMW”, “Mercedes” or “Audi” and whose email does not include any digit. </h2>
            <TableComponent data={data4}/>
        </div>
    );
}

export default Main;