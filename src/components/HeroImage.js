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

const FormStyled = styled.form`
  width: 100%;
  max-width: 800px;
  padding: 0 0.5rem;

  input[type='text'],
  input[type='email'] {
    padding: 1rem;
    padding-left: 0;
    border: none;
    border-bottom: thin solid #fff;
  }

  input[type='text'],
  input[type='email'],
  textarea {
    display: inline-block;
    width: 100%;
    margin-bottom: 1rem;
    background-color: transparent;
    font-size: var(--step--1);
    font-family: var(--font);
    color: #fff;
    outline: none;
    &:focus {
      background-color: var(--third-alpha-color);
      color: #fff;
    }
  }

  textarea {
    padding: 1rem;
    border: thin solid #fff;
    resize: none;
  }

  *::placeholder {
    color: #fff;
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
                <FormStyled>
                  <input type="text" name="nombre" placeholder="Tu nombre" />
                  <input type="email" name="email" placeholder="Tu email" />
                  <textarea
                    name="comentarios"
                    cols="30"
                    rows="10"
                    placeholder="Tu comentario"
                  ></textarea>
                  <Btn submit="submit" five enviar="Enviar" />
                </FormStyled>
              </section>
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
