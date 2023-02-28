import React from "react";
import ui from './index.module.css';

const WelcomeMessage = (props) => {

  const { userName } = props;
  const { welcomeContainer } = ui;

  return (
    <div className={welcomeContainer}>
      <h6>Buenas noches</h6>
      <h4>{userName}</h4>
    </div>
  );
};

export default WelcomeMessage;
