import React, {Component} from 'react'
import {render} from 'react-dom'

import Help from '../../src'

class Demo extends Component {

  constructor(props) {
    super(props)
    this.state = {
      value:''
    }
  }
  onChange = (field) => {
    return (value) => {
      this.setState((prevState, props) => ({
        [field]: value
      }))
    }
  }

  render() {
    const text = 'Select Automatic if you like your certificate(s) to be issued after submission or Hold if you would like to preview your certificate before it is issued. Certificate Preview can be performed after submission on the REX details screen.';
    const htmltext = '<p>Select Automatic if you like your certificate(s) to be issued after submission or Hold if you would like to preview your certificate before it is issued. Certificate Preview can be performed after submission on the REX details screen.</p>';
    return (
      <div>
        <h1>Help</h1>

        <h2>Basic Help</h2>

        <p>The following options impact when your certificate(s) are generated.
          <Help text={text} />
        </p>

        <h2>Custom help label</h2>
        <p>The following options impact when your certificate(s) are generated.
          <Help
            text={text}
            label="Tell me more..."
            labelClass="small-des"
            bodyClass="body-des" />
        </p>

        <h2>help next to input</h2>
        <input className="input-object" label="hello" />
        <Help
          text={htmltext}
          label="Tell me more..."
          labelClass="small-des"
          bodyClass="body-des" />

        <div className="btn-group">
          <button className="uikit-btn uikit-btn--tertiary" onClick={this.handleBack}>Back</button>
          <button className="uikit-btn main-btn" onClick={this.handleNext}>Next</button>
        </div>
      </div>
    )
  }
}

render(<Demo/>, document.querySelector('#demo'))
