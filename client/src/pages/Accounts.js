import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import { Input, FormBtn } from "../components/Form";

class Accounts extends Component {
  state = {
    account: "",
    balance: ""
  };

  componentDidMount() {
    this.loadAccount();
  }

  loadAccount = () => {
    API.getAccount()
      .then(res =>
        this.setState({ account: res.data, account: "" , balance: "" })
      )
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.account) {
      API.getAccount({
        account: this.state.account
      })
        .then(res => this.loadAccount())
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-3"></Col>
          <Col size="md-6">
            <Jumbotron>
              <h1>Welcome to the GoDaddy ATM $</h1>
              <p> Enter your account number to get started</p>
            </Jumbotron>
            <form>
              <Input
                value={this.state.account}
                onChange={this.handleInputChange}
                name="account"
                placeholder="Account Number (required)"
              />
              <FormBtn
                disabled={!(this.state.account)}
                onClick={this.handleFormSubmit}
              >
                Submit  
              </FormBtn>
            </form>
          </Col>
          <Col size="md-3"></Col>
        </Row>
      </Container>
    );
  }
}

export default Accounts;
