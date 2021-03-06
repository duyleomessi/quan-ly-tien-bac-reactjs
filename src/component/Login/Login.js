import React from "react";
import {
  Form,
  FormGroup,
  Col,
  FormControl,
  Checkbox,
  Button,
  ControlLabel
} from "react-bootstrap";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };

    this.getEmailValue = this.getEmailValue.bind(this);
    this.getPasswordValue = this.getPasswordValue.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.BASE_URL = "https://quan-ly-tien-bac-nodejs.herokuapp.com/";
  }

  getEmailValue(e) {
    this.setState({
      email: e.target.value
    });
  }

  getPasswordValue(e) {
    this.setState({
      password: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();

    fetch(process.env.REACT_APP_SERVER_URL + "users/login", {
      method: "POST",
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password
      }),
      headers: { "content-type": "application/json" }
    })
      .then(response => response.json())
      .then(json => {
        console.log(json);
        var token = json.token;
        localStorage.setItem("token", token);
        this.props.history.push("/home");
      })
      .catch(err => {
        // console.log("Email or password is incorrect");
        console.log(err);
      });
  }

  render() {
    return (
      <Form horizontal onSubmit={this.handleSubmit}>
        <FormGroup controlId="formHorizontalEmail">
          <Col componentClass={ControlLabel} sm={2}>
            Email
          </Col>
          <Col sm={10}>
            <FormControl
              type="email"
              value={this.state.email}
              placeholder="Enter your email"
              onChange={this.getEmailValue}
            />
          </Col>
        </FormGroup>

        <FormGroup controlId="formHorizontalPassword">
          <Col componentClass={ControlLabel} sm={2}>
            Password
          </Col>
          <Col sm={10}>
            <FormControl
              type="password"
              value={this.state.password}
              placeholder="Enter your password"
              onChange={this.getPasswordValue}
            />
          </Col>
        </FormGroup>

        <FormGroup controlId="forHorizontalRememberMe">
          <Col smOffset={2} sm={10}>
            <Checkbox>Remember me</Checkbox>
          </Col>
        </FormGroup>

        <FormGroup>
          <Col smOffset={2} sm={10}>
            <Button type="submit">Sign in</Button>
          </Col>
        </FormGroup>
      </Form>
    );
  }
}

export default Login;
