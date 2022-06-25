import React from 'react';
import { connect, useDispatch } from 'react-redux';
import { NavLink, Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import Avatar from './Avatar';
import { removeAuthedUser } from '../actions/authedUser';

function PageNavbar({ user, authedUser }) {
	const dispatch = useDispatch();

	const handleSignOut = () => {
		dispatch(removeAuthedUser());
	};

	return (
		<Navbar>
			<Navbar.Brand as={Link} to='/'>
				<h2>
					<small>WYR...?</small>
				</h2>
			</Navbar.Brand>
			<Navbar.Toggle aria-controls='basic-navbar-nav' />
			<Navbar.Collapse id='basic-navbar-nav'>
				<Nav className='mr-auto'>
					<Nav.Link as={NavLink} to='/' exact data-testid='homepage'>
						Home
					</Nav.Link>
					<Nav.Link as={NavLink} to='/add' data-testid='new-question'>
						New Question
					</Nav.Link>
					<Nav.Link as={NavLink} to='/' data-testid='leaderboard'>
						Leaderboard
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
		</Navbar>
	);
}

function mapStateToProps({ users, authedUser }) {
	return {
		user: users[authedUser],
	};
}

export default connect(mapStateToProps)(PageNavbar);
