import { useState } from "react";
import styled from "styled-components";

const StyledContainer = styled.section`
  display: grid;
  grid-template-columns: 1fr auto;
  grid-template-rows: 1fr auto;
  grid-template-areas: "question icon" "answer answer";
  max-width: 52rem;
  width: 100%;
  align-items: center;
  @media (max-width: 620px) {
    max-width: 27.9rem;
  }
`;

const StyledQuestion = styled.p`
  font-family: "Work Sans SemiBold";
  font-size: 1.8rem;
  color: var(--dark-purple);
  grid-area: question;
  @media (max-width: 620px) {
    font-size: 1.6rem;
  }
`;

const StyledButton = styled.button`
  grid-area: icon;
  width: 3rem;
  height: 3rem;
  cursor: pointer;
  margin-left: 1rem;
  background: none;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledAnswer = styled.p`
  grid-area: answer;
  color: var(--pale-purple);
  font-family: "Work Sans Regular";
  font-size: 1.6rem;
  line-height: 150%;
  display: none;

  &.visible {
    display: block;
  }

  @media (max-width: 620px) {
    font-size: 1.4rem;
  }
`;

type QandAProps = {
  question: string;
  answer: string;
};

export default function QandA({ question, answer }: QandAProps) {
  const [isAnswerShown, setIsAnswerShown] = useState(false);
  function handleToggle() {
    setIsAnswerShown((prev) => !prev);
  }

  const answerId = `answer-${question.replace(/\s+/g, "-").toLowerCase()}`;

  return (
    <StyledContainer style={{ rowGap: isAnswerShown ? "2.4rem" : "0" }}>
      <StyledQuestion>{question}</StyledQuestion>
      <StyledButton
        onClick={handleToggle}
        aria-expanded={isAnswerShown}
        aria-controls={answerId}
      >
        <img
          style={{
            width: "3rem",
            height: "3rem",
          }}
          src={
            isAnswerShown
              ? "/assets/images/icon-minus.svg"
              : "/assets/images/icon-plus.svg"
          }
          alt={isAnswerShown ? "Collapse answer" : "Expand answer"}
        />
      </StyledButton>
      <StyledAnswer id={answerId} className={isAnswerShown ? "visible" : ""}>
        {answer}
      </StyledAnswer>
    </StyledContainer>
  );
}
