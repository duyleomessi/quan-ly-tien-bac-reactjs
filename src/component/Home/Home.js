import React from "react";
import {
  Col,
  Row,
  Table,
  FormGroup,
  FormControl,
  Form,
  Button,
  Modal,
  ControlLabel
} from "react-bootstrap";

import PropTypes from "prop-types";
import axios from "axios";

import DatePicker from 'react-datepicker';
import moment from 'moment';

import 'react-datepicker/dist/react-datepicker.css';

export class Home extends React.Component {
  constructor(props) {
    super(props);
    this.handleChangeActivity = this.handleChangeActivity.bind(this);
    this.handleChangeAmount = this.handleChangeAmount.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleHide = this.handleHide.bind(this);
    this.handleChangeDate = this.handleChangeDate.bind(this);
    this.state = {
      activities: [],
      total: 0,
      activity: "",
      amount: 0,
      day: new Date().getDate(),
      month: new Date().getMonth() + 1,
      year: new Date().getFullYear(),
      startDate: moment()
    };
    this.allMonth = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    this.BASE_URL = "https://quan-ly-tien-bac-nodejs.herokuapp.com/";
  }

  countTotal() {
    var total = 0;
    this.state.activities.forEach(activity => {
      total += activity.amount;
    });
    return total;
  }

  addActivity(activity, amount, day, month, year) {
    var newActivity = {
      type: activity,
      amount: amount,
      day: day,
      month: month,
      year: year
    };
    axios
      .post(this.BASE_URL + "users/activity", newActivity, {
        headers: {"x-access-token": localStorage.getItem('token')}
      })
      .then(response => {
        if (response.status === 201) {
          this.getAllActivities();
        }
      })
      .catch(err => {
        console.log(err);
      });
  }

  getAllActivities() {
    fetch(this.BASE_URL + "users/activities", {
      headers: {"x-access-token": localStorage.getItem('token')}
    })
      .then(result => {
        return result.json();
      })
      .then(data => {
        this.setState({
          activities: data
        });
        this.setState({
          total: this.countTotal()
        });
      });
  }

  componentWillMount() {
    this.getAllActivities();
  }

  handleChangeActivity(e) {
    this.setState({
      activity: e.target.value
    });
  }

  handleChangeAmount(e) {
    this.setState({
      amount: e.target.value
    });
  }

  handleChangeDate(date) {
    this.setState({
      startDate: date,
      day : moment(date).toDate().getDate(),
      month: moment(date).toDate().getMonth() + 1,
      year: moment(date).toDate().getFullYear()
    });
  }

  handleSubmit() {
    this.addActivity(
      this.state.activity,
      this.state.amount,
      this.state.day,
      this.state.month,
      this.state.year
    );
    this.handleHide();
  }

  handleHide(e) {
    this.setState({
      show: false
    });
  }

  render() {
    return (
      <div className="col-sm-10 col-sm-offset-1" style={{ margin: 50 }}>
        <Row>
          <Col>
            <Table>
              <thead>
                <tr>
                  <th>Hoạt động</th>
                  <th>Đơn giá</th>
                  <th>Thời gian</th>
                </tr>
              </thead>

              <tbody>
                {this.state.activities.map((activity, i) => {
                  return (
                    <tr key={i}>
                      <td>{activity.type}</td>
                      <td>{activity.amount}</td>
                      <td>{activity.day}</td>
                    </tr>
                  );
                })}
                <tr>
                  <td>total</td>
                  <td>{this.state.total}</td>
                </tr>
              </tbody>
            </Table>
          </Col>
        </Row>

        {/* modal */}
        <Button
          bsStyle="primary"
          bsSize="large"
          onClick={() => this.setState({ show: true })}
        >
          Add activity
        </Button>

        <Modal
          show={this.state.show}
          onHide={this.handleHide}
          container={this}
          aria-labelledby="contained-modal-title"
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title">Activity</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form onSubmit={this.handleSubmit}>
              <Form horizontal>
                <FormGroup controlId="activityForm">
                  <Col sm={3}>
                    <ControlLabel>Hoạt động</ControlLabel>
                  </Col>
                  <Col sm={7}>
                    <FormControl
                      type="text"
                      value={this.state.activity}
                      placeholder="Hoạt động"
                      onChange={this.handleChangeActivity}
                    />
                  </Col>
                </FormGroup>
                <FormGroup controlId="amountForm">
                  <Col sm={3}>
                    <ControlLabel>Số lượng</ControlLabel>
                  </Col>
                  <Col sm={7}>
                    <FormControl
                      type="text"
                      value={this.state.amount}
                      placeholder="Đơn giá"
                      onChange={this.handleChangeAmount}
                    />
                  </Col>
                </FormGroup>
                
                <FormGroup controlId="datePicker">
                  <Col sm={3}>
                    <ControlLabel>Thời gian</ControlLabel>
                  </Col>
                  <Col sm={7}>
                      <DatePicker
                        selected={this.state.startDate}
                        onChange={this.handleChangeDate}
                      />
                    {/* </FormControl> */}
                  </Col>
                </FormGroup>
              </Form>
            </form>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.handleSubmit}>Save</Button>
            <Button onClick={this.handleHide}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

Home.propTypes = {
  pays: PropTypes.array,
  user: PropTypes.object,
  greeting: PropTypes.func
};
