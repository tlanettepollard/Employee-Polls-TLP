import { showLoading, hideLoading } from 'react-redux-loading-bar';
import { saveQuestion, saveQuestionAnswer } from '../utils/api';
import { addQuestionToUser } from './users';

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS';
export const ADD_ANSWER_TO_QUESTION = 'ADD_ANSWER_TO_QUESTION';
export const ADD_QUESTION = 'ADD_QUESTION';

export function receiveQuestions(questions) {
	return {
		type: RECEIVE_QUESTIONS,
		questions,
	};
}

export function addAnswerToQuestion(authedUser, qid, answer) {
	return {
		type: ADD_ANSWER_TO_QUESTION,
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

export function handleSaveQuestion(optionOneText, optionTwoText, author) {
	return (dispatch) => {
		return saveQuestion({ optionOneText, optionTwoText, author }).then(
			(question) => {
				dispatch(addQuestion(question));
				dispatch(addQuestionToUser(question));
			}
		);
	};
}

export function handleSaveQuestionAnswer(qid, answer) {
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
					addAnswerToQuestion({
						qid,
						answer,
						authedUser,
					})
				)
			)
			.then(() => dispatch(hideLoading()));
	};
}
