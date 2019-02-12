import fetch from 'isomorphic-fetch'

export const RECEIVE_MESSAGES = 'RECEIVE_MESSAGES'
export const RECEIVE_MORE_MESSAGES = 'RECEIVE_MORE_MESSAGES'

export function receiveMessage(details){
  return{
    type: RECEIVE_MESSAGES,
    details,
  }
}

export function receiveMoreMessages(details){
  return{
    type: RECEIVE_MORE_MESSAGES,
    details,
  }
}

//dispatch action to get the first load of messages
export function fetchMessages(place){
  const url = 'http://message-list.appspot.com/messages';
  return function (dispatch){
    return fetch(url)
    .then(response => response.json())
    .then((response) => {
      dispatch(receiveMessage(response))
    })
  }
}

//dispatch action to get the next load of messages
export function fetchMoreMessages(place){
  const url = 'http://message-list.appspot.com/messages';
  return function (dispatch){
    return fetch(url)
    .then(response => response.json())
    .then((response) => {
      dispatch(receiveMoreMessages(response))
    })
  }
}
