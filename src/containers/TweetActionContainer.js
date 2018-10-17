import React from 'react';
import {QuoteTweet} from '../components/QuoteTweet';
import {LikeTweet} from '../components/LikeTweet';
import {Retweet} from '../components/Retweet';

export class TweetActionContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quotes: 0,
      likes: 0,
      retweets: 0,
      hasQuoted: false,
      hasLiked: false,
      hasRetweeted: false
    };

    this.updateQuotes = this.updateQuotes.bind(this);
    this.updateLikes = this.updateLikes.bind(this);
    this.updateRetweets = this.updateRetweets.bind(this);
  }

  updateQuotes(e) {
    if (this.state.hasQuoted) {
      return;
    } else {
      this.setState({
        quotes: this.state.quotes + 1,
        hasQuoted: true
      });
    }
  }

  updateLikes(e) {
    if (this.state.hasLiked) {
      this.setState({
        likes: this.state.likes - 1,
        hasLiked: false
      })
    } else {
      this.setState({
        likes: this.state.likes + 1,
        hasLiked: true
      });
    }
  }

  updateRetweets(e) {
    if (this.state.hasRetweeted) {
      return;
    } else {
      this.setState({
        retweets: this.state.retweets + 1,
        hasRetweeted: true
      });
    }
  }

  render() {
    return (
      <div className="tweetActions">
        <QuoteTweet quotes={this.state.quotes} onClick={this.updateQuotes} />
        <LikeTweet likes={this.state.likes}
          onClick={this.updateLikes}
          hasLiked={this.state.hasLiked} />
        <Retweet retweets={this.state.retweets} onClick={this.updateRetweets} />
      </div>
    )
  }
}
