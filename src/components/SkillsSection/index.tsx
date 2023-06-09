import styled from "styled-components";
import SSection from "../styled/SSection";
import { Container } from "../styled/Container";
import { SkillsComponent } from "./SkillsComponent";
import { Title } from "../styled/Title";
import { SkillsTable } from "./SkillTable";
import { SectionContainer } from "../styled/SectionContainer";
import { useHookstate } from "@hookstate/core";
import { ISkill } from "../../interface";

const StyledSkillsSection = styled(SSection)`
  background: #111315;

  ${Container} {
    grid-template-columns: 1fr 1fr;
    gap: 4.8rem;
  }
`;

export function SkillsSection() {
  return (
    <StyledSkillsSection>
      <SectionContainer>
        <Title>{"<Skills/>"}</Title>
        <Container>
          <SkillsComponent />
          <SkillsTable />
        </Container>
      </SectionContainer>
    </StyledSkillsSection>
  );
}
