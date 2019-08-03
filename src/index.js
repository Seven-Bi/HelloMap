import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom';
import MyMap from './MyMap.js';
import MyMsg from './MyMsg.js';
import './index.css';




class MyView extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			curMsg: 'Hi, there.'
		};
	}

	handleShowMsg(msg) {
		this.setState({
			curMsg: msg
		})
	}

	render() {
		return (
			<div id= "view" className="col">
				<MyMap myMsg={this.state.curMsg}/>

				<div id="liner"></div>

				<MyMsg onSubmit={this.handleShowMsg.bind(this)}/>			
			</div>
		);
	}
}



// ========================================



ReactDOM.render(
	<MyView/>,
	document.getElementById('root'),	
);

