import React, {Component} from 'react';
import {connect} from "react-redux";
import './Register.css';
import {registerUser} from "../../store/actions/usersActions";
import FormElement from "../../components/UI/Form/FormElement";
import {Form} from "reactstrap";

class Register extends Component {
    state = {
        username: '',
        password: ''
    };

    inputChangeHandler = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    };

    submitFormHandler = async event => {
        event.preventDefault();
        this.props.registerUser({...this.state});
    };

    getFieldError = fieldName => {
        try {
            return this.props.error.errors[fieldName].message;
        } catch (e) {
            return undefined;
        }
    };

    render() {
        return (
            <div className="card pt-2 pb-2">
                <div className="card-body">
                    <h3 className="mb-3 pb-2">Register</h3>
                    <Form onSubmit={this.submitFormHandler}>
                        <FormElement
                            propertyName="username"
                            title="Username"
                            value={this.state.username}
                            onChange={this.inputChangeHandler}
                            error={this.getFieldError('username')}
                            placeholder="Enter username"
                            autoComplete="new-username"
                        />
                        <FormElement
                            propertyName="password"
                            title="Password"
                            type="password"
                            value={this.state.password}
                            onChange={this.inputChangeHandler}
                            error={this.getFieldError('password')}
                            placeholder="Enter password"
                            autoComplete="new-password"
                        />
                        <button type="submit" className="btn btn-primary">
                            Register
                        </button>
                    </Form>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    error: state.users.registerError,
    loading: state.users.registerLoading,
});

const mapDispatchToProps = dispatch => ({
    registerUser: userData => dispatch(registerUser(userData))
});

export default connect(mapStateToProps, mapDispatchToProps)(Register);