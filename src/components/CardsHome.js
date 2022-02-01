import CardHome from './CardHome';

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
        <h1>Error al cargar las imagenes</h1>
      )}
    </>
  );
};

export default CardsHome;
