import styled from "styled-components";
import { ISkill } from "../../interface";
import { useHookstate } from "@hookstate/core";
import { skillsSectionState } from "./state";
import { isSelected } from "./utils/isSelected";

export const StyledSkillTableItem = styled.div<{ size: number }>`
  display: flex;

  --color: #96f2d7;
  gap: 1.4rem;

  align-items: center;

  &::before {
    content: "";
    height: 2rem;
    width: 2rem;
    display: block;

    border: solid 2px var(--color);
    border-radius: 0.9rem;
  }

  transition: all 0.1s 0s;
  cursor: pointer;
  &:hover {
    transform: scale(1.01);
  }

  &::after {
    content: ".";
    flex: ${(props) => props.size};
    display: block;
    background: var(--color);
    height: 90%;
    color: transparent;
  }

  &.selected {
    transform: scale(1.01);
    --color: #ffe066;
  }
`;

export function SkillTableItem({ data }: { data: ISkill }) {
  return (
    <StyledSkillTableItem
      className={isSelected(data)}
      size={data.percentage}
      onClick={() => skillsSectionState.selected.set(data)}
    ></StyledSkillTableItem>
  );
}
