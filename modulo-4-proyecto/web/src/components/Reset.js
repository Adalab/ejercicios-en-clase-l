import React from "react";

const Reset = (props) => {
  const handleReset = () => {
    props.handleReset();
  };

  return (
    <button className="btn gen-main__btn--reset js-reset" onClick={handleReset}>
      Reset
    </button>
  );
};
export default Reset;
