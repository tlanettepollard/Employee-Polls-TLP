import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import companyLogo from '../assets/companyavatar.png';
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
	const { location } = props.router;

	// MAG
	const { user, authedUser, dispatch } = props;
	const avatar = user ? user.avatarURL : '';
	const name = user ? user.name : '';

	const handleClick = () => {
		dispatch(handleLogoutAction());
	};

	return (
		<Fragment>
			<Navbar
				collapseOnSelect
				expand='md'
				variant='light'
				className='bg-info p-3'>
				<Navbar.Brand as={Link} to='/' className='p-3'>
					<img
						src={companyLogo}
						width='40'
						height='40'
						className='d-inline-block align-top'
						alt='company logo'
					/>
				</Navbar.Brand>
				<Navbar.Toggle aria-controls='responsive-navbar-nav' />
				<Navbar.Collapse id='responsive-navbar-nav'>
					<Nav className='me-auto' defaultActiveKey={location.home}>
						<Nav.Item as='li'>
							<Nav.Link as={Link} to='/' active>
								Home
							</Nav.Link>
						</Nav.Item>
						<Nav.Item>
							<Nav.Link as={Link} to='/leaderboard' className='nav-link'>
								Leaderboard
							</Nav.Link>
						</Nav.Item>
						<Nav.Item>
							<Nav.Link as={Link} to='/new' className='nav-link'>
								New Question
							</Nav.Link>
						</Nav.Item>
					</Nav>

					<Nav className='w-auto'>
						{/*<Avatar avatarURL={user.avatarURL} className='mr-2' />*/}
						{/* Problem with image rendering */}
						{authedUser && (
							<Nav.Link className='w-75' as={Link} to='#'>
								<Container className='d-inline-flex justify-content-start align-items-center'>
									<div>
										<Image
											src={avatar}
											alt={`Avatar of ${authedUser}`}
											fluid
											roundedCircle
											width='40'
											height='40'
											className='m-2'
										/>
									</div>
									<div>
										<span className='ms-3'>{name}</span>
									</div>
								</Container>
							</Nav.Link>
						)}

						<Nav.Link
							as={Link}
							to='#'
							onClick={handleClick}
							className='d-flex align-contents-center'>
							<span className='m-2 p-2'>Sign Out</span>
						</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		</Fragment>
	);
};

const mapStateToProps = ({ authedUser, users }) => {
	return {
		authedUser,
		users,
		user: users[authedUser],
	};
};

export default withRouter(connect(mapStateToProps)(Navigation));
