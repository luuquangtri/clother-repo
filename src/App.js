import Header from 'Components/Common/Header/Header.component';
import { auth, createUserProfileDocument } from 'firebase/firebase.utils';
import HomePage from 'Pages/HomePage/Homepage.component';
import ShopPage from 'Pages/ShopPage/ShopPage.component';
import SignInAndSignUpPage from 'Pages/Sign-in-and-Sign-up-Page/Sign-in-and-Sign-up-Page.component';
import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: null
    }
  }
  unSubcribeFromAuth = null;
  componentDidMount() {
    this.unSubcribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          })

        })

      }
      this.setState({ currentUser: userAuth })
    })
  }

  componentWillUnmount() {
    this.unSubcribeFromAuth();
  }


  render() {
    const { currentUser } = this.state;
    return (
      <div className="App">
        <Header currentUser={currentUser} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/signin" component={SignInAndSignUpPage} />
        </Switch>
      </div>
    );
  }
}

export default App;




