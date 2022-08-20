import React from 'react';
import { heroplatform, heroBlueEllipse, heroRedEllipse } from '../data/Data';
import { styles } from '../constant/index';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const HeroComponent = () => {
	return (
		<section className=" mb-5">
			<img
				src={heroBlueEllipse}
				alt={heroBlueEllipse}
				className="hero-ellipse w-100"
			/>
			<img
				src={heroRedEllipse}
				alt={heroRedEllipse}
				className="hero-red-ellipse"
			/>
			<Container>
				<div className={`d-md-flex align-items-center justify-content-center`}>
					<div
						style={{ maxWidth: '560px' }}
						className="animate__animated animate__fadeInDown nav mb-5 text-sm-right"
					>
						<h1 className="display-1 my-3" style={{ lineHeight: '1' }}>
							Creating{' '}
							<span className="generation-text fw-bold">cutting-edge</span>{' '}
							websites.
						</h1>
						<p className="lead p-text d-none d-sm-block">
							I create considerate and amiable user interfaces. I create
							beautiful websites while simultaneously solving business
							challenges with the most recent web technology.
						</p>
						<Link to="/contacts">
							<button className="buttons">Get started</button>
						</Link>
					</div>
					<div className="animate__animated animate__fadeIn">
						<img src={heroplatform} alt={heroplatform} className="img-fluid" />
					</div>
				</div>
				<div
					className={`my-5 flex-wrap align-items-center ${styles.justifyContentCenter}`}
				>
					<p className="mx-3">
						<span className="display-6 fw-bold">10+</span>{' '}
						<span className="generation-text fs-5">projects made</span>
					</p>

					<p className="mx-3">
						<span className="display-6 fw-bold">2000+</span>{' '}
						<span className="generation-text fs-5">lines of codes</span>
					</p>
					<p className="mx-3">
						<span className="display-6 fw-bold">10+</span>{' '}
						<span className="generation-text fs-5">design templates</span>
					</p>
				</div>
			</Container>
		</section>
	);
};

export default HeroComponent;
