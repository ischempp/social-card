import React from 'react';
import {UserName} from '../components/UserName';
import {TweetText} from '../components/TweetText';
import {WebpageData} from '../components/WebpageData';

export class TweetContainer extends React.Component {

  render() {
    return (
      <div className="tweetContainer">
        <UserName
          givenName={this.props.givenName}
          userName={this.props.userName}
          tweetDate={this.props.tweetDate}/>
        <TweetText tweetText={this.props.tweetText} />
        <WebpageData
          webpagePhoto={this.props.webpagePhoto}
          webpageTitle={this.props.webpageTitle}
          webpageDescription={this.props.webpageDescription}
          webpageSite={this.props.webpageSite} />
      </div>
    )
  }
}
