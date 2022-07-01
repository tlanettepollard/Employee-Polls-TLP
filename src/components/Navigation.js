import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Nav, Navbar } from 'react-bootstrap';
import companyLogo from '../images/companyavatar.png';
import Avatar from './Avatar';
import { handleLogoutAction } from '../actions/authedUser';
import authedUser from '../reducers/authedUser';

const withRouter = (Component) => {
	const ComponentWithRouterProp = (props) => {
		let location = useLocation();
		let navigate = useNavigate();
		let params = useParams();
		return <Component {...props} router={{ location, navigate, params }} />;
	};
	return ComponentWithRouterProp;
};

const Navigation = (props) => {
	const { location } = props.router;

	return (
		<Fragment>
			<Navbar
				collapseOnSelect
				expand='lg'
				bg='dark'
				variant='dark'
				className='justify-content-start'>
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
					<Nav activeKey={location.home} className='me-auto'>
						<Nav.Link as={Link} to='/'>
							Home
						</Nav.Link>
						<Nav.Link as={Link} to='/leaderboard'>
							Leaderboard
						</Nav.Link>
						<Nav.Link as={Link} to='/new'>
							New
						</Nav.Link>
					</Nav>
					<Nav className='justify-content-end'>
						<Nav.Link as={Link} to='#'>
							{props.name}
						</Nav.Link>
						<Avatar avatarURL={authedUser.avatarURL} className='mx-3' />
						<Nav.Link as={Link} to='#' onClick={props.onLogoutClick}>
							Sign Out
						</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		</Fragment>
	);
};

const mapStateToProps = ({ authedUser, users }) => {
	return {
		name: users[authedUser].name,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		onLogoutClick: () => {
			dispatch(handleLogoutAction());
		},
	};
};

export default withRouter(
	connect(mapStateToProps, mapDispatchToProps)(Navigation)
);
