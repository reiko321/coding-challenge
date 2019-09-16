import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";

class Detail extends Component {
  state = {
    account: {}
  };
  // When this component mounts, grab the account with the _id of this.props.match.params.id
  // e.g. localhost:3000/accounts/5d7fe0c7ce910c99d562262a
  componentDidMount() {
    API.getAccount(this.props.match.params.id)
      .then(res => this.setState({ account: res.data }))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-3"></Col>
          <Col size="md-6">
            <Jumbotron>
              <h1>
                {this.state.account.account}
              </h1>
            </Jumbotron>
          </Col>
          <Col size="md-3"></Col>
        </Row>
        <Row>
          <Col size="md-2">
            <Link to="/">← Return </Link>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Detail;
