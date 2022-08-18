import './App.css';
import { designcard, heroBlueEllipse, heroRedEllipse } from './data/Data';
import { Container } from 'react-bootstrap';
import NavbarComponent from './components/NavbarComponent';
import HeroComponent from './components/HeroComponent';
import TechComponent from './components/TechComponent';
import ProjShowcaseComponent from './components/ProjShowcaseComponent';
import Projects from './components/Projects';
import DesignShowcaseComponent from './components/DesignShowcaseComponent';
import Designs from './components/Designs';
import Contacts from './components/Contacts';
import Footer from './components/Footer';

function App() {
	document.body.classList.add('background');

	return (
		<div className="App text-white">
			<Container>
				<NavbarComponent />
			</Container>
			<HeroComponent />
			<TechComponent />
			<ProjShowcaseComponent />
			<Projects />
			<DesignShowcaseComponent />
			<Designs />
			<Contacts />
			<Footer />
		</div>
	);
}

export default App;
