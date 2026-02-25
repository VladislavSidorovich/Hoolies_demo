import React from 'react';
import style from './OurTeam.module.scss';
import frame from '../../assets/team-page/frame.svg';
import ruslan from '../../assets/team-page/ruslan.jpg';
import fabio from '../../assets/team-page/fabio.jpg';
import sasha from '../../assets/team-page/sasha.jpg';
import shah from '../../assets/team-page/shah.png';
import me from '../../assets/team-page/me.jpg';
import founder from '../../assets/team-page/founder.svg';
import founder_seo from '../../assets/team-page/founder-seo.svg';
import founder_co from '../../assets/team-page/co-founder.svg';
import advisor from '../../assets/team-page/advisor.svg';

export default function OurTeam() {
	return (
		<div className={style.team_block}>
			<div className={style.person_block}>
				<div className={style.person_avatar}>
					<img src={frame} alt='frame' className={style.frame} />
					<img src={ruslan} alt='ruslan photo' className={style.photo_ruslan} />
				</div>
				<div className={style.person_describe}>
					<div className={style.person_role}>
						<img src={founder} alt='role' />
					</div>

					<p className={style.person_text}>
						<p className={style.person_name}>Russel B</p>
						Project Manager and Crypto Enthusiast, over 15 years of web2 experience and over 3 years
						in Web3 experience.
					</p>

					<a href='https://twitter.com/HoolieVerse' className={style.person_link} target='_blank'>
						Twitter
					</a>
				</div>
			</div>
			<div className={style.person_block}>
				<div className={style.person_avatar}>
					<img src={frame} alt='frame' className={style.frame} />
					<img src={fabio} alt='fabio photo' className={style.photo_fabio} />
				</div>
				<div className={style.person_describe}>
					<div className={style.person_role}>
						<img src={founder_co} alt='role' />
					</div>

					<p className={style.person_text}>
						<p className={style.person_name}>Alex P</p>
						Artist and Project mastermind with 15-years of experience
					</p>

					<a
						href='https://www.behance.net/alexandrpiskold'
						className={style.person_link}
						target='_blank'
					>
						behance.net
					</a>
				</div>
			</div>
			<div className={style.person_block}>
				<div className={style.person_avatar}>
					<img src={frame} alt='frame' className={style.frame} />
					<img src={sasha} alt='sasha photo' className={style.photo_sasha} />
				</div>
				<div className={style.person_describe}>
					<div className={style.person_role}>
						<img src={founder_seo} alt='role' />
					</div>
					<p className={style.person_text}>
						<p className={style.person_name}>Fabio M</p>
						Digital Marketing Expert with over 8 years of experience in Web2 and over 3 years within
						Web3. Doodles Holder and Alpha Caller, occasionally book writer and University Lecturer.
					</p>

					<a href='https://twitter.com/fabsverseNFT' className={style.person_link} target='_blank'>
						Twitter
					</a>
				</div>
			</div>
			<div className={style.person_block}>
				<div className={style.person_avatar}>
					<img src={frame} alt='frame' className={style.frame} />
					<img src={shah} alt='advisor photo' className={style.photo_shah} />
				</div>
				<div className={style.person_describe}>
					<div className={style.person_role}>
						<img src={advisor} className={style.advisor} alt='role' />
					</div>
					<p className={style.person_text}>
						<p className={style.person_name}>Shah</p>
						Web-3 expert and ranking #1 on NFT Inspect for the Twitter Profile Global Reach.
						<p>BAYC-holder.</p>
					</p>
					<a href='https://twitter.com/shahh' className={style.person_link} target='_blank'>
						Twitter
					</a>
				</div>
			</div>
			<div className={style.person_block}>
				<div className={style.person_avatar}>
					<img src={frame} alt='frame' className={style.frame} />
					<img src={me} alt='my photo' className={style.photo_me} />
				</div>
				<div className={style.person_describe}>
					<div className={style.person_role}>
						<img src={founder_co} alt='role' />
					</div>
					<p className={style.person_text}>
						<p className={style.person_name}>Evgen K</p>
						Programmer, Technical Specialist, over 8 years of web2 experience and over 3 years in
						Web3 experience.
					</p>
					<a className={style.person_link} href='mailto:info@hoolies.io'>
						info@hoolies.io
					</a>
				</div>
			</div>
		</div>
	);
}
