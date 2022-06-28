import React from 'react';
import { Card, Row, Col, Button, Container, Image } from 'react-bootstrap';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { handleSaveAnswer, OPTION_ONE, OPTION_TWO } from '../actions/questions';

const PollPage = (props) => {
	const navigate = useNavigate();

	const handlePollVote = (e, answer) => {
		e.preventDefault();
		props.dispatch(
			handleSaveAnswer(props.authedUser, props.question.id, answer)
		);
		navigate('/');
	};

	return (
		<Container className='pollpg-wrapper'>
			<div className='inner-wrapper'>
				<Image
					fluid
					src={props.users.avatarURL}
					alt={`Avatar of ${props.users.name}`}
					className='rounded-circle'
				/>
				<p>Poll by {props.users.name}</p>
			</div>
			<div>
				<p>Would You Rather:</p>
				<Row>
					<Col>
						<Card className='text-center' border='primary'>
							<Card.Header>Option One</Card.Header>
							<Card.Body>
								<Card.Text>{props.question.optionOne.text}</Card.Text>
								<Button
									variant='primary'
									onClick={(e) => handlePollVote(e, OPTION_ONE)}
									disabled={props.isAnswered}>
									Vote
								</Button>
							</Card.Body>
						</Card>
					</Col>
					<Col>
						<Card className='text-center' border='primary'>
							<Card.Header>Option Two</Card.Header>
							<Card.Body>
								<Card.Text>{props.question.optionTwo.text}</Card.Text>
								<Button
									variant='primary'
									onClick={(e) => handlePollVote(e, OPTION_TWO)}
									disabled={props.isAnswered}>
									Vote
								</Button>
							</Card.Body>
						</Card>
					</Col>
				</Row>
			</div>
		</Container>
	);
};

const mapStateToProps = ({ authedUser }) => {
    return {
        authedUser
    };
}

export default connect(mapStateToProps, { handleSaveAnswer })(PollPage);
