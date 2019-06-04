import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import img1 from '../../Images/low_carb_1.jpg';
import img2 from '../../Images/low_carb_2.jpg';
import img3 from '../../Images/low_carb_hot_chocolate.jpg';


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

export class Innovations extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div className="Content Innovations">
        <div className="component">
          <Paper className={classes.paperTitle + ' paper-component'} elevation={2}>
            <Typography variant="h5" component="h3">
              Innovations
        		</Typography>
          </Paper>

          <Paper className={classes.paperImg} elevation={2}>
            <img className="momento-img" src={img1} alt="innovations" width="100%" align="middle" />
          </Paper>
          <Paper className={classes.paperImg} elevation={2}>
            <img className="momento-img" src={img2} alt="innovations" width="100%" align="middle" />
          </Paper>
          <Paper className={classes.paperImg} elevation={2}>
            <img className="momento-img" src={img3} alt="innovations" width="100%" align="middle" />
          </Paper>
        </div>
      </div>
    )
  }
}

Innovations.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Innovations);
