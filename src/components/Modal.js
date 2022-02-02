import { useEffect, useState } from 'react';
import styled from 'styled-components';
import './Modal.css';

const ModalStyled = styled.article`
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  width: 100%;
  min-height: 100vh;
  background-color: var(--black-alpha-color);
  display: none;
  justify-content: center;
  align-items: center;
  padding: 0 1rem;
  &.is-open {
    display: flex;
  }
`;

const ModalBox = styled.article`
  img {
    width: 100%;
  }
`;

const ModalContainer = styled.div`
  position: relative;
  border: thin solid var(--second-color);
  display: flex;
  flex-direction: column;
  text-align: center;
  min-width: 320px;
  max-width: 480px;
  min-height: 200px;
  max-height: 600px;
  overflow-y: auto;
  background-color: #fff;

  @media screen and (min-width: 380px) {
    width: 100%;
    min-width: 200px;
    max-height: 800px;
    max-width: 600px;
  }
`;

const ModalButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background-color: var(--second-color);
  padding: 0.5rem;
  border: none;
  cursor: pointer;
  svg {
    width: var(--step-3);
    height: var(--step-3);
    fill: var(--third-color);
  }
`;

const Modal = ({ isOpen, closeModal, dbHome, idModal }) => {
  const handleModalContainerClick = (e) => e.stopPropagation();
  const [modalCard, setModalCard] = useState(dbHome);

  /*   console.log(dbHome);
  console.log(idModal);
  console.log(modalCard); */

  useEffect(() => {
    let card = dbHome.filter((el) => el.id === idModal);
    // console.log(card);
    setModalCard(card);
  }, [dbHome, idModal, isOpen]);

  return (
    <ModalStyled
      className={`modal ${isOpen && 'is-open'}`}
      onClick={closeModal}
    >
      <ModalContainer
        className="modal-container"
        onClick={handleModalContainerClick}
      >
        <ModalButton onClick={closeModal}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M24 3.752l-4.423-3.752-7.771 9.039-7.647-9.008-4.159 4.278c2.285 2.885 5.284 5.903 8.362 8.708l-8.165 9.447 1.343 1.487c1.978-1.335 5.981-4.373 10.205-7.958 4.304 3.67 8.306 6.663 10.229 8.006l1.449-1.278-8.254-9.724c3.287-2.973 6.584-6.354 8.831-9.245z" />
          </svg>
        </ModalButton>
        <ModalBox className="box-shadow-card">
          <figure>
            <img src={modalCard[0].img} alt="" />
          </figure>
          <h4>{modalCard[0].titleCard}</h4>
          <p>{modalCard[0].description}</p>
        </ModalBox>
      </ModalContainer>
    </ModalStyled>
  );
};

export default Modal;
