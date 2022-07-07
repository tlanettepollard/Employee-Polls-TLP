import React, { Fragment } from 'react';
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const LeaderboardSub = ( props ) => {
	//console.log(summary);

	return (
		<Fragment>
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
			</Container>
		</Fragment>
	);
};


export default LeaderboardSub;
