import React from "react";
import Table from 'react-bootstrap/Table';


function SimpleTable(params) {
    const headers = params.headers;
    const data = params.data;
    return (
        <div>
            <Table hover>
                <thead>
                    <tr>
                        {headers.map((item) => (
                            <th href={item.href}>{item.text}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {data.map((payment) => (
                        <tr>
                            <td>{payment.card_num}</td>
                            <td>{payment.client}</td>
                            <td>{payment.amount}</td>
                            <td>{payment.state}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
}

export default SimpleTable;