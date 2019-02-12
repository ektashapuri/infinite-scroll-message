import { combineReducers } from 'redux';
import { RECEIVE_MESSAGES, RECEIVE_MORE_MESSAGES } from '../action/action';

function message(state = {
  isFetching: false,
  details: {},
}, action) {
  switch (action.type) {
    case RECEIVE_MESSAGES:
      return Object.assign({}, state, {
        isFetching: false,
        details: action.details,

      })
      case RECEIVE_MORE_MESSAGES:
        return Object.assign({}, state, {
          isFetching: false,
          details: contactMessage(state, action.details),

        })
    default:
      return state
  }
}

function contactMessage(state, mess){
  const newResponse = mess;
  const oldMessage = state.details.messages;
  newResponse.messages = [...oldMessage, ...newResponse.messages];
  return newResponse
}

const rootReducer = combineReducers({
  message
})

export default rootReducer
