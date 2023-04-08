import { useState } from "react";
import { Section } from "components/Section";
import { FeedbackOptions } from "components/FeedbackOptions";
import { Statistics } from "components/Statistics";
import { Notification } from "components/Notification";

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const feedbackOptions = { good, neutral, bad };

  const leaveFeedback = (el) => {
    if (el === "good") {
      setGood((prevState) => prevState + 1);
    }
    if (el === "neutral") {
      setNeutral((prevState) => prevState + 1);
    }
    if (el === "bad") {
      setBad((prevState) => prevState + 1);
    }
  };

  const total = Object.keys(feedbackOptions).reduce(
    (total, key) => (total += feedbackOptions[key]),
    0
  );

  const percentage = total ? Math.round((good / total) * 100) : 0;

  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={Object.keys(feedbackOptions)}
          onLeaveFeedback={leaveFeedback}
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
};

export { App };
