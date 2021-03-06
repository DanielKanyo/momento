import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import img1 from '../../Images/coffino.png';

const styles = theme => ({
	paperTitle: {
		...theme.mixins.gutters(),
		paddingTop: 12,
		paddingBottom: 12,
		background: '#90482E',
		marginBottom: 14,
	},
	paperImg: {
		marginBottom: 14,
	}
});

class Coffino extends Component {
	render() {
		const { classes } = this.props;

		return (
			<div className="Content Coffino">
				<div className="component">
					<Paper className={classes.paperTitle + ' paper-component'} elevation={2}>
						<Typography variant="h5" component="h3">
							Coffino
        		</Typography>
					</Paper>

					<Paper className={classes.paperImg} elevation={2}>
						<img className="momento-img" src={img1} alt="coffino" width="100%" align="middle" />
					</Paper>
				</div>
			</div>
		);
	}
}

Coffino.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Coffino);