import styled from 'styled-components';
import Btn from './Btn';

const HeroImageStyled = styled.article`
  background-image: url(${(props) => props.backgroundImage});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50% 60%;
  background-attachment: fixed;
`;

const HeroImageOpacity = styled.aside`
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: var(--black-alpha-color);
`;

const HeroImageTitle = styled.h1`
  color: var(--white-color);
  font-weight: 900;
`;

const HeroImageSubtitle = styled.h2`
  color: var(--white-color);
  font-weight: 400;
`;

const HeroImageContent = styled.div`
  h1,
  h2 {
    margin-bottom: var(--step-1);
  }
`;

const HeroImage = ({ backgroundImage, title, subtitle, contact }) => {
  return (
    <>
      {contact ? (
        <HeroImageStyled backgroundImage={backgroundImage}>
          <HeroImageOpacity>
            <HeroImageContent>
              <section className="container">
                <form>
                  <input type="text" name="nombre" placeholder="Tu nombre" />
                  <input type="email" name="email" placeholder="Tu email" />
                  <textarea name="comentarios" cols="30" rows="10"></textarea>
                </form>
              </section>

              {/*   <Btn two /> */}
            </HeroImageContent>
          </HeroImageOpacity>
        </HeroImageStyled>
      ) : (
        <HeroImageStyled backgroundImage={backgroundImage}>
          <HeroImageOpacity>
            <HeroImageContent>
              <HeroImageTitle data-aos="fade-down" className="box-shadow-down">
                {title}
              </HeroImageTitle>
              <HeroImageSubtitle data-aos="zoom-in">
                {subtitle}
              </HeroImageSubtitle>
              <Btn two />
            </HeroImageContent>
          </HeroImageOpacity>
        </HeroImageStyled>
      )}
    </>
  );
};

export default HeroImage;
