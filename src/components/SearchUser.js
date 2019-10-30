import React, { Component } from 'react';

class SearchUser extends Component {

	state = {
		username: ''
	}

	onSub = (e) => {
		e.preventDefault();
		this.props.userNameMet(this.state.username);
		this.props.submitMet();
	}

	onInputChange = (e) => this.setState({ username: e.target.value });

	render() {
		return (
			<form onSubmit={this.onSub} style={formContainer}>
				<input 
					type="text"
					name="username"
					style={inp}
					value={this.state.username}
					placeholder="Enter Github username here . . . "
					onChange={this.onInputChange}
				/>
				<input 
					type="submit"
					value="Search User Profile"
					style={btn}
				/>
			</form>
		)
	}
}

export default SearchUser;

const formContainer = {
	width: '100%',
	height: '100px',
	marginTop: '10px',
	background: '#90ff90',
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'space-around',
	alignItems: 'center'
}

const inp = {
	width: '80%',
	height: '40%',
	border: 'none',
	borderLeft: '8px solid #aa9090',
	fontSize: '18px',
}

const btn = {
	width: '180px',
	height: '40%',
	border: 'none',
	backgroundColor: '#2b2b52',
	color: 'white',
	fontFamily: 'Arial',
	fontWeight: 'bolder',
	fontSize: '18px',
	borderBottom: '3px solid #aa9090'
}