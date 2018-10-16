import React, { Component } from 'react';
import profilePhoto from './assets/profilePhoto.jpg';
import './App.css';
import {ProfilePhoto} from './components/ProfilePhoto';
import {TweetContainer} from './containers/TweetContainer';
import {TweetActionContainer} from './containers/TweetActionContainer';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profilePhoto: profilePhoto,
      givenName: 'Ian Schempp',
      userName: 'ischempp',
      tweetDate: 'Oct 12',
      tweetText: 'Just trying out Twitter for the first time. w00t!',
      webpagePhoto: '',
      webpageTitle: 'A page worth sharing',
      webpageDescription: 'This is a great webpage. It is a good thing you shared it because now people will get to know about it.',
      webpageSite: 'example.com'
    }
  }
  render() {
    return (
      <div className="App">
        <ProfilePhoto src={this.state.profilePhoto} />
        <TweetContainer
          givenName={this.state.givenName}
          userName={this.state.userName}
          tweetDate={this.state.tweetDate}
          tweetText={this.state.tweetText}
          webpagePhoto={this.state.webpagePhoto}
          webpageTitle={this.state.webpageTitle}
          webpageDescription={this.state.webpageDescription}
          webpageSite={this.state.webpageSite} />
        <TweetActionContainer />
      </div>
    );
  }
}

export default App;
