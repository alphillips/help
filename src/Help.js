import React from 'react';

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
		let labelClass = this.props.labelClass || '';
    let bodyClass = this.props.bodyClass || '';
    return (
      <span className="buttonControl-group">
        <a onClick={() => this.onClick()} href="javascript:void(0)" className={labelClass} aria-controls="t1" aria-expanded="true" >
          <span>{label}</span>
        </a>
        {this.state.helpVisible ?
          <span className={"topic " + bodyClass} role="region" tabIndex="0" data-id="help-description">
            <span>{this.props.text}</span>
          </span>
          : null}
      </span>
			<div className="buttonControl-clear"></div>
    );
  }
}

export default Help;
