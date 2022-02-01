import { useEffect, useState } from 'react';
import styled from 'styled-components';
import './Modal.css';

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
    min-height: 500px;
    max-height: 800px;
    max-width: 600px;
  }
`;

const Modal = ({ isOpen, closeModal, dbHome, idModal }) => {
  const handleModalContainerClick = (e) => e.stopPropagation();
  const [modalCard, setModalCard] = useState(dbHome);

  console.log(dbHome);
  console.log(idModal);
  console.log(modalCard);

  useEffect(() => {
    let card = dbHome.filter((el) => el.id === idModal);
    console.log(card);
    setModalCard(card);
  }, [dbHome, idModal, isOpen]);

  return (
    <article className={`modal ${isOpen && 'is-open'}`} onClick={closeModal}>
      <ModalContainer
        className="modal-container"
        onClick={handleModalContainerClick}
      >
        <button className="modal-close" onClick={closeModal}>
          X
        </button>
        <ModalBox className="box-shadow-card">
          <figure>
            <img src={modalCard[0].img} alt="" />
          </figure>
          <h4>{modalCard[0].titleCard}</h4>
          <p>{modalCard[0].description}</p>
        </ModalBox>
      </ModalContainer>
    </article>
  );
};

export default Modal;
