import React from 'react';
import { Col, Row, Container } from 'react-bootstrap';
import { RecentProjects } from '../data/Data';
import { v4 as uuidv4 } from 'uuid';
import Slide from 'react-reveal/Slide';

const Designs = () => {
	return (
		<section style={{ marginTop: '5em' }}>
			<Container>
				<h1>Recent projects</h1>
				<Slide top cascade>
					<div className="my-3 d-flex flex-wrap justify-content-center">
						{RecentProjects.map((item) => {
							return (
								<div
									key={item.projectID}
									className="glass-card p-3"
									style={{ maxWidth: '360px', margin: '5px' }}
								>
									<img src={item.image} className="project w-100" />
									<p>{item.projectName}</p>
									<div className="d-flex flex-wrap">
										{item.tech.map((tech) => {
											return (
												<small key={uuidv4()} className="tech-card m-1 p-1">
													{tech}
												</small>
											);
										})}
									</div>
								</div>
							);
						})}
					</div>
				</Slide>
			</Container>
		</section>
	);
};

export default Designs;
