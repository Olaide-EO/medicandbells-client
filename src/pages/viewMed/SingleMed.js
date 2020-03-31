import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import { Card, CardContent, Grid, Typography, Avatar } from '@material-ui/core';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import MoneyIcon from '@material-ui/icons/Money';
import PlaylistPlayIcon from '@material-ui/icons/PlaylistPlay';
import TimerOffIcon from '@material-ui/icons/TimerOff';
import Container from '@material-ui/core/Container';


const styles = (theme) => ({
  mainRoot: {
    padding: theme.spacing(4)
  },
  root: {
    height: '100%',

  },
  content: {
    alignItems: 'center',
    display: 'flex'
  },
  title: {
    fontWeight: 700
  },
  avatar: {
    backgroundColor: theme.palette.error.main,
    height: 56,
    width: 56
  },
  icon: {
    height: 32,
    width: 32
  },
  difference: {
    marginTop: theme.spacing(2),
    display: 'flex',
    alignItems: 'center'
  },
  differenceIcon: {
    color: theme.palette.error.dark
  },
  differenceValue: {
    color: theme.palette.error.dark,
    marginRight: theme.spacing(1)
  }
});

class SingleMed extends React.Component{

  render(){
  const { classes, className, ...rest } = this.props;

  

  return (
     <Container className={classes.root} component="main" maxWidth="xs">
      

    <Card
      {...rest}
      className={clsx(classes.root, className)}
    >
      <CardContent>
        <Grid
          container
          justify="space-between"
        >
          <Grid item>
            <Typography
              className={classes.title}
              color="textSecondary"
              gutterBottom
              variant="body2"
            >
              BUDGET
            </Typography>
            <Typography variant="h3">$24,000</Typography>
          </Grid>
          <Grid item>
            <Avatar className={classes.avatar}>
              <PlaylistPlayIcon className={classes.icon} />
            </Avatar>
          </Grid>
        </Grid>
        <div className={classes.difference}>
          <ArrowDownwardIcon className={classes.differenceIcon} />
          <Typography
            className={classes.differenceValue}
            variant="body2"
          >
            12%
          </Typography>
          <Typography
            className={classes.caption}
            variant="caption"
          >
            Since last month
          </Typography>
        </div>
      </CardContent>
    </Card>
    </Container>
  );
}
};

SingleMed.propTypes = {
  className: PropTypes.string
};

export default withStyles(styles)(SingleMed);
