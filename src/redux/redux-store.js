import { applyMiddleware, combineReducers, compose } from 'redux'
import profileReducer from './profile-reducer'
import chatReducer from './chat-reducer'
import peopleReducer from './peoples-reducer'
import authReducer from './auth-reducer'
import thunkMiddleware from 'redux-thunk'
import { reducer as formReducer } from 'redux-form'
import appReducer from './app-reducer'
const { createStore } = require('redux')

let reducers = combineReducers({
  postsPage: profileReducer,
  chatPage: chatReducer,
  usersPage: peopleReducer,
  auth: authReducer,
  form: formReducer,
  app: appReducer,
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunkMiddleware))
)
export default store
