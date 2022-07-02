import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import UserCard from './UserCard';
//import Row from 'react-bootstrap/Row';
//import Col from 'react-bootstrap/Col';
//import Container from 'react-bootstrap/Container';
//import PollQuestion from './PollQuestion';

const Home = (props) => {
	return (
		<Fragment>
			<Tabs>
				<Tab eventKey='unanswered' title='Unanswered Questions'>
					{props.newQuestions.length > 0 && (
						<Container>
							<Row xs={1} md={3} className='g-3 mt-2'>
								{props.newQuestions.map((id) => (
									<Col key={id}>
										<UserCard />
									</Col>
								))}
							</Row>
						</Container>
					)}
				</Tab>

				<Tab eventKey='answered' title='Answered Questions'>
					{props.answeredQuestions.length > 0 && (
						<Container>
							<Row xs={1} md={3} className='g-3 mt-2'>
								{props.answeredQuestions.map((id) => (
									<Col key={id}>
										<UserCard />
									</Col>
								))}
							</Row>
						</Container>
					)}
				</Tab>
			</Tabs>
		</Fragment>
	);
};

const mapStateToProps = (state) => {
	return {
		newQuestions: state.questions.nonAnswered,
		answeredQuestions: state.questions.answered,
	};
};

export default connect(mapStateToProps)(Home);
