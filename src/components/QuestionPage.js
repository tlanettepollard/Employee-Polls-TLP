import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import {
	handleSaveQuestionAnswer,
	OPTION_ONE,
	OPTION_TWO,
} from '../actions/users';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
//import Image from 'react-bootstrap/Image';

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

	const handleVote = (e, answer) => {
		e.preventDefault();
		props.dispatch(
			handleSaveQuestionAnswer(props.authedUser, props.question.id, answer)
		);
		navigate('/');
	};

	return (
		<Fragment>
			<Container fluid>
				{/*<Image
					src={props.user.avatarURL}
					alt={`Avatar of ${props.user.name}`}
					className='rounded-circle'
	/>*/}
				<p>Poll by {props.user.name}</p>
			</Container>
			<Container fluid>
				<h4>Would you rather...</h4>
				<Row>
					<Col>
						<Card className='text-center' border='primary'>
							<Card.Header>Option One</Card.Header>
							<Card.Body>
								<Card.Text>{props.question.optionOne.text}</Card.Text>
								<Button
									variant='primary'
									onClick={(e) => handleVote(e, OPTION_ONE)}
									disabled={props.isAnswered}>
									Vote{' '}
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
									onClick={(e) => handleVote(e, OPTION_TWO)}
									disabled={props.isAnswered}>
									Vote{' '}
								</Button>
							</Card.Body>
						</Card>
					</Col>
				</Row>
			</Container>
		</Fragment>
	);
};


const mapStateToProps = ({ authedUser, questions, users }, { router }) => {
	const question = questions.byId[router.params.id];
	const user = users[question.author];
	const isAnswered = questions.answered.includes(router.params.id);
	return {
		authedUser: authedUser,
		question: question,
		user: user,
		isAnswered: isAnswered,
	};
};

export default withRouter(connect(mapStateToProps)(QuestionPage));
