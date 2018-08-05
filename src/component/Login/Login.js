import React from 'react';
import  {Form, FormGroup, Col, FormControl, Checkbox, Button, ControlLabel} from 'react-bootstrap';

import axios from "axios";

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }

        this.getEmailValue = this.getEmailValue.bind(this);
        this.getPasswordValue = this.getPasswordValue.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.BASE_URL = "https://quan-ly-tien-bac-nodejs.herokuapp.com/";
    }

    getEmailValue(e) {
        this.setState({
            email: e.target.value
        })
    }

    getPasswordValue(e) {
        this.setState({
            password: e.target.value
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        var user = {
            email: this.state.email,
            password: this.state.password
        } 

        axios.post(this.BASE_URL + 'users/login', user)
            .then(response => {
                if (response.status === 200) {
                    var token = response.data.token;
                }
            })
            .catch(err => {
                console.log("Email or password is incorrect");
            })
    }

    render() {
        return(
            <Form horizontal onSubmit={this.handleSubmit}>
                <FormGroup controlId="formHorizontalEmail">
                    <Col componentClass={ControlLabel} sm={2}>
                        Email
                    </Col>
                    <Col sm={10}>
                        <FormControl type="email" value={this.state.email} placeholder="Email" onChange={this.getEmailValue}/>
                    </Col>
                </FormGroup>

                <FormGroup controlId="formHorizontalPassword">
                    <Col componentClass={ControlLabel} sm={2}>
                        Password
                    </Col>
                    <Col sm={10}>
                        <FormControl type="password" value={this.state.password} placeholder="Password"  onChange={this.getPasswordValue}/>
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
        )
    }
}

export default Login;