import React from 'react';
import style from './Preloader.module.scss';

import logo from '../../assets/preloader/logo.png';

export default function Preloader() {
	return (
		<div className={style.preloader}>
			<div className={style.loading}>
				<img src={logo} alt='logo' />
			</div>
		</div>
	);
}
