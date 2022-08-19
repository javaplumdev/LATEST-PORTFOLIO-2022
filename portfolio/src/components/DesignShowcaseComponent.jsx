import React from 'react';
import { designcard, designEllipise } from '../data/Data';
import { styles } from '../constant/index';
import Fade from 'react-reveal/Fade';

const DesignShowcaseComponent = () => {
	return (
		<Fade cascade>
			<section style={{ marginTop: '10em' }}>
				<img
					src={designEllipise}
					alt={designEllipise}
					className="proj-ellipse"
				/>
				<div
					className={`container flex-wrap ${styles.justifyContentBetween} ${styles.alignItemsCenter}`}
				>
					<div style={{ maxWidth: '530px' }} className="my-5">
						<h1 className="fs-1">
							Designing these top notch{' '}
							<span className="generation-text">modern</span> user interfaces.
						</h1>
						<p className="p-text lead">
							The beauty of a website is in its detail.
						</p>
						<a href="/projects">
							<button className="buttons">See all</button>
						</a>
					</div>
					<img src={designcard} alt={designcard} className="img-fluid" />
				</div>
			</section>
		</Fade>
	);
};

export default DesignShowcaseComponent;
