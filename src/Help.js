import React from 'react';

import './ui-kit.css'
import './help.css';

class Help extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
      helpVisible: false
    }
  }

  onClick() {
    this.setState({helpVisible: !this.state.helpVisible});
  }

  render() {
    let label = this.props.label || 'Help';
		let anchorClassName = this.props.anchorClassName || '';
    let contentClassName = this.props.contentClassName || '';
    return (
      <span className="buttonControl-group">
        <a onClick={() => this.onClick()} href="javascript:void(0)" className={anchorClassName} aria-controls="t1" aria-expanded="true" >
          <span>{label}</span>
        </a>
        {this.state.helpVisible ?
          <span className={"topic " + contentClassName} role="region" tabIndex="0" data-id="help-description">
            <span>{this.props.text}</span>
          </span>
          : null}
      </span>
    );
  }
}

export default Help;
