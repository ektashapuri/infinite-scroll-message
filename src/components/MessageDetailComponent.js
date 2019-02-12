import React, {Component} from 'react';
import IndividualMessageComp from './IndividualMessageComp';
//import InfiniteScroll from 'react-infinite-scroller';

export default class MessageDetailComponent extends Component {

constructor(props){
  super(props)
  this.handleScroll = this.handleScroll.bind(this)
}

  componentDidMount(){
    window.addEventListener('scroll', this.handleScroll);
}

  componentWillUnmount() {
      window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll(event) {
    const { handleScroll, count, data } = this.props;
    //   let scrollTop = event.srcElement.body.scrollTop; //600px
    // //  let windowHeight = //1200px/2 <= scrolltop
    //   handleScroll(data.length + 10);
    const bottom = document.documentElement.scrollTop >= document.documentElement.offsetHeight/2;
    if (bottom) {
      handleScroll(data.length + 10);
    }
  }

  createMessageComp(){
    return this.props.data.map( (message, index) => {
      return (
        <IndividualMessageComp
          key={index}
          messageData={message}
        />
      )
    })
  }
  //onScroll={this.handleScroll}
  render() {
    return(
      <div
        className="detailComp"
        onScroll={this.handleScroll}
      >
        {this.createMessageComp()}
      </div>
    )
  }
}
