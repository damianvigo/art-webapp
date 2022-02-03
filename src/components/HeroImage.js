import styled from 'styled-components';
import Btn from './Btn';
import MessageErrorForm from '../components/MessageErrorForm';
import initialForm from '../helpers/initialForm';
import { validationsForm } from '../helpers/validationsForm';
import { useForm } from '../hooks/useForm';

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
  padding-bottom: ${(props) => props.contactPaddingBottom};
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
    margin-bottom: var(--step-1)};
    color: ${(props) => props.contact || 'var(--white-color)'};
    /*   padding-top: ${({ contactPadding }) => contactPadding || '6rem'}; */
  }
`;

const FormStyled = styled.form`
  width: 100%;
  max-width: 800px;
  height: auto;

  padding: 0 1rem;

  input[type='text'],
  input[type='email'] {
    padding: 1rem;
    padding-left: 0;
    border: none;
    border-bottom: thin solid #fff;
  }

  @keyframes opacityForm {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
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
    animation: opacityForm 3s ease both;
    outline: none;
    &:focus {
      background-color: var(--third-alpha-color);
      color: #fff;
      transition: all 0.3s ease;
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

const ContactTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  h1 {
    margin-bottom: 0.5rem;
  }

  svg {
    margin-left: 1rem;
    width: var(--step-5);
    height var(--step-5);
    animation: shake 2s linear alternate infinite both;
  }

  @keyframes shake {
  10%,
  90% {
    transform: translate(-1px, 0);
  }

  20%,
  80% {
    transform: translate(2px, 0);
  }

  30%,
  50%,
  70% {
    transform: translate(-4px, 0);
  }

  40%,
  60% {
    transform: translate(4px, 0);
  }
}
`;

const HeroImage = ({ backgroundImage, title, subtitle, contact }) => {
  const {
    form,
    errors,
    loading,
    response,
    handleChange,
    handleBlur,
    handleSubmit,
  } = useForm(initialForm, validationsForm);
  return (
    <>
      {contact ? (
        <HeroImageStyled backgroundImage={backgroundImage}>
          <HeroImageOpacity contactPaddingBottom="8rem">
            <HeroImageContent>
              <section className="container">
                <ContactTitle>
                  <h1 contact contactPadding contactMarginBottom={'5rem'}>
                    Hablemos
                  </h1>
                  <svg
                    width="24px"
                    height="24px"
                    viewBox="0 0 24 24"
                    id="_24x24_On_Light_Wave"
                    data-name="24x24/On Light/Wave"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect id="view-box" width="24" height="24" fill="none" />
                    <path
                      id="Path"
                      d="M6.148,12.862C4.784,11.659,2.9,10.026.534,7.916A1.049,1.049,0,0,1,.475,6.45a1.074,1.074,0,0,1,1.479-.11C4.111,7.795,5.814,9,7.087,9.907c.455.326.757.273.9.1s.08-.413-.307-.888C6.6,7.783,5.12,6.013,3.3,3.767a1.028,1.028,0,0,1,.13-1.447,1.128,1.128,0,0,1,1.516.062Q8.361,5.589,10.3,7.464c.443.43.667.492.861.418s.313-.3.1-.682C10.5,5.846,9.458,4.031,8.2,1.713A1.07,1.07,0,0,1,8.384.244,1.1,1.1,0,0,1,9.878.352l5.8,7.669c.193.255.3.337.471.3s.187-.148.226-.455c.127-1,.382-3.238.382-3.238a1.176,1.176,0,0,1,1.217-.953A1.082,1.082,0,0,1,19,4.753v9.354a6.072,6.072,0,0,1-3.228,5.09,5.944,5.944,0,0,1-6.344-.245L.448,13.484a1.074,1.074,0,0,1-.275-1.458A1.059,1.059,0,0,1,1.61,11.7c1.863.861,3.313,1.534,4.456,2.075.323.153.563.058.64-.126S6.629,13.286,6.148,12.862Z"
                      transform="translate(2 2)"
                      fill="#ffa458"
                    />
                  </svg>
                </ContactTitle>
                <FormStyled onSubmit={handleSubmit}>
                  <input
                    type="text"
                    name="name"
                    placeholder="Tu nombre"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={form.name}
                    required
                  />
                  {errors.name && <MessageErrorForm errorName={errors.name} />}
                  <input
                    type="email"
                    name="email"
                    placeholder="Tu email"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={form.email}
                    required
                  />
                  {errors.email && (
                    <MessageErrorForm errorEmail={errors.email} />
                  )}
                  <input
                    type="text"
                    name="subject"
                    placeholder="Asunto"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={form.subject}
                    required
                  />
                  {errors.subject && (
                    <MessageErrorForm errorSubject={errors.subject} />
                  )}
                  <textarea
                    name="comments"
                    cols="30"
                    rows="10"
                    placeholder="Comentario"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={form.comments}
                    required
                  ></textarea>
                  {errors.comments && (
                    <MessageErrorForm errorComment={errors.comments} />
                  )}
                  <Btn submit="submit" five enviar="Enviar" topBtn={'5vh'} />
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
