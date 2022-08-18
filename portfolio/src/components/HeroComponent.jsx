import React from 'react';
import { heroplatform, heroBlueEllipse, heroRedEllipse } from '../data/Data';
import { styles } from '../constant/index';
import { Container } from 'react-bootstrap';

const HeroComponent = () => {
	return (
		<section>
			<img
				src={heroBlueEllipse}
				alt={heroBlueEllipse}
				className="hero-ellipse"
			/>
			<img
				src={heroRedEllipse}
				alt={heroRedEllipse}
				className="hero-red-ellipse"
			/>
			<Container>
				<div className={`d-md-flex align-items-center justify-content-center`}>
					<div style={{ maxWidth: '560px' }} className="nav mb-5 text-sm-right">
						<h1 className="display-1 my-3" style={{ lineHeight: '1' }}>
							Building next{' '}
							<span className="generation-text fw-bold">generation</span>{' '}
							websites.
						</h1>
						<p className="lead p-text d-none d-sm-block">
							I build user interfaces that are friendly and respectful. I use
							the latest web technologies and design solutions to solve business
							problems, but also build great looking websites.
						</p>
						<button className="buttons">Get started</button>
					</div>
					<div>
						<img src={heroplatform} alt={heroplatform} className="img-fluid" />
					</div>
				</div>
				<div
					className={`mt-5 flex-wrap align-items-center ${styles.justifyContentCenter}`}
				>
					<p className="mx-3">
						<span className="display-6 fw-bold">10+</span>{' '}
						<span className="generation-text fs-5">projects made</span>
					</p>

					<p className="mx-3">
						<span className="display-6 fw-bold">5000+</span>{' '}
						<span className="generation-text fs-5">lines of code </span>
					</p>
				</div>
			</Container>
		</section>
	);
};

export default HeroComponent;
