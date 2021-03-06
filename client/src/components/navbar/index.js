import React, { useState } from 'react';
import './index.css';
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';
import Avatar from '@material-ui/core/Avatar';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import logo from '../../logo/apple-touch-icon.png';
import LiveLyTitle from '../../logo/Live.ly-logo.png';
import profilepic from '../../logo/profilepic.png';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import VideocamIcon from '@material-ui/icons/Videocam';
import EventNoteIcon from '@material-ui/icons/EventNote';

const useStyles = makeStyles((theme) => ({
	grow: {
		flexGrow: 1
	},
	menuButton: {
		marginRight: theme.spacing(2)
	},
	title: {
		display: 'none',
		[theme.breakpoints.up('sm')]: {
			display: 'block'
		},

		textAlign: 'left'
	},
	root: {
		flexGrow: 1
	},
	menuButton: {
		marginRight: theme.spacing(2)
	},
	title: {
		flexGrow: 1
	},
	link: {
		padding: '0px 20px 0px 20px',
		fontSize: '10px'
	},
	search: {
		position: 'relative',
		borderRadius: theme.shape.borderRadius,
		backgroundColor: fade(theme.palette.common.black, 0.15),
		'&:hover': {
			backgroundColor: fade(theme.palette.common.black, 0.25)
		},
		marginRight: theme.spacing(2),
		marginLeft: 0,
		width: '100%',
		[theme.breakpoints.up('sm')]: {
			marginLeft: theme.spacing(55),
			width: 'auto'
		}
	},
	searchIcon: {
		padding: theme.spacing(0, 2),
		height: '100%',
		position: 'absolute',
		pointerEvents: 'none',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center'
	},
	inputRoot: {
		color: 'inherit'
	},
	inputInput: {
		padding: theme.spacing(1, 1, 1, 0),
		// vertical padding + font size from searchIcon
		paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
		transition: theme.transitions.create('width'),
		width: '100%',
		[theme.breakpoints.up('md')]: {
			width: '20ch'
		}
	},
	sectionDesktop: {
		display: 'none',
		[theme.breakpoints.up('md')]: {
			display: 'flex'
		}
	},
	sectionMobile: {
		display: 'flex',
		[theme.breakpoints.up('md')]: {
			display: 'none'
		}
	},
	root1: {
		display: 'flex',
		width: '90'

		// '& > *' : {
		// 	margin : theme.spacing(1)
		// }
	},
	small: {
		width: theme.spacing(3),
		height: theme.spacing(3)
	},
	large: {
		width: theme.spacing(7),
		height: theme.spacing(7)
	},
	iconcolor: {
		fill: 'white'
	}
}));

function PrimarySearchAppBar(props) {
	const { user, logout } = props;
	const classes = useStyles();
	const searchbar = { artist: '' };
	const [users, setUser] = React.useState(searchbar);
	const [anchorEl, setAnchorEl] = React.useState(null);
	const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
	const isMenuOpen = Boolean(anchorEl);
	const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
	const handleChange = (prop) => (event) => {
		setUser({ ...users, [prop]: event.target.value });
		console.log('searching for: ', users.artist)
	}

	const handleProfileMenuOpen = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleMobileMenuClose = () => {
		setMobileMoreAnchorEl(null);
	};

	const handleMenuClose = () => {
		setAnchorEl(null);
		handleMobileMenuClose();
	};

	const handleMobileMenuOpen = (event) => {
		setMobileMoreAnchorEl(event.currentTarget);
	};

	const menuId = 'primary-search-account-menu';
	const renderMenu = (
		<Menu
			anchorEl={anchorEl}
			anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
			id={menuId}
			keepMounted
			transformOrigin={{ vertical: 'top', horizontal: 'right' }}
			open={isMenuOpen}
			onClose={handleMenuClose}
		>
			<MenuItem onClick={handleMenuClose}>Profile</MenuItem>
			{/* <MenuItem onClick={handleMenuClose}>My account</MenuItem> */}
		</Menu>
	);

	const mobileMenuId = 'primary-search-account-menu-mobile';
	const renderMobileMenu = (
		<Menu
			anchorEl={mobileMoreAnchorEl}
			anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
			id={mobileMenuId}
			keepMounted
			transformOrigin={{ vertical: 'top', horizontal: 'right' }}
			open={isMobileMenuOpen}
			onClose={handleMobileMenuClose}
		>
			<MenuItem>
				<IconButton color="action">
					<Link to="/golive">
						<VideocamIcon color="action" />
						{/* <p>Go Live!</p> */}
					</Link>
				</IconButton>
			</MenuItem>
			<MenuItem>
				<IconButton color="action">
					<Link to="/schedule">
						<EventNoteIcon color="action" />
						{/* <p>Create Event</p> */}
					</Link>
				</IconButton>
			</MenuItem>
			<MenuItem>
				<IconButton color="action">
					<ExitToAppIcon
						color="action"
						onClick={() => { logout() }} />
					{/* <p>Create Event</p> */}
				</IconButton>
			</MenuItem>

			<MenuItem onClick={handleProfileMenuOpen}>
				<IconButton
					edge="end"
					aria-label="account of current user"
					aria-controls={menuId}
					aria-haspopup="true"
					// onClick={handleProfileMenuOpen}
					color="inherit"
				>
					<Link to="/Profile">
						<Avatar alt="profile" src={user.avatarURL} className={classes.small} />
					</Link>
				</IconButton>
			</MenuItem>
		</Menu>
	);

	return (
		<div className={classes.grow}>
			<AppBar position="static">
				<Toolbar>
					<div className={classes.root1}>
						<Link to="/">
							<Avatar alt="Lively logo" className="logo-title" src={logo} />
						</Link>
						<Link to="/">
							<Avatar
								alt="Lively title"
								className="logo-title"
								src={LiveLyTitle}
							/>
						</Link>
					</div>

					<div className={classes.search}>
						<div className={classes.searchIcon}>
							<SearchIcon />
						</div>
						<InputBase
							placeholder="Search…"
							onChange={handleChange('artist')}
							classes={{
								root: classes.inputRoot,
								input: classes.inputInput
							}}
							inputProps={{ 'aria-label': 'search' }}
						/>
					</div>

					<div className={classes.grow} />
					<div className={classes.sectionDesktop}>
						{(user.role != 0) ? (<IconButton color="action">
							<Link to="/schedule">
								<EventNoteIcon color="action" className={classes.large} />
							</Link>
						</IconButton>) : ""}

						<IconButton color="action">
							<Link to="/golive">
								<VideocamIcon color="action" className={classes.large} />
							</Link>
						</IconButton>

						<IconButton
							edge="end"
							aria-label="account of current user"
							aria-controls={menuId}
							aria-haspopup="true"
							// onClick={handleProfileMenuOpen}
							color="inherit"
						>
							<Link to="/Profile">
								<div className={classes.root}>
									<Avatar
										alt="profile"
										src={user.avatarURL}
										className={classes.small}
									/>
								</div>
							</Link>
						</IconButton>
						<IconButton color="action">
							<ExitToAppIcon
								color="action"
								onClick={() => { logout() }} />
							{/* <p>Create Event</p> */}
						</IconButton>

						{/* <IconButton aria-label="logout" color="white">
							<Link to="/SignUp">
								<ExitToAppIcon />
							</Link>
						</IconButton> */}
					</div>
					<div className={classes.sectionMobile}>
						<IconButton
							aria-label="show more"
							aria-controls={mobileMenuId}
							aria-haspopup="true"
							onClick={handleMobileMenuOpen}
						// color="inherit"
						>
							<MoreIcon />
						</IconButton>
					</div>
				</Toolbar>
			</AppBar>
			{renderMobileMenu}
			{renderMenu}
		</div>
	);
}

export default PrimarySearchAppBar