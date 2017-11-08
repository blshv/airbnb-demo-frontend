import React from 'react';
import logo from './airbnbLogo.svg';

export default function () {
	return (
		<header className="header">
			<img src={logo} className="logo" alt="Airbnb" />
			<div className="search">
				<input placeholder="Try Miami "></input>
			</div>
			<nav>
				<a href="/">Become a host</a>
				<a href="/">Help</a>
				<a href="/">Sign Up</a>
				<a href="/">Log In</a>
			</nav>
		</header>
    );
}