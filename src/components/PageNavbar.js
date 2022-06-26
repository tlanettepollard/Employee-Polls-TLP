import React from 'react';
import { connect, useDispatch } from 'react-redux';
import { NavLink, Link } from 'react-router-dom';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import Avatar from './Avatar';
import companyLogo from '../images/companyavatar.png';
import { removeAuthedUser } from '../actions/authedUser';

const PageNavbar = ({ user, authedUser }) => {
	const dispatch = useDispatch();

	const handleSignOut = () => {
		dispatch(removeAuthedUser());
	};

	return (
		<Navbar bg='light' expand='md'>
			<Container>
				<Navbar.Brand as={Link} to='/'>
					<img
						src={companyLogo}
						width='30'
						height='30'
						className='d-inline-block align-top'
						alt='company logo'
					/>
				</Navbar.Brand>
				<Navbar.Toggle aria-controls='responsive-navbar-nav' />
				<Navbar.Collapse id='responsive-navbar-nav'>
					<Nav className='me-auto'>
						<Nav.Link as={NavLink} to='/' exact data-testid='homepage'>
							Home
						</Nav.Link>
						<Nav.Link as={NavLink} to='/add' data-testid='new-question'>
							New Question
						</Nav.Link>
						<Nav.Link as={NavLink} to='/leaderboard' data-testid='leaderboard'>
							Home
						</Nav.Link>
					</Nav>
					<Nav className='align-items-start'>
						<Navbar.Text>{user.name}</Navbar.Text>
						<Avatar avatarURL={user.avatarURL} className='mx-3' />
						<Button
							variant='outline-dark'
							onClick={handleSignOut}
							className='mt-3 mt-lg-0'>
							Sign Out
						</Button>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

const mapStateToProps = ({ users, authedUser }) => {
	return {
		user: users[authedUser],
	};
};

export default connect(mapStateToProps)(PageNavbar);
