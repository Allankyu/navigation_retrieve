import { Link } from 'react-router-dom';

function Navbar(props) {
	return (
		<div className="navbar">
			<div className="list">
				<nav>
					<ul>
						<li>
							<Link to="/home">HOME</Link>
						</li>
						<li>
							<Link to="/newuser">CREATE ACCOUNT</Link>
						</li>
						<li>
							<Link to="/course">COURSE</Link>
						</li>
					</ul>
				</nav>
			</div>
			{props.children}
		</div>
	);
}
export default Navbar;
