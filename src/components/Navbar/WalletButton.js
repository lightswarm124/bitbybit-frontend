import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import Button from "../_ui/Button";

const AlertButton = styled(Button)`
  border: 1px solid #ff734e;
  background-color: rgba(255, 115, 78, 0.2);
  color: #ff734e;
  transition: all 0.2s;
  font-size: 0.85rem;
`;

const WalletButton = () => {
  const status = "disconnected";
  return (
    <>
      {status === "disconnected" ? (
        <AlertButton>Connect Wallet</AlertButton>
      ) : (
        <Button variant="primary">Disconnect</Button>
      )}
    </>
  );
};

export default WalletButton;
