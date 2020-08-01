import SignIn from 'Components/SignIn/signin.component';
import SignUp from 'Components/SignUp/SignUp.component';
import React from 'react';
import "./Sign-in-and-Sign-up-Page.styles.scss";
function SignInAndSignUpPage(props) {
    return (
        <div className="sign-in-and-sign-up">
            <SignIn />
            <SignUp />
        </div>
    );
}

export default SignInAndSignUpPage;