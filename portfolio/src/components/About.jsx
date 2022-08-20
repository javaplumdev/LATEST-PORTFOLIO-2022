import React from 'react';
import { heroBlueEllipse, heroRedEllipse } from '../data/Data';
import { Row, Col } from 'react-bootstrap';
import { TechImages } from '../data/Data';
import { Link } from 'react-router-dom';
import { GrInstagram } from 'react-icons/gr';
import { FaFacebook } from 'react-icons/fa';
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai';

const About = () => {
	return (
		<>
			<section>
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
				<div className="container">
					<div>
						<h3 className="display-3 fw-bold">About</h3>
						<p className="fs-3">
							Hi! I'm Charlito Mecarez Jr., a aspiring front-end developer who
							specializing in developing solutions with JavaScript, React, and
							Web designs.
						</p>
					</div>
					<div className="mt-5">
						<Row xs={{ gutterX: 5 }}>
							<Col className="mb-5">
								<h4>Contacts</h4>
								<p className="p-text fs-5">
									Please feel free to{' '}
									<Link to="/contacts" className="text-white">
										email
									</Link>{' '}
									me with any questions or requests, and I'll respond as quickly
									as possible.
								</p>

								<a
									href="https://www.instagram.com/javaplum__/"
									target="_blank"
									className="text-white"
								>
									<GrInstagram size="30" />
								</a>

								<a
									href="https://www.facebook.com/charlitomecarez/"
									target="_blank"
									className="text-white"
								>
									<FaFacebook className="mx-3" size="30" />
								</a>
								<a
									href="https://www.linkedin.com/in/charlito-mecarez-jr-5565431b4/"
									target="_blank"
									className="text-white"
								>
									<AiFillLinkedin size="30" />
								</a>
								<a
									href="https://github.com/javaplumdev"
									target="_blank"
									className="text-white mx-3"
								>
									<AiFillGithub size="30" />
								</a>
							</Col>
							<Col md={8}>
								<p className="p-text fs-5">
									Hi! I'm a fourth-year student from the Philippines. a
									self-taught developer with a foundational understanding of
									both web design and programming. I was motivated and propelled
									forward to create many ideas and designs by my curiosity in
									this area. I've offered programming assistance to a few
									individuals and assisted a group of independent programmers in
									rebuilding an application. In my spare time, I wrote
									programming and came up with web design ideas.
								</p>
								<div className="my-5">
									<h4>Technologies</h4>
									<div style={{ maxWidth: '560px' }}>
										{TechImages.map((item) => {
											return (
												<img
													key={item.id}
													src={item.image}
													alt={item.image}
													width="115px"
													className="img-fluid"
												/>
											);
										})}
									</div>
								</div>

								<div>
									<h4>Achievements and Accomplishments</h4>
									<ul>
										<li>Eastern Valley School Best in Computer, Batch '17</li>
										<li>
											ABE International Business College Best in Programming,
											Batch '19
										</li>
										<li>DICT Python Programming Essentials Course</li>
										<li>
											Proficient in Web Fundamentals in Village88 and HackerHero
										</li>
									</ul>
								</div>
							</Col>
						</Row>
					</div>
				</div>
			</section>
		</>
	);
};

export default About;
