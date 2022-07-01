import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
//import Row from 'react-bootstrap/Row';
//import Col from 'react-bootstrap/Col';
//import Container from 'react-bootstrap/Container';
//import PollQuestion from './PollQuestion';

const Home = (props) => {
	return (
		<Fragment>
			<Tabs>
				<Tab eventKey='unanswered' title='Unanswered Questions'>
					Unanswered
				</Tab>

				<Tab eventKey='answered' title='Answered Questions'>
					Answered
				</Tab>
			</Tabs>
		</Fragment>
	);
};

const mapStateToProps = (state) => {
	return {
		newQuestions: state.questions.nonAnswered,
		oldQuestions: state.questions.answered,
	};
};

export default connect(mapStateToProps)(Home);
