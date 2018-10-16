import React from 'react';

export class UserName extends React.Component {

  render() {
    return (
      <div className="nameContainer">
        <span className="nameContainer__givenName">{this.props.givenName}</span>
        <span className="nameContainer__userName">@{this.props.userName}</span>
        <span className="nameContainer__date">{this.props.tweetDate}</span>
      </div>
    );
  }
}
