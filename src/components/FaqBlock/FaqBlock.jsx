import React, { useState } from 'react';
import style from './FaqBlock.module.scss';
import { motion } from 'framer-motion';
import EyeHorse from './EyeHorse';
import EyeMan from './EyeMan';
import downIcon from '../../assets/main-page/faq-block/down-icon.png';
import upIcon from '../../assets/main-page/faq-block/up-icon.png';
import title from '../../assets/main-page/faq-block/title.png';
import background from '../../assets/main-page/faq-block/background.svg';
import island from '../../assets/main-page/faq-block/island.svg';
import person from '../../assets/main-page/faq-block/person.png';

const data = [
	{
		title: 'WHAT IS HOOLIES?',
		answer:
			"Hoolies collection is a unique set in PFPs style, living as ERC-721 tokens on the Ethereum blockchain and hosted on IPFS. It's randomly generated from colorful and unique hand-drawn traits such as varieties of items, emotions, styles and background colours.",
	},
	{
		title: 'WHICH BENEFITS GIVE ME HOOLIES?',
		answer:
			'Ownership of Hoolies NFT gives access to: \n Community that serves to build meaningful long-term connections through adventure, collaboration, creating and dreaming! \n DAO system: Each Hoolie allows its owner to vote for experiences and activations paid for by the Hoolies Community Treasury. Reliable Long-term project with low risks. \n Airdrops & Gifts: Weekly Contests, Quests, Giveaways. A membership pass to an exclusive club.',
	},
	{
		title: 'DO I HAVE IP RIGHTS TO MY HOOLIE?',
		answer: `Yes, holders have IP rights to any Hoolie they own in the Hoolieverse ecosystem.`,
	},
	{
		title: 'WHEN DO THE HOOLIES COLLECTION MINT AND WHICH PRICE?',
		answer:
			'Mint price & date of the Hoolies Collection will be available later. Anyway, whitelisted will mint at half price.',
	},
	{
		title: 'CAN I USE THE HOOLIES LOGO FOR MY BUSINESS?',
		answer:
			'No, you can not use any Hoolies logos in your business. You can contact us about collaboration.',
	},
	{
		title: 'THERE IS A TRADEMARKED LOGO ON MY HOOLIE, CAN I STILL USE IT FOR IP ENDEAVORS?',
		answer:
			'Yes! If the token originally contains a trademark logo you may use the image in its entirety for your business endeavors. However, you may not use the logo as its own individual image.',
	},
];

const animation = {
	hidden: {
		opacity: 0,
	},
	visible: (i) => ({
		opacity: 1,
		transition: {
			delay: i * 0.5,
		},
	}),
};

const QuestionBlock = () => {
	const [isAnswerShow, setAnswerShow] = useState(null);

	const toggleAnswerShow = (index) => {
		if (isAnswerShow === index) {
			return setAnswerShow(null);
		}
		setAnswerShow(index);
	};

	return (
		<div className={style.faq_block_question}>
			{data.map((question, index) => {
				return (
					<motion.div
					className={style.question_answer}
					key={`question_${index}`}
					whileInView="visible"
					viewport={{ amount: 0.4, once: true }}
					variants={animation}
					initial="hidden"
					custom={index}
				  >
					<div className={style.question_content} onClick={() => toggleAnswerShow(index)}>
					  <p
						className={
						  isAnswerShow === index
							? `${style.question_title} ${style.active}`
							: style.question_title
						}
					  >
						{question.title}
					  </p>
					  {isAnswerShow === index ? (
						<img src={upIcon} alt="up icon" className={style.question_icon} />
					  ) : (
						<img src={downIcon} alt="down icon" className={style.question_icon} />
					  )}
					</div>
					<div
					  className={
						isAnswerShow === index
						  ? `${style.answer_content} ${style.collapse}`
						  : style.answer_content
					  }
					>
					  <p className={style.answer_text}>{question.answer}</p>
					</div>
				  </motion.div>
				);
			})}
		</div>
	);
};

export default function FaqBlock() {
	return (
		<div className={style.faq_block} id='FAQ'>
			<img className={style.background} src={background} alt='background' />
			<img className={style.person} src={person} alt='person' />
			<EyeHorse/>
			<div className={style.faq_block_content} id='faq'>
				<img className={style.title} src={title} alt='FAQ' />
				<QuestionBlock />
			</div>
			{/* <div className={style.footer_content}>
				<div className={style.border}>
					<div className={style.text_section}>
						<div className={style.border}>
							<p className={style.copyright}>
								&copy; {new Date().getFullYear()} Hoolies. All rights reserved.
							</p>
							<p className={style.disclaimer}>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla commodo ipsum non felis
								gravida, eget dignissim neque bibendum. Using our services is subject to the rules and
								risks outlined above. For assistance, contact us at <a href="mailto:info@hoolies.io">info@hoolies.io</a>.
							</p>
						</div>
					</div>
				</div>
		
{/*
				<div className={style.docs_section}>
					<a
						href="https://gitbook.io"
						target="_blank"
						rel="noopener noreferrer"
						className={style.docs_button}
					>
						DOCS
					</a>
				</div>
			</div>
			</div>*/}
			<img className={style.island} src={island} alt='background' />
		</div>
	);
}
