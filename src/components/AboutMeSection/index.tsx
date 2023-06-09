import styled from "styled-components";
import SSection from "../styled/SSection";
import Code from "./Code";
import AboutMeSectionContent from "./Content";
import { SectionContainer } from "../styled/SectionContainer";

export const SAboutMeSection = styled(SSection)`
  background: #141619;

  ${SectionContainer} {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 7.2rem;
    align-items: center;
  }
`;

function AboutMeSection() {
  return (
    <SAboutMeSection>
      <SectionContainer>
        <Code />
        <AboutMeSectionContent />
      </SectionContainer>
    </SAboutMeSection>
  );
}

export default AboutMeSection;
