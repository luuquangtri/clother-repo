import Header from 'Components/Common/Header/Header.component';
import { auth, createUserProfileDocument } from 'firebase/firebase.utils';
import HomePage from 'Pages/HomePage/Homepage.component';
import ShopPage from 'Pages/ShopPage/ShopPage.component';
import SignInAndSignUpPage from 'Pages/Sign-in-and-Sign-up-Page/Sign-in-and-Sign-up-Page.component';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect, Route, Switch } from 'react-router-dom';
import { setCurrentUser } from 'redux/User/user.action';


class App extends Component {
  constructor(props) {
    super(props);

  }
  unSubcribeFromAuth = null;
  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.unSubcribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          })
        })
      }
      setCurrentUser(userAuth)
    })
  }

  componentWillUnmount() {
    this.unSubcribeFromAuth();
  }


  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route exact path="/signin" render={() => this.props.currentUser ? (<Redirect to="/" />) : (<SignInAndSignUpPage />)} />
        </Switch>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setCurrentUser: (user) => dispatch(setCurrentUser(user))
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    currentUser: state.user.currentUser
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);




