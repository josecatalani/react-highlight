import React from 'react';
import ReactDOM from 'react-dom';
import withHighlight from '../dist/index';

const HelloWorld = () => (
	<div>teste</div>
)

const WrappedComponent = withHighlight(HelloWorld);

class App extends React.Component { 
	render() {
		return <WrappedComponent/>
	}
}

ReactDOM.render(<App/>, document.querySelector('#root'));