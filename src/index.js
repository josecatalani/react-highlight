import React from 'react';

const withHighlight = PassedComponent => {
  return class extends Component {
    state = {
      auth: false
    }
    render() {
      return (
        <PassedComponent {...this.state} {...this.props}/>
      )
    }
  }
}

export default withHighlight