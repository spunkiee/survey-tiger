import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 250,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function QuestionType(props) {
  const classes = useStyles();
  const [questionType, setQuestionType] = React.useState("");

  const handleChange = (event) => {
    setQuestionType(event.target.value);
    props.setState(event.target.value);
  };

  return (
    <div className="question-type">
      <FormControl variant="filled" className={classes.formControl}>
        <InputLabel id="demo-simple-select-filled-label">
          Select Question Type
        </InputLabel>
        <Select
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
          value={questionType}
          onChange={handleChange}
        >
          <MenuItem value={"multi"}>Multi-Select</MenuItem>
          <MenuItem value={"single"}>Single-Select</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
