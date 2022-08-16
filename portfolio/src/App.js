import './App.css';
import { designcard } from './data/Data';
import { Container } from 'react-bootstrap';

function App() {
	document.body.classList.add('background');

	return (
		<div className="App">
			<Container>
				<p>Hi</p>
				<img src={designcard} alt={designcard} />
			</Container>
		</div>
	);
}

export default App;
