import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

import style from './Header.module.scss';
import logo from '../../assets/header/logo.png';
import discord from '../../assets/header/icons8-discord-501.png';
import twitter from '../../assets/header/icons8-твиттерх-50 (2).png';
import opensea from '../../assets/header/icons8-youtube-64.png';
import instagram from '../../assets/header/icons8-instagram-50.png';
import tg from '../../assets/header/icons8-телеграм-50.png';
import dex from '../../assets/header/dex.svg';
import dextools from '../../assets/header/dextools_logo_full_dark.svg';
import preMint from '../../assets/header/premint.svg';

const smoothScroll = (el) => {
	el.scrollIntoView({ behavior: 'smooth', block: 'start' });
};

const Menu = ({ className }) => {
	return (
		<div className={className}>
			<ul>
				<li>
					<HashLink to='/#home' scroll={(el) => smoothScroll(el)}>
						HOME
					</HashLink>
				</li>
				<li>
					<HashLink to='/#about' scroll={(el) => smoothScroll(el)}>
						WHAT IS HOOLIES
					</HashLink>

				</li>
				<li>
					<HashLink to='/#faq' scroll={(el) => smoothScroll(el)}>
						FAQ
					</HashLink>

				</li>


				<li>
					<NavLink to='/roadmap'>ROAD MAP</NavLink>

				</li>
				<li>
					<a href='mailto:info@hoolies.io'>CONTACT US</a>
				</li>
			</ul>
		</div>
	);
};

const SocialMenu = ({ className }) => {
	return (
		<div className={className}>
			<a href='#' target='_blank'>
				<img src={discord} alt='discord' />
			</a>
			<a href='#' target='_blank'>
				<img src={twitter} alt='twitter' />
			</a>
			<a href='#' target='_blank'>
				<img src={instagram} alt='instagram' />
			</a>
			<a href='#'>
				<img src={tg} alt='opensea' />
			</a>

			<a href='#' target='_blank'>
				<img src={opensea} alt='opensea' />
			</a>
{/**			<a href='https://www.instagram.com/hooliesnft/' target='_blank'>
				<img src={dex} alt='instagram' />
			</a>
			<a href='https://www.instagram.com/hooliesnft/' target='_blank'>
				<img src={dextools} alt='instagram' />
			</a> */}
		</div>
	);
};

const MenuBurgerContent = ({ isMenuContentVisible, setIsMenuActive }) => {
	return (
		<div
			className={
				isMenuContentVisible
					? `${style.nav_menu_burger_content}`
					: `${style.nav_menu_burger_content} ${style.no_visible}`
			}
		>
			<ul>
				<li>
					<NavLink to='/' onClick={() => setIsMenuActive(false)}>
						HOME
					</NavLink>
				</li>
				<li>
					<HashLink
						to='/#faq'
						onClick={() => setIsMenuActive(false)}
						scroll={(el) => smoothScroll(el)}
					>
						FAQ
					</HashLink>
				</li>
				<li>
					<HashLink
						to='/#about'
						onClick={() => setIsMenuActive(false)}
						scroll={(el) => smoothScroll(el)}
					>
						ABOUT
					</HashLink>
				</li>
				<li>
					<NavLink to='/roadmap' onClick={() => setIsMenuActive(false)}>
						ROAD MAP
					</NavLink>
				</li>

				<li>
					<a href='mailto:info@hoolies.io' onClick={() => setIsMenuActive(false)}>
						CONTACT US
					</a>
				</li>
			</ul>
			<SocialMenu className={style.social_menu} />
		</div>
	);
};

export default function Header() {
	const [isMenuContentVisible, setIsMenuActive] = useState(false);
	const [isHideNav, setIsHideNav] = useState(false);
	const clientWidth = document.body.clientWidth;

	const handleUpButton = () => {
		setIsHideNav(false);
	};

	const handleScroll = () => {
		if (clientWidth < 500) {
			setIsHideNav(false);
		} else {
			if (window.scrollY === 0 || window.scrollY <= 100) {
				setIsHideNav(false);
			} else {
				setIsHideNav(true);
			}
		}

		if (window.scrollY > 1300) {
			setIsScrolled(true);
		  } else {
			setIsScrolled(false);
		  }
	};

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	const [isScrolled, setIsScrolled] = useState(false); // Для отслеживания прокрутки

	
  
	useEffect(() => {
	  window.addEventListener("scroll", handleScroll);
	  return () => window.removeEventListener("scroll", handleScroll);
	}, []);
  
	

	return (
		<header className={style.header}>
			<div className={style.hideMenu}>
			<div
				className={`${style.miniMenuBorder} ${
					isScrolled ? style.miniMenuBorderScrolled : ""
				}`}
				onClick={handleUpButton}
				>
				<div
					className={`${style.miniMenu} ${
					isScrolled ? style.miniMenuScrolled : ""
					}`}
				>
					<div className={style.title}>MENU</div>
					<div className={style.menu_icon}>
					<span />
					</div>
				</div>
				</div>
		{/* 	<div className={style.premintLink}>
					<a href='https://www.premint.xyz/hoolies/' target='_blank'>
						<img src={preMint} alt='premint' />
					</a>
				</div>*/}	
			</div>

			<nav className={`${style.nav_bar} ${isHideNav ? style.hide : ""} ${isScrolled ? style.nav_bar_Scrolled : ""}`}>
	{/* 			<div className={style.nav_bar_logo}>
					<NavLink to='/'>
						<img src={logo} alt='Logo' />
					</NavLink>
				</div>*/}
		{/* 		<div className={style.mobile_menu_premint}>
					<NavLink to='https://www.premint.xyz/hoolies/' target='_blank'>
						<div>WHITE LIST RAFFLE</div>
					</NavLink>
				</div>*/}
				<Menu className={`${style.nav_bar_menu} ${isScrolled ? style.nav_bar_menuScrolled : ""}`}  />
				<SocialMenu className={style.nav_bar_menu_social} />
				<div className={style.mobile_menu_btn}>
					<div
						className={style.mobile_menu_title}
						onClick={() => setIsMenuActive(!isMenuContentVisible)}
					>
						MENU
					</div>

					<div
						className={
							isMenuContentVisible ? style.nav_bar_menu_close_btn : style.nav_bar_menu_burger_btn
						}
						onClick={() => setIsMenuActive(!isMenuContentVisible)}
					>
						<span />
					</div>
				</div>
			</nav>
			<MenuBurgerContent
				isMenuContentVisible={isMenuContentVisible}
				setIsMenuActive={setIsMenuActive}
			/>
		</header>
	);
}
