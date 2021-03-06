// import '../App.css'
import React, {useEffect, useState} from 'react';
import 'boxicons';
import Contact from './Contact';


function Header () {
	
	const [show, setModal] = useState();
  const showModal = () => setModal(true);
	const hideModal = () => setModal(false);

	const showMenu = (toogleID, navID) => {
		const toggle = document.getElementById(toogleID);
		const nav = document.getElementById(navID);
		if(toggle && nav) {
			toggle.addEventListener('click', () => {
				nav.classList.toggle('show');
			})
		}
	}
	
	const linkAction = () => {
		const navMenu = document.getElementById('nav-menu');
		navMenu.classList.remove('show');
	}

	// function scrollActive(){
	// 	const scrollY = window.pageYOffset

	// 	sections.forEach(current =>{
	// 		const sectionHeight = current.offsetHeight
	// 		const sectionTop = current.offsetTop - 50;
	// 		sectionId = current.getAttribute('id')

	// 		if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
	// 			document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active')
	// 		}else{
	// 			document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active')
	// 		}
	// 	})
	// }


	useEffect(() => {
		showMenu('nav-toggle', 'nav-menu');
		const navLinks = document.querySelectorAll('.nav__link');
		// const sections = document.querySelectorAll('section[id]');
		// window.addEventListener('scroll', scrollActive);
		navLinks.forEach(n => n.addEventListener('click', linkAction));
	})
	

  return (
		<header className="l-header">
			<nav className="nav bd-grid">

				<div>
					<a href="#Home" className="nav__logo">ENVY</a>
				</div>

				<div className="nav__menu" id="nav-menu">
					<ul className="nav__list">
						<li className="nav__item"><a className="nav__link active" href="#Home">Home</a></li>
						<li className="nav__item"><a className="nav__link" href="#About">About</a></li>
						<li className="nav__item"><a className="nav__link" href="#Skills">Skills</a></li>
						<li className="nav__item"><a className="nav__link" href="#Projects">Projects</a></li>
						<li className="nav__item"><a className="nav__link contactd__button" href="#Contact" onClick={showModal} >Contact us</a></li>
					</ul>
				</div>

				<div className="nav__toggle" id="nav-toggle">
					<box-icon color="white" name='menu'></box-icon>
				</div>
			</nav>
			<Contact show={show} handleClose={hideModal} >
				<p>sss</p>
			</Contact>
		</header>
  );
}

export default Header;