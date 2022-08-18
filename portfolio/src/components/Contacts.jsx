import React from 'react';
import { ProjBlueEllipse } from '../data/Data';

const Contacts = () => {
	return (
		<section className="contact-parent">
			<div className="container" style={{ marginTop: '8em' }}>
				<hr />
				<div className="glass-card container mt-5 p-4">
					<h1>
						Let’s build something{' '}
						<span className="generation-text">amazing</span> together!
					</h1>
					<p className="p-text">
						I can’t wait to meet and work with amazing people.
					</p>
				</div>
			</div>
		</section>
	);
};

export default Contacts;
