import MessageErrorForm from './MessageErrorForm';

const ExpoCards = ({ dbExpo, isOpenModal, setIdModalExpo }) => {
  const modalExpo = (id) => {
    setIdModalExpo(id);
    isOpenModal();
  };

  return (
    <div className="container">
      <div className="gallery">
        {dbExpo.length > 0 ? (
          dbExpo.map((el) => (
            <article
              onClick={(e) => modalExpo(el.id)}
              key={el.id}
              className="card-gallery"
            >
              <figure
                className="container-mobile"
                data-aos={
                  el.fadeLeft ||
                  el.fadeRight ||
                  el.zoomIn ||
                  el.zoomInLeft ||
                  el.zoomInRight ||
                  el.zoomOut ||
                  el.fadeUp ||
                  el.fadeRight ||
                  el.fadeLeft ||
                  el.fadeDownRight ||
                  el.fadeDownLeft ||
                  el.fadeUpRight ||
                  el.fadeUpLeft ||
                  el.flipLeft ||
                  el.flipRight ||
                  el.flipUp ||
                  el.zoomOutUp ||
                  el.zoomOutDown ||
                  el.zoomOutRight ||
                  el.zoomOutLeft ||
                  el.flipDown
                }
                data-aos-easing={el.easing}
                data-aos-duration={el.duration}
              >
                <img
                  className="card-gallery-img"
                  src={el.img}
                  title={el.titleCard}
                  alt={el.altTitle}
                />
                <div className="description-mobile">
                  <h2>{el.titleCard}</h2>
                  <small>{el.description}</small>
                </div>
              </figure>
              <div className="card-gallery-container">
                <div className="card-gallery-txt">
                  <h2>{el.titleCard}</h2>
                  <p>{el.description}</p>
                </div>
              </div>
            </article>
          ))
        ) : (
          <MessageErrorForm
            marginTop={'5rem'}
            msg={`Error al cargar las imágenes`}
          />
        )}
      </div>
    </div>
  );
};

export default ExpoCards;
