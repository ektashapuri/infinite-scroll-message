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
