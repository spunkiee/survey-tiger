import React from "react";

export default function Buttons(props) {
  return (
    <div>
      <div className="buttons-container">
        <button
          className="button-create"
          onClick={() => props.setState("QuestionType")}
        >
          Create Surway
        </button>
        <button className="button-take">Take Surway</button>
      </div>
    </div>
  );
}
