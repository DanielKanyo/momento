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
	}
});

class About extends Component {
	render() {
		const { classes } = this.props;

		return (
			<div className="Content About">
				<div className="component">
					<Paper className={classes.paperTitle + ' paper-component'} elevation={2}>
						<Typography variant="h5" component="h3">
							About Us
        		</Typography>
					</Paper>

					<Paper className={classes.paperText} elevation={2}>
						<div className="about-text-container">
							<p>
								Company Fruitica d.o.o. based in Čantavir, was founded in 1996 as the general
								representative of the German company WILD and since it’s founding has been engaged in
								importing and distributing industrial products for the needs of the production of food
								products and soft drinks (fruit and vegetable products, aromas, extracts, natural colors,
								concentrates, sweeteners, special ingredients).
							</p>
							<p>
								In 2002, the company expanded it’s activities to import and distribution of finished products.
							</p>
							<p>
								In 2008, HACCP and ISO 9001 standards were introduced.
							</p>
							<p>
								In 2010, the production of primary agricultural products started.
							</p>
							<p>
								In 2013,  the production of instant beverage powders began under the „Momento”
								brand (3in1, 2in1, hot chocolate, coffee powder, capuccino), and we also produce our own
								branded products for retail chains and wholesalers.
							</p>
							<p>
								For storage and distribution purposes, the company has a modern central storage
								space of 600 m², located in Chantavir near the E75 highway.
							</p>
						</div>
					</Paper>
				</div>
			</div>
		);
	}
}

About.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(About);