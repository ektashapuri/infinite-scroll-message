import React, {Component} from 'react';
import moment from 'moment'
import Swipe from 'react-easy-swipe';

export default class IndividualMessageComp extends Component {
  onSwipeStart(event) {
    console.log('Start swiping...', event);
  }

  onSwipeMove(position, event) {
    console.log(`Moved ${position.x} pixels horizontally`, event);
    console.log(`Moved ${position.y} pixels vertically`, event);
  }

  onSwipeEnd(event) {
    console.log('End swiping...', event);
  }
  render () {
    console.log(this.props.messageData)
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
