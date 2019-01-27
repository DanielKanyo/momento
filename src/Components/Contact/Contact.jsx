import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
	paperTitle: {
		...theme.mixins.gutters(),
		paddingTop: 12,
		paddingBottom: 12,
		background: '#90482E',
		marginBottom: 14,
	},
	paperText: {
		marginBottom: 14,
		padding: 15,
	},
	link: {
		textDecoration: 'none',
		color: '#90482E'
	}
});

class Contact extends Component {
	render() {
		const { classes } = this.props;

		return (
			<div className="Content Contact">
				<div className="component">
					<Paper className={classes.paperTitle + ' paper-component'} elevation={2}>
						<Typography variant="h5" component="h3">
							Contact Us
        		</Typography>
					</Paper>

					<Paper className={classes.paperText} elevation={2}>
						<Typography variant="subtitle1" gutterBottom>
							<ul>
								<li> 
									<a className={classes.link} target="_blank" rel="noopener noreferrer" href="https://fruitica.rs">FRUITICA d.o.o.</a> 
								</li>
								<li>Trg Republike 7</li>
								<li>24220 Čantavir, Serbia</li>
							</ul>
							<ul>
								<li>tel: +381 24 782 600</li>
								<li>mail: office@fruitica.info</li>
							</ul>
						</Typography>
					</Paper>
				</div>
			</div>
		);
	}
}

Contact.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Contact);