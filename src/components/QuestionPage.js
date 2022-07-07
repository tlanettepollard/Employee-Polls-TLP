import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import UnansweredQuestion from './UnansweredQuestion';
import AnsweredQuestion from './AnsweredQuestion';
import { useParams } from 'react-router-dom';

const QuestionPage = (props) => {
	const { authedUserAnswers } = props;
	const { id } = useParams();
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

export default connect(mapStateToProps)(QuestionPage);
