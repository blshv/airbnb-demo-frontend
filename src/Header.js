import React from 'react';
import logo from './airbnbLogo.svg';

export default function () {
	return (
		<header className="header">
			<div className="row">
				<img src={logo} className="logo" alt="Airbnb" />
			</div>
		</header>
    );
}