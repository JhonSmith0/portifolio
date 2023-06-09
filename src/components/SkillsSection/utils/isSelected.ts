import { useHookstate } from "@hookstate/core";
import { ISkill } from "../../../interface";
import { skillsSectionState } from "../state";

export function isSelected(data: ISkill) {
  const state = useHookstate(skillsSectionState);
  const selected = state.ornull.get().selected?.name === data.name;

  return selected ? "selected" : "";
}
