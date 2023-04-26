import { useState } from "react";
import ReactPaginate from 'react-paginate';

function TableComponent({data}) {
    const [pageNumber, set_pageNumber] = useState(0);

    const dataPerPage = 10;
    const pagesVisited = pageNumber * dataPerPage;

    const displayData = data
                        .slice(pagesVisited, pagesVisited + dataPerPage)
                        .map((val) => {
                            return (<tr>
                                <td> <p> {val.id} </p> </td>
                                <td> <p> {val.first_name} </p> </td>
                                <td> <p> {val.last_name} </p> </td>
                                <td> <p> {val.email} </p> </td>
                                <td> <p> {val.gender} </p> </td>
                                <td> <p> {val.income} </p> </td>
                                <td> <p> {val.city} </p> </td>
                                <td> <p> {val.car} </p> </td>
                                <td> <p> {val.quote} </p> </td>
                                <td> <p> {val.phone_price} </p> </td>
                            </tr>);
                        });
    const pageCount = Math.ceil(data.length / dataPerPage);

    const changePage = ({selected}) => {
        set_pageNumber(selected);
    }

    return (
        <div className="table">
            <table>
                <thead>
                    <tr>
                        <th> ID </th>
                        <th> First Name </th>
                        <th> Last Name </th>
                        <th> Email </th>
                        <th> Gender </th>
                        <th> Income </th>
                        <th> City </th>
                        <th> Car </th>
                        <th> Quote </th>
                        <th> Phone Price </th>
                    </tr>
                </thead>
                <tbody>
                    {displayData} 
                </tbody>
            </table>
            <div>
                <ReactPaginate 
                    previousLabel={"Previous"}
                    nextLabel={"Next"}
                    pageCount={pageCount}
                    onPageChange={changePage}
                    containerClassName={"paginationBtns"}
                    previousLinkClassName={"previousBtns"}
                    nextLinkClassName={"nextBtns"}
                    disabledClassName={"paginationdisabled"}
                    activeClassName={"paginationActive"}
                />
            </div>
        </div>
    );
}

export default TableComponent;