import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchStreamsAction } from "../../actions";

const StreamList = (props) => {
  useEffect(() => {
    (async () => {
      await props.fetchStreamsAction();
    })();
  }, []);
  const list = Object.keys(props.streams);
  let adminEdit_DelBtn = (key) => {
    if (props.streams[`${key}`]?.userId === props.state.authReducer.userId) {
      return (
        <div className="right floated content">
          <button className="ui button primary">Edit</button>
          <button className="ui button negative">Edit</button>
        </div>
      );
    }
  };
  let mapped = list.map((key, i) => {
    return (
      <div className="item" key={i}>
        <i className="large middle aligned icon camera"></i>
        <div className="content">{props.streams[`${key}`].title}</div>
        <div className="description">{props.streams[`${key}`].description}</div>
        {adminEdit_DelBtn(key)}
      </div>
    );
  });
  const arrId = [props.state.authReducer.userId, props.streams["1"]?.userId];

  const createStreamBtn = () => {
    if (arrId[0]) {
      return (
        <div className="left floated content" style={{ textAlign: "right" }}>
          <button className="ui button primary">
            <Link to="/streams/new" style={{ color: "white" }}>
              Create Stream
            </Link>
          </button>
        </div>
      );
    }
    return;
  };
  return (
    <div>
      <h2>Streams</h2>
      <div className="ui celled list">{mapped}</div>;{createStreamBtn()}
    </div>
  );
};

const mapToProps = (state) => {
  return { streams: state.streams, state };
};

export default connect(mapToProps, { fetchStreamsAction })(StreamList);
