import React from "react";

const WelcomeMessage = (props) => {

  const { userName } = props;

  return (
    <div>
      <h6>Buenas noches</h6>
      <h4>{userName}</h4>
    </div>
  );
};

export default WelcomeMessage;
