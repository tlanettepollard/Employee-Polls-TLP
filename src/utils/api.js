import {
	_getUsers,
	_getQuestions,
	_saveQuestionAnswer,
	_saveQuestion,
} from './_DATA';

export function getInitalData() {
	return Promise.all([_getUsers(), _getQuestions()]).then(
		([users, questions]) => ({
			users,
			questions,
		})
	);
}

export function saveQuestionAnswer({ authedUser, qid, answer }) {
	return _saveQuestionAnswer({ authedUser, qid, answer });
}

export function _saveQuestion(info) {
	return _saveQuestion(info);
}
