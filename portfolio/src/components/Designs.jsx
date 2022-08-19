import React from 'react';
import { Container } from 'react-bootstrap';
import { RecentDesignProjects } from '../data/Data';
import { v4 as uuidv4 } from 'uuid';
import Slide from 'react-reveal/Slide';

const Designs = () => {
	return (
		<section style={{ marginTop: '5em' }}>
			<Container>
				<h1>Recent projects</h1>
				<Slide top cascade>
					<div className="my-3 d-flex flex-wrap justify-content-center">
						{RecentDesignProjects.map((item) => {
							return (
								<div
									key={item.id}
									className="p-3"
									style={{ maxWidth: '360px', margin: '5px' }}
								>
									<img src={item.image} className="project w-100" />
									<p className="p-text mt-3">{item.name}</p>
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
