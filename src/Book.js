import React from 'react';
import { Button } from '@material-ui/core';
import { db } from './firebase';
import { collection, addDoc } from 'firebase/firestore';

function Book(props) {
	const createUser = async () => {
		const email = prompt('ENTER CHOICE COURSE');

		const username = prompt('ENTER NAME AND PHONE NUMBER');
		const CollectionRef = collection(db, 'posts');
		await addDoc(CollectionRef, {
			email,

			username,
		});
	};

	return (
		<div>
			<h1 style={{ color: 'blue', textAlign: 'center' }}>
				CLICK THE BUTTON BELOW TO BOOK FOOR COURSE
			</h1>
			<Button
				style={{
					justifyContent: 'center',
					alignItems: 'center',
					marginLeft: '50%',
					marginTop: 60,
				}}
				color="primary"
				variant="contained"
				type="submit"
				onClick={createUser}
			>
				BOOK COURSE{' '}
			</Button>
		</div>
	);
}

export default Book;
