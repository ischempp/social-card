import React from 'react';
import icon from '../assets/quote.png'

export class QuoteTweet extends React.Component {

  render() {
    return (
      <div className="tweetActions__quote">
        <img src={icon} alt="quote this tweet" />
        <span className="tweetActions__quoteNumber">{this.props.quotes}</span>
      </div>
    )
  }
}
