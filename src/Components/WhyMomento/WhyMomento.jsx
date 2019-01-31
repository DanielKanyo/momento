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

class WhyMomento extends Component {
	render() {
		const { classes } = this.props;

		return (
			<div className="Content WhyMomento">
				<div className="component">
					<Paper className={classes.paperTitle + ' paper-component'} elevation={2}>
						<Typography variant="h5" component="h3">
							Why Momento?
        		</Typography>
					</Paper>

					<Paper className={classes.paperText} elevation={2}>
						<div className="whymomento-text-container">
							<p>
								Our mission is to continuously and consistently meet the needs of consumers and
								business partners, to provide an environment in which our employees will strive for success
								in an atmosphere that encourages their development, to improve the way of life and work for
								the benefit of the society in which we live our daily lives.
							</p>
							<br />
							<p>
								Product Quality and Security Policy
							</p>
							<br />
							<p>
								Only satisfied customers return to their purchase. Regular purchase of our products
								ensures the long – term survival of the company "Fruitica d.o.o." and, therefore, a
								stable and existential basis for all the employees in the company.
							</p>
							<p>
								Therefore, satisfaction not only demands, but also unpublished user expectations of
								the users. Quality assurance and product safety is a priority obligation of employees at all
								levels of activity at Fruitica doo.
							</p>
							<p>
								The achievement of these goals is achieved through the implementation of the quality
								management system and the safety of products in accordance with the requirements of ISO
								9001: 2008, BRC Global Standard for Food Safety Issue 5: 2008 and HACCP by CAC / RCP
								1-1969, Rev. 4-2003, which means:
							</p>
							<div>
								<ul>
									<li>
										compliance with all relevant regulations regarding business operations;
									</li>
									<li>
										the responsibility of the management to determine such business goals that support
										that commitment, and to provide such an internal environment, in which employees
										can fully participate in achieving business goals of the company;
									</li>
									<li>
										inclusion of all employees in achieving company goals;
									</li>
									<li>
										a constant desire to discover and meet the demands and expectations of the users in
										order to satisfy them;
									</li>
									<li>
										understanding and managing activities as processes;
									</li>
									<li>
										understanding, appreciating and using interconnections of different processes,
										systematic approach in more efficient and effective achievement of goals;
									</li>
									<li>
										conscious and continuous work on improving both the safety and quality of products
										as well as the overall performance of the organization;
									</li>
									<li>
										decision making based on facts;
									</li>
									<li>
										building mutually beneficial, partner relationships with suppliers.
									</li>
								</ul>
							</div>
							<br />
							<div className="whymomento-bottom-text">
								<p>General director and founder: Istvan Berenyi</p>
								<p>Čantavir, September 25, 2008</p>
							</div>
						</div>
					</Paper>
				</div>
			</div>
		);
	}
}

WhyMomento.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(WhyMomento);