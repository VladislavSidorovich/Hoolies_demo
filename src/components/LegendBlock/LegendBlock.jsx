import React, { useState } from 'react';
import style from './LegendBlock.module.scss';
import { motion } from 'framer-motion';

import flash1 from '../../assets/main-page/legend-block/flash1.png';
import flash2 from '../../assets/main-page/legend-block/flash2.png';
import flash3 from '../../assets/main-page/legend-block/flash3.png';
import flash4 from '../../assets/main-page/legend-block/flash4.png';
import titleAbout from '../../assets/main-page/legend-block/title-about.png';
import titleStory from '../../assets/main-page/legend-block/title-story.png';

const animation = {
	hidden: {
		opacity: 0,
	},
	visible: {
		opacity: 1,
		transition: { delay: 0.3 },
	},
};

const variants = {
	open: { opacity: 1, y: 0, transition: { duration: 0.5 } },
	closed: { opacity: 0, y: '-100%', transition: { duration: 0.5 } },
};

const TextTheStory = ({ className }) => {
	return (
		<div className={className}>
			<p>
				Hoolie scratched their head, or whatever they had that resembled a head, and wondered, "Why
				aren't these Earthlings having the time of their lives? Don't they know they're sitting on a
				goldmine of comedic opportunities?" They seemed stuck in a vortex of loneliness, scrolling
				through their gadgets while the hilarity of nature went unnoticed.
			</p>
			<br />
			<p>
				Determined to inject laughter back into their lives, Hoolie embarked on a mission to spread
				mirth and bring the art of meme-making to Earth. Armed with a collection of rubber chickens
				and an encyclopedic knowledge of internet humor, Hoolie set out to befriend the Earthlings
				and teach them the ways of the memeiverse.
			</p>
			<br />
			<p>
				Hoolie organized spontaneous dance-offs in shopping malls, where even the grumpiest of
				Earthlings couldn't resist busting a move. They introduced an army of giggling kittens to
				office buildings, turning dreary meetings into uncontrollable fits of laughter. Hoolie even
				convinced a few squirrels to engage in epic acorn battles, providing entertainment that
				rivaled any blockbuster movie.
			</p>
			<br />
			<p>
				As the Earthlings embraced Hoolie's meme magic, laughter spread like wildfire across the
				planet. People started trading memes instead of insults, turning conflicts into epic
				roasting sessions. Wars were replaced with absurd dance battles, and politicians settled
				their differences through meme competitions. The Earth became a giant playground of laughter
				and joy.
			</p>
			<br />
			<p>
				With every chuckle and every viral meme, the Earth transformed. Flowers bloomed with extra
				color, and even the birds in the sky started tweeting hilarious one-liners. The world had
				become a living, breathing meme, and Hoolie was the crowned king of laughter.
			</p>
			<br />
			<p>
				From that day forward, the Hoolieverse and Earth intertwined, creating a hilarious cosmic
				mash-up. Memes and pranks became a way of life, and the Earthlings reveled in the absurdity
				of it all. Hoolie's influence grew to legendary proportions, with people donning rainbow
				wigs and rubber chicken costumes to honor their meme master.
			</p>
		</div>
	);
};

export default function LegendBlock() {
	const [isShowFullStory, setIsShowFullStory] = useState(false);

	return (
		<div className={style.legend_blocks_container}>
			<div className={style.legend_blocks} id='about'>
				<motion.div
					className={style.legend_block_item}
					initial='hidden'
					whileInView='visible'
					viewport={{ amount: 0.3, once: true }}
					variants={animation}
				>
					<div className={style.title_block}>
						<img className={style.title} src={titleAbout} alt='abut hoolies' />
					</div>
					<div className={style.text}>
						<p>
							Yo, listen up! Let us drop some mad knowledge about Hoolies, the coolest crew of all
							time, cooked up by three epic pals.
						</p>
						<br />
						<p>
							Picture this: a mind-blowing collection of hand-drawn goodness, packed with a
							gazillion rad visual traits. We're talking rare characters, sick costumes, funky
							gadgets, and a palette bursting with more colors than a unicorn's dreams.
						</p>
						<br />
						<p>
							But here's the real deal fam. Each and every Hoolie is a straight-up unique NFT living
							its best life on the Ethereum blockchain. And guess what? Owning one opens the door to
							a vibrant community where you can forge mind-blowing connections, embark on epic
							adventures, team up for collaborations, and let your imagination soar like a majestic
							eagle!
						</p>
						<br />
						<p>
							Hold up, though! The Hoolieverse ain't done expanding dude. Brace yourself for a wild
							ride as new characters and their lovable Frens keep popping up like mushrooms on a
							pizza. Get ready to dive headfirst into a realm of pure awesomeness and infinite
							possibilities, fellow meme lover! Let's go!
						</p>

						<img className={style.flash1} src={flash1} alt='flash' />
						<img className={style.flash2} src={flash2} alt='flash' />
					</div>
				</motion.div>
				<motion.div
					className={style.legend_block_item}
					initial='hidden'
					whileInView='visible'
					viewport={{ amount: 0.3, once: true }}
					variants={animation}
				>
					<div className={style.title_block}>
						<img className={style.title} src={titleStory} alt='story about hoolies' />
					</div>
					<div className={style.text}>
						<p>
							Once upon a time in the Hoolieverse, a dimension bursting with colors and laughter,
							there lived a character like no other—Hoolie, the ultimate meme master. Hoolie's
							existence was a never-ending party, where hilarious antics and joyful pranks were the
							norm. In this zany realm, aggression and wars were banned because who has time for
							that when you can pull epic pranks on your friends?
						</p>
						<br />
						<p>
							One day, while Hoolie was cruising through the cosmic expanse in a spaceship made
							entirely of rubber ducks, disaster struck. The ship crash-landed on Earth, and Hoolie
							emerged from the wreckage with a bewildered expression. Two-eyed Earthlings surrounded
							him, their faces buried in gadgets, completely unaware of the hysterical potential of
							their own planet.
						</p>

						<span
							className={style.collapse_full_story}
							onClick={() => {
								setIsShowFullStory(!isShowFullStory);
							}}
						>
							READ FULL STORY
						</span>

						<img className={style.flash3} src={flash3} alt='flash' />
						<img className={style.flash4} src={flash4} alt='flash' />
					</div>
				</motion.div>
			</div>

			<motion.div
				className={
					isShowFullStory
						? `${style.legend_block_full_story} ${style.collapse}`
						: style.legend_block_full_story
				}
				animate={isShowFullStory ? 'open' : 'closed'}
				variants={variants}
			>
				<TextTheStory className={style.legend_block_full_story_content} />

				<span
					className={style.collapse_full_story}
					onClick={() => {
						setIsShowFullStory(!isShowFullStory);
					}}
				>
					COLLAPSE
				</span>
			</motion.div>
		</div>
	);
}
