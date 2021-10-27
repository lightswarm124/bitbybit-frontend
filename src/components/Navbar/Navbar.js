import React, { useState } from "react";
import styled from "@emotion/styled";
import NavbarLinks from "./NavbarLinks";
import Logo from "../../images/bbbLogo.png";
import ContentWrapper from "../ContentWrapper";
import Button from "../_ui/Button";

const Navigation = styled.nav`
  height: 10vh;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  text-transform: uppercase;
  border-bottom: 2px solid #33333320;
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

const NavWrapper = styled.div`
  height: 10vh;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  text-transform: uppercase;
  border-bottom: 2px solid #33333320;
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
    display: flex;
  }
`;

const Navbox = styled.div`
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    flex-direction: column;
    position: fixed;
    width: 100%;
    justify-content: flex-start;
    padding-top: 10vh;
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

const LogoImage = styled.img`
  width: auto;
  height: 2rem;
`;

const AlertButton = styled(Button)`
  border: 1px solid #ff734e;
  background-color: rgba(255, 115, 78, 0.2);
  color: #ff734e;
  transition: all 0.2s;
  font-size: 0.85rem;
`;

const Navbar = ({ wallet, onClickLogin }) => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const handleClick = () => {
    onClickLogin();
  };
  console.log("Wallet: " + wallet);
  const abbreviatedWallet = `${wallet?.slice(0, 2)}...${wallet?.slice(
    wallet.length - 5
  )}`;

  return (
    <Navigation>
      <ContentWrapper>
        <NavWrapper>
          <LogoImage src={Logo} alt="" />
          <Toggle
            navbarOpen={navbarOpen}
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            {navbarOpen ? <Hamburger open /> : <Hamburger />}
          </Toggle>
          {navbarOpen ? (
            <Navbox>
              <NavbarLinks />
            </Navbox>
          ) : (
            <Navbox open>
              <NavbarLinks />
            </Navbox>
          )}
          {wallet ? (
            <Button variant="primary">{abbreviatedWallet}</Button>
          ) : (
            <AlertButton onClick={handleClick}>Connect Wallet</AlertButton>
          )}
        </NavWrapper>
      </ContentWrapper>
    </Navigation>
  );
};

export default Navbar;
