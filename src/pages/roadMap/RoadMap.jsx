import React, { useState } from 'react';
import { motion } from 'framer-motion';
import style from './RoadMap.module.scss';

import background from '../../assets/road-map-page/pc_bg.svg';
import backgroundMobile from '../../assets/road-map-page/mobile_bg.svg';
import voice from '../../assets/road-map-page/voice.png';
import icon from '../../assets/road-map-page/icon.png';
import icon2 from '../../assets/road-map-page/icon2.png';

const data = [
	{
		title: 'THE HOOLIES BRAND GOES TO WEB 3.0 AND FORMING HOOLIEVERSE',
		img_url: '../../assets/road-map-page/block_1.png',
		describe: [
			{
				status: true,
				text: 'Unique and colourful Hoolies are born to live in Blockchain.',
			},
			{
				status: true,
				text: 'Community & Charity Wallet is created and funded.',
			},
			{
				status: true,
				text: 'Marketing model has been developed.',
			},
			{
				status: true,
				text: 'Brand strategic plan has been developed.',
			},
			{
				status: false,
				text: 'Whitelist forming (contests & tasks winners, partners, frends).',
			},
			{
				status: false,
				text: 'Minting process.',
			},
		],
	},
	{
		title: 'THE HOOLIES BRAND PROMOTION',
		img_url: '../../assets/road-map-page/block_2.png',
		describe: [
			{
				status: false,
				text: 'Collaboration with other brands.',
			},
			{
				status: false,
				text: 'Hoolies merchant.',
			},
			{
				status: false,
				text: 'Exclusive Hoolies table-game.',
			},
			{
				status: false,
				text: 'Special Treasury for brand promotion and Hoolies collection support (forming from NFTs sales and NFTs resale comission).',
			},
			{
				status: false,
				text: 'Worldwide events.',
			},
		],
	},
	{
		title: 'COMMUNITY BUILDING, GROWTH AND SUPPORT',
		img_url: '../../assets/road-map-page/block_3.png',
		describe: [
			{
				status: false,
				text: 'Airdrops & gifts for Hoolies holders.',
			},
			{
				status: false,
				text: 'DAO system: Each Hoolie allows its owner to vote for experiences and activations paid for by the Hoolies Community Treasury.',
			},
			{
				status: false,
				text: 'Owning Hoolie is like having a membership pass to an exclusive club. Which gives access to high-profile events, concerts, sport events and celebrities!',
			},
			{
				status: false,
				text: 'Exclusive digital comic stories.',
			},
		],
	},
	{
		title: 'EXPANDING  HOOLIES ECOSYSTEM',
		img_url: '../../assets/road-map-page/block_4.png',
		describe: [
			{
				status: false,
				text: 'A Second collection featuring a new character will join the HOOLIES ecosystem.',
			},
			{
				status: false,
				text: 'New features will be available for Hoolies NFT holders.',
			},
		],
	},
	{
		title: 'THE FUTURE…',
		img_url: '../../assets/road-map-page/block_5.png',
		describe: [
			{
				status: false,
				text: 'Everything just started and future discoveries are yet to come.',
			},
			{
				status: false,
				text: 'We are thinking about Hoolies network GAME with its own cryptosystem in the Hooliverse',
			},
		],
	},
];

const ModalWindow = ({ isModalShow, numberBlock }) => {
	return (
		<div className={isModalShow ? `${style.pop_block} ${style.active}` : `${style.pop_block}`}>
			<ul className={style.pop_block_content}>
				{data[numberBlock].describe.map((item, index) => (
					<li key={index}>
						{item.status ? <img src={icon2} alt='icon' /> : <img src={icon} alt='icon' />}
						<div className={style.text}>{item.text}</div>
					</li>
				))}
			</ul>
			<img src={voice} alt='img voice' className={style.voice} />
		</div>
	);
};

const BlocksOnMap = ({ toggleModalShow }) => {
	return (
		<div>
			{data.map((item, index) => (
				<motion.div
					key={index}
					className={`${style.block} ${style['block_' + (index + 1)]}`}
					animate={{
						rotate: 2,
					}}
					transition={{
						delay: 0 + index,
						duration: 1.5,
						repeat: Infinity,
						repeatType: 'mirror',
					}}
					onClick={() => toggleModalShow(index)}
				>
					<div className={style.content}>{item.title}</div>
					<img
						src={require(`../../assets/road-map-page/block_${index + 1}.png`)}
						alt='img block number'
						className={style.img_number}
					/>
				</motion.div>
			))}
		</div>
	);
};

export default function RoadMap() {
	const [isModalShow, setIsModalShow] = useState(false);
	const [numberBlock, setNumberBlock] = useState(0);

	const toggleModalShow = (index) => {
		setNumberBlock(index);
		setIsModalShow(!isModalShow);
	};

	const onClickHideModal = (event) => {
		if (isModalShow) {
			setIsModalShow(false);
		}
	};

	return (
		<div className={style.road_map_page} onClick={() => onClickHideModal()}>
			<img className={style.pc_version} src={background} alt='background' />
			<img className={style.mobile_version} src={backgroundMobile} alt='background' />
			<div className={style.container}>
				<ModalWindow isModalShow={isModalShow} numberBlock={numberBlock} />
				<BlocksOnMap isModalShow={isModalShow} toggleModalShow={toggleModalShow} />
			</div>
		</div>
	);
}
