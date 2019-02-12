//import all the dependecies
import 'babel-polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { browserHistory } from 'react-router'
import configureStore from './store/store'
import MessageContainer from './components/index'
import './style/Style.less'

const store = configureStore();

class App extends React.Component {
  render() {
    const { store } = this.props
    return (
      <Provider store={store}>
        <MessageContainer />
      </Provider>
    )
  }
}
//load the app
ReactDOM.render(
  <App store={store} />,
  document.getElementById('root')
)
