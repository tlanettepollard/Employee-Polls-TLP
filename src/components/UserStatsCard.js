import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import Container from 'react-bootstrap/Container';
//import Table from 'react-bootstrap/Table';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Avatar from './Avatar';
//import Image from 'react-bootstrap/Image';

const UserStatsCard = (props) => {
	//MAP
	const { user } = props;
	const { name, avatarURL, answers, questions } = user;

	return (
		<Fragment>
			<Container>
				<Row className='justify-content-center'>
					<Col xs={12} md={6}>
						<Card bg='light' className='m-3'>
							<Card.Header>
								<Avatar avatarURL={avatarURL} className='mr-2' />
								{name}
							</Card.Header>
							<Card.Body className='d-flex justify-content-center'>
								<Card.Text>
									Answered Questions: {Object.keys(answers).length}
									<br />
									Created Questions: {questions.length}
								</Card.Text>
							</Card.Body>
							<Card.Footer>
								Score: {Object.keys(answers).length + questions.length}
							</Card.Footer>
						</Card>
					</Col>
				</Row>
			</Container>
		</Fragment>
	);
};

/*const mapStateToProps = ({ questions, users }) => {
	const summaryCreated = questions.allIds.reduce((prev, curr, idx, arr) => {
		let count = prev[questions.byId[curr].author];
		if (count) {
			count += 1;
		} else {
			count = 1;
		}
		return { ...prev, [questions.byId[curr].author]: count };
	}, {});

	const summaryAnswered = questions.allIds
		.reduce((prev, curr, idx, arr) => {
			return [
				...prev,
				...questions.byId[curr].optionOne.votes,
				...questions.byId[curr].optionTwo.votes,
			];
		}, [])
		.reduce((prev, curr, idx, arr) => {
			let count = prev[curr];
			if (count) {
				count += 1;
			} else {
				count = 1;
			}
			return { ...prev, [curr]: count };
		}, {});

	const summary = Object.keys(users).reduce((prev, curr, idx, arr) => {
		return [
			...prev,
			{
				id: users[curr].id,
				name: users[curr].name,
				avatarURL: users[curr].avatarURL,
				answered: summaryAnswered[curr] ? summaryAnswered[curr] : 0,
				created: summaryCreated[curr] ? summaryCreated[curr] : 0,
			},
		];
	}, []);

	return {
		summary,
	};
};
*/

const mapStateToProps = ({ users }, { id }) => {
	return {
		user: users[id],
	};
};

export default connect(mapStateToProps)(UserStatsCard);
