import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
//import Image from 'react-bootstrap/Image';
import { formatDate } from '../utils/helpers';
import Avatar from './Avatar';
//import { useNavigate } from 'react-router-dom';

const UserCard = (props) => {
	const { question, name, author } = props;
	const { timestamp, id } = question;

	return (
		<Fragment>
			<Container>
				<Row className='justify-content-center my-2'>
					<Col xs={12} md={6}>
						<Card bg='light' border='primary' className='m-3'>
							<Card.Header className='text-left'>
								<Avatar avatarURL={author} />
								{name} asks:
							</Card.Header>
							<Card.Body className='text-center'>
								<Card.Text>
									{formatDate(props.question.timestamp)}...?
								</Card.Text>
								<Link to={`/questions/${id}`}>
									<Button variant='primary'>Show Details</Button>
								</Link>
							</Card.Body>
							<Card.Footer>
								<small className='text-muted'>{formatDate(timestamp)}</small>
							</Card.Footer>
						</Card>
					</Col>
				</Row>
			</Container>
		</Fragment>
	);
};

const mapStateToProps = ({ questions, users }, { id }) => {
	const question = questions[id];

	return {
		question: question ? question : null,
		author: question ? users[question.author] : null,
	};
};

export default connect(mapStateToProps)(UserCard);
