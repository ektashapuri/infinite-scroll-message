import React, {Component} from 'react';
import moment from 'moment'
//import SwipeToDelete from 'react-swipe-to-delete-component';
import Swipe from 'react-easy-swipe';

export default class IndividualMessageComp extends Component {
  constructor(props){
    super(props);
    this.onSwipeEnd = this.onSwipeEnd.bind(this);
  }

  onSwipeEnd(event) {
    //pass the id of the message and call the parent for deleting the message with the same id
    this.props.deleteMessage(this.props.messageData.id);
  }

  render () {
    const {author, id, content, updated} = this.props.messageData;
    let lastUpdated = new Date(updated);
    return(
      <Swipe
        onSwipeStart={this.onSwipeStart}
        onSwipeMove={this.onSwipeMove}
        onSwipeEnd={this.onSwipeEnd}>
      <div className="detailWrapper">
            <div className="contentWrapper">
              <div className="imgContainer">
                <img className="authorImg" src={"http://message-list.appspot.com"+author.photoUrl}></img>
              </div>
              <div className="msgName">
                <div className="authorName">{author.name}</div>
                <div className="msg">{content}</div>
              </div>
            </div>
            <div className="timestamp">Last updated: {moment(lastUpdated).format("dddd,	MMMM Do YYYY")}</div>
      </div>
      </Swipe>
    )
  }
}
