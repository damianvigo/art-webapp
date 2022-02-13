import styled from 'styled-components';

const HamburgerButtonStyled = styled.button`
  .hamburger-inner,
  .hamburger-inner:after,
  .hamburger-inner:before,
  .hamburger.is-active .hamburger-inner,
  .hamburger.is-active .hamburger-inner:after,
  .hamburger.is-active .hamburger-inner:before {
    background-color: var(--first-color) !important;
  }

  .hamburger-box {
    height: 6px;
  }

  @media screen and (min-width: 1024px) {
    display: none;
  }
`;

const HamburgerButton = ({ showChangeBtn, setChangeBtn }) => {
  const handleMenuMobile = (e) => {
    if (
      e.target.matches('#hamburger-btn') ||
      e.target.matches('#hamburger-btn *')
    ) {
      setChangeBtn(!showChangeBtn);
    }
  };

  return (
    <>
      <HamburgerButtonStyled
        id="hamburger-btn"
        className={`hamburger hamburger--emphatic ${
          showChangeBtn && 'is-active'
        }`}
        type="button"
        onClick={handleMenuMobile}
      >
        <span className="hamburger-box">
          <span className="hamburger-inner"></span>
        </span>
      </HamburgerButtonStyled>
    </>
  );
};

export default HamburgerButton;
