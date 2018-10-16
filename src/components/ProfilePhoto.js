import React from 'react'

export class ProfilePhoto extends React.Component {

  render() {
    return <img src={this.props.src} alt="profile" />;
  }
}
