import React, { Component } from 'react';

class InfoCard extends Component {

	render() {
		return (
			<div style={cardContainer}>
				<div style={picAndNameContainer}>
					<img src={ this.props.data.avatarURL } alt="" style={profileImg}/>
					<p style={{ color: '#fff', fontFamily: 'Arial', fontSize: '24px' }}><a href={ this.props.data.profileURL } target="_blank">{ this.props.data.name }</a></p>
				</div>
				<div style={infoData}>
					<div style={infoItem}>
						<div style={itemHeader}>Public Repos</div>
						<div style={itemData}>{ this.props.data.repos }</div>
					</div>
					<div style={infoItem}>
						<div style={itemHeader}>followers</div>
						<div style={itemData}>{ this.props.data.followers }</div>
					</div>
					<div style={infoItem}>
						<div style={itemHeader}>followings</div>
						<div style={itemData}>{ this.props.data.followings }</div>
					</div>
				</div>
			</div>
		)
	}
}

export default InfoCard;

const cardContainer = {
	width: '100%',
	backgroundColor: '#2b2b52',
	marginTop: '10px',
}

const picAndNameContainer = {
	width: '100%',
	height: '200px',
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'space-around',
	alignItems: 'center',
}

const profileImg = {
	width: '100px',
	height: '100px',
	border: '2px solid #fff',
	borderRadius: '50%'
}

const infoData = {
	width: '100%',
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'space-between',
	alignItems: 'center',
	paddingBottom: '20px'
}

const infoItem = {
	width: '50%',
	height: '100px',
	border: '3px #aa9090 solid',
	marginTop: '10px'
	// backgroundColor: '#881281'
}

const itemHeader = {
	width: '100%',
	height: '50%',
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	color: '#fff',
	fontSize: '20px'
}

const itemData = {
	width: '100%',
	height: '50%',
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	color: '#fff',
	fontSize: '20px',
}