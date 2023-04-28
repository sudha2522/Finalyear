import {GoogleLogin, GoogleOAuthProvider} from '@react-oauth/google';
import axios from 'axios';
import { Navigate } from 'react-router-dom';
import {authenticate} from '../auth/helper';

function decodeJwtResponse(token) {
    var base64Url = token.split(".")[1];
    var base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
    var jsonPayload = decodeURIComponent(atob(base64).split("").map(function (c) {
        return "%" + (
            "00" + c.charCodeAt(0).toString(16)
        ).slice(-2);
    }).join(""));

    return JSON.parse(jsonPayload);
}

const onFailure = (error) => { // handle failed Google Sign-In
    console.log(error);
};

const GoogleSignInButton = () => {
  const onClick = (event) => {
    event.preventDefault();
    event.stopPropagation();
    event.currentTarget.querySelector('button').click();
  };

  return (
    <GoogleOAuthProvider clientId="your-client-id-here">
      <GoogleLogin
        onSuccess={
          async credentialResponse => {
            console.log(credentialResponse);
            const responsePayload = decodeJwtResponse(credentialResponse.credential);
            const email = responsePayload.email;
            if (email.endsWith("@iiit-bh.ac.in")) {
              try {
                const response = await axios.post('http://localhost:3001/auth/google', {token: credentialResponse.credential});
                authenticate((response.data),()=>{
                  console.log("yes i have set the key value pair")
                  window.location.reload();
                })
              } catch (error) {
                console.log(error);
              }
              alert('Login successFul');
              // navigate('/afterlogin');
            } else {
              alert('Please login using Institute Email-id');
            }
          }
        }
        onError={
          () => {
            console.log('Login Failed');
          }
        }
        render={renderProps => (
          <div style={{ position: 'relative' }}>
            <button style={{ visibility: 'hidden', position: 'absolute' }} onClick={renderProps.onClick} disabled={renderProps.disabled}>
              Sign in with Google
            </button>
            <button onClick={onClick}>
              Your Custom Button
            </button>
          </div>
        )}
      />
    </GoogleOAuthProvider>
  );
};

export default GoogleSignInButton;
