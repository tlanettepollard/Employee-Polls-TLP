import React from 'react';
import Image from 'react-bootstrap/Image';

const Avatar = (users) => {
	return (
		<Image
			src={users.avatarUrl}
			roundedCircle
			fluid
			width='40'
			height='40'
			alt='user avatar'
			className="rounded-circle"
		/>
	);
};

export default Avatar;
