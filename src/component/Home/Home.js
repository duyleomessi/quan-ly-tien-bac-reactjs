import React from "react";

import PropTypes from "prop-types";
import { connect } from "react-redux";
import ListActivities from "./ListActivities";
import AddModal from "./AddModal";

const mapStateToProps = state => {
  return {
    activities: state.activityReducer.activities,
  };
};

class HomeConnected extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activities: [],
      total: 0,
    };
    this.allMonth = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    this.BASE_URL = process.env.REACT_APP_SERVER_URL;
  }


  render() {
    return (
      <div className="col-sm-10 col-sm-offset-1" style={{ margin: 50 }}>
        <ListActivities />

        <AddModal />
      </div>
    );
  }
}

HomeConnected.propTypes = {
  pays: PropTypes.array,
  user: PropTypes.object,
  greeting: PropTypes.func
};

const Home = connect(mapStateToProps)(HomeConnected);

export default Home;
