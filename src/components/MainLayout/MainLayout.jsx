import React from 'react';
import { Outlet } from 'react-router-dom';
import style from './MainLayout.module.scss';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

export default function MainLayout() {
	return (
		<div className={style.wrapper}>
			<Header className={style.header} />
			<Outlet className={style.content} onClick={() => console.log('ssss')} />
			<Footer className={style.footer} />
		</div>
	);
}
