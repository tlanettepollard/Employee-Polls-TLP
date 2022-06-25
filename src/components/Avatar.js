import React from 'react';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';

const Avatar = (props) => {
	return (
		<Container>
			<Image
				src={props.avatarUrl}
				roundedCircle
				fluid
				width='40'
				height='40'
				alt='user avatar'
			/>
		</Container>
	);
};

export default Avatar;
