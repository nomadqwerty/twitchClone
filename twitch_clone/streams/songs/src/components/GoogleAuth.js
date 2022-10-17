import React, { useEffect } from "react";

const GoogleAuth = () => {
  useEffect(() => {
    // load google api lib
    window.gapi.load("client:auth2", () => {
      // initialize client
      window.gapi.client.init({
        clientId:
          "190277086456-it5e137smomab1cp3hanof2afqpebv8d.apps.googleusercontent.com",
        scope: "email",
        plugin_name: "streams",
      });
    });
  }, []);
  return <div>google Auth</div>;
};

export default GoogleAuth;
