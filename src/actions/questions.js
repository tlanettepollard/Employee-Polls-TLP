import { getInitialData } from '../utils/api';
import { showLoading, hideLoading } from 'react-redux-loading-bar';

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS';
export const ADD_QUESTION = 'ADD_QUESTION';

export const VOTE_QUESTION = 'VOTE_QUESTION';
export const GROUP_QUESTIONS = 'GROUP_QUESTIONS';

export const OPTION_ONE = 'OPTION_ONE';
export const OPTION_TWO = 'OPTION_TWO';

export function receiveQuestions(questions) {
	return {
		type: RECEIVE_QUESTIONS,
		questions,
	};
}

export function groupQuestions(username) {
	return {
		type: GROUP_QUESTIONS,
		username: username,
	};
}

// Action creator for answering question
export function addAnswerToQuestion({ username, questionId, answer }) {
	return {
		type: VOTE_QUESTION,
		username: username,
		questionId: questionId,
		answer: answer,
	};
}

// Action creator to add question
export function addQuestion(question) {
	return {
		type: ADD_QUESTION,
		question,
	};
}

export function handleSaveQuestionAnswer(username, questionId, answer) {
	return (dispatch, getState) => {
		dispatch(showLoading());
		return getInitialData().then(() => {
			dispatch(addAnswerToQuestion(username, questionId, answer));
			dispatch(groupQuestions(username));
			dispatch(hideLoading());
		});
	};
}
