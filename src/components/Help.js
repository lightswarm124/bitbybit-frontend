import styled from "@emotion/styled";
import React, { useState } from "react";
import Modal from "react-modal";

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

const Help = () => {
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
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
      </ModalContent>
    </Modal>
  );
};
