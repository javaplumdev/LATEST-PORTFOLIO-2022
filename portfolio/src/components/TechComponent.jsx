import React from 'react';
import { TechImages } from '../data/Data';
import { styles } from '../constant/index';
import Fade from 'react-reveal/Fade';

const TechComponent = () => {
	return (
		<Fade cascade>
			<section
				className={`headline container flex-wrap ${styles.justifyContentBetween} ${styles.alignItemsCenter}`}
			>
				<div style={{ maxWidth: '530px' }}>
					<h1 className="my-3">
						Using these <span className="generation-text">technologies</span> to
						help build incredible projects.
					</h1>
					<p className="p-text" style={{ maxWidth: '490px' }}>
						Designing beautiful, usable and engaging pages, to executing all the
						tasks necessary to create a successful online presence.
					</p>
				</div>
				<div style={{ maxWidth: '420px' }}>
					{TechImages.map((item) => {
						return (
							<img
								key={item.id}
								src={item.image}
								alt={item.image}
								width="85px"
								className="img-fluid"
							/>
						);
					})}
				</div>
			</section>
		</Fade>
	);
};

export default TechComponent;
