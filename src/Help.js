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
    let helperLabel = this.props.helperLabel || 'Help';
    return (
      <span className="buttonControl-group">
        <a onClick={() => this.onClick()} href="javascript:void(0)" className="buttonControl anchor" aria-controls="t1" aria-expanded="true" data-helptext-toggle="">
          <span>{helperLabel}</span>
        </a>
        {this.state.helpVisible ?
          <span className="topic" role="region" tabIndex="0" data-id="help-description">
            <span>{this.props.helperText}</span>
          </span>
          : null}
      </span>
    );
  }
}

export default Help;
