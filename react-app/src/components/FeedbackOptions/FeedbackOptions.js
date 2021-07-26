import React from 'react';
import PropTypes from 'prop-types';
import styles from './FeedbackOptions.module.css';
import shortid from 'shortid';


const FeedbackOptions = ({ options, feedbackState }) => 
	
		{
	return (
	
	<div className={styles.feedbackOptions}>
			{options.map((option) => (
				<button key={shortid.generate()} type="button" name={option} className="button_Feedback" onClick={feedbackState}>
					{option}
				</button>
			))}
   </div >
);

	
}
	

	
FeedbackOptions.propTypes = {
	options: PropTypes.array.isRequired,
	feedbackState: PropTypes.func.isRequired
};

export default FeedbackOptions;







// // class FeedbackOptions extends React.Component{
// //     	state = {
// // 		good: 0,
// // 		neutral: 0,
// // 		bad: 0
// //     };
    
    
// //   feedbackGood = () => {
// //     this.setState(prevState => ({
// //       good: prevState.good + 1
// //     }));
// //     };
// //   feedbackNeutral = () => {
// //     this.setState(prevState => ({
// //       neutral: prevState.neutral + 1
// //     }));
// //     };
// //   feedbackBad = () => {
// //     this.setState(prevState => ({
// //       bad: prevState.bad + 1,
// //     }));
// //     };
// //   render() {
// //        const { good, neutral, bad } = this.state;
// //         return (
// //                 <div className="Contols">
// //                     <button type="button" name={good} className="button_Feedback" onClick={this.feedbackGood}>Good</button>
// //                     <button type="button" name={neutral} className="button_Feedback"onClick={this.feedbackNeutral}>Neutral</button>
// //                     <button type="button"name={bad} className="button_Feedback"onClick={this.feedbackBad}>Bad</button>

// //                 </div>
     
// //         )
// //     }

// }