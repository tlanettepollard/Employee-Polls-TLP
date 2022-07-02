import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import Card from 'react-bootstrap/Card';

const UserCard = (user) => {
	return (
		<Fragment>
			<Card>
				<Card.Header as='h5' className='text-left'>
					{user.name}
				</Card.Header>
			</Card>
		</Fragment>
	);
};

const mapStateToProps = ({ users }, props) => {
	const user = users[props.userId];

	return {
		user,
	};
};

export default connect(mapStateToProps)(UserCard);
