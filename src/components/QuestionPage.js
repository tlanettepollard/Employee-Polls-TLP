import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { formatQuestion } from '../utils/helpers';
import { handleSaveAnswer } from '../actions/questions';
//import UnansweredQuestion from './UnansweredQuestion';
//import AnsweredQuestion from './AnsweredQuestion';
import { useNavigate, useParams, useLocation } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
//import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import Avatar from './Avatar';

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
			<Container fluid>
				
				<Avatar avatarURL={avatarURL} alt='user-avatar' fluid />
				<h3>{name} wants to know </h3>
			</Container>
			<Container fluid>
				<h4>Would you rather...</h4>
				{!hasAnswered ? (
					<Card>
						<Card.Body>
							<Button onClick={() => handleClick('optionOne')}>
								{optionOneText}
							</Button>
							<hr />
							<Button onClick={() => handleClick('optionTwo')}>
								{optionTwoText}
							</Button>
						</Card.Body>
					</Card>
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
