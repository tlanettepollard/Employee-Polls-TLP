import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import UnansweredQuestion from './UnansweredQuestion';
import AnsweredQuestion from './AnsweredQuestion';
import Card from 'react-bootstrap/Card';

const QuestionPage = (props) => {
	const { authedUserAnswers, match } = props;
	const id = match.id;
	const answered = authedUserAnswers.hasOwnProperty(id) ? true : false;

	return (
		<Fragment>
			<Card>
				<Card.Header className='text-center my-3'>
					<small>Would You Rather...</small>
				</Card.Header>
				<Card.Body>
					{answered ? (
						<AnsweredQuestion id={id} />
					) : (
						<UnansweredQuestion id={id} />
					)}
				</Card.Body>
			</Card>
		</Fragment>
	);
};

const mapStateToProps = ({ authedUser, users }) => {
	const authedUserAnswers = users[authedUser].answers;

	return {
		authedUserAnswers,
	};
};
export default connect(mapStateToProps)(QuestionPage);
