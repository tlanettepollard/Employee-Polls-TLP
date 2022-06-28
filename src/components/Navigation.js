import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import { Nav, Navbar, Button } from 'react-bootstrap';
import companyLogo from '../images/companyavatar.png';
import { removeAuthedUser } from '../actions/authedUser';
import Avatar from './Avatar';

const Navigation = (props) => {
	const { users, dispatch } = props;

	const handleSignOut = () => {
		dispatch(removeAuthedUser());
	};

	return (
		<Fragment>
			<Navbar collapseOnSelect expand='md' bg='light'>
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
						<Nav.Link as={NavLink} to='/' exact>
							Home
						</Nav.Link>
						<Nav.Link as={NavLink} to='/add'>
							New Question
						</Nav.Link>
						<Nav.Link as={NavLink} to='/leaderboard'>
							Leaderboard
						</Nav.Link>
					</Nav>
					<Nav className='align-items-start'>
						<Navbar.Text>{users.name}</Navbar.Text>
						<Avatar avatarURL={users.avatarURL} className='mx-3' />
						<Button
							variant='outline-dark'
							onClick={handleSignOut}
							className='mt-3 mt-lg-0'>
							Sign Out
						</Button>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		</Fragment>
	);
};

const mapStateToProps = ({ users, authedUser }) => {
	return {
		users: users[authedUser],
	};
};

export default connect(mapStateToProps)(Navigation);
