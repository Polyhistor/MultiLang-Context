import React from "react";
import Field from "./Field";
import Button from "./Button";

const UserCreate = () => {
  return (
    <div className="ui form">
      {/* as much functional components as you possibly can. That's the rule my
      friend */}
      <Field />
      <Button />
    </div>
  );
};

export default UserCreate;
