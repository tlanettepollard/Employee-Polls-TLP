import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { formatQuestion } from '../utils/helpers';
import { handleSaveAnswer } from '../actions/questions';
import { useNavigate, useParams, useLocation } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';


const withRouter = (Component) => {
	const ComponentWithRouterProp = (props) => {
		let location = useLocation();
		let navigate = useNavigate();
		let params = useParams();
		return <Component {...props} router={{ location, navigate, params }} />;
	};
	return ComponentWithRouterProp;
};

const QuestionPage = (props) => {
	const navigate = useNavigate();
	const question = props.question;

	if (question === null) {
		return (
			<Fragment>
				<p>This question does not exist!</p>
				<form action='/' method='get'>
					<button>Please Go Back</button>
				</form>
			</Fragment>
		);
	}

	const {
		name,
		avatarURL,
		optionOneText,
		optionTwoText,
		hasAnswered,
		selectedVote,
		totalVotes,
		percentOptionOne,
		percentOptionTwo,
	} = question;

	const handleClick = (value) => {
		const { dispatch, qid } = props;
		dispatch(handleSaveAnswer(qid, value));
		navigate('/questions/' + qid);
	};

	return (
		<Fragment>
			<Container fluid className='my-5 p-3'>
				<Image
					src={avatarURL}
					alt='user-avatar'
					roundedCircle
					width='100'
					className='mx-auto d-block'
				/>
				<h3 className='text-center my-4 p-3'>{name} wants to know... </h3>
			</Container>
			<Container fluid className='m-3'>
				{!hasAnswered ? (
					<Row className='justify-content-center'>
						<Col xs={12} md={6}>
							<Card className='my-3 p-4'>
								<Card.Header className='text-center'>
									Would you rather...
								</Card.Header>
								<Card.Body className='d-flex-column align-items-center'>
									<Button onClick={() => handleClick('optionOne')}>
										{optionOneText}
									</Button>
									<hr />
									<Button onClick={() => handleClick('optionTwo')}>
										{optionTwoText}
									</Button>
								</Card.Body>
							</Card>
						</Col>
					</Row>
				) : (
					<Card className='answered-question'>
						<Card.Body>
							<span>You have already answered this question.</span>
							<Button disabled>{selectedVote}</Button>
							<hr />
							<h4>Current vote split:</h4>
							<Container fluid className='percent-container'>
								<div className='percent-card'>
									<Button name='optionOneButton' className='options'>
										{optionOneText}
									</Button>
									<span>{percentOptionOne}</span>
								</div>
								<div className='percent-card'>
									<Button name='optionTwoButton' className='options'>
										{optionTwoText}
									</Button>
									<span>{percentOptionTwo}</span>
								</div>
							</Container>
							<hr />
							<span>Total votes: </span>
							<Container className='percent-container'>
								<span>{totalVotes}</span>
							</Container>
						</Card.Body>
					</Card>
				)}
			</Container>
		</Fragment>
	);
};

const mapStateToProps = ({ authedUser, users, questions }, props) => {
	const { id } = props.router.params;
	const question = questions[id];

	return {
		authedUser,
		qid: id,
		question: question
			? formatQuestion(question, users[question.author], authedUser)
			: null,
	};
};

export default withRouter(connect(mapStateToProps)(QuestionPage));

//MAP Reference
/*const QuestionPage = (props) => {
	const { authedUserAnswers } = props;
	const id = useParams();
	const answered = authedUserAnswers.hasOwnProperty(id) ? true : false;

	return (
		<Fragment>
			<h2 className='text-center my-3'>Would You Rather...</h2>
			{answered ? <AnsweredQuestion id={id} /> : <UnansweredQuestion id={id} />}
		</Fragment>
	);
};

const mapStateToProps = ({ authedUser, users }) => {
	const authedUserAnswers = users[authedUser].answers;

	return {
		authedUserAnswers,
	};
};

export default connect(mapStateToProps)(QuestionPage); */
