import React from 'react';
import { logo } from '../data/Data';
import { GrInstagram } from 'react-icons/gr';
import { FaFacebook } from 'react-icons/fa';
import { AiFillLinkedin } from 'react-icons/ai';

const Footer = () => {
	return (
		<section>
			<div className="footer py-5" style={{ marginTop: '10em' }}>
				<div className="container">
					<div className=" d-flex">
						<div>
							<img src={logo} alt={logo} />

							<p className="footer-p lead ">
								Aspiring front-end web developer that creates nice looking
								projects.
							</p>
						</div>
						<div className="mx-5 text-white">
							Links
							<ul className="footer-p list-unstyled ">
								<li>Home</li>
								<li>About</li>
								<li>Projects</li>
								<li>Contact</li>
							</ul>
						</div>
					</div>
					<hr></hr>
					<div className=" d-flex justify-content-between flex-wrap">
						<p className="footer-p">
							Copyright © 2021 My portfolio. All Rights Reserved.
						</p>
						<div>
							<GrInstagram size="20" />
							<FaFacebook className="mx-3" size="20" />
							<AiFillLinkedin size="20" />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Footer;
