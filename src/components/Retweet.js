import React from 'react';
import icon from '../assets/retweet.png'

export class Retweet extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.onClick();
  }

  render() {
    return (
      <div className="tweetActions__retweet" onClick={this.handleClick}>
        <img src={icon} alt="retweet this" />
        <span className="tweetActions__retweetNumber">{this.props.retweets}</span>
      </div>
    )
  }
}
