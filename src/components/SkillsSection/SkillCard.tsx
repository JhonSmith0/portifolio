import styled from "styled-components";
import { FaReact } from "react-icons/fa";
import { Icon } from "../styled/Icon";
import { ReactNode } from "react";
import { ISkill } from "../../interface";
import { skillsSectionState } from "./state";
import { isSelected } from "./utils/isSelected";

export const StyledSkillCard = styled.div`
  aspect-ratio: 1;
  background: #1e2125;

  display: grid;
  place-items: center;

  align-content: center;

  flex-direction: column;

  font-size: 1.8rem;
  color: white;

  gap: 1.4rem;

  padding: 1.8rem;

  border-radius: 0.6rem;

  ${Icon} {
    --size: 5.2rem;
  }

  transition: all 0.2s 0s;
  cursor: pointer;
  &:hover,
  &.selected {
    transform: scale(1.05);
    box-shadow: 0 0 12px #343a40;
    color: #ffe066;
  }
`;

export function SkillCard({ data }: { data: ISkill }) {
  const Logo = data.icon;

  const selected = isSelected(data);

  return (
    <StyledSkillCard
      onClick={(e) => {
        skillsSectionState.selected.set(data);
      }}
      className={selected}
    >
      <Icon>
        <Logo />
      </Icon>
      <p>
        {data.name} {selected && <span>{data.percentage * 100}%</span>}{" "}
      </p>
    </StyledSkillCard>
  );
}
