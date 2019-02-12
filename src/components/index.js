import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchMessages, fetchMoreMessages} from '../action/action';
import MessageDetailComponent from './MessageDetailComponent';

class MessageContainer extends Component {

  constructor(props){
    super(props)
    this.handleScroll = this.handleScroll.bind(this)
  }

  componentDidMount() {
    const { fetchMessages } = this.props;
    fetchMessages();
  }

  handleScroll(countIndex){
    const { fetchMoreMessages } = this.props;
    fetchMoreMessages(countIndex);
  }

  render() {
    //console.log(this.props);
    const { details } = this.props.messages;
    const { count, messages } = details;
    let messageCount = details.messages ? details.messages.length : '';
    return (
      <div>
        <div className="wrapper">
          <h1 className="stickyHeader">Messages {messageCount}</h1>
        </div>
        <div className="messageWrapper">
        {count &&
          <MessageDetailComponent
            data={messages}
            count={count}
            handleScroll={this.handleScroll}/>
        }
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    messages: state.message
  }
}
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    fetchMessages: fetchMessages,
    fetchMoreMessages: fetchMoreMessages
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(MessageContainer);
