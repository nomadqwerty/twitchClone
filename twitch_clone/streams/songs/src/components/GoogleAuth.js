import React from "react";

class GoogleAuth extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isSignedIn: null };
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
          this.setState({ isSignedIn: this.auth.isSignedIn.get() });

          // listen for sign in event
          this.auth.isSignedIn.listen(this.onAuthChange);
        });
    });
  }
  onAuthChange = () => {
    this.setState({ isSignedIn: this.auth.isSignedIn.get() });
  };
  renderAuth() {
    if (this.state.isSignedIn === null) {
      return <div>not sure</div>;
    } else if (this.state.isSignedIn) {
      return <div>Signed in</div>;
    } else {
      return <div>Not signed in</div>;
    }
  }
  render() {
    return <div>{this.renderAuth()}</div>;
  }
}

export default GoogleAuth;
