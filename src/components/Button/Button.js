import React from "react";
import "../colors.css";
import "./Button.css";
import clsx from "clsx";

const Button = (props) => {
  const { text, size, outlined, icon, variant } = props;
  let currentClass = "";
  if (variant === "primary") {
    currentClass = "btn--primary";
  }
  if (variant === "secondary") {
    currentClass = "btn--secondary";
  }
  if (variant === "third") {
    currentClass = "btn--white";
  }
  if (outlined === "blue") {
    currentClass = clsx(currentClass, "outlined--blue");
  }
  if (outlined === "dark-gray") {
    currentClass = clsx(currentClass, "outlined--dark-grey");
  }
  if (outlined === "light-gray") {
    currentClass = clsx(currentClass, "outlined--light-grey");
  }
  if (outlined === "white") {
    currentClass = clsx(currentClass, "outlined--white");
  }
  if (size === "medium") {
    currentClass = clsx(currentClass, "medium");
  }
  if (size === "big") {
    currentClass = clsx(currentClass, "big");
  }
  return (
    <button className={clsx(currentClass, "btn", "btn--inner")}>
      {icon}
      {text}
    </button>
  );
};
export default Button;
