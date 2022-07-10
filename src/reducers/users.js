import {
	RECEIVE_USERS,
	SAVE_QUESTION_TO_USER,
	SAVE_ANSWER_TO_USER,
} from '../actions/users';

//import { ADD_QUESTION, ADD_ANSWER } from '../actions/questions';

/*export default function users(state = {}, action) {
	switch (action.type) {
		case RECEIVE_USERS:
			return {
				...state,
				...action.users,
			};

		case ADD_QUESTION:
			return {
				...state,
				[action.question.author]: {
					...state[action.question.author],
					questions: state[action.question.author].questions.concat([
						action.question.id,
					]),
				},
			};
		case ADD_ANSWER:
			const { authedUser, qid, answer } = action.answerInfo;
			return {
				...state,
				[authedUser]: {
					...state[authedUser],
					answers: {
						...state[authedUser].answers,
						[qid]: answer,
					},
				},
			};
		default:
			return state;
	}
}
*/

export default function users(state = {}, action) {
	switch (action.type) {
		case RECEIVE_USERS:
			return {
				...state,
				...action.users,
			};
		case SAVE_QUESTION_TO_USER:
			return {
				...state,
				[action.question.author]: {
					...state[action.question.author],
					questions: state[action.question.author].questions.concat([
						action.question.id,
					]),
				},
			};
		case SAVE_ANSWER_TO_USER:
			return {
				...state,
				[action.authedUser]: {
					...state[action.authedUser],
					answers: {
						...state[action.authedUser].answers,
						[action.qid]: action.answer,
					},
				},
			};
		default:
			return state;
	}
}
