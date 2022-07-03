import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import UserCard from './UserCard';

//import PollQuestion from './PollQuestion';

const Home = (props) => {
	return (
		<Fragment>
			<Tabs>
				<Tab eventKey='unanswered' title='Unanswered Questions'>
					<Container>
						<Row xs={1} md={3} className='g-3 mt-2'>
							<Col>
								<UserCard />
							</Col>
						</Row>
					</Container>
				</Tab>

				<Tab eventKey='answered' title='Answered Questions'>
					<Container>
						<Row xs={1} md={3} className='g-3 mt-2'>
							<Col>
								<UserCard />
							</Col>
						</Row>
					</Container>
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
