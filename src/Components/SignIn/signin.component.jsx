import CustomButton from 'Components/Common/CustomButton/CustomButton.component';
import FormInput from 'Components/Common/FormInput/FormInput.component';
import { auth, signInWithGoogle } from 'firebase/firebase.utils';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import "./signin.styles.scss";
function SignIn(props) {
    const initial = {
        email: "",
        password: ""
    }
    const [state, setState] = useState(initial);
    const history = useHistory();
    const handleSubmit = async (e) => {
        e.preventDefault();
        const { email, password } = state;
        try {
            await auth.signInWithEmailAndPassword(email, password);
            setState({ ...initial, email: "", password: "" });
            history.push("/");
        } catch (error) {
            console.log(error);

        }
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
                <div className="buttons">
                    <CustomButton type="submit" >SIGN IN</CustomButton>
                    <CustomButton type="submit" isGoogleSignIn onClick={signInWithGoogle}>SIGN IN WITH GOOGLE</CustomButton>
                </div>
            </form>
        </div>
    );
}

export default SignIn;