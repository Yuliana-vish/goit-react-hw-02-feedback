const FeedbackOption = ({ onLeaveFeedback }) => {
    
  return (
    <section>
      <button
        type="button"
        name="good"
        onClick={onLeaveFeedback}
        className="btn"
      >
        Good
      </button>
      <button
        type="button"
        name="neutral"
        onClick={onLeaveFeedback}
        className="btn"
      >
        Neutral
      </button>
      <button
        type="button"
        name="bad"
        onClick={onLeaveFeedback}
        className="btn"
      >
        Bad
      </button>
    </section>
  );
};

export default FeedbackOption;
