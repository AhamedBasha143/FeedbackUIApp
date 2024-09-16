import React from "react";
import Card from "./shared/Card";
import { useState, useContext, useEffect } from "react";
import Button from "./Button";
import RatingSelect from "./RatingSelect";
import FeedbackContext from "./context/FeedbackContentx";
import { setSelectionRange } from "@testing-library/user-event/dist/utils";

function FeedbackForm() {
  const { addFeedback, feedbackEdit,updateFeedback } = useContext(FeedbackContext);
  useEffect(() => {
    if (feedbackEdit.edit === true) {
      setText(feedbackEdit.item.text);
      setRating(feedbackEdit.item.rating);
      setbtnDisabled(false)
    }
  }, [feedbackEdit]);

  const [text, setText] = useState("");
  const [btnDisabled, setbtnDisabled] = useState(true);
  const [message, setMessage] = useState("");
  const [rating, setRating] = useState("");

  const handleTextChange = function (e) {
    const enteredValue = e.target.value;
    if (enteredValue === "") {
      setMessage(null);
      setbtnDisabled(true);
    } else if (enteredValue !== "" && enteredValue.trim().length <= 10) {
      setMessage("Text lenght at least 10 characters.");
      setbtnDisabled(true);
    } else {
      setMessage(null);
      setbtnDisabled(false);
    }
    setText(enteredValue);
  };

  const handleSubmit = function (e) {
    e.preventDefault();
    if (text.trim().length > 10) {
      const newFeedback = {
        text,
        rating,
      };
      if (feedbackEdit.edit === true) {
        updateFeedback(feedbackEdit.item.id,newFeedback);
      } else{
        addFeedback(newFeedback);
      }
      
      setText("");
      setbtnDisabled(true);
    }
  };

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>how would you rate your service with us?</h2>
        <RatingSelect select={(rating) => setRating(rating)} />
        <div className="input-group">
          <input
            onChange={handleTextChange}
            type="text"
            placeholder="Write a review"
            value={text}
          />
          <Button type="submit" isDisabled={btnDisabled}>
            Send
          </Button>
        </div>
        {message && <div className="message">{message}</div>}
      </form>
    </Card>
  );
}

export default FeedbackForm;
