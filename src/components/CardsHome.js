import CardHome from './CardHome';
import Message from './Message';

const CardsHome = ({ dbHome, setIdModal, isOpenModal }) => {
  return (
    <>
      {dbHome.length > 0 ? (
        dbHome.map((el) => (
          <CardHome
            dbHome={dbHome}
            setIdModal={setIdModal}
            key={el.id}
            el={el}
            isOpenModal={isOpenModal}
          />
        ))
      ) : (
        <Message marginTop={'5rem'} msg={`Error al cargar las imágenes`} />
      )}
    </>
  );
};

export default CardsHome;
