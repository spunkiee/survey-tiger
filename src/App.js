import React, { useState } from "react";
import Buttons from "./components/Buttons";
import Header from "./components/Header";
import MultipleTypeQuestion from "./components/MultipleTypeQuestion";
import QuestionType from "./components/QuestionType";
import SingleTypeQuestion from "./components/SingleTypeQuestion";

function App() {
  const [state, setState] = useState("Buttons");
  return (
    <>
      <Header />
      {state === "Buttons" && <Buttons setState={setState} />}
      {state !== "Buttons" && <QuestionType setState={setState} />}
      {state === "single" && <SingleTypeQuestion setState={setState} />}
      {state === "multi" && <MultipleTypeQuestion setState={setState} />}
    </>
  );
}

export default App;
