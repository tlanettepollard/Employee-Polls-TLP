import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
//import Image from 'react-bootstrap/Image';
import companyLogo from '../assets/companyavatar.png';
import Avatar from './Avatar';
//import { setAuthedUser } from '../actions/authedUser';
import { handleLogoutAction } from '../actions/authedUser';

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
	const author = props;
	const { name } = author;

	const { location } = props.router;

	return (
		<Fragment>
			<Navbar
				collapseOnSelect
				expand='md'
				bg='light'
				variant='light'
				className='p-3'>
				<Navbar.Brand as={Link} to='/' className='p-3'>
					<img
						src={companyLogo}
						width='30'
						height='30'
						className='d-inline-block align-top'
						alt='company logo'
					/>
				</Navbar.Brand>
				<Navbar.Toggle aria-controls='responsive-navbar-nav' />
				<Navbar.Collapse
					id='responsive-navbar-nav'
					className='justify-content-between'>
					<Nav className='me-auto' activeKey={location.home} variant='pills'>
						<Nav.Item as='li'>
							<Nav.Link as={Link} to='/'>
								Home
							</Nav.Link>
						</Nav.Item>
						<Nav.Item>
							<Nav.Link as={Link} to='/leaderboard'>
								Leaderboard
							</Nav.Link>
						</Nav.Item>
						<Nav.Item>
							<Nav.Link as={Link} to='/new'>
								New
							</Nav.Link>
						</Nav.Item>
					</Nav>
					<Nav className='justify-content-end'>
						<Avatar avatarURL={author.avatarURL} className='mr-2' />
						<Nav.Link as={Link} to='#'>
							{name}
						</Nav.Link>

						{/* Need Avatar */}
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
			//setAuthedUser('');
			dispatch(handleLogoutAction());
		},
	};
};

export default withRouter(
	connect(mapStateToProps, mapDispatchToProps)(Navigation)
);
