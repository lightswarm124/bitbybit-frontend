import React, { useState } from "react";
import styled from "@emotion/styled";
import Logo from "../_ui/Logo";
import ContentWrapper from "../ContentWrapper";
import Button from "../_ui/Button";

const Navigation = styled.nav`
  background: #0b0321;
  height: 10vh;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  z-index: 2;
  align-self: center;
  @media (max-width: 768px) {
    height: 8vh;
    top: 0;
    left: 0;
    right: 0;
    left: 0;
  }
`;

const NavWrapper = styled.div`
  height: 10vh;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  z-index: 2;
  align-self: center;
  @media (max-width: 768px) {
    position: sticky;
    height: 8vh;
    top: 0;
    left: 0;
    right: 0;
    left: 0;
  }
`;

const Toggle = styled.div`
  display: none;
  height: 100%;
  cursor: pointer;
  padding: 0 10vw;

  @media (max-width: 768px) {
    order: 3;
    padding: 0.5rem;
    display: flex;
  }
`;

const Navbox = styled.div`
  display: flex;
  z-index: 999999;
  position: relative;
  height: 100%;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    background: #0b0321;
    flex-direction: column;
    position: fixed;
    width: 100%;
    justify-content: flex-start;
    padding-top: 1vh;
    transition: all 0.3s ease-in;
    top: 8vh;
    left: ${(props) => (props.open ? "-100%" : "0")};
  }
`;

const Hamburger = styled.div`
  background-color: white;
  width: 30px;
  height: 3px;
  transition: all 0.3s linear;
  align-self: center;
  position: relative;
  transform: ${(props) => (props.open ? "rotate(-45deg)" : "inherit")};
  ::before,
  ::after {
    width: 30px;
    height: 3px;
    background-color: white;
    content: "";
    position: absolute;
    transition: all 0.3s linear;
  }
  ::before {
    transform: ${(props) =>
      props.open ? "rotate(-90deg) translate(-10px, 0px)" : "rotate(0deg)"};
    top: -10px;
  }
  ::after {
    opacity: ${(props) => (props.open ? "0" : "1")};
    transform: ${(props) => (props.open ? "rotate(90deg) " : "rotate(0deg)")};
    top: 10px;
  }
`;

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

const Navbar = ({ wallet, onClickLogin }) => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const handleClick = () => {
    onClickLogin();
  };
  const handleNavClick = () => {
    setNavbarOpen(false);
  };
  const abbreviatedWallet = `${wallet?.slice(0, 2)}...${wallet?.slice(
    wallet.length - 5
  )}`;

  return (
    <>
      <Navigation>
        <ContentWrapper>
          <div id="stars3" />
          <NavWrapper>
            <Logo />
            <Toggle
              navbarOpen={navbarOpen}
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              {navbarOpen ? <Hamburger open /> : <Hamburger />}
            </Toggle>
            {navbarOpen ? (
              <Navbox>
                <NavItem onClick={handleNavClick} href="#about">
                  About
                </NavItem>
                <NavItem onClick={handleNavClick} href="#charity">
                  Charity
                </NavItem>
                <NavItem onClick={handleNavClick} href="#roadmap">
                  Roadmap
                </NavItem>
                <NavItem onClick={handleNavClick} href="#tokenomics">
                  Tokenomics
                </NavItem>
                <NavItem onClick={handleNavClick} href="#team">
                  Team
                </NavItem>
                <NavItem onClick={handleNavClick} href="#contact">
                  Contact
                </NavItem>
              </Navbox>
            ) : (
              <Navbox open>
                <NavItem onClick={handleNavClick} href="#about">
                  About
                </NavItem>
                <NavItem onClick={handleNavClick} href="#charity">
                  Charity
                </NavItem>
                <NavItem onClick={handleNavClick} href="#roadmap">
                  Roadmap
                </NavItem>
                <NavItem onClick={handleNavClick} href="#tokenomics">
                  Tokenomics
                </NavItem>
                <NavItem onClick={handleNavClick} href="#team">
                  Team
                </NavItem>
                <NavItem onClick={handleNavClick} href="#contact">
                  Contact
                </NavItem>
              </Navbox>
            )}
            {wallet ? (
              <Button
                style={{
                  background: "rgba(72, 14, 242, .25)",
                  fontSize: "0.85rem",
                  padding: "0.4rem",
                  display: "flex",
                }}
                variant="secondary"
              >
                {" "}
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 24 24"
                  height="18"
                  width="18"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M16 12H18V16H16z"></path>
                  <path d="M20,7V5c0-1.103-0.897-2-2-2H5C3.346,3,2,4.346,2,6v12c0,2.201,1.794,3,3,3h15c1.103,0,2-0.897,2-2V9 C22,7.897,21.103,7,20,7z M5,5h13v2H5C4.448,7,4,6.551,4,6S4.448,5,5,5z M20,19H5.012C4.55,18.988,4,18.805,4,18V8.815 C4.314,8.928,4.647,9,5,9h15V19z"></path>
                </svg>{" "}
                {abbreviatedWallet}
              </Button>
            ) : (
              <Button
                style={{
                  background: "rgba(72, 14, 242, .25)",
                  fontSize: "0.85rem",
                  padding: "0.4rem",
                  display: "flex",
                }}
                variant="secondary"
                onClick={handleClick}
              >
                Connect Wallet
              </Button>
            )}
          </NavWrapper>
        </ContentWrapper>
      </Navigation>
    </>
  );
};

export default Navbar;
