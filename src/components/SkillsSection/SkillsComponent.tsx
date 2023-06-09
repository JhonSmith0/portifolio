import styled from "styled-components";
import { SkillCard } from "./SkillCard";
import { useHookstate } from "@hookstate/core";
import { skillsState } from "../../state/skills";
import { FaReact } from "react-icons/fa";
import { ISkill } from "../../interface";

export const StyledSkillsComponent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 1.8rem;
`;

export function SkillsComponent() {
  const skills = skillsState;

  return (
    <StyledSkillsComponent>
      {skills.map((data) => {
        return <SkillCard key={data.name} data={data}></SkillCard>;
      })}
    </StyledSkillsComponent>
  );
}
