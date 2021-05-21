import React from "react";
import{Jumbotron,Container,Card,CardDeck} from "react-bootstrap";
import "../Pages/Home.css"; 
import {useHistory} from 'react-router-dom'



function Home() {
  const history = useHistory()
  return (
    <div className="App">
      <Jumbotron fluid>
         <Container>
          <h1>HELLO!<br/>WELCOME TO MGB BANK</h1>
           <p>
           FASTER AND EASIER WAY TO TRANSFER MONEY TO YOUR LOVED ONES
           </p>
       </Container>
      </Jumbotron>
    <CardDeck>
  <Card onClick={()=>history.push('/list')} >
    <Card.Img variant="top" src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80" />
    <Card.Body>
      <Card.Title>VIEWCUSTOMER</Card.Title>
      <Card.Text>
        VIEW ALL THE DETAILS !
      </Card.Text>
    </Card.Body>
   
  </Card>
  <Card onClick={()=>history.push('/transfer')}>
    <Card.Img variant="top" src="https://images.unsplash.com/photo-1550565118-3a14e8d0386f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80" />
    <Card.Body>
      <Card.Title>TRANSFER</Card.Title>
      <Card.Text>
        TRANSFER YOUR MONEY ANYWHERE!
         </Card.Text>
         
    </Card.Body>
   
  </Card>
      <Card onClick={()=>history.push('/transaction-history')}>
     <Card.Img variant="top" src="https://images.unsplash.com/photo-1565514158740-064f34bd6cfd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80" />
     <Card.Body>
      <Card.Title>TRANSACTION HISTORY</Card.Title>
      <Card.Text>
        YOUR VALUABLE TRANSACTIONS!
      </Card.Text>
      
    </Card.Body>
    </Card>
</CardDeck>
  </div>
  );
}

export default Home;