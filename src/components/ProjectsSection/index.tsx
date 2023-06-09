import styled from "styled-components";
import SSection from "../styled/SSection";
import { SectionContainer } from "../styled/SectionContainer";
import { Title } from "../styled/Title";
import { ProjectsCarousel } from "./Carousel";

export const StyledProjectsSection = styled(SSection)`
  background: #141619;
  overflow: visible;
  ${Title} {
    text-align: center;
  }

  ${SectionContainer} {
    max-width: unset;
  }

  overflow-x: visible;
  padding-inline: 0;
`;
export function ProjectsSection() {
  return (
    <StyledProjectsSection>
      <SectionContainer>
        <Title>{"<Projects/>"}</Title>
        <ProjectsCarousel />
      </SectionContainer>
    </StyledProjectsSection>
  );
}
