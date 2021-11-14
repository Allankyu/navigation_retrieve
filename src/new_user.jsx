import { Button } from '@material-ui/core';
import { useState } from 'react';
import Modal from './Modal';
function Newuser() {
	const handleSubmit = (e) => {
		e.preventDefault();
		setUser('');
		setEmail('');
		setPassword('');
	};
	const handleButton = () => {
		setButton(true);
	};
	const handleClose = () => {
		setButton(false);
	};
	const [user, setUser] = useState('user');
	const [email, setEmail] = useState('email');
	const [password, setPassword] = useState('password');
	const [isButton, setButton] = useState(false);
	return (
		<div>
			<div className="form">
				<div>
					<h2>LOGIN PAGE</h2>
				</div>
				<form>
					<input
						type="text"
						value={user}
						placeholder="username"
						onChange={(e) => setUser(e.target.value)}
					/>
					<input
						type="text"
						value={email}
						placeholder="email"
						onChange={(e) => setEmail(e.target.value)}
					/>
					<input
						type="text"
						value={password}
						placeholder="password"
						onChange={(e) => setPassword(e.target.value)}
					/>
					<Button
						onClick={handleSubmit}
						type="submit"
						color="primary"
						variant="contained"
					>
						SUBMIT
					</Button>
				</form>
			</div>
			<Button onClick={handleButton} color="primary" variant="contained">
				DELETE
			</Button>
			<Button onClick={handleButton} color="primary" variant="contained">
				CONFIRM
			</Button>
			{isButton && <Modal onClose={handleClose} />}
		</div>
	);
}
export default Newuser;
