import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { ListGroup } from 'react-bootstrap';
import { ProgressBar } from 'react-bootstrap';
import { formatDate } from '../utils/helpers';
import PageNotFound from './PageNotFound';
import Avatar from './Avatar';
import { ListGroupItem } from 'react-bootstrap';

const AnsweredQuestion = (props) => {
	const { question, author, authedUser } = props;

	if (question === null) {
		return <PageNotFound />;
	}

	const { optionOne, optionTwo, timestamp } = question;
	const { name, avatarURL } = author;
	const totalVotes = optionOne.votes.length + optionTwo.votes.length;
	const optionOnePercent = Math.round(
		(optionOne.votes.length / totalVotes) * 100
	);
	const optionTwoPercent = Math.round(
		(optionTwo.votes.length / totalVotes) * 100
	);

	return (
		<Fragment>
			<Container>
				<Row className='justify-content-center'>
					<Col xs={12} md={6}>
						<Card bg='light' className='m-3'>
							<Card.Header>
								<Avatar avatarURL={avatarURL} className='mr-2' />
								{name} asks:
							</Card.Header>
							<Card.Body>
								<ListGroup>
									<ListGroupItem>
										{optionOne.text}
										{optionOne.votes.includes(authedUser) ? (
											<span className='text-danger ml-2'>
												&lt;- Your choice
											</span>
										) : null}
									</ListGroupItem>
									<ProgressBar
										now={optionOnePercent}
										label={`${optionOnePercent}%`}
										variant='info'
									/>
									<Card.Text className='text-muted'>
										chosen by {optionOne.votes.length} out of {totalVotes}
										{''} users
									</Card.Text>
									<ListGroupItem>
										{optionTwo.text}
										{optionTwo.votes.includes(authedUser) ? (
											<span className='text-danger ml-2'>
												&lt;- Your choice
											</span>
										) : null}
									</ListGroupItem>
									<ProgressBar
										now={optionTwoPercent}
										label={`${optionTwoPercent}%`}
										variant='info'
									/>
									<Card.Text className='text-muted'>
										chosen by {optionTwo.votes.length} out of {totalVotes}
										{''} users
									</Card.Text>
								</ListGroup>
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

const mapStateToProps = ({ questions, users, authedUser }, { id }) => {
	const question = questions[id];

	return {
		question: question ? question : null,
		author: question ? users[question.author] : null,
		authedUser,
	};
};

export default connect(mapStateToProps)(AnsweredQuestion);
