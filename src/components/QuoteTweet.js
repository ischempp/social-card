import React from 'react';
import icon from '../assets/quote.png'

export class QuoteTweet extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.onClick();
  }

  render() {
    return (
      <div className="tweetActions__quote" onClick={this.handleClick}>
        <img src={icon} alt="quote this tweet" />
        <span className="tweetActions__quoteNumber">{this.props.quotes}</span>
      </div>
    )
  }
}
