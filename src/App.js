import React, { useState } from "react";
import getBlockchain from "./ethereum.js";
import Navbar from "../src/components/Navbar/Navbar";
import Hero from "../src/components/Hero";
import Features from "./components/Features.js";
import About from "../src/components/About";
import Charity from "../src/components/Charity";
import Roadmap from "./components/Roadmap.js";
import Tokenomics from "./components/Tokenomics.js";
import Footer from "./components/Footer";
import Modal from "react-modal";
import "./styles/stars.css";
import Button from "./components/_ui/Button";
import styled from "@emotion/styled";
import { ethers } from "ethers";
import Team from "./components/Team.js";
import Contact from "./components/Contact.js";
import { Form } from "react-bootstrap";
import "typeface-roboto";

const pageStyles = {
  margin: 0,
  maxWidth: "100%",
  minHeight: "100vh",
  color: "white",
  fontFamily: "Roboto, sans-serif",
  boxSize: "border-box",
  fontSize: "18px",
};

const modalStyles = {
  content: {
    background: "#220969",
    color: "white",
    zIndex: "999999 !important",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

const ModalContent = styled.div`
  padding: 1rem;

  h2 {
    margin-bottom: 2rem;
    margin-top: 1rem;
    font-size: 1.75rem;
  }

  p {
    font-size: 0.85rem;
  }

  .amounts {
    font-size: 1rem;
  }
`;

const CloseButton = styled.button`
  border: none;
  background: none;
  font-weight: 600;
  color: white;
`;

function App() {
  const [simpleStorage, setSimpleStorage] = useState(undefined);
  const [userWallet, setUserWallet] = useState(undefined);
  const [bnbAmount, setBnbAmount] = useState("");
  const [bbbAmount, setBbbAmount] = useState("");
  const [data, setData] = useState("");
  const [modalIsOpen, setIsOpen] = React.useState(false);

  const integrateWallet = () => {
    const init = async () => {
      const { simpleStorage } = await getBlockchain();
      // const data = await simpleStorage.readData();
      setSimpleStorage(simpleStorage);
      setData(data);
      setUserWallet(simpleStorage.signer.provider.provider.selectedAddress);
    };
    init();
  };

  const purchaseTokens = async (e) => {
    e.preventDefault();
    if (userWallet) {
      let amount = bnbAmount.toString();
      amount = Number(amount).toFixed(15);
      if (!amount) {
        alert("Please enter an amount to purchase.");
        return;
      }
      const ethAmount = ethers.utils.parseEther(amount);
      const contract = simpleStorage;
      setData(data);
      await contract
        .buyTokens(userWallet, { value: ethAmount })
        .then((remainingBalance) => {
          setIsOpen(false);
          alert("Transaction Complete", remainingBalance);
        })
        .catch((err) => {
          console.log(err);
          err?.data?.message &&
            alert("Transaction failed. Error message: " + err?.data.message);
          err?.message && alert(err.message);
        });
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
    setBbbAmount("0");
  }

  function handleChange(event) {
    setBbbAmount(event.target.value);
    const bnbTokens = event.target.value * 0.000021;
    setBnbAmount(bnbTokens);
  }
  return (
    <>
      <main id="main" style={pageStyles}>
        <title>Bitbybit</title>
        <Navbar wallet={userWallet} onClickLogin={integrateWallet} />
        <Hero onClickBuy={openModal} />
        <Features />
        <About />
        <Charity />
        <Roadmap />
        <Tokenomics />
        <Team />
        <Contact />
        <Footer />
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={modalStyles}
          contentLabel="Purchase BBB"
          appElement={document.getElementById("main")}
        >
          <ModalContent>
            <CloseButton variant="primary" onClick={closeModal}>
              X
            </CloseButton>
            <h2>Purchase BitByBit tokens</h2>
            <p>
              Current ICO price: <span className="price">0.000021 BNB</span>
            </p>
            <Form className="form" onSubmit={(e) => purchaseTokens(e)}>
              <Form.Group>
                <Form.Control
                  onChange={handleChange}
                  type="text"
                  className="form-control"
                  placeholder="Quantity to purchase"
                />
              </Form.Group>
              <br />
              {bbbAmount > 0 && (
                <p className="amounts">
                  {bbbAmount} BBB = {bnbAmount.toFixed(5)} BNB
                </p>
              )}
              <Button
                type="submit"
                variant="primary"
                style={{ marginRight: "1rem" }}
              >
                Purchase
              </Button>
              <Button type="submit" onClick={closeModal} variant="secondary">
                Cancel
              </Button>
            </Form>
          </ModalContent>
        </Modal>
      </main>
    </>
  );
}

export default App;
