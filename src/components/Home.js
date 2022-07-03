import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import UserCardList from './UserCardList';

//import PollQuestion from './PollQuestion';

const Home = (props) => {
	const { answeredQuestionsIds, unansweredQuestionIds } = props;

	return (
		<Fragment>
			<Container fluid>
				<Row>
					<Col>
						<Tabs>
							<Tab eventKey='unanswered' title='Unanswered Questions'>
								<Container>
									<Row className='m-auto w-100'>
										<Col>
											<UserCardList
												idsList={unansweredQuestionIds}
												listNote='No more Unanswered Questions. Now you can create new ones!'
											/>
										</Col>
									</Row>
								</Container>
							</Tab>

							<Tab eventKey='answered' title='Answered Questions'>
								<Container>
									<Row className='g-4 w-100  mt-2'>
										<Col>
											<UserCardList
												idsList={answeredQuestionsIds}
												listNote='No Answered Questions yet! Time for you to get started!'
											/>
										</Col>
									</Row>
								</Container>
							</Tab>
						</Tabs>
					</Col>
				</Row>
			</Container>
		</Fragment>
	);
};

const mapStateToProps = ({ authedUser, questions, users }) => {
	const answeredQuestionsIds = Object.keys(questions)
		.filter((id) => users[authedUser].answers.hasOwnProperty(id))
		.sort((a, b) => questions[b].timestamp - questions[a].timestamp);

	const unansweredQuestionIds = Object.keys(questions)
		.filter((id) => !users[authedUser].answers.hasOwnProperty(id))
		.sort((a, b) => questions[b].timestamp - questions[a].timestamp);

	return {
		answeredQuestionsIds,
		unansweredQuestionIds,
	};
};

export default connect(mapStateToProps)(Home);
