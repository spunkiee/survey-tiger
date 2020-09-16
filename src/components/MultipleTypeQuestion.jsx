import React, { useState } from "react";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Footer2 from "./Footer2";

export default function MultipleTypeQuestion(props) {
  const [count, setCount] = useState(1);
  const [multipleInputs, setMultipleInputs] = useState({
    question: "",
    option1: "",
    option2: "",
    option3: "",
    option4: "",
  });

  const handleChange = (e) => {
    setMultipleInputs({
      ...multipleInputs,
      [e.target.name]: e.target.value,
    });
  };

  let rows = [];
  for (let i = 1; i <= count; i++) {
    rows.push(
      <InputGroup key={i} className="mb-3" style={{ width: "350px" }}>
        <FormControl placeholder={"Option " + i} name={"option" + i} />
        <InputGroup.Append>
          <InputGroup.Text
            className="cursor-property-multi"
            onClick={() => {
              if (count < 4) setCount(count + 1);
            }}
          >
            +
          </InputGroup.Text>
          <InputGroup.Text
            className="cursor-property-multi"
            onClick={() => {
              if (count > 1) setCount(count - 1);
            }}
          >
            -
          </InputGroup.Text>
        </InputGroup.Append>
      </InputGroup>
    );
  }
  return (
    <div>
      <div className="single-type-question">
        <InputGroup className="mb-3" style={{ width: "350px" }}>
          <InputGroup.Prepend>
            <InputGroup.Text id="basic-addon1">?</InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl
            placeholder="Which of the following apps you have ?"
            name="question"
            onChange={handleChange}
            value={multipleInputs.question}
          />
        </InputGroup>
      </div>
      <div className="options-container">
        <div className="options">Options:</div>
      </div>
      <div className="multiple-type-question">{rows}</div>
      {count === 4 && <Footer2 setState={props.setState} />}
    </div>
  );
}
