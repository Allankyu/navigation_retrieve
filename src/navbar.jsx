import { Link } from 'react-router-dom';
import './navbar.css';

function Navbar(props) {
	return (
		<div className="navbar">
			<nav>
				<ul>
					<li>
						<Link to="/home">HOME</Link>
					</li>

					<li>
						<Link to="/course">COURSES</Link>
					</li>
					<li>
						<Link to="/posts">POSTS</Link>
					</li>
					<li>
						<Link to="/book">BOOK COURSE</Link>
					</li>
				</ul>
			</nav>
		</div>
	);
}
export default Navbar;
