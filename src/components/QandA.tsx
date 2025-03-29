import styled from "styled-components";

const StyledContainer = styled.details`
  max-width: 52rem;
  width: 100%;
  margin-bottom: 1rem;

  @media (max-width: 620px) {
    max-width: 27.9rem;
  }
`;

const StyledQuestion = styled.summary`
  font-family: "Work Sans SemiBold";
  font-size: 1.8rem;
  color: var(--dark-purple);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  list-style: none;

  &::marker {
    content: "";
  }

  @media (max-width: 620px) {
    font-size: 1.6rem;
  }
`;

const StyledIcon = styled.img`
  width: 3rem;
  height: 3rem;
  margin-left: 1rem;
`;

const StyledAnswer = styled.p`
  color: var(--pale-purple);
  font-family: "Work Sans Regular";
  font-size: 1.6rem;
  line-height: 150%;
  margin-top: 1rem;

  @media (max-width: 620px) {
    font-size: 1.4rem;
  }
`;

type QandAProps = {
  question: string;
  answer: string;
};

export default function QandA({ question, answer }: QandAProps) {
  return (
    <StyledContainer>
      <StyledQuestion>
        {question}
        <StyledIcon
          src="/assets/images/icon-plus.svg"
          alt="Expand answer"
          onClick={(e) => {
            const icon = e.currentTarget;
            const details = icon.closest("details");
            icon.src = details?.open
              ? "/assets/images/icon-plus.svg"
              : "/assets/images/icon-minus.svg";
          }}
        />
      </StyledQuestion>
      <StyledAnswer>{answer}</StyledAnswer>
    </StyledContainer>
  );
}
