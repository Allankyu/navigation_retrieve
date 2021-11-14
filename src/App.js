import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Favorites from './favorites';
import Meetup from './meetup';
import Navbar from './navbar';
import Newuser from './new_user';

function App() {
	const user = 'ALLAN';
	return (
		<div>
			{!user ? (
				<Newuser />
			) : (
				<>
					<BrowserRouter>
						<Navbar>
							<Switch>
								<Route path="/home" exact>
									<Meetup />
								</Route>
								<Route path="/newuser">
									<Newuser />
								</Route>
								<Route path="/course">
									<Favorites />
								</Route>
							</Switch>
						</Navbar>
					</BrowserRouter>
				</>
			)}
		</div>
	);
}
export default App;
