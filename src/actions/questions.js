import { saveQuestionAnswer, saveQuestion } from '../utils/api';
import { showLoading, hideLoading } from 'react-redux-loading-bar';

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS';
export const ADD_QUESTION = 'ADD_QUESTION';
export const ADD_ANSWER = 'ADD_ANSWER';

export function receiveQuestions(questions) {
	return {
		type: RECEIVE_QUESTIONS,
		questions,
	};
}

function addAnswer(authedUser, qid, answer) {
	return {
		type: ADD_ANSWER,
		authedUser,
		qid,
		answer,
	};
}

function addQuestion(question) {
	return {
		type: ADD_QUESTION,
		question,
	};
}

export function handleAddAnswer(qid, answer) {
	return (dispatch, getState) => {
		const { authedUser } = getState();

		dispatch(showLoading());
		return saveQuestionAnswer({
			qid,
			answer,
			authedUser,
		})
			.then(() =>
				dispatch(
					addAnswer({
						qid,
						answer,
						authedUser,
					})
				)
			)
			.then(() => dispatch(hideLoading()));
	};
}

export function handleAddQuestion(optionOne, optionTwo) {
	return (dispatch, getState) => {
		const { authedUser } = getState();
		dispatch(showLoading());

		return saveQuestion({
			optionOneText: optionOne,
			optionTwoText: optionTwo,
			author: authedUser,
		})
			.then((question) => dispatch(addQuestion(question)))
			.then(() => dispatch(hideLoading()));
	};
}
