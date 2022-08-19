import './App.css';
import { Container } from 'react-bootstrap';
import NavbarComponent from './components/NavbarComponent';
import HeroComponent from './components/HeroComponent';
import TechComponent from './components/TechComponent';
import ProjShowcaseComponent from './components/ProjShowcaseComponent';
import Projects from './components/Projects';
import DesignShowcaseComponent from './components/DesignShowcaseComponent';
import Designs from './components/Designs';
import Contacts from './components/Contacts';
import ContactsPage from './components/ContactsPage';
import Footer from './components/Footer';
import ProjectsPage from './components/ProjectsPage';
import About from './components/About';
import { Route, Routes } from 'react-router-dom';
import { ContextFunction } from './context/context-config';

import 'animate.css';

function App() {
	document.body.classList.add('background');

	return (
		<ContextFunction>
			<div className="App text-white">
				<Container>
					<NavbarComponent />
				</Container>
				<Routes>
					<Route
						path="/"
						element={
							<>
								<HeroComponent />
								<TechComponent />
								<ProjShowcaseComponent />
								<Projects />
								<DesignShowcaseComponent />
								<Designs />
								<Contacts />
								<Footer />
							</>
						}
					/>
					<Route path="/projects" element={<ProjectsPage />} />
					<Route path="/contacts" element={<ContactsPage />} />
					<Route path="/about" element={<About />} />
				</Routes>
			</div>
		</ContextFunction>
	);
}

export default App;
