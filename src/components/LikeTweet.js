import React from 'react';
import icondefault from '../assets/heart--hollow.png';
import iconfull from '../assets/heart--full.png';

export class LikeTweet extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.onClick();
  }

  render() {
    return (
      <div className="tweetActions__like" onClick={this.handleClick}>
        <img src={this.props.hasLiked ? iconfull : icondefault} alt="like this tweet" />
        <span className="tweetActions__likeNumber">{this.props.likes}</span>
      </div>
    )
  }
}
