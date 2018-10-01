import React from "react";
import { Col, Row, Table } from "react-bootstrap";

import { connect } from 'react-redux';
import { fetchActivities } from '../../actions/activityActions';

const mapStateToProps = state => {
  return {
    activities: state.activityReducer.activities,
    loading: state.activityReducer.loading
  };
};

class ListActivitiesConnected extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchActivities());
  }

  render() {
    const activities = this.props.activities;
    var loading = this.props.loading;
    return (
      <Row>
        <Col>
          { loading 
          ? <Col sm={7} smOffset={5} style={{paddingTop: "20%"}}>
            <i className="fa fa-spinner fa-spin fa-4x"  ></i>
          </Col>  
          : <Table>
            <thead>
              <tr>
                <th>Hoạt động</th>
                <th>Đơn giá</th>
                <th>Thời gian</th>
              </tr>
            </thead>

            <tbody>
              { activities.map((activity, i) => {
                return (
                  <tr key={i}>
                    <td>{activity.type}</td>
                    <td>{activity.amount}</td>
                    <td>{activity.day}</td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
          }
        </Col>
      </Row>
      
    );
  }
}

const ListActivities = connect(mapStateToProps)(ListActivitiesConnected);

export default ListActivities;
