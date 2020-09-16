import React from "react";

export default function Footer(props) {
  return (
    <div className="footer-container">
      <div>
        <button
          className="button-add"
          onClick={() => {
            console.log(props.inputs);
            props.setInputs({
              question: "",
              option1: "",
              option2: "",
            });
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
