import React from 'react';
import { ProjBlueEllipse, designplarform } from '../data/Data';
import { styles } from '../constant/index';

const ProjShowcaseComponent = () => {
	return (
		<section style={{ marginTop: '5em' }} className="proj-parent">
			<img
				src={ProjBlueEllipse}
				alt={ProjBlueEllipse}
				className="proj-blue-ellipse"
			/>
			<div
				className={`container flex-wrap ${styles.justifyContentBetween} ${styles.alignItemsCenter}`}
			>
				<img src={designplarform} alt={designplarform} className="img-fluid" />
				<div style={{ maxWidth: '560px' }} className="my-5">
					<h1 className="fs-1">
						Excited to be able to bring you this collection of{' '}
						<span className="generation-text">beautiful</span> works.
					</h1>
					<p className="p-text lead">
						Built with care and attention to detail, these stunning websites are
						crafted with love.
					</p>
					<button className="buttons">See all</button>
				</div>
			</div>
		</section>
	);
};

export default ProjShowcaseComponent;