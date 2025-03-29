import styled from "styled-components";

const StyledHeader = styled.header`
  margin-bottom: 3.2rem;
  display: flex;
  gap: 2.4rem;
  align-items: center;
  @media (max-width: 620px) {
    margin-bottom: 2.4rem;
  }
`;

const StyledLogo = styled.img`
  width: 4rem;
  height: 4rem;
  @media (max-width: 620px) {
    width: 2.4rem;
    height: 2.4rem;
  }
`;

const StyledTitle = styled.h1`
  color: var(--dark-purple);
  font-family: "Work Sans Bold";
  font-size: 5.6rem;
  @media (max-width: 620px) {
    font-size: 3.2rem;
  }
`;

export default function Title() {
  return (
    <StyledHeader>
      <StyledLogo
        src="/assets/images/icon-star.svg"
        alt=""
        aria-hidden={true}
        loading="lazy"
      />
      <StyledTitle>FAQs</StyledTitle>
    </StyledHeader>
  );
}
