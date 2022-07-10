import {
	RECEIVE_QUESTIONS,
	ADD_ANSWER,
	ADD_QUESTION,
} from '../actions/questions';

/*export default function questions(state = {}, action) {
	switch (action.type) {
		case RECEIVE_QUESTIONS:
			return {
				...state,
				...action.questions,
			};
		case ADD_ANSWER:
			const { authedUser, qid, answer } = action.answerInfo;
			return {
				...state,
				[qid]: {
					...state[qid],
					[answer]: {
						...state[qid][answer],
						votes: state[qid][answer].votes.concat([authedUser]),
					},
				},
			};
		case ADD_QUESTION:
			return {
				...state,
				[action.question.id]: action.question,
			};
		default:
			return state;
	}
} */

export default function questions(state = {}, action) {
	switch (action.type) {
		case RECEIVE_QUESTIONS:
			return {
				...state,
				...action.questions,
			};
		case ADD_QUESTION:
			return {
				...state,
				[action.question.id]: action.question,
			};
		case ADD_ANSWER:
			return {
				...state,
				[action.qid]: {
					...state[action.qid],
					[action.answer]: {
						...state[action.qid][action.answer],
						votes: state[action.qid][action.answer].votes.concat([
							action.authedUser,
						]),
					},
				},
			};
		default:
			return state;
	}
}
