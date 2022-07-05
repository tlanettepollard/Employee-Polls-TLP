import { saveQuestion } from '../utils/api';
import { addQuestionToUser } from '../actions/users';

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS';
export const ADD_QUESTION = 'ADD_QUESTION';
export const ADD_ANSWER_TO_QUESTION = 'ADD_ANSWER_TO_QUESTION';



export function receiveQuestions(questions) {
	return {
		type: RECEIVE_QUESTIONS,
		questions,
	};
}

// Action creator for answering question
export function addAnswerToQuestion({ authedUser, qid, answer }) {
	return {
		type: ADD_ANSWER_TO_QUESTION,
		authedUser,
		qid,
		answer,
	};
}

// Action creator to add question
export function addQuestion(question) {
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
				dispatch(addQuestionToUser(question.id, question.author));
			}
		);
	};
}
