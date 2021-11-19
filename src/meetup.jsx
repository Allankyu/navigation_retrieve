import './meetup.css';
function Meetup() {
	return (
		<div className="meet">
			<marquee direction="center">
				{' '}
				<h2
					style={{
						justifyContent: 'center',
						textAlign: 'center',
						fontSize: 30,
						color: 'blue',
					}}
				>
					KAN COMPUTER TRINING CENTER
				</h2>
			</marquee>
			<h6 style={{ justifyContent: 'center', textAlign: 'center' }}>
				"where technology starts"
			</h6>

			<div className="history">
				<div>
					<h2>ABOUT</h2>

					<p>Located in najjera 2 along mbogo road</p>

					<p>
						It started in 2019 to give computer skills to the community as well
						our country Uganda
					</p>
					<p>Learners acquire skills from experience tutors</p>
					<p>
						call us today on 0702087693 / 0784249401 or
						email:ssensambaallan66gmail.com
					</p>
				</div>
				<h2>SERVICES</h2>

				<p>We deal most in ICT related courses and services listed below;</p>

				<ul>
					<li>Mobile App develoment</li> <li>Website Designng</li>
					<li>Graphics Designing</li>
					<li>Video Editing</li>
					<li>Database Management</li>
					<li>Computer Networking</li>
					<li>Computer Lessons</li>
					<li>Software related isues</li>
				</ul>
			</div>

			<div className="foot">
				<footer>WHERE TEHNOLOGY STARTS &copy; 2021</footer>
			</div>
			<div className="foot">hello</div>
		</div>
	);
}
export default Meetup;
