import { getInitialData } from '../utils/api';
import { groupQuestions, receiveQuestions } from './questions';
import { receiveUsers } from './users';
import { showLoading, hideLoading } from 'react-redux-loading-bar';

export function handleInitialData() {
	return (dispatch, getState) => {
		dispatch(showLoading());
		return getInitialData().then(({ users, questions }) => {
			dispatch(receiveQuestions(questions));
			dispatch(receiveUsers(users));
			const { authedUser } = getState();
			if (authedUser != null) {
				dispatch(groupQuestions(authedUser));
			}
			dispatch(hideLoading());
		});
	};
}
