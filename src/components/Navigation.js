import React from 'react';
import { Fragment } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { signoutAuthedUser } from '../actions/authedUser';
//import { withRouter } from 'react-router-dom';
import { Nav, Navbar, Button } from 'react-bootstrap';
import companyLogo from '../images/companyavatar.png';

const Navigation = (props) => {
    const { dispatch } = props;

	const handleSignout = (e) => {
		e.preventDefault();
		dispatch(signoutAuthedUser());
	};

	const { authedUser, username, avatarURL } = props;

	if (authedUser === null) {
		return <Link to='/login' />;
	}

    return (
        
		<Fragment>
			<Navbar>
				<Navbar.Brand>
					<img
						src={companyLogo}
						width='30'
						height='30'
						className='d-inline-block align-top'
						alt='company logo'
					/>
				</Navbar.Brand>
				<Navbar.Toggle aria-controls='responsive-navbar-nav'/>
				<Navbar.Collapse id='responsive-navbar-nav'>
					<Nav className='me-auto'>
						<Nav.Link>
							Home
						</Nav.Link>
						<Nav.Link>
							New Question
						</Nav.Link>
						<Nav.Link>
							Leaderboard
						</Nav.Link>
					</Nav>
					
						<Nav className='align-items-start'>
							<span>{username}</span>
                        <img src={'/images/' + avatarURL} className='mx-3' alt='User avatar'/>
							<Button
								variant='outline-dark'
								onClick={handleSignout}
								className='mt-3 mt-lg-0'>
								Sign Out
							</Button>
						</Nav>
					
				</Navbar.Collapse>
			</Navbar>
		</Fragment>
	);
};

const mapStateToProps = ({ authedUser, users }) => {
	if (authedUser !== null) {
		return {
			authedUser,
			username: users[authedUser].name,
			avatarURL: users[authedUser].avatarURL,
		};
	}
	return {
		username: '',
		avatarURL: '',
	};
};

export default connect(mapStateToProps)(Navigation);
