import { Suspense, lazy } from "react";
import styled from "styled-components";
import { GlobalStyling } from "./GlobalStyling";

const Title = lazy(() => import("./components/Title"));
const QandA = lazy(() => import("./components/QandA"));

const StyledBackground = styled.div`
  height: 32rem;
  position: absolute;
  top: 0;
  width: 100%;
  background-image: url("/public/assets/images/background-pattern-desktop.svg");
  @media (max-width: 620px) {
    height: 23.2rem;
    background-image: url("/public/assets/images/background-pattern-mobile.svg");
  }
`;

const StyledMainContainer = styled.div`
  position: relative;
  z-index: 1;
  background-color: var(--white);
  padding: 4rem;
  border-radius: 1.6rem;
  @media (max-width: 620px) {
    border-radius: 0.8rem;
    padding: 2.4rem;
  }
`;

const StyledLineBreak = styled.hr`
  margin-top: 2.4rem;
  margin-bottom: 2.4rem;
  height: 0.1rem;
  border: none;
  background-color: var(--light-pink);
`;

export default function App() {
  return (
    <>
      <GlobalStyling />
      <StyledBackground></StyledBackground>
      <StyledMainContainer>
        <Suspense fallback={<div>Loading...</div>}>
          <Title />
          <QandA
            question="What is Frontend Mentor, and how will it help me?"
            answer="Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It’s suitable for all levels and ideal for portfolio building."
          />
          <StyledLineBreak />
          <QandA
            question="Is Frontend Mentor free?"
            answer="Yes, Frontend Mentor offers both free and premium plans. Many challenges are available for free, while premium challenges require a subscription."
          />
          <StyledLineBreak />
          <QandA
            question="Can I use Frontend Mentor projects in my portfolio?"
            answer="Yes! You're encouraged to use the projects you build in your portfolio to showcase your skills to potential employers or clients."
          />
          <StyledLineBreak />
          <QandA
            question="How can I get help if I'm stuck on a challenge?"
            answer="You can ask for help in the Frontend Mentor community, join their Discord server, or search for solutions and guidance in the discussion forums."
          />
        </Suspense>
      </StyledMainContainer>
    </>
  );
}
