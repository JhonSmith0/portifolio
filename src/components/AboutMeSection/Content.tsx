import { useHookstate } from "@hookstate/core";
import styled from "styled-components";
import { aboutMeTextState } from "../../state/aboutMe";

export const SAboutMeSectionContent = styled.div`
  color: #ffffff;
  font-family: "Inter";
  h2 {
    font-style: normal;
    font-weight: 700;
    font-size: 5.6rem;
    line-height: 6.8rem;

    margin-bottom: 1.8rem;
  }

  p {
    font-style: normal;
    font-weight: 300;
    font-size: 1.8rem;
    line-height: 150%;
    margin-bottom: 1.4rem;
  }
`;
function AboutMeSectionContent() {
  const state = useHookstate(aboutMeTextState);
  const text = state.get();

  return (
    <SAboutMeSectionContent>
      <h2>About-me</h2>
      <p>{text}</p>
    </SAboutMeSectionContent>
  );
}

export default AboutMeSectionContent;
