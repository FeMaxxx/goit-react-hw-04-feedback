import { Component } from "react";
import { Section } from "components/Section";
import { FeedbackOptions } from "components/FeedbackOptions";
import { Statistics } from "components/Statistics";
import { Notification } from "components/Notification";

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  leaveFeedback = (el) => {
    this.setState((prevState) => ({
      [el]: prevState[el] + 1,
    }));
  };

  totalFeedback = () => {
    return Object.keys(this.state).reduce(
      (total, key) => (total += this.state[key]),
      0
    );
  };

  positivePercentage = () => {
    const total = this.totalFeedback();

    return total ? Math.round((this.state.good / total) * 100) : 0;
  };

  render() {
    const total = this.totalFeedback();
    const percentage = this.positivePercentage();
    const { good, neutral, bad } = this.state;

    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.leaveFeedback}
          />
        </Section>
        <Section title="Statistics">
          {total ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={percentage}
            ></Statistics>
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </>
    );
  }
}

export { App };
