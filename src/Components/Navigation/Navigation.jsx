import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Fab from '@material-ui/core/Fab';
import MenuIcon from '@material-ui/icons/Menu';

const styles = {
	list: {
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
};

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
		right: false,
	};

	toggleDrawer = (side, open) => () => {
		this.setState({
			[side]: open,
		});
	};

	render() {
		const { classes } = this.props;

		const sideList = (
			<div className={classes.list}>
				Razvijanje web stranice je u toku…
      </div>
		);

		return (
			<div>
				<MuiThemeProvider theme={theme}>
					<Fab onClick={this.toggleDrawer('right', true)} color="primary" aria-label="Add" className={classes.fab}>
						<MenuIcon />
					</Fab>
					<Drawer anchor="right" open={this.state.right} onClose={this.toggleDrawer('right', false)}>
						<div
							tabIndex={0}
							role="button"
							onClick={this.toggleDrawer('right', false)}
							onKeyDown={this.toggleDrawer('right', false)}
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