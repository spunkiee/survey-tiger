import React, { useState } from "react";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Footer from "./Footer";

export default function SingleTypeQuestion(props) {
  const [inputs, setInputs] = useState({
    question: "",
    option1: "",
    option2: "",
  });

  const handleChange = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <div className="single-type-question">
        <InputGroup className="mb-3" style={{ width: "350px" }}>
          <InputGroup.Prepend>
            <InputGroup.Text id="basic-addon1">?</InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl
            name="question"
            placeholder="Do you have LinkedIn account ?"
            onChange={handleChange}
            value={inputs.question}
          />
        </InputGroup>
      </div>
      <div className="single-type-question">
        <InputGroup className="mb-3" style={{ width: "350px" }}>
          <FormControl
            placeholder="Yes"
            name="option1"
            onChange={handleChange}
            value={inputs.option1}
          />
          <InputGroup.Append>
            <InputGroup.Text className="cursor-property">+</InputGroup.Text>
            <InputGroup.Text className="cursor-property">-</InputGroup.Text>
          </InputGroup.Append>
        </InputGroup>
        <InputGroup className="mb-3" style={{ width: "350px" }}>
          <FormControl
            placeholder="No"
            name="option2"
            onChange={handleChange}
            value={inputs.option2}
          />
          <InputGroup.Append>
            <InputGroup.Text className="cursor-property">+</InputGroup.Text>
            <InputGroup.Text className="cursor-property">-</InputGroup.Text>
          </InputGroup.Append>
        </InputGroup>
      </div>
      <Footer inputs={inputs} setInputs={setInputs} setState={props.setState} />
    </div>
  );
}
