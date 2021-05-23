import React, { useEffect, useState } from "react";
import { Col, Container, Row, Button } from "react-bootstrap";
import Select from "react-select";
import { Input } from "reactstrap";
import axios from "axios";
import {base_url} from '../../development.json'


const Transfer = (props) => {
  const [users, setUsers] = useState([]);
  const [fromUser, setfromUser] = useState();
  const [toUser, settoUser] = useState();
  const [amount, setAmount] = useState();

  useEffect(() => {
    const getapiCalls = async () => {
      try {
        const apiUrl = `${base_url}/customer/get-customers`;
        const viewCustomers = await axios.get(apiUrl);
        console.log(viewCustomers.data.customers);
        const customerOptions = viewCustomers.data.customers.map((customer) => {
          return { value: customer.acc_no, label: customer.acc_no };
        });

        setUsers(customerOptions);
      } catch (error) {
        console.log(error);
      }
    };
    getapiCalls();
  }, []);

  const handleChangeFromUser = (e) => {
    setfromUser(e);
  };
  const handleChangetoUser = (e) => {
    settoUser(e);
  };

  const transac = async () => {
    const from_account = fromUser.value;
    const to_account = toUser.value;
    const transaction_amount = amount;
    try {
      const response = await axios.post(
        `${base_url}/transactions/transfer`,
        {
          from_account,
          to_account,
          transaction_amount,
        }
      );
      alert(response.data.message);
    } catch (error) {
      alert(error);
    }
  };

  return (
    <Container style={{ marginTop: "30px" }}>
      <Row>
        <Col>
          <Select
            value={fromUser}
            onChange={handleChangeFromUser}
            options={users}
            placeholder="Transfer Money from User"
          />
        </Col>
        <Col>
          <Select
            value={toUser}
            onChange={handleChangetoUser}
            options={users}
            placeholder="Transfer Money to User"
          />
        </Col>
        <Col>
          <Input
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter Amount"
          />
        </Col>
      </Row>
      <Row style={{ marginTop: "30px" }}>
        <Col className="d-flex justify-content-center">
          <Button onClick={transac}>Transfer</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Transfer;
