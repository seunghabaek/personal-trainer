import React from "react";
import { firebaseInstance } from "../firebase";

export const Auth = () => {
  const onSocialClick = (event: any) => {
    console.log(event);
  };

  return (
    <div>
      <button onClick={onSocialClick}></button>
    </div>
  );
};
