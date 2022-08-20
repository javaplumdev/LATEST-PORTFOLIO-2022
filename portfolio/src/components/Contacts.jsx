import React from 'react';

const Contacts = () => {
	return (
		<section className="contact-parent">
			<div className="container" style={{ marginTop: '5em' }}>
				<hr />
				<div className="glass-card container mt-5 p-4">
					<h1>Together, let's create something incredible!</h1>
					<p className="p-text">
						I can’t wait to meet and work with amazing people. <br></br>
					</p>
					<a href="/contacts">
						<button className="buttons">Contacts</button>
					</a>
				</div>
			</div>
		</section>
	);
};

export default Contacts;
