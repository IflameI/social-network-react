import React, { Component } from 'react'
import { connect, Provider } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom'

import './App.css'

import NavBar from './components/NavBar/NavBar'
import PeoplesContainer from './components/People/PeoplesContainer'
import ProfileContainer from './components/Profile/MyPosts/ProfileInfo/ProfileContainer'
import HeaderContainer from './components/Header/HeaderContainer'
import Login from './components/Login/Login'
import Preloader from './components/common/preloader/Preloader'
import ChatContainer from './components/Chat/ChatContainer'

import { initializeApp } from './redux/app-reducer'
import store from './redux/redux-store'

class App extends Component {
  componentDidMount() {
    this.props.initializeApp()
  }

  render() {
    if (!this.props.initialized) {
      return <Preloader />
    }

    return (
      <div className="container">
        <HeaderContainer />
        <div className="app__content">
          <div className="app__row">
            <NavBar />
            <div className="app__columnGeneral app__columnCenter">
              <Route path="/chat" render={() => <ChatContainer />} />
              <Route
                path="/profile/:userId?"
                render={() => <ProfileContainer />}
              />
              <Route path="/people" render={() => <PeoplesContainer />} />
              <Route path="/login" render={() => <Login />} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}
const mapStateToProps = (state) => ({
  initialized: state.app.initialized,
})
let AppContainer = connect(mapStateToProps, { initializeApp })(App)

const SocialMainApp = (props) => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <AppContainer />
      </Provider>
    </BrowserRouter>
  )
}

export default SocialMainApp
