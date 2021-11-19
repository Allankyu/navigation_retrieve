import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Book from './Book';
import Favorites from './favorites';
import Meetup from './meetup';
import Navbar from './navbar';
import Posts from './Posts';

function App() {
	const user = 'ALLAN';
	return (
		<div className="App">
			<>
				<BrowserRouter>
					<Navbar />
					<Switch>
						<Route path="/home" exact>
							<Meetup />
						</Route>

						<Route path="/course">
							<Favorites />
						</Route>
						<Route path="/posts">
							<Posts />
						</Route>
						<Route path="/book">
							<Book />
						</Route>
					</Switch>
				</BrowserRouter>
			</>
		</div>
	);
}
export default App;
