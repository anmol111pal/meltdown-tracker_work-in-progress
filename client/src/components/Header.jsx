import React from "react";
import "./Header.css"

const Header = (props) => {
  const { className, text } = props;
  
  return (
    <div className={ className }>
      <h1>{ text }</h1>
    </div>
  )
};

Header.defaultProps = {
  className: "",
  text: "",
};

export default Header;