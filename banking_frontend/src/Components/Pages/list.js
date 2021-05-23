import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button, Container, Table } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import {base_url} from '../../development.json'

const List = () => {
  const [customers, setapiCalls] = useState([]);
  const history = useHistory();

  useEffect(() => {
    getapiCalls();
  }, []);

  const getapiCalls = async () => {
    try {
      const apiUrl = `${base_url}/customer/get-customers`;
      const viewCustomers = await axios.get(apiUrl);
      console.log(viewCustomers.data.customers);
      if (viewCustomers && viewCustomers.data)
        setapiCalls(viewCustomers.data.customers);
    } catch (error) {
      console.log(error);
    }
  };

  const redirectToTransfer = (acc_no) =>{
    history.push({
      pathname: '/transfer',
      state: { acc_no: acc_no }
    })

  }

  return (
    <Container>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>id</th>
            <th>fname</th>
            <th>lname</th>
            <th>emailid</th>
            <th>acc_balance</th>
            <th>acc_no</th>
            <th>Option</th>
          </tr>
        </thead>
        <tbody>
          {customers
            ? customers.map((customer,index) => {
                const { fname, lname, email, acc_balance, acc_no,_id } = customer;
                return (
                  <tr key={_id}>
                    <td>{index+1}</td>
                    <td>{fname}</td>
                    <td>{lname}</td>
                    <td>{email}</td>
                    <td>{acc_balance}</td>
                    <td>{acc_no}</td>
                    <td>
                      <Button onClick = {redirectToTransfer.bind(this,acc_no)}>Transfer</Button>
                    </td>
                  </tr>
                );
              })
            : null}
        </tbody>
      </Table>
    </Container>
  );
};

export default List;
