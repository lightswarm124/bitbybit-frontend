import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import Button from "../_ui/Button";
import getBlockchain from "../../ethereum";

const AlertButton = styled(Button)`
  border: 1px solid #ff734e;
  background-color: rgba(255, 115, 78, 0.2);
  color: #ff734e;
  transition: all 0.2s;
  font-size: 0.85rem;
`;

const WalletButton = () => {
  const [simpleStorage, setSimpleStorage] = useState(undefined);
  const [data, setData] = useState(undefined);

  useEffect(() => {
    const init = async () => {
      const { simpleStorage } = await getBlockchain();
      const data = await simpleStorage.readData();
      setSimpleStorage(simpleStorage);
      setData(data);
    };
    init();
  }, []);

  const updateData = async (e) => {
    e.preventDefault();
    const data = e.target.elements[0].value;
    const tx = await simpleStorage.updateData(data);
    await tx.wait();
    const newData = await simpleStorage.readData();
    setData(newData);
  };

  if (typeof simpleStorage === "undefined" || typeof data === "undefined") {
    return "Loading...";
  }
  const status = "disconnected";
  console.log(readableBalance);
  return (
    <>
      {status === "disconnected" ? (
        <AlertButton onClick={getBlockchain()}>Connect Wallet</AlertButton>
      ) : (
        <Button variant="primary">Disconnect</Button>
      )}
      <div className="container">
        <div className="row">
          <div className="col-sm-6">
            {/* <h2>Data:</h2>
            <p>{data.toString()}</p> */}
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
      </div>
    </>
  );
};

export default WalletButton;
