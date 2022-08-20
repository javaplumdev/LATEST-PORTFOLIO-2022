import React from 'react';
import { heroBlueEllipse, heroRedEllipse } from '../data/Data';
import { GrInstagram } from 'react-icons/gr';
import { FaFacebook } from 'react-icons/fa';
import { AiFillLinkedin } from 'react-icons/ai';

const ContactsPage = () => {
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
				<div className="p-3 mt-3 ">
					<h3 className="display-3 fw-bold">Contacts</h3>
					<p className="fs-3">Get in touch, let's talk.</p>
					<div className="d-flex justify-content-between flex-wrap">
						<div>
							<p className="p-text">Feel free to send me an email</p>
							<p>carenzdelarosa@gmail.com</p>
						</div>
						<div>
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
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ContactsPage;
