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
  background-color: rgba(255, 115, 78, 0.15);
  color: #ff734e;
  transition: all 0.2s;
  font-size: 0.85rem;
`;

const Navbar = ({ wallet, onClickLogin }) => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const handleClick = () => {
    onClickLogin();
  };
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
            <AlertButton onClick={handleClick}>Connect Wallet</AlertButton>
          )}
        </NavWrapper>
      </ContentWrapper>
    </Navigation>
  );
};

export default Navbar;
