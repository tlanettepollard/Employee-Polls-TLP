import { getInitialData, saveQuestionAnswer } from '../utils/api';
import { addAnswerToQuestion } from './questions';
import { showLoading, hideLoading } from 'react-redux-loading-bar';

export const RECEIVE_USERS = 'RECEIVE_USERS';
export const ADD_QUESTION_TO_USER = 'ADD_QUESTION_TO_USER';
export const ADD_ANSWER_TO_USER = 'ADD_ANSWER_TO_USER';

export const OPTION_ONE = 'optionOne';
export const OPTION_TWO = 'optionTwo';

export function receiveUsers(users) {
	return {
		type: RECEIVE_USERS,
		users,
	};
}

export function addQuestionToUser({ id, author }) {
	return {
		type: ADD_QUESTION_TO_USER,
		id,
		author,
	};
}

export function addAnswerToUser({ authedUser, qid, answer }) {
	return {
		type: ADD_ANSWER_TO_USER,
		authedUser,
		qid,
		answer,
	};
}

export function handleSaveQuestionAnswer(username, questionId, answer) {
	return (dispatch) => {
		dispatch(showLoading());
		return getInitialData().then(() => {
			dispatch(addAnswerToUser(username, questionId, answer));
			dispatch(addAnswerToQuestion(username, questionId, answer));
			dispatch(hideLoading());

			return saveQuestionAnswer(username, questionId, answer).catch((e) => {
				console.warn('Error in handleSaveQuestionAnswer:', e);
			});
		});
	};
}
