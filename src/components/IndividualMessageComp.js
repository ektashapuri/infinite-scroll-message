import React, {Component} from 'react';
import moment from 'moment'

export default class IndividualMessageComp extends Component {

  render () {
    const {author, id, content, updated} = this.props.messageData;
    let lastUpdated = new Date(updated);
    return(
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
    )
  }
}
