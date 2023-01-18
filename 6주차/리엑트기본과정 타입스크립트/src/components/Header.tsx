import React from "react";

interface headerType {
  children: string;
}

function Header({ children }: headerType) {
  return <header className="Header">{children}</header>;
}

export default Header;
