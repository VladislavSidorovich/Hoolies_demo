import React from 'react';
import style from './Footer.module.scss';
import discord from '../../assets/header/icons8-discord-50.png';
import twitter from '../../assets/header/icons8-твиттерх-30.png';
import opensea from '../../assets/header/icons8-youtube-64b.png';
import instagram from '../../assets/header/icons8-instagram-64.png';
import tg from '../../assets/header/icons8-телеграм-96.png';

const FooterSocialMenu = () => {
	return (
		<div className={style.social_menu}>
			<a href="#" target="_blank" rel="noopener noreferrer">
				<img src={discord} alt="Discord" />
			</a>
			<a href="#" target="_blank" rel="noopener noreferrer">
				<img src={twitter} alt="Twitter" />
			</a>
			<a href="#" target="_blank" rel="noopener noreferrer">
				<img src={instagram} alt="Instagram" />
			</a>
			<a href="#"  target="_blank" rel="noopener noreferrer">
				<img className='tg' src={tg} alt="Telegram" />
			</a>
			<a href="#" target="_blank" rel="noopener noreferrer">
				<img src={opensea} alt="YouTube" />
			</a>
		</div>
	);
};

export default function Footer() {
	return (
		<div className={style.footer}>

	

			{/* Социальные сети */}
			<FooterSocialMenu />
			<h2>© 2024 BY HOOLIES. ALL RIGHTS RESERVED!</h2>
		</div>
	);
}