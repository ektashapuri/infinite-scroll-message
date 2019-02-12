import { compose, createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import rootReducer from '../reducers/reducer'

//maintain store inital state
const initialState = {
  message: {
    isFetching: true,
    details: {
      payload: [],
    },
  },
}

const store = compose(
  applyMiddleware(thunkMiddleware)
)(createStore)(rootReducer);

export default function configureStore(){
  return store
}
