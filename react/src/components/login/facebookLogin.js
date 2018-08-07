import * as React from "react";
import Amplify, { Auth } from "aws-amplify";
import AWS from "aws-sdk";

export default class FacebookLogin extends React.Component {
  componentDidMount() {
    window.fbAsyncInit = function() {
      FB.init({
        appId: "532067183877497",
        autoLogAppEvents: true,
        version: "v3.1",
        xfbml: true
      });

      FB.Event.subscribe("auth.statusChange", response => {
        if (response.authResponse) {
          this.alert(JSON.stringify(response.authResponse));

          AWS.config.region = "ap-southeast-1";
          // Add the Facebook access token to the Cognito credentials login map.
          AWS.config.credentials = new AWS.CognitoIdentityCredentials({
            IdentityPoolId:
              "ap-southeast-1:571919a3-49e1-4092-9b0e-2d4faa754ed6",
            Logins: {
              "graph.facebook.com": response.authResponse.accessToken
            }
          });

          // Obtain AWS credentials
          AWS.config.credentials.get(function(cred) {
            // Access AWS resources here.
            alert(JSON.stringify(cred));
          });
        } else {
          this.alert("auth false");
        }
      });
    };

    (function(d, s, id) {
      let js;
      let fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) {
        return;
      }
      js = d.createElement(s);
      js.id = id;
      js.src = "https://connect.facebook.net/en_US/sdk.js";
      fjs.parentNode.insertBefore(js, fjs);
    })(document, "script", "facebook-jssdk");
  }

  render() {
    return (
      <div
        className="fb-login-button"
        data-max-rows="1"
        data-size="large"
        data-button-type="continue_with"
        data-width="366"
        data-show-faces="true"
        data-auto-logout-link="false"
        data-use-continue-as="true"
      />
    );
  }
}
