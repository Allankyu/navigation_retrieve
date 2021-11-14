import { Button } from '@material-ui/core';
import React from 'react';

function Modal(props) {
	return (
		<div>
			<p>ARE U SURE</p>
			<Button onClick={props.onClose} color="primary">
				DELETE
			</Button>
			<Button onClick={props.onClose} color="primary">
				CANCEL
			</Button>
		</div>
	);
}

export default Modal;
