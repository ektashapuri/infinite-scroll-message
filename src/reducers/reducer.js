import { combineReducers } from 'redux';
import { RECEIVE_MESSAGES, RECEIVE_MORE_MESSAGES, DELETE_MESSAGE } from '../action/action';

//get the message for the firt load
function message(state = {
  isFetching: false,
  details: {},
}, action) {
  switch (action.type) {
    case RECEIVE_MESSAGES:
    case DELETE_MESSAGE:
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
//get the next load of messages after scroll
function contactMessage(state, mess){
  const newResponse = mess;
  const oldMessage = state.details.messages;
  //using spread operator to merge the existing list with the new list of messages
  newResponse.messages = [...oldMessage, ...newResponse.messages];
  return newResponse
}
//merge to the rootReducer
const rootReducer = combineReducers({
  message
})

export default rootReducer
