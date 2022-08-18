import './App.css';
import { designcard, heroBlueEllipse, heroRedEllipse } from './data/Data';
import { Container } from 'react-bootstrap';
import NavbarComponent from './components/NavbarComponent';
import HeroComponent from './components/HeroComponent';

function App() {
	document.body.classList.add('background');

	return (
		<div className="App text-white">
			<Container>
				<NavbarComponent />
			</Container>
			<HeroComponent />
		</div>
	);
}

export default App;
