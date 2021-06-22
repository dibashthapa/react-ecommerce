import React from "react";

const Header: React.FC<{}> = ({ children }) => {
  return <header className="top-header">{children}</header>;
};

export default Header;
