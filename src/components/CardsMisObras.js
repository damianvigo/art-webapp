const CardsMisObras = ({ el }) => {
  let {
    id,
    img,
    titleCard,
    description,
    animateOnScroll,
    animateonScrollDuration,
  } = el;
  return (
    <>
      <article
        data-aos-duration={animateonScrollDuration}
        data-aos={animateOnScroll}
        className="box-shadow-card"
      >
        <a href="">
          <figure>
            <img src={img} alt="" />
          </figure>
        </a>
        <h4>{titleCard}</h4>
        <p>{description}</p>
      </article>
    </>
  );
};

export default CardsMisObras;
