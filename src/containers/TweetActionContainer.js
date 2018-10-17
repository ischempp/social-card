import React from 'react';
import {QuoteTweet} from '../components/QuoteTweet';

export class TweetActionContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quotes: 0,
      likes: 0,
      retweets: 0
    };
  }

  render() {
    return (
      <div className="tweetActions">
        <QuoteTweet quotes={this.state.quotes} />
      </div>
    )
  }
}
