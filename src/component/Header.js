// import '../App.css'
import React, {useEffect} from 'react';
import 'boxicons';
function Header () {
	
	const showMenu = (toogleID, navID) => {
		const toggle = document.getElementById(toogleID);
		const nav = document.getElementById(navID);
		if(toggle && nav) {
			toggle.addEventListener('click', () => {
				nav.classList.toggle('show');
			})
		}
	}

	

	useEffect(() => {
		showMenu('nav-toggle', 'nav-menu');
	})
	

  return (
		<header className="l-header">
			<nav className="nav bd-grid">

				<div>
					<a href="#Home" className="nav__logo">ENVY</a>
				</div>

				<div className="nav__menu" id="nav-menu">
					<ul className="nav__list">
						<li className="nav__item"><a className="nav__link" href="#Home">Home</a></li>
						<li className="nav__item"><a className="nav__link" href="#About">About</a></li>
						<li className="nav__item"><a className="nav__link" href="#Skills">Skills</a></li>
						<li className="nav__item"><a className="nav__link" href="#Projects">Projects</a></li>
						<li className="nav__item"><a className="nav__link" href="#Projects">Contact us</a></li>
					</ul>
				</div>

				<div className="nav__toggle" id="nav-toggle">
					<box-icon color="white" name='menu'></box-icon>
				</div>
			</nav>
		</header>
  );
}

export default Header;