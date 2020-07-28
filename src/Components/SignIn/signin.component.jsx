import CustomButton from 'Components/Common/CustomButton/CustomButton.component';
import FormInput from 'Components/Common/FormInput/FormInput.component';
import React, { useState } from 'react';
import "./signin.styles.scss";
function SignIn(props) {
    const [state, setState] = useState({
        email: "",
        password: ""
    })

    const handleSubmit = (e) => {
        e.preventDefault();

    }


    const handleChange = (e) => {
        let target = e.target;
        let name = target.name;
        let value = target.type === "checkbox" ? target.checked : target.value;
        setState(prevState => ({
            ...prevState,
            [name]: value
        }))
    }


    return (
        <div className="sign-in" >
            <h2>I already hava a account</h2>
            <span>Sign in with your email and password </span>
            <form onSubmit={handleSubmit}>
                <FormInput
                    name='email'
                    value={state.email}
                    type="text"
                    required
                    handleChange={handleChange}
                    label="email"
                />
                <FormInput
                    name='password'
                    value={state.password}
                    type="password"
                    required
                    handleChange={handleChange}
                    label="password"
                />

                <CustomButton type="submit">SIGN IN</CustomButton>
            </form>
        </div>
    );
}

export default SignIn;