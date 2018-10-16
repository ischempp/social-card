import React from 'react';

export class TweetText extends React.Component {

  render() {
    return <div className="tweetContainer__text">{this.props.tweetText}</div>;
  }
}
