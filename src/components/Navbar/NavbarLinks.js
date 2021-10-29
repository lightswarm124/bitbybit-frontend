import React from "react";
import styled from "@emotion/styled";

const NavItem = styled("a")`
  text-decoration: none;
  color: white;
  display: inline-block;
  white-space: nowrap;
  margin: 0 1vw;
  transition: all 200ms ease-in;
  position: relative;
  :after {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    width: 0%;
    content: ".";
    color: transparent;
    background: #01affb;
    height: 1px;
    transition: all 0.4s ease-in;
  }
  :hover {
    color: #01affb;
    ::after {
      width: 100%;
    }
  }
  @media (max-width: 768px) {
    padding: 20px 0;
    font-size: 1.5rem;
    z-index: 6;
  }
`;
const NavbarLinks = () => {
  return (
    <>
      <NavItem href="#about">About</NavItem>
      <NavItem href="#charity">Charity</NavItem>
      <NavItem href="#roadmap">Roadmap</NavItem>
      <NavItem href="#tokenomics">Tokenomics</NavItem>
      <NavItem href="#team">Team</NavItem>
      <NavItem href="#contact">Contact</NavItem>
    </>
  );
};

export default NavbarLinks;
