import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { formatDate } from '../utils/helpers';
import { useNavigate } from 'react-router-dom';

const UserCard = (props) => {
	
	const navigate = useNavigate();

	const showDetails = (e, id) => {
		e.preventDefault();

		navigate(`/questions/${id}`);
	};

	return (
		<Fragment>
			<Card border='primary'>
				<Card.Header as='h5' className='text-left'>
					{props.question.author}
				</Card.Header>
				<Card.Text>{formatDate(props.question.timestamp)}</Card.Text>
				<Button
					variant='primary'
					onClick={(e) => showDetails(e, props.questions.id)}>
					Show Details
				</Button>
			</Card>
		</Fragment>
	);
};

const mapStateToProps = ({ questions }, { id }) => {
	const question = questions.byId[id];

	return {
		question,
	};
};

export default connect(mapStateToProps)(UserCard);
