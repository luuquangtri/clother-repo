import CustomButton from 'Components/Common/CustomButton/CustomButton.component';
import FormInput from 'Components/Common/FormInput/FormInput.component';
import { auth, createUserProfileDocument } from 'firebase/firebase.utils';
import React, { Component } from 'react';
import './SignUp.styles.scss';
class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            displayName: "",
            email: "",
            password: "",
            configPassword: ""
        }
    }

    handleSubmit = async (e) => {
        const { password, configPassword, email, displayName } = this.state;
        e.preventDefault();
        if (password !== configPassword) {
            alert("password do not match");
            return;
        } else {
            try {
                const { user } = await auth.createUserWithEmailAndPassword(email, password);
                await createUserProfileDocument(user, { displayName })
            } catch (error) {
                alert(error)
            }
        }
    }
    handleChange = e => {
        let target = e.target;
        let name = target.name;
        let value = target.type === "checkbox" ? target.checked : target.value;
        this.setState({
            [name]: value
        })
    }
    render() {
        const { displayName, email, password, configPassword } = this.state;
        return (
            <div className="sign-up">
                <h2>I do not have a account</h2>
                <span>Sign up with your email and password</span>
                <form className="sign-up-form" onSubmit={this.handleSubmit}>
                    <FormInput
                        name="displayName"
                        value={displayName}
                        onChange={this.handleChange}
                        label="Display Name"
                        required
                    />
                    <FormInput
                        name="email"
                        value={email}
                        onChange={this.handleChange}
                        label="Email"
                        required
                    />
                    <FormInput
                        name="password"
                        value={password}
                        onChange={this.handleChange}
                        label="Password"
                        required
                    />
                    <FormInput
                        name="configPassword"
                        value={configPassword}
                        onChange={this.handleChange}
                        label="Config Password"
                        required
                    />
                    <CustomButton type="submit">Sign Up</CustomButton>
                </form>
            </div>
        );
    }
}

export default SignUp;