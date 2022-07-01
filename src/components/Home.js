import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';

const Home = (props) => {
	return (
		<Fragment>
			<Tabs>
				<Tab eventKey='unanswered' title='Unanswered Questions'>
					Unanswered Questions
				</Tab>
				<Tab eventKey='answered' title='Answered Questions'>
					Answered Questions
				</Tab>
			</Tabs>
		</Fragment>
	);
};

const mapStateToProps = ({ authedUser, questions, users }) => {
	const answeredQuestionIds = Object.keys(questions)
		.filter((id) => users[authedUser].answers.hasOwnProperty[id])
		.sort((a, b) => questions[b].timestamp - questions[a].timestamp);

	const unansweredQuestionIds = Object.keys(questions)
		.filter((id) => !users[authedUser].answers.hasOwnProperty[id])
		.sort((a, b) => questions[b].timestamp - questions[a].timestamp);

	return {
		answeredQuestionIds,
		unansweredQuestionIds,
	};
};

export default connect(mapStateToProps)(Home);
