import { saveQuestionAnswer, saveQuestion } from '../utils/api';
import { showLoading, hideLoading } from 'react-redux-loading';

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS';
export const SAVE_QUESTION_ANSWER = 'SAVE_QUESTION_ANSWER';
export const SAVE_QUESTION = 'SAVE_QUESTION';

export function receiveQuestions(questions) {
	return {
		type: RECEIVE_QUESTIONS,
		questions,
	};
}

// Save answer per authorized user

function saveAnswer({ authedUser, qid, answer }) {
	return {
		type: SAVE_QUESTION_ANSWER,
		authedUser,
		qid,
		answer,
	};
}

// Handle saved answer
export function handleSavedAnswer(info) {
	return (dispatch) => {
		dispatch(showLoading());

		return saveQuestionAnswer(info)
			.then(() => dispatch(saveAnswer(info)))
			.then(() => dispatch(hideLoading()));
	};
}

// Adding new question

function addQuestion(question) {
	console.log(question);
	return {
		type: SAVE_QUESTION,
		question,
	};
}

// Handle adding question

export function handleAddQuestion({ optionOneText, optionTwoText }) {
	return (dispatch, getState) => {
		const { authedUser } = getState();
		dispatch(showLoading());

		return saveQuestion({
			optionOneText,
			optionTwoText,
			author: authedUser,
		})
			.then((question) => dispatch(addQuestion(question)))
			.then(() => dispatch(hideLoading()))
			.catch((e) => {
				console.warn('Error in saveQuestion: ', e);
				alert('There was an error in saving the question. Try again.');
			});
	};
}
