import React from "react";
import Table from 'react-bootstrap/Table';

export default function PaymentsTable(params) {
    const headers = ['Num. de Tarjeta', 'Cliente', 'Monto', 'Estado'];
    const data = params.data;

    return (
        <Table hover>
            <thead>
                <tr>
                    {headers.map((header) => (
                        <th>{header}</th>
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
    );
}