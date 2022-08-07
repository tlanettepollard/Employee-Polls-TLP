import {
	_saveQuestion,
	_saveQuestionAnswer,
	_getQuestions,
} from '../utils/_DATA';
//import { formatDate } from '../utils/helpers';

jest.setTimeout(10000);

// _saveQuestion() test

describe('_saveQuestion', () => {
	it('will return the formated question is successful', async () => {
		const question = {
			author: 'sarahedo',
			optionOneText: 'Testing 1',
			optionTwoText: 'Testing 2',
		};
		const result = await _saveQuestion(question);

		expect(result.author).toBe(question.author);
		expect(result.id).not.toBeNull();
		expect(result.timestamp).not.toBeNull();
		expect(result.optionOneText).toEqual(question.optionOneText);
		expect(result.optionTwoText).toEqual(question.optionTwoText);
	});

	it('will errors show if the wrong info is passed', async () => {
		const question = {
			author: 'sarahedo',
			optionTwoText: 'Testing 2',
		};
		await expect(_saveQuestion(question)).rejects.toEqual(
			'Please provide optionOneText, optionTwoText, and author'
		);
	});
});

// _getQuestions()

describe('_getQuestions', () => {
	it('will return the list of questions if successful', async () => {
		const result = await _getQuestions();
		expect(result).not.toBeNull();
	});
});

//_saveQuestionAnswer() test
describe('_saveQuestionAnswer', () => {
	it('will be true if successful', async () => {
		const object = {
			answer: 'optionOne',
			authedUser: 'sarahedo',
			qid: '8xf0y6ziyjabvozdd253nd',
			type: 'ANSWER_QUESTION',
		};
		await expect(_saveQuestionAnswer(object)).resolves.toBe(true);
	});

	it('will return an error if unsuccessful', async () => {
		const object = {
			answer: 'optionOne',
			qid: '8xf0y6ziyjabvozdd253nd',
			type: 'ANSWER_QUESTION',
		};
		await expect(_saveQuestionAnswer(object)).rejects.toEqual(
			'Please provide authedUser, qid, and answer'
		);
	});
});
