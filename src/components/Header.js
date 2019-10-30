import React from 'react';
import { Link } from 'react-router-dom';

function Header() {

	const headerStyle = {
		width: '100%',
		height: '130px',
		backgroundColor: '#2b2b52',
		color: '#fff',
		textAlign: 'center'
	}

	return (
		<div style={headerStyle}>
			<h1>Github Profile Card</h1>
			<Link to="/">Home</Link> || <Link to="/about">About</Link>
		</div>
	)
}

export default Header;