import React from 'react';
import { connect } from 'react-redux';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
//import { handleSaveAnswer } from '../actions/questions';

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
	

	return (
		<Container>
			<div className='inner-container'>
				<div className='question-avatar'>
					<img
						src={props.user.avatarURL}
						alt='avatar of user'
						className='rounded-circle'
					/>
					<p>Poll Question by {props.user.name}</p>
				</div>
				<div className='question-content'>
					<p>Would You Rather...</p>
					<Row>
						<Col>
							<Card className='text-center' border='primary'>
								<Card.Header>Option One</Card.Header>
								<Card.Body>
									<Card.Text>Option 1 Question</Card.Text>
									<Button
										variant='primary'
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
									<Card.Text>Option Two Question</Card.Text>
									<Button
										variant='primary'
										disabled={props.isAnswered}>
										Vote
									</Button>
								</Card.Body>
							</Card>
						</Col>
					</Row>
				</div>
			</div>
		</Container>
	);
};

const mapStateToProps = ({ authedUser, questions, users }, { router }) => {
	const question = questions.byId[router.params.id];
	const user = users[questions.author];
	const isAnswered = questions.answered.includes(router.params.id);
	return { authedUser, question, user, isAnswered };
};

export default withRouter(connect(mapStateToProps)(QuestionPage));
