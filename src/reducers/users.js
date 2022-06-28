import { RECEIVE_USERS, ADD_USER_ANSWER, ADD_USER_QUESTION } from '../actions/users';


export default function users(state = {}, action) {
	switch (action.type) {
		case RECEIVE_USERS:
			return {
				...state,
				...action.users,
			};
		case ADD_USER_ANSWER:
			const { authedUser, qid, answer } = action;
			console.log(authedUser, qid, answer);
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
		case ADD_USER_QUESTION:
			const { question } = action;
			return {
				...state,
				[question.author]: {
					...state[question.author],
					questions: state[question.author].questions.concat([question.id]),
				},
			};
		default:
			return state;
	}
}
