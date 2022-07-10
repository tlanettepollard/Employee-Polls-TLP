import React, { Fragment } from 'react';
import { connect } from 'react-redux';
//import Container from 'react-bootstrap/Container';
//import Table from 'react-bootstrap/Table';
//import Row from 'react-bootstrap/Row';
//import Col from 'react-bootstrap/Col';
import UserStatsCard from './UserStatsCard';

const Leaderboard = ( props ) => {
	//console.log(summary);

	return (
		<Fragment>
			{/*
			<Container>
				<Row>
					<Col>
						<Table striped bordered hover size='sm'>
							<thead>
								<tr>
									<th style={{ width: '60%' }}>Users</th>
									<th>Answered</th>
									<th>Created</th>
								</tr>
							</thead>
							<tbody>
								
									<tr>
										<td></td>
										<td></td>
										<td></td>
									</tr>
								
							</tbody>
						</Table>
					</Col>
				</Row>
			</Container> */}

			<h2 className='text-center my-3'>
				Leaderboard
			</h2>
			{props.userIDs.map((id) => (
				<UserStatsCard key={id} id={id} />
			))}
		</Fragment>
	);
};


const mapStateToProps = ({ users }) => {
	const sortedUserIDs = Object.keys(users).sort((idA, idB) => {
		const scoreA = Object.keys(users[idA].answers).length + users[idA].questions.length;
		const scoreB = Object.keys(users[idB].answers).length + users[idB].questions.length;
		return scoreB - scoreA;
	});
	return {
		userIDs: sortedUserIDs
	};
}

export default connect(mapStateToProps)(Leaderboard);
