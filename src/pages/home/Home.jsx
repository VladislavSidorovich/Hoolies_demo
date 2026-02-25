import React from 'react';
import style from './Home.module.scss';
import MovieBlock from '../../components/MovieBlock/MovieBlock';
import LegendBlock from '../../components/LegendBlock/LegendBlock';
import TraitsBlock from '../../components/TraitsBlock/TraitsBlock';
import FaqBlock from '../../components/FaqBlock/FaqBlock';

export default function Home() {
	return (
		<div className={style.home_page}>
			<MovieBlock />
			<LegendBlock />
			<TraitsBlock />
			<FaqBlock />
		</div>
	);
}
