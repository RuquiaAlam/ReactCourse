import React, { useState } from "react";

const ComponetLifeCycle = () => {
  const [text, setText] = useState("");
  const handleChange = (e) => {
    setText(e.target.value);
  };
  return (
    <div>
      <input type="text" onChange={handleChange} />
      {text}
      <h1>{text}</h1>
      <button>New</button>
    </div>
  );
};

export default ComponetLifeCycle;
