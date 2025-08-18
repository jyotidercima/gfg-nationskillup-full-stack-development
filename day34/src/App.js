// import logo from './logo.svg';
import './App.css';

import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import ListGroup from "react-bootstrap/ListGroup";

class App extends Component {
  constructor(props) {
    super(props);

    //setting up state
    this.state = {
      userInpu: "",
      list: []
    };
  }

  //set a user input value
  updateInput(value) {
    this.setState({ userInput: value });
  }

  //add item if user input is not empty
  addItem() {
    if (this.state.userInput !== "") {
      const userInput = {
        //add a random id which is used to delete
        id: Math.random(),

        //add a user value to list
        value: this.state.userInput
      };

      const list = [...this.state.list];
      list.push(userInput);

      //reset state
      this.setState({
        list,
        userInput: ""
      });
    }
  }

  deleteItem(key) {
    const list = [...this.state.list];

    //filter values and leave value which we need to delete
    const updateList = list.filter((item) => item.id !== key);

    //update list in state
    this.setState({
      list: updateList
    });
  }

  editItem = (index) => {
    const todos = [...this.state.list];
    const editedTodo = prompt('Edit the todo:');
    if (editedTodo !== null && editedTodo.trim() !== "") {
      let updatedTodos = [...todos]
      updatedTodos[index].value = editedTodo
      this.setState({
        list: updatedTodos
      });
    }
  }

  render() {
    return (
      <Container>
        <Row style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "3rem",
          fontWeight: "bolder"
        }}>
          TO-DO LIST
        </Row>
        <hr />
        <Row>
          <Col md={{ span: 5, offset: 4 }}>
            <InputGroup className='mb-3'>
              <FormControl placeholder="add item . . ."
                size="lg"
                value={this.state.userInput}
                onChange={(item) => this.updateInput(item.target.value)}
                aria-label='add something'
                aria-describedby='basic-addon2' />
              <InputGroup>
                <Button
                  varient="dark"
                  className="mt-2"
                  onClick={() => this.addItem()}>
                  Add
                </Button>
              </InputGroup>
            </InputGroup>
          </Col>
        </Row>

        <Row>
          <Col md={{ span: 5, offset: 4 }}>
            <ListGroup>
              {this.state.list.map((item, index) => {
                return (
                  <div key={index} >
                    <ListGroup.Item
                      varient="dark"
                      action style={{ display: "flex", justifyContent: "space-between" }}>
                      {item.value}
                      <span>
                        <Button style={{ marginRight: "10px" }}
                          variant='light'
                          onClick={() => this.deleteItem(item.id)}>
                          Task Completed
                        </Button>
                        <Button varient="light"
                          onClick={() => this.editItem(index)}>
                          Edit
                        </Button>
                      </span>
                    </ListGroup.Item>
                  </div>
                );
              })}
            </ListGroup>
          </Col>
        </Row>
      </Container>
    );
  }
}


// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
