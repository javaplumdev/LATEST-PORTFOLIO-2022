import React, { useContext } from 'react';
import {
	ProjectsData,
	heroBlueEllipse,
	heroRedEllipse,
	DesignProjects,
} from '../data/Data';
import { Link } from 'react-router-dom';
import Slide from 'react-reveal/Slide';
import { v4 as uuidv4 } from 'uuid';
import { ContextVariable } from '../context/context-config';

const ProjectsPage = () => {
	const { setIsProjectRendered, isProjectRendered } =
		useContext(ContextVariable);

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

			<div className="container">
				<h3 className="display-3 fw-bold m-3">
					{isProjectRendered ? 'Projects' : 'Designs'}
				</h3>
				<div className="my-3">
					<button
						className={`${
							isProjectRendered ? 'buttons' : 'buttons-outlined'
						} mx-3`}
						onClick={() => setIsProjectRendered(true)}
					>
						Projects
					</button>
					<button
						className={`${isProjectRendered ? 'buttons-outlined' : 'buttons'}`}
						onClick={() => setIsProjectRendered(false)}
					>
						Designs
					</button>
				</div>
				<Slide top cascade>
					<div className="d-flex flex-wrap mt-3">
						{isProjectRendered === true
							? ProjectsData.map((item) => {
									return (
										<div
											key={item.projectID}
											className="glass-card m-3"
											style={{ maxWidth: '320px' }}
										>
											<a
												href={`${item.link}`}
												target="_blank"
												className="text-decoration-none text-white"
											>
												<img src={item.image} className="project w-100" />
												<p className="p-text">{item.projectName}</p>
											</a>
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
							  })
							: DesignProjects.map((item) => {
									return (
										<div
											key={item.id}
											className="m-3"
											style={{ maxWidth: '320px' }}
										>
											<img src={item.image} className="project w-100" />
											<p className="p-text mt-3">{item.name}</p>
										</div>
									);
							  })}
					</div>
				</Slide>
			</div>
		</section>
	);
};

export default ProjectsPage;
