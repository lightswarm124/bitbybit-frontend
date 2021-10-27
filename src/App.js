import React, { useState } from "react";
import getBlockchain from "./ethereum.js";
import Navbar from "../src/components/Navbar/Navbar";
import Hero from "../src/components/Hero";
import About from "../src/components/About";
import Charity from "../src/components/Charity";
import Roadmap from "./components/Roadmap.js";
import Tokenomics from "./components/Tokenomics.js";
import Footer from "./components/Footer";
import Modal from "react-modal";
import "./styles/stars.css";
import Button from "./components/_ui/Button";
import styled from "@emotion/styled";

const pageStyles = {
  margin: 0,
  maxWidth: "100%",
  minHeight: "100vh",
  color: "white",
  fontFamily: "Roboto, sans-serif",
  boxSize: "border-box",
};

const modalStyles = {
  content: {
    zIndex: "999999 !important",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

const CloseButton = styled.button`
  border: none;
  background: none;
  font-weight: 600;
`;

function App() {
  const [simpleStorage, setSimpleStorage] = useState(undefined);
  const [userWallet, setUserWallet] = useState(undefined);
  const [data, setData] = useState("");
  const [modalIsOpen, setIsOpen] = React.useState(false);
  console.log(data);

  const integrateWallet = () => {
    const init = async () => {
      const { simpleStorage } = await getBlockchain();
      const data = await simpleStorage.readData();
      setSimpleStorage(simpleStorage);
      console.log(simpleStorage);
      setData(data);
      setUserWallet(simpleStorage.signer.provider.provider.selectedAddress);
    };
    init();
  };

  const updateData = async (e) => {
    e.preventDefault();
    if (userWallet) {
      const amount = e.target.elements[0].value;
      const tx = await simpleStorage.updateData(amount);
      await tx.wait();
      const newData = await simpleStorage.readData();
      console.log(newData);
      newData !== "undefined" && setData(newData);
    } else {
      alert("Please connect your Metamask wallet to purchase tokens.");
    }
  };

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <>
      <main id="main" style={pageStyles}>
        <div id="stars"></div>
        <div id="stars2"></div>
        <div id="stars3"></div>
        <title>BitByBit</title>
        <Navbar wallet={userWallet} onClickLogin={integrateWallet} />
        <Hero onClickBuy={openModal} />
        <About />
        <Charity />
        <Roadmap />
        <Tokenomics />
        <Footer />
        <div id="stars2"></div>
        <div id="stars3"></div>
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={modalStyles}
          contentLabel="Purchase BBB"
          appElement={document.getElementById("main")}
        >
          <CloseButton variant="primary" onClick={closeModal}>
            X
          </CloseButton>
          <h2>Purchase BitByBit tokens</h2>
          <form className="form-inline" onSubmit={(e) => updateData(e)}>
            <input
              type="text"
              className="form-control"
              placeholder="Quantity to purchase"
            />
            <Button type="submit" variant="primary">
              Purchase
            </Button>
          </form>
        </Modal>
      </main>
    </>
  );
}

export default App;
