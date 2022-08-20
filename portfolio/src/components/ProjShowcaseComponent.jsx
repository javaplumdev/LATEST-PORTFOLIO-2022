import React from 'react';
import { ProjBlueEllipse, designplarform } from '../data/Data';
import { styles } from '../constant/index';
import { Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade';

const ProjShowcaseComponent = () => {
	return (
		<section style={{ marginTop: '5em' }} className="proj-parent">
			<img
				src={ProjBlueEllipse}
				alt={ProjBlueEllipse}
				className="proj-blue-ellipse"
			/>
			<Fade cascade>
				<div
					className={`container flex-wrap ${styles.justifyContentBetween} ${styles.alignItemsCenter}`}
				>
					<img
						src={designplarform}
						alt={designplarform}
						className="img-fluid"
					/>
					<div style={{ maxWidth: '560px' }} className="my-5">
						<h1 className="fs-1">
							Thrilled to be able to present this assortment of{' '}
							<span className="generation-text">exquisite</span> works to you.
						</h1>
						<p className="p-text lead">
							Built with care and attention to detail, these stunning websites
							are crafted with love.
						</p>
						<a href="/projects">
							<button className="buttons">See all</button>
						</a>
					</div>
				</div>
			</Fade>
		</section>
	);
};

export default ProjShowcaseComponent;
