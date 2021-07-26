import React from 'react';
import PropTypes from 'prop-types';
import styles from './Statistics.module.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
    <div className={styles.statistics}>

        <ul className={styles.stat_list}>
            
      <li>
        <span className={styles.stat_list_item}>Good:{good}</span>
            </li>

      <li>
                <span className={styles.stat_list_item}>Neutral:{neutral}</span>
            </li>
            
      <li>
                <span className={styles.stat_list_item}>Bad:{bad}</span>
            </li>
            
      <li>
                <span className={styles.stat_list_item}>Total:{total}</span>
            </li>

      <li>
                <span className={styles.stat_list_item}>PositivePercentage:{positivePercentage}</span>
            </li>
   
    </ul>   

    </div>
);

Statistics.propTypes = {
	good: PropTypes.number.isRequired,
	neutral: PropTypes.number.isRequired,
	bad: PropTypes.number.isRequired,
	total: PropTypes.number.isRequired,
	positivePercentage: PropTypes.number.isRequired
};


export default Statistics;