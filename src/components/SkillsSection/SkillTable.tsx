import styled from "styled-components";
import { SkillTableItem } from "./SkillTableItem";
import { skillsState } from "../../state/skills";
import { useHookstate } from "@hookstate/core";

export const StyledSkillsTable = styled.div`
  display: flex;
  flex-direction: column;

  gap: 3.2rem;
  padding-block: 3.2rem;
`;
export function SkillsTable() {
  const skills = skillsState;
  return (
    <StyledSkillsTable>
      {skills.map((data) => {
        return <SkillTableItem key={data.name} data={data}></SkillTableItem>;
      })}
    </StyledSkillsTable>
  );
}
