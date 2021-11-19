import React, { useEffect, useState } from 'react';
import PostChild from './PostChild';
import { Button } from '@material-ui/core';
import { db } from './firebase';
import { collection, getDocs, addDoc } from 'firebase/firestore';

function Posts({ message }) {
	const [posts, setPosts] = useState([]);
	const usersCollectionRef = collection(db, 'posts');

	useEffect(() => {
		const getUsers = async () => {
			const data = await getDocs(usersCollectionRef);

			setPosts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
		};
		getUsers();
	}, []);

	return (
		<div>
			{' '}
			{posts.map((post) => (
				<PostChild key={post.id} message={post.message} />
			))}
		</div>
	);
}

export default Posts;
