import React, {Component} from 'react';
import IndividualMessageComp from './IndividualMessageComp';

export default class MessageDetailComponent extends Component {

constructor(props){
  super(props);
  this.handleScroll = this.handleScroll.bind(this);
  this.deleteMessage = this.deleteMessage.bind(this);
}

  componentDidMount(){
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  deleteMessage(id){
    //get the id of the deleted message and delete the corresponding message from the list
    const {data, deleteMessage,count,pageToken} = this.props;
    const newMessageData = data.filter(function(message,index) {
      return message.id !== id;
    })
    const dataToSend = {
      pageToken,
      count,
      messages: newMessageData
    }
    deleteMessage(dataToSend);
  }

  handleScroll(event) {
    const { handleScroll, count, data } = this.props;
    //check if the page is scrolled half way up to call the method to fetch more messages
    const bottom = window.scrollY >= document.documentElement.offsetHeight/2;
    if (bottom) {
      handleScroll(data.length + 10);
    }
  }

  createMessageComp(){
    //map function to render each component with details
    return this.props.data.map( (message, index) => {
      return (

          <IndividualMessageComp
            key={index}
            messageData={message}
            deleteMessage={this.deleteMessage}
          />
      )
    })
  }
  render() {
    return(
      <div className="detailComp" onScroll={this.handleScroll}>
        {this.createMessageComp()}
      </div>
    )
  }
}
