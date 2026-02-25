import React, { useState, useEffect, useRef } from "react";
import style from './MovieBlock.module.scss';
import { motion } from 'framer-motion';
import Eye from './Eye';
import title from '../../assets/main-page/movie-block/title.png';
import roadMap from '../../assets/main-page/movie-block/roadmap.png';
import preMint from '../../assets/main-page/movie-block/premint.svg';
import background_pc from '../../assets/main-page/movie-block/bg_pc.svg';
import light_pc from '../../assets/main-page/movie-block/light_pc.svg';
import background_mobile from '../../assets/main-page/movie-block/bg_mobile.svg';
import light_mobile from '../../assets/main-page/movie-block/light_mobile.svg';
import rightFrame from '../../assets/main-page/movie-block/right-frame.png';
import leftFrame from '../../assets/main-page/movie-block/left-frame.png';

import { NavLink } from 'react-router-dom';

export default function MovieBlock() {
	const availableScreenWidth = window.screen.availWidth;

	const containerRef = useRef(null);

	// Отслеживание движения мыши внутри контейнера
	const handleMouseMove = (event) => {
	  const container = containerRef.current;
	  if (!container) return;
  
	  const rect = container.getBoundingClientRect();
	  const centerX = rect.left + rect.width / 2;
	  const centerY = rect.top + rect.height / 2;
  
	  // Вычисляем угол движения мыши относительно центра контейнера
	  const angle = Math.atan2(event.clientY - centerY, event.clientX - centerX);
  
	  // Максимальное смещение зрачка (11% от размера глаза)
	  const pupilOffset = Math.min(rect.width, rect.height) * 0.11;
  
	  // Целевая позиция зрачка
	  const pupilX = Math.cos(angle) * pupilOffset;
	  const pupilY = Math.sin(angle) * pupilOffset;
  
	  // Обновляем позицию глаз
	  if (container.dataset.eyeRef) {
		container.dataset.eyeRef.current.targetPositionRef.current = { x: pupilX, y: pupilY };
	  }
	};

	return (
		<div className={style.movie_block_video} id='home'>
			<div className={style.header_movie_block}>
				<div className={style.title}>
					<NavLink to={'/'}>
						<motion.img
							src={title}
							alt='Hoolies'
							initial={{ y: -500 }}
							animate={{ y: 0 }}
							transition={{ delay: 1, ease: 'anticipate' }}
						/>
					</NavLink>
				</div>

				<div className={style.road_map}>
					<NavLink to={'roadmap'}>
						<motion.img
							src={roadMap}
							alt='Road Map'
							initial={{ y: -500 }}
							animate={{ y: 0 }}
							transition={{ delay: 1, ease: 'anticipate' }}
						/>
					</NavLink>
				</div>
			</div>

			<img className={style.background_pc} src={background_pc} alt='hollies' />
			<motion.img
				className={style.light_pc}
				src={light_pc}
				alt="hollies"
				animate={{
					opacity: [0.7, 1, 0.7], // Прозрачность меняется плавно
					scale: [1, 0.999, 1], // Изображение слегка увеличивается и возвращается
				}}
				transition={{
					duration: 1.5, // Длительность одного цикла
					repeat: Infinity, // Бесконечный цикл
					ease: "easeInOut", // Плавный переход
				}}
				/>
			<Eye  />
			<img className={style.background_mobile} src={background_mobile} alt='hollies' />
			<motion.img
				className={style.light_mobile}
				src={light_mobile}
				alt="hollies"
				animate={{
					opacity: [0.7, 1, 0.7], // Прозрачность меняется плавно
					scale: [1, 0.999, 1], // Изображение слегка увеличивается и возвращается
				}}
				transition={{
					duration: 3, // Длительность одного цикла
					repeat: Infinity, // Бесконечный цикл
					ease: "easeInOut", // Плавный переход
				}}
			/>

				<div className={style.block_container}  onMouseMove={handleMouseMove}>
				<div className={style.transporent_block}></div>
				<div className={style.transporent_block_bottom}></div>
				<motion.img
					className={style.leftFrame}
					src={leftFrame}
					alt="left frame"
					initial={{ x: availableScreenWidth / 3, opacity: 0 }}
					animate={{ x: 0, opacity: 1 }}
					transition={{ duration: 1.5, delay: 2, ease: 'anticipate' }}
				/>
		
					<motion.iframe
						className={style.video}
						src="https://www.youtube.com/embed/zGq6tnnnS0I"
						title="YouTube video player"
						allowFullScreen
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ delay: 3 }}
					></motion.iframe>
	
				<motion.img
					className={style.rightFrame}
					src={rightFrame}
					alt="right frame"
					initial={{ x: -availableScreenWidth / 3, opacity: 0 }}
					animate={{ x: 0, opacity: 1 }}
					transition={{ duration: 1.5, delay: 2, ease: 'anticipate' }}
				/>
			</div>
		</div>
	);
}
