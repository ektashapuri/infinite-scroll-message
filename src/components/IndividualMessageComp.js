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
        <div className="message__wrapper">
           <div className="message__row">
             <div className="message-author__wrapper">
               <img className="message-author__image" src={"http://message-list.appspot.com"+author.photoUrl}></img>
             </div>
             <div className="message__text">
               <div className="message-author-name">{author.name}</div>
               <div className="message-content">{content}</div>
             </div>
           </div>
           <div className="message__row message__row--right">
             <span className="message-timestamp">Last updated: {moment(lastUpdated).format("dddd,  MMMM Do YYYY")}</span>
           </div>
         </div>
      </Swipe>
    )
  }
}
