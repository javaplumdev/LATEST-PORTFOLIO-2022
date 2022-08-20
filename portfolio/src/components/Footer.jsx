import React from 'react';
import { logo } from '../data/Data';
import { GrInstagram } from 'react-icons/gr';
import { FaFacebook } from 'react-icons/fa';
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai';

const Footer = () => {
	return (
		<section>
			<div className="footer py-5" style={{ marginTop: '5em' }}>
				<div className="container">
					<div className=" d-flex">
						<div>
							<img src={logo} alt={logo} />

							<p className="footer-p lead ">
								Front-end web developer aspirant who produces attractive
								projects.
							</p>
						</div>
						<div className="mx-5 text-white">
							Links
							<ul className="footer-p list-unstyled ">
								<li className="p-text">
									<a href="/" className="text-decoration-none text-white">
										Home
									</a>
								</li>
								<li className="p-text">
									<a href="/about" className="text-decoration-none text-white">
										About
									</a>
								</li>
								<li className="p-text">
									<a
										href="/projects"
										className="text-decoration-none text-white"
									>
										Projects
									</a>
								</li>
								<li className="p-text">
									<a
										href="/contacts"
										className="text-decoration-none text-white"
									>
										Contacts
									</a>
								</li>
							</ul>
						</div>
					</div>
					<hr></hr>
					<div className=" d-flex justify-content-between flex-wrap">
						<p className="footer-p">
							Copyright © 2021 Charlito Mecarez Jr. All Rights Reserved.
						</p>
						<div>
							<a
								href="https://www.instagram.com/javaplum__/"
								target="_blank"
								className="text-white"
							>
								<GrInstagram size="20" />
							</a>
							<a
								href="https://www.facebook.com/charlitomecarez/"
								target="_blank"
								className="text-white"
							>
								<FaFacebook className="mx-3" size="20" />
							</a>
							<a
								href="https://www.linkedin.com/in/charlito-mecarez-jr-5565431b4/"
								target="_blank"
								className="text-white"
							>
								<AiFillLinkedin size="20" />
							</a>

							<a
								href="https://github.com/javaplumdev"
								target="_blank"
								className="text-white mx-3"
							>
								<AiFillGithub size="20" />
							</a>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Footer;
