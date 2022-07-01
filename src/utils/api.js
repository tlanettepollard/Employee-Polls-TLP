import {
	_getUsers,
	_getQuestions,
	_saveQuestionAnswer,
	_saveQuestion,
} from './_DATA.js';

export const getInitialData = () => {
	return Promise.all([_getUsers(), _getQuestions()]).then(
		([users, questions]) => ({
			users,
			questions,
		})
	);
};

export const saveQuestion = (question) => {
	return _saveQuestion(question);
};

export const saveQuestionAnswer = ({ authedUser, qid, answer }) => {
	// console.log('info', {authedUser, qid, answer});
	return _saveQuestionAnswer(authedUser, qid, answer);
};
