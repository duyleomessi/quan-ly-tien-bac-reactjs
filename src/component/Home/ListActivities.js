import React from "react";
import { Col, Row, Table } from "react-bootstrap";

import { connect } from 'react-redux';
import { fetchActivities } from '../../actions/activityActions';

const mapStateToProps = state => {
  return { activities: state.activityReducer.activities };
};

class ListActivitiesConnected extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchActivities());
    // this.props.dispatch(fetchActivitiesSuccess([{"type": "Ăn sáng", "amount": 30000, "day": 20}, {"type": "Ăn trưa", "amount": 30000, "day": 30}]))
  }

  render() {
    const activities = this.props.activities;
    return (
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
              {activities.map((activity, i) => {
                return (
                  <tr key={i}>
                    <td>{activity.type}</td>
                    <td>{activity.amount}</td>
                    <td>{activity.day}</td>
                  </tr>
                );
              })}
              {/* <tr>
            <td>total</td>
            <td>{this.state.total}</td>
          </tr> */}
            </tbody>
          </Table>
        </Col>
      </Row>
    );
  }
}

const ListActivities = connect(mapStateToProps)(ListActivitiesConnected);

export default ListActivities;
