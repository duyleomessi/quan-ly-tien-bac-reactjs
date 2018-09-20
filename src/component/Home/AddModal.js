import React from "react";
import { connect } from "react-redux";
import {
  Row,
  Col,
  FormGroup,
  FormControl,
  Form,
  Button,
  Modal,
  ControlLabel
} from "react-bootstrap";
import DatePicker from "react-datepicker";
import moment from "moment";
import "react-datepicker/dist/react-datepicker.css";
import { addActivity } from "../../actions/activityActions";

const mapStateToProps = state => {
  return {
    loading: state.activityReducer.loading, 
    isAdd: state.activityReducer.isAdd
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addActivity: activity => {
      dispatch(addActivity(activity))
    }
  };
};

class ConnectedModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activity: null,
      isShowModal: false,
      amount: null,
      day: new Date().getDate(),
      month: new Date().getMonth() + 1,
      year: new Date().getFullYear(),
      startDate: moment()
    };
    this.handleHide = this.handleHide.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleChangeDate = this.handleChangeDate.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const activity = {
      type: this.state.activity,
      amount: this.state.amount,
      day: this.state.day,
      month: this.state.month,
      year: this.state.year
    };
    this.props.addActivity(activity);
  }

  handleHide(e) {
    this.setState({
      isShowModal: false
    });
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleChangeDate(date) {
    this.setState({
      startDate: date,
      day: moment(date)
        .toDate()
        .getDate(),
      month:
        moment(date)
          .toDate()
          .getMonth() + 1,
      year: moment(date)
        .toDate()
        .getFullYear()
    });
  }

  render() {
    const loading = this.props.loading;
    const isAdd = this.props.isAdd;
    return (
      <Row>
        {!loading && (
          <Button
            className="col-sm-4 col-sm-offset-3"
            bsStyle="primary"
            bsSize="large"
            onClick={() => {
              this.setState({
                isShowModal: true
              });
            }}
          >
            Add activity
          </Button>
        )}

        <Modal
          show={this.state.isShowModal && isAdd}
          onHide={this.handleHide}
          // container={this}
          // aria-labelledby="contained-modal-title"
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
                      name="activity"
                      value={this.state.activity}
                      placeholder="Hoạt động"
                      onChange={this.handleChange}
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
                      name="amount"
                      value={this.state.amount}
                      placeholder="Đơn giá"
                      onChange={this.handleChange}
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
      </Row>
    );
  }
}

const AddModal = connect(
  mapStateToProps,
  mapDispatchToProps
)(ConnectedModal);
export default AddModal;
