import { saveQuestionAnswer } from '../utils/api';
import { addQuestionAnswer } from './questions';

export const RECEIVE_USERS = 'RECEIVE_USERS';
export const ADD_USER_ANSWER = 'ADD_USER_ANSWER';
export const ADD_USER_QUESTION = 'ADD_USER_QUESTION';

export function receiveUsers(users) {
	return {
		type: RECEIVE_USERS,
		users,
	};
}

export function addUserQuestion(id, author) {
	return {
		type: ADD_USER_QUESTION,
		id,
		author,
	};
}

export function addUserAnswer(authedUser, qid, answer) {
	return {
		type: ADD_USER_ANSWER,
		authedUser,
		qid,
		answer,
	};
}

export function handleSaveAnswer(authedUser, qid, answer) {
	return (dispatch) => {
		dispatch(addUserAnswer(authedUser, qid, answer));
		dispatch(addQuestionAnswer(authedUser, qid, answer));

		return saveQuestionAnswer(authedUser, qid, answer).catch((e) => {
			console.warn('Error in handleSaveAnswer:', e);
		});
	};
}
