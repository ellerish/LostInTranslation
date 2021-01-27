import React from 'react';
import { withRouter} from 'react-router-dom';

import './LogIn.css';

class Login extends React.Component {
    constructor(props) {
      super(props);
  
      this.state = {
        userId: "",
        errorMsg: null
      };
    }
  
    onUserIdChange = (event) => {
      this.setState({ userId: event.target.value });
    };
  
    doLogIn = async () => {
      const { userId } = this.state;
  
      const url = "http://localhost:8080/users";

      const payload = { userId: userId};
  
      let response;
  
      try {
        response = await fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(payload)
        });
      } catch (err) {
        this.setState({ errorMsg: "Failed to connect to server: " + err });
        return;
      }
  
      if (response.status === 401) {
        this.setState({ errorMsg: "Invalid userId/password" });
        return;
      }
  
      this.setState({ errorMsg: null });
      this.props.updateLoggedIn(userId);
      this.props.history.push("/");
    };
  
    render() {
      let error = <div />;
      if (this.state.errorMsg) {
        error = (
          <div className="errorMsg">
            <p>{this.state.errorMsg}</p>
          </div>
        );
      }
  
      return (

          <div className="">
            <div>
              <p>Username :</p>
              <from>
              <input
                type="text"
                value={this.state.userId}
                onChange={this.onUserIdChange}
              />
        
              <button className="btn-go" onClick={this.doLogIn}>
                Go
              </button>
              </from>
              {error}

          </div>
        </div>
      );
    }
  }
  
  export default withRouter(Login);
