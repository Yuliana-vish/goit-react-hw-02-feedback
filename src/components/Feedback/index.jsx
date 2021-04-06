import { Component } from 'react';
import Statistics from '../Statistics';
import Notification from '../Notification';
import Section from '../Section';
import FeedbackOption from '../Feedback/FeedbackOptoin';
import './Feedback.css';


class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  addFeedback = event => {
    this.setState(prevState => ({
      [event.target.name]: prevState[event.target.name] + 1,
    }));
  };

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };

  countPositiveFeedbackPercentage = () => {
    return Math.floor((this.state.good / this.countTotalFeedback()) * 100);
  };
  render() {
    return (
      <>
        <FeedbackOption onLeaveFeedback={this.addFeedback} />

        <Section title="Statistics">
          {this.countTotalFeedback() > 0 ? (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            ></Statistics>
          ) : (
            <Notification title={'No feedback given'} />
          )}
        </Section>
      </>
    );
  }
}
export default Feedback;