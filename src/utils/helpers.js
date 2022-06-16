export function formatDate(timestamp) {
	const d = new Date(timestamp);
	const time = d.toLocaleTimeString('en-US');
	return time.substr(0, 5) + time.slice(-2) + ' | ' + d.toLocaleDateString();
}

export function formatQuestion(question, author, authedUser) {
	const { id, timestamp, optionOne, optionTwo } = question;
	const { name, avatarURL } = author;

	let answer = null;
	if (optionOne.votes.includes(authedUser)) {
		answer = 'optionOne';
	} else if (optionTwo.votes.includes(authedUser)) {
		answer = 'optionTwo';
	}

	return {
		author: name,
		id,
		timestamp,
		avatar: avatarURL,
		optionOne: {
			votes: optionOne.votes,
			text: optionOne.text,
		},
		optionTwo: {
			votes: optionTwo.votes,
			text: optionTwo.text,
		},
		hasAnswered:
			optionOne.votes.includes(authedUser) ||
			optionTwo.votes.includes(authedUser),
		answer: answer,
	};
}
