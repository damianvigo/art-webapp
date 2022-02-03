import styled from 'styled-components';

const BannerStyled = styled.article`
  background-image: url(${({ banner }) => banner});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 0% 50%;
  background-attachment: fixed;
`;

const BanerStyledOpacity = styled.div`
  width: 100%;
  height: 30vh;
  background-color: var(--black-alpha-color);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BannerStyledContainer = styled.div`
  width: 80vw;
  text-align: center;

  p {
    color: var(--white-color);
    font-size: var(--step-1);
  }
`;

const Banner = ({ banner }) => {
  return (
    <>
      <BannerStyled banner={banner}>
        <BanerStyledOpacity>
          <BannerStyledContainer data-aos="zoom-in-down">
            <p>
              Para mí pintar es vida y a travez de mis trabajos, trato de
              expresar mi sentir en toda su plenitud
            </p>
          </BannerStyledContainer>
        </BanerStyledOpacity>
      </BannerStyled>
    </>
  );
};

export default Banner;
