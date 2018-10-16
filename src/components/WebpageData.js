import React from 'react';

export class WebpageData extends React.Component {

  render() {
    return (
      <div className="webpageData">
        <img className="webpageData__photo"
          src={this.props.webpagePhoto}
          alt={this.props.webpageDescription} />
        <div className="webpageData__textContainer">
          <div className="webpageData__title">{this.props.webpageTitle}</div>
          <div className="webpageData__description">{this.props.webpageDescription}</div>
          <div className="webpageData__site">{this.props.webpageSite}</div>
        </div>
      </div>
    );
  }
}
