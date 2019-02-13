import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchMessages, fetchMoreMessages, deleteMessage} from '../action/action';
import MessageDetailComponent from './MessageDetailComponent';

//load the main container
class MessageContainer extends Component {

  constructor(props){
    super(props)
    this.handleScroll = this.handleScroll.bind(this)
  }

  componentDidMount() {
    //get the first load of messages
    const { fetchMessages } = this.props;
    fetchMessages();
  }

  handleScroll(countIndex){
    //get the next load of message after scroll - ten at  time
    const { fetchMoreMessages } = this.props;
    fetchMoreMessages(countIndex);
  }

  render() {
    const { details } = this.props.messages;
    const { count, messages, pageToken} = details;
    //refresh the new message list
    const { deleteMessage } = this.props;
    let messageCount = details.messages ? details.messages.length : '';
    return (
      <div>
        <div className="header">
          <h1 className="header__title">Messages
            <div className="header-message-count">{messageCount}</div>
          </h1>
        </div>
        {count &&
          <MessageDetailComponent
            data={messages}
            count={count}
            pageToken={pageToken}
            deleteMessage={deleteMessage}
            handleScroll={this.handleScroll}/>
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    messages: state.message
  }
}
//added to enable dispatching the action
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    fetchMessages: fetchMessages,
    fetchMoreMessages: fetchMoreMessages,
    deleteMessage: deleteMessage
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(MessageContainer);
