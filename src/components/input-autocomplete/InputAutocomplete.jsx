import React from "react";

import "./InputAutocomplete.css";

const InputAutocomplete = props => {
  //const [inputValue, setInputValue] = useState("");

  return (
    <div>
      <input
        type="text"
        value={props.value}
        onChange={event => props.onChange(event.target.value)}
      />
    </div>
  );
};

export default InputAutocomplete;
