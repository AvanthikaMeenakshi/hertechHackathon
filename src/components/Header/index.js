import React from 'react';

class Header extends React.Component {
    render() {
      return (
        <header className="site-header">
          <div className="container">
          	<div className="row">
          		<div className="col-xs-4 col-sm-3">
          			<div className="site-branding">
          				<h1 className="site-title">
          					<a href="/" title="findlancer" rel="home">
          						<img src="images/logo-2.png" alt="logo" />
          					</a>
          				</h1>
          			</div>
          		</div>
          		<div className="col-xs-8 col-sm-9">
          			<nav id="site-navigation">
          				<ul id="main-navigation" className="nav navbar-right">
                    <li><a href="/">Home</a></li>
                    <li><a href="/findtalents">Find Talent</a></li>
                    <li><a href="/findjobs">Find Work</a></li>
          				</ul>
          			</nav>
          		</div>
          	</div>
          </div>
          <div className="mobile-navigation">
          	<nav id="site-navigation-mobile" className="navbar">
          		<div className="container">
          			<div id="navbar-mobile" className="navbar-collapse collapse">
          				<div className="navbar-nav">
          					<ul className="nav">
          						<li><a href="/">Home</a></li>
          						<li><a href="/findtalents">Find Talent</a></li>
          						<li><a href="/findjobs">Find Work</a></li>
          						<li><a href="/login">Log In</a></li>
          					</ul>
          				</div>
          			</div>
          		</div>
          	</nav>
          </div>
        </header>
      );
    }
}

export default Header;
