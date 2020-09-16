import React from "react";

export default function Footer2(props) {
  return (
    <div className="footer-container">
      <div>
        <button
          className="button-add"
          onClick={() => {
            props.setState("QuestionType");
          }}
        >
          Add Question
        </button>
        <button className="button-publish">Publish</button>
      </div>
    </div>
  );
}
