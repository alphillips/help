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
    const helperText = 'Select Automatic if you like your certificate(s) to be issued after submission or Hold if you would like to preview your certificate before it is issued. Certificate Preview can be performed after submission on the REX details screen.';
    return (
      <div>
      <h1>Help</h1>

      <h2>Basic Help</h2>
        <p>The following options impact when your certificate(s) are generated.
        <Help
          helperText={helperText} />
        </p>

      <h2>Custom help label</h2>
      <p>The following options impact when your certificate(s) are generated.
        <Help
          helperText={helperText}
          helperLabel="Tell me more..." />
      </p>
      </div>
    )
  }
}

render(<Demo/>, document.querySelector('#demo'))
