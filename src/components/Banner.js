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
  height: 50vh;
  background-color: var(--black-alpha-color);
`;

const BannerStyledContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: left;
  padding: 1rem;
  line-height: 1rem;
  width: 100%;
  height: inherit;
  p {
    color: var(--white-color);
    font-size: var(--step-2);
    line-height: 1.3;
  }

  @media screen and (min-width: 600px) {
    p {
      text-align: center;
      line-height: var(--step-4);
      line-height: 1.8;
    }
  }
`;

const Banner = ({ banner }) => {
  return (
    <>
      <BannerStyled banner={banner}>
        <BanerStyledOpacity>
          <BannerStyledContainer /* data-aos="zoom-in-down" */>
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
