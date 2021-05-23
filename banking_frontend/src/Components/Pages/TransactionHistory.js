import React, { useState, useEffect } from "react";
import { Container, Table } from "react-bootstrap";
import axios from "axios";
import {base_url} from '../../development.json'


function TransactionHistory() {
  const [transactionHistory, setapiCalls] = useState([]);

  useEffect(() => {
    getapiCalls();
  }, []);

  const getapiCalls = async () => {
    try {
      const apiUrl = `${base_url}/transactions/transac-history`;
      const transactions = await axios.get(apiUrl);
      setapiCalls(transactions.data.transactions);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Container>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>id</th>
            <th>transaction from User</th>
            <th>transaction to User</th>
            <th>transaction Amount</th>
            <th>transaction Id</th>
          </tr>
        </thead>
        <tbody>
          {transactionHistory
            ? transactionHistory.map((transac, index) => {
                const {
                  _id,
                  transac_from_user,
                  transac_to_user,
                  transac_amount,
                } = transac;
                return (
                  <tr key={_id}>
                    <td>{index+1}</td>
                    <td>{transac_from_user}</td>
                    <td>{transac_to_user}</td>
                    <td>{transac_amount}</td>
                    <td>{_id}</td>
                  </tr>
                );
              })
            : null}
        </tbody>
      </Table>
    </Container>
  );
}

export default TransactionHistory;
