import React, { Component } from "react";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import "./Login.css";
import { Grid, Row, Col, code} from 'react-bootstrap';

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
      email: "",
      firstname: "",
      lastname: "",
      creatingAcc: false,
    };
    this.toggleCreate = this.toggleCreate.bind(this);
  }

  toggleCreate() {
    this.setState({creatingAcc: !this.state.creatingAcc})
  }

  emptyForm() {
    return this.state.username.length > 0 && this.state.password.length > 0;
  }

  validateForm() {

  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault();
    console.log(this.state.username);
    console.log(this.state.password);
  }

  render() {
    if(this.state.creatingAcc) {
      return(
          <div className="container">
          <Grid>
              <Row>
                  <Col>
                      <div className="create">
                          <form onSubmit={this.handleSubmit}>
                          <FormGroup controlId="username" bsSize="large">
                              <ControlLabel>Enter a Username</ControlLabel>
                              <FormControl
                              type="username"
                              value={this.state.username}
                              onChange={this.handleChange}/>
                          </FormGroup>
                          <FormGroup controlId="password" bsSize="large">
                              <ControlLabel>Enter a Password</ControlLabel>
                              <FormControl
                              value={this.state.password}
                              onChange={this.handleChange}
                              type="password"/>
                          </FormGroup>
                          <FormGroup controlId="email" bsSize="large">
                              <ControlLabel>Enter an Email</ControlLabel>
                              <FormControl
                              value={this.state.password}
                              onChange={this.handleChange}
                              type="email"/>
                          </FormGroup>
                          <FormGroup controlId="firstname" bsSize="large">
                              <ControlLabel>Enter your First Name</ControlLabel>
                              <FormControl
                              value={this.state.password}
                              onChange={this.handleChange}
                              type="firstname"/>
                          </FormGroup>
                          <FormGroup controlId="lastname" bsSize="large">
                              <ControlLabel>Enter your Last Name</ControlLabel>
                              <FormControl
                              value={this.state.password}
                              onChange={this.handleChange}
                              type="lastname"/>
                          </FormGroup>
                          <Button
                              block
                              bsSize="large"
                              disabled={!this.emptyForm()}
                              type="submit">
                              Create
                          </Button>
                          </form>
                      </div>
                  </Col>
              </Row>
              <Row>
                <Col>
                  <Button
                    onClick={this.toggleCreate}
                    block
                    bsSize="large"
                    type="submit">
                      Login
                  </Button>
                </Col>
              </Row>  
          </Grid>
        </div>
      );
    }
    return (
        <div className="container">
        <Grid>
            <Row>
                <Col>
                    <div className="Login">
                        <form onSubmit={this.handleSubmit}>
                        <FormGroup controlId="username" bsSize="large">
                            <ControlLabel>Username</ControlLabel>
                            <FormControl
                            type="username"
                            value={this.state.username}
                            onChange={this.handleChange}/>
                        </FormGroup>
                        <FormGroup controlId="password" bsSize="large">
                            <ControlLabel>Password</ControlLabel>
                            <FormControl
                            value={this.state.password}
                            onChange={this.handleChange}
                            type="password"/>
                        </FormGroup>
                        <Button
                            block
                            bsSize="large"
                            disabled={!this.emptyForm()}
                            type="submit">
                            Login
                        </Button>
                        </form>
                    </div>
                </Col>
            </Row>
            <Row>
              <Col>
                <Button
                  onClick={this.toggleCreate}
                  block
                  bsSize="large"
                  type="submit">
                    Create an Account
                </Button>
              </Col>
            </Row>  
        </Grid>
      </div>
    );
  }
}
