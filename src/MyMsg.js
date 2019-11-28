import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import './index.css';




class MyMsg extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			myMsg: ''
		};
	}

	handleMessageChange(event) {
		this.setState({
			myMsg: event.target.value
		})
	}

	handleSubmit() {
		if (this.props.onSubmit) {
			this.props.onSubmit(this.state.myMsg)
		}
	}

	render() {
		return (
			<div id="input">
				<div className="input-group mb-3">
					<input type="text" className="form-control" placeholder="My Message" aria-label="My Message" 
					aria-describedby="basic-addon2" onChange={this.handleMessageChange.bind(this)} />

					<div className="input-group-append">
						<button className="btn btn-primary" type="button" onClick={this.handleSubmit.bind(this)}>Show Message</button>
					</div>
				</div>
			</div>
		);
	}
}

export default MyMsg
