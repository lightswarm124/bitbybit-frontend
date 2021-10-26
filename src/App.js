import React, { useState } from "react";
import getBlockchain from "./ethereum.js";
import Navbar from "../src/components/Navbar/Navbar";
import Hero from "../src/components/Hero";
import About from "../src/components/About";
import Charity from "../src/components/Charity";
import Roadmap from "./components/Roadmap.js";
import Tokenomics from "./Tokenomics.js";
import "./styles/stars.css";

const pageStyles = {
  margin: 0,
  maxWidth: "100%",
  minHeight: "100wh",
  color: "white",
  fontFamily: "Roboto, sans-serif",
};

function App() {
  const [simpleStorage, setSimpleStorage] = useState(undefined);
  console.log(simpleStorage);
  // const [data, setData] = useState("");
  // const [walletAddress, setWalletAddress] = useState(undefined);

  const integrateWallet = () => {
    const init = async () => {
      const { simpleStorage } = await getBlockchain();
      const data = await simpleStorage.readData();
      console.log(data);
      setSimpleStorage(simpleStorage);
      // setData(data);
    };
    init();
  };

  // const updateData = async (e) => {
  //   e.preventDefault();
  //   const data = e.target.elements[0].value;
  //   const tx = await simpleStorage.updateData(data);
  //   await tx.wait();
  //   const newData = await simpleStorage.readData();
  //   newData !== "undefined" && setData(newData);
  //   console.log(newData);
  // };

  // if (typeof simpleStorage === "undefined" || typeof data === "undefined") {
  //   return "Loading...";
  // }

  return (
    <>
      <main style={pageStyles}>
        <div id="stars"></div>
        <div id="stars2"></div>
        <div id="stars3"></div>
        <title>BitByBit</title>
        <Navbar onClickLogin={integrateWallet} />
        <Hero />
        <About />
        <Charity />
        <Roadmap />
        <Tokenomics />
        <div id="stars2"></div>
        <div id="stars3"></div>
        {/* <div className="container">
          <div className="row">
            <div className="col-sm-6">
              <h2>Data:</h2>
              <p>{data.toString()}</p>
            </div>

            <div className="col-sm-6">
              <h2>Purchase BitByBit tokens</h2>
              <form className="form-inline" onSubmit={(e) => updateData(e)}>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Quantity to purchase"
                />
                <button type="submit" className="btn btn-primary">
                  Purchase
                </button>
              </form>
            </div>
          </div>
        </div> */}
      </main>
    </>
  );
}

export default App;
