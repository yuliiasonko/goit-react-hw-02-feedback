import Statistics from './components/Statistics/Statistics';
import Section from './components/Section/Section';
import Notification from './components/Notification/Notification';
import FeedbackOptions from './components/FeedbackOptions/FeedbackOptions';
import React, { Component } from 'react';
import './App.css';
// import FeedbackOptions from './components/FeedbackOptions/FeedbackOptions';
// import Section from './components/Section/Section';

export default class App extends Component {
	state = {
		good: 0,
		neutral: 0,
		bad: 0
  };
  
  feedbackState = (e) => {
		const name = e.target.name;
		this.setState((prevState) => ({
			[name]: prevState[name] + 1
		}));
	};
  countTotalFeedback = () => {
		const { good, neutral, bad } = this.state;
    const totalFeedback = good + neutral + bad;
		return totalFeedback;
	};

	countPositiveFeedbackPercentage = () => {
		const result = this.countTotalFeedback();
		const { good } = this.state;
		const percentage = (good * 100) / result;
		return Math.round(percentage);
	};

  render() {
    const { good, neutral, bad } = this.state;
		const total = this.countTotalFeedback();
		const positivePercentage = this.countPositiveFeedbackPercentage();
		const objKey = Object.keys(this.state);
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={objKey}
            feedbackState={this.feedbackState} />
				</Section>

        {total === 0 ? (
          <Notification message="No feedback given" />
        ) : (
          <Section title="Statistics">
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={positivePercentage}
            />
          </Section>
        )}
      </>
    );
}
}

    // {/* <FeedbackOptions
    //   options={""}
    //   onLeaveFeedback={""} />
   
    // <Section
    //   // title="UPLOAD STATS" stats={statistica}
    //   title=""
    // /> */}