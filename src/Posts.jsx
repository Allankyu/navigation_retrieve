import React from 'react';

function Posts({ name, image }) {
	return (
		<div>
			{name}
			<img src={image} alt="hello" style={{ width: 100, height: 100 }} />
		</div>
	);
}

export default Posts;
