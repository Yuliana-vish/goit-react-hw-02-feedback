import PropTypes from 'prop-types';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  item: {
    fontWeight: 600, 
    marginLeft: 5,   
  },
  
  result: {
    marginLeft: 5,
  },
});

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  const classes = useStyles();
  
  return (
    <ul>
      <li className={classes.item}>
        Good:<span className={classes.result}>{good}</span>
      </li>
      <li className={classes.item}>
        Neutral:<span className={classes.result}>{neutral}</span>
      </li>
      <li className={classes.item}>
        Bad:<span className={classes.result}>{bad}</span>
      </li>
      <li className={classes.item}>
        Total:<span className={classes.result}>{total}</span>
      </li>
      <li className={classes.item}>
        Positive feedback:
        <span className={classes.result}>{positivePercentage}%</span>
      </li>
    </ul>
  )
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;