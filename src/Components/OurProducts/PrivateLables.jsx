import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import img1 from '../../Images/3_in1_classic_prikaz.jpg';
import img2 from '../../Images/160316_PRESSCOFFE_2in1.jpg';
import img3 from '../../Images/160316_PRESSCOFFE_3in1_14g.jpg';
import img4 from '../../Images/140316_FRUITICA_MIXCAFFE_CHOCOHAZELNUT_3in1.jpg';
import img5 from '../../Images/140316_FRUITICA_MIXCAFFE_STRONG_3in1.jpg';
import img6 from '../../Images/kesica2_in_1_RGB_za_net.png';
import img7 from '../../Images/kesica_3_in_1_RGB_za_net.png';
import img8 from '../../Images/kesica_2_in1_zaproveru.jpg';
import img9 from '../../Images/Gomex_PL_2u1_3u1_instant_kafa_tog.png';
import img10 from '../../Images/1-1_Instant_kafa_Korigovan_predlog_resenja.jpg';

const styles = theme => ({
	paperTitle: {
		...theme.mixins.gutters(),
		paddingTop: 12,
		paddingBottom: 12,
		background: '#90482E',
		marginBottom: 14,
	},
	paperImg1: {
		height: 200,
		padding: 10,
		display: 'flex',
		justifyContent: 'center'
	},
	paperImg2: {
		height: 200,
		padding: 10,
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center'
	}
});

class PrivateLables extends Component {
	render() {
		const { classes } = this.props;

		return (
			<div className="Content PrivateLables">
				<div className="component">
					<Paper className={classes.paperTitle + ' paper-component'} elevation={2}>
						<Typography variant="h5" component="h3">
							Private Lables
        		</Typography>
					</Paper>

					<Grid container spacing={16}>
						<Grid className={'grid'} item xs={4}>
							<Paper className={classes.paperImg2} elevation={2}>
								<img className="private-lables-img" src={img1} alt="momento_flajer" width="100%" align="middle" />
							</Paper>

						</Grid>
						<Grid className={'grid'} item xs={4}>
							<Paper className={classes.paperImg1} elevation={2}>
								<img className="private-lables-img" src={img2} alt="momento_classic" width="auto" height="100%" align="middle" />
							</Paper>
						</Grid>

						<Grid className={'grid'} item xs={4}>
							<Paper className={classes.paperImg1} elevation={2}>
								<img className="private-lables-img" src={img3} alt="momento_classic" height="100%" align="middle" />
							</Paper>
						</Grid>

						<Grid className={'grid'} item xs={4}>
							<Paper className={classes.paperImg2} elevation={2}>
								<img className="private-lables-img" src={img4} alt="momento_classic" width="100%" align="middle" />
							</Paper>
						</Grid>

						<Grid className={'grid'} item xs={4}>
							<Paper className={classes.paperImg2} elevation={2}>
								<img className="private-lables-img" src={img5} alt="momento_classic" width="100%" align="middle" />
							</Paper>
						</Grid>

						<Grid className={'grid'} item xs={4}>
							<Paper className={classes.paperImg2} elevation={2}>
								<img className="private-lables-img" src={img6} alt="momento_classic" width="100%" align="middle" />
							</Paper>
						</Grid>

						<Grid className={'grid'} item xs={4}>
							<Paper className={classes.paperImg2} elevation={2}>
								<img className="private-lables-img" src={img7} alt="momento_classic" width="100%" align="middle" />
							</Paper>
						</Grid>

						<Grid className={'grid'} item xs={4}>
							<Paper className={classes.paperImg2} elevation={2}>
								<img className="private-lables-img" src={img8} alt="momento_classic" width="100%" align="middle" />
							</Paper>
						</Grid>

						<Grid className={'grid'} item xs={4}>
							<Paper className={classes.paperImg1} elevation={2}>
								<img className="private-lables-img" src={img9} alt="momento_classic" height="100%" align="middle" />
							</Paper>
						</Grid>

						<Grid className={'grid'} item xs={4}>
							<Paper className={classes.paperImg1 + ' last-pl-img'} elevation={2}>
								<img className="private-lables-img" src={img10} alt="momento_classic" height="100%" align="middle" />
							</Paper>
						</Grid>

					</Grid>

				</div>
			</div>
		);
	}
}

PrivateLables.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PrivateLables);