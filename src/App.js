import Jumbotron from './components/jumbotron/Jumbotron';
import GlobalStyle from './globalStyles';
import jumboData from './fixtures/jumbotron';

function App() {
	return (
		<div className="App">
			<GlobalStyle />
			<Jumbotron.Container>
				{jumboData.map((item) => (
					<Jumbotron key={item.id} direction={item.direction}></Jumbotron>
				))}
			</Jumbotron.Container>
			<br />
			<br />
			<br />
			<h1>Test</h1>
		</div>
	);
}

export default App;
