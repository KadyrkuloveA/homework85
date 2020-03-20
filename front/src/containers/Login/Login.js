import React, {Component, Fragment} from 'react';
import FormElement from "../../components/UI/Form/FormElement";
import {Alert, Form} from "reactstrap";
import {loginUser} from "../../store/actions/usersActions";
import {connect} from "react-redux";

class Login extends Component {
  state = {
    username: '',
    password: '',
  };

  inputChangeHandler = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  };

  submitFormHandler = event => {
    event.preventDefault();

    this.props.loginUser({...this.state});
  };

  render() {
    return (
        <Fragment>
          {this.props.error && (
              <Alert color="danger">{this.props.error.error}</Alert>
          )}

          <div className="card pt-2 pb-2">
            <div className="card-body">
              <h3 className="mb-3 pb-2">Login</h3>
              <Form onSubmit={this.submitFormHandler}>
                <FormElement
                    propertyName="username"
                    title="Username"
                    value={this.state.username}
                    onChange={this.inputChangeHandler}
                    type="text"
                    autoComplete="current-username"
                    placeholder="Enter username you registered with"
                />
                <FormElement
                    propertyName="password"
                    title="Password"
                    value={this.state.password}
                    onChange={this.inputChangeHandler}
                    type="password"
                    autoComplete="current-password"
                    placeholder="Enter password"
                />
                <button type="submit" className="btn btn-primary">
                  Login
                </button>
              </Form>
            </div>
          </div>
        </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  loading: state.users.loginLoading,
  error: state.users.loginError
});

const mapDispatchToProps = dispatch => ({
  loginUser: userData => dispatch(loginUser(userData))
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);