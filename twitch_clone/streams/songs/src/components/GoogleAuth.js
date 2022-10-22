import React from "react";
import { connect } from "react-redux";
import { signIn, signOut } from "../actions";

class GoogleAuth extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // load google api lib
    window.gapi.load("client:auth2", () => {
      // initialize client
      window.gapi.client
        .init({
          clientId:
            "190277086456-it5e137smomab1cp3hanof2afqpebv8d.apps.googleusercontent.com",
          scope: "email",
          plugin_name: "streams",
        })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();
          // get user id

          this.onAuthChange(this.auth.isSignedIn.get());
          // console.log(this.auth);
          // listen for sign in event
          this.auth.isSignedIn.listen(this.onAuthChange);
        });
    });
  }
  onAuthChange = (isSignedIn) => {
    if (isSignedIn) {
      this.props.signIn(this.auth.currentUser.get().getId());
    } else {
      this.props.signOut();
    }
  };
  onSignIn = () => {
    this.auth.signIn();
  };
  onSignOut = () => {
    this.auth.signOut();
  };
  renderAuth() {
    if (this.props.isSignedIn === null) {
      return <div>not sure</div>;
    } else if (this.props.isSignedIn) {
      return (
        <div>
          <button onClick={this.onSignOut} className="google button ui red">
            <i className="google icon"></i>
            Sign Out
          </button>
        </div>
      );
    } else {
      return (
        <div>
          {" "}
          <button onClick={this.onSignIn} className="google button ui red">
            <i className="google icon"></i>
            Sign in
          </button>{" "}
        </div>
      );
    }
  }
  render() {
    return <div>{this.renderAuth()}</div>;
  }
}

const mapStateToProps = (state) => {
  console.log(state);

  return { isSignedIn: state.authReducer.isSignedIn };
};

export default connect(mapStateToProps, { signIn, signOut })(GoogleAuth);
