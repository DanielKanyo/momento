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
		firstSublist: false,
	};

	toggleDrawer = (open) => () => {
		this.setState({
			open: open,
		});
	};

	toggleSubList = (name) => {
		this.setState(state => ({ [name]: !state.firstSublist }))
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

					<ListItem button divider onClick={() => { this.toggleSubList('firstSublist') }}>
						<ListItemText primary="Our Products" />
						<KeyboardArrowDownIcon arrow={0} className={classes.arrowIcon + (this.state.firstSublist ? ' rotate' : '')} />
					</ListItem>

					<List component="nav" row={0} className={'subList ' + (this.state.firstSublist ? '' : 'hidden-list')}>
						<ListItem
							component={Link}
							to={routes.MOMENTO}
							className={classes.subListItem}
							onClick={this.toggleDrawer(false)}
							button
						>
							<ListItemText primary="Momento" />
						</ListItem>
						<ListItem
							component={Link}
							to={routes.COFFINO}
							className={classes.subListItem}
							onClick={this.toggleDrawer(false)}
							button
						>
							<ListItemText primary="Coffino" />
						</ListItem>
						<ListItem
							component={Link}
							to={routes.PRIVATELABLES}
							className={classes.subListItem}
							onClick={this.toggleDrawer(false)}
							button
						>
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
					<Fab onClick={this.toggleDrawer(true)} color="primary" aria-label="Add" className={classes.fab + ' menu-btn'}>
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