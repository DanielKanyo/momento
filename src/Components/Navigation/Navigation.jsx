import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Fab from '@material-ui/core/Fab';
import MenuIcon from '@material-ui/icons/Menu';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import { Link } from 'react-router-dom';
import * as routes from '../../Constants/routes';

const styles = theme => ({
	listContainer: {
		width: 250,
	},
	fullList: {
		width: 'auto',
	},
	fab: {
		margin: 30,
		position: 'absolute',
		zIndex: 10,
		right: 0
	},
	list: {
		width: '100%',
		maxWidth: '360px',
		backgroundColor: theme.palette.background.paper,
	},
	subList: {
		background: '#f4f4f4',
	},
	subListItem: {
		paddingLeft: 36
	},
	arrowIcon: {
		color: 'grey',
		transition: '0.2s'
	}
});

const theme = createMuiTheme({
	typography: {
		useNextVariants: true,
	},
	palette: {
		primary: {
			main: '#90482E',
		}
	}
});

class Navigation extends React.Component {
	state = {
		open: false,
	};

	toggleDrawer = (open) => () => {
		this.setState({
			open: open,
		});
	};

	toggleSubList = (listNum) => {
		const list = document.querySelector(`[row="${listNum}"]`);
		const arrow = document.querySelector(`[arrow="${listNum}"]`);

		if (list.classList.contains('hidden-list')) {
			list.classList.remove('hidden-list');
			arrow.classList.remove('rotate');
		} else {
			list.classList.add('hidden-list');
			arrow.classList.add('rotate');
		}

	}

	render() {
		const { classes } = this.props;

		const sideList = (
			<div className={classes.listContainer}>
				<List component="nav" className={classes.list}>

					<ListItem component={Link} to={routes.HOME} onClick={this.toggleDrawer(false)} button>
						<ListItemText primary="Home" />
					</ListItem>

					<Divider />

					<ListItem component={Link} to={routes.HISTORY} onClick={this.toggleDrawer(false)} button>
						<ListItemText primary="History of coffee" />
					</ListItem>

					<Divider />

					<ListItem button divider onClick={() => { this.toggleSubList(0) }}>
						<ListItemText primary="Our Products" />
						<KeyboardArrowDownIcon arrow={0} className={classes.arrowIcon + ' rotate'} />
					</ListItem>

					<List component="nav" row={0} className={classes.subList + ' hidden-list'}>
						<ListItem className={classes.subListItem} onClick={this.toggleDrawer(false)} button>
							<ListItemText primary="Momento" />
						</ListItem>
						<ListItem className={classes.subListItem} onClick={this.toggleDrawer(false)} button>
							<ListItemText primary="Coffino" />
						</ListItem>
						<ListItem className={classes.subListItem} onClick={this.toggleDrawer(false)} button>
							<ListItemText primary="Private Lables" />
						</ListItem>
					</List>

					<ListItem onClick={this.toggleDrawer(false)} button>
						<ListItemText primary="Why Momento?" />
					</ListItem>

					<Divider light />

					<ListItem onClick={this.toggleDrawer(false)} button>
						<ListItemText primary="Contact Us" />
					</ListItem>
				</List>
			</div>
		);

		return (
			<div>
				<MuiThemeProvider theme={theme}>
					<Fab onClick={this.toggleDrawer(true)} color="primary" aria-label="Add" className={classes.fab}>
						<MenuIcon />
					</Fab>
					<Drawer anchor="right" open={this.state.open} onClose={this.toggleDrawer(false)}>
						<div
							tabIndex={0}
							role="button"
						>
							{sideList}
						</div>
					</Drawer>
				</MuiThemeProvider>
			</div>
		);
	}
}

Navigation.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Navigation);