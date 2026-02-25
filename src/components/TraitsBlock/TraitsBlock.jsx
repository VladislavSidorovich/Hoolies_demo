import React from 'react';
import style from './TraitsBlock.module.scss';
import { motion } from 'framer-motion';

import title from '../../assets/main-page/traits-block/title.png';
import emotionsTitle from '../../assets/main-page/traits-block/emotions-title.png';
import itemsTitle from '../../assets/main-page/traits-block/items-title.png';
import stylesTitle from '../../assets/main-page/traits-block/styles-title.png';
import emotions from '../../assets/main-page/traits-block/emotions.gif';
import items from '../../assets/main-page/traits-block/items.gif';
import styles from '../../assets/main-page/traits-block/styles.gif';

const animation = {
	hidden: {
		opacity: 0,
	},
	visible: {
		opacity: 1,
		transition: { delay: 0.5 },
	},
	visibleForBlock: {
		opacity: 1,
		transition: { delay: 1 },
	},
};

export default function TraitsBlock() {
	return (
		<div className={style.traits_block}>
			<motion.div
				className={style.traits_block_title}
				initial='hidden'
				whileInView='visible'
				viewport={{ amount: 0.25, once: true }}
				variants={animation}
			>
				<img src={title} alt='Hoolies have many traits' />
			</motion.div>
			<motion.div
				className={style.traits_block_content}
				initial='hidden'
				whileInView='visibleForBlock'
				viewport={{ amount: 0.25, once: true }}
				variants={animation}
			>
				<div className={style.traits_item}>
					<div className={style.traits_title}>
						<img src={emotionsTitle} alt='EMOTIONS' />
					</div>
					<img className={style.traits_item_img} src={emotions} alt='items traits' />
				</div>
				<div className={style.traits_item}>
					<div className={style.traits_title}>
						<img src={itemsTitle} alt='ITEMS' />
					</div>
					<img className={style.traits_item_img} src={items} alt='emotions traits' />
				</div>
				<div className={style.traits_item}>
					<div className={style.traits_title}>
						<img src={stylesTitle} alt='STYLES' />
					</div>
					<img className={style.traits_item_img} src={styles} alt='styles traits' />
				</div>
			</motion.div>
		</div>
	);
}
