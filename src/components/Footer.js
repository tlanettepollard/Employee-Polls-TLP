import React, { Fragment } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Footer = () => {
	return (
		<Fragment>
			<Container
				fluid
				className='w-100  d-flex footer flex-column justify-content-center align-items-center'>
				<Row className='d-flex flex-column text-center p-3'>
					<Col className='p-1'>
						<a href='https://github.com/tlanettepollard'>
							<span>Trista Lanette Pollard &nbsp;</span>
						</a>
					</Col>
					<Col className='p-1'>
						<span>Udacity React Nanodegree 2022</span>
					</Col>
				</Row>
			</Container>
		</Fragment>
	);
};

export default Footer;
