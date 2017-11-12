import React from 'react';
import airbnblogo from './airbnbLogo.svg';
import {Header, Logo, Input, Link, Nav} from './styled';

export default function () {
  return (
    <Header>
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <Logo src={airbnblogo} alt="Airbnb" />
            <Input placeholder="Try &quot;Miami&quot;" />
            <Nav>
              <Link href="/">Become a host</Link>
              <Link href="/">Help</Link>
              <Link href="/">Sign Up</Link>
              <Link href="/">Log In</Link>
            </Nav>
          </div>
        </div>
      </div>
    </Header>
  );
}
