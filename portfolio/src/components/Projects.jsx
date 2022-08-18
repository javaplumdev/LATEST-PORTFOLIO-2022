import React from 'react';
import { Col, Row, Container } from 'react-bootstrap';
import { RecentProjects } from '../data/Data';
import { v4 as uuidv4 } from 'uuid';

const Projects = () => {
	return (
		<section style={{ marginTop: '5em' }}>
			<Container>
				<h1>Recent projects</h1>
				<Row className="my-3 g-2" xs={{ gutter: 1 }} md={{ gutter: 1 }}>
					{RecentProjects.map((item) => {
						return (
							<Col
								key={item.projectID}
								className="glass-card p-3"
								xs={12}
								md={4}
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
							</Col>
						);
					})}
				</Row>
			</Container>
		</section>
	);
};

export default Projects;
