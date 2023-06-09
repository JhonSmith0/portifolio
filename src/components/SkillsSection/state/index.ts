import { hookstate } from "@hookstate/core";
import { ISkill } from "../../../interface";

export const skillsSectionState = hookstate<{
  selected: ISkill | null;
}>({
  selected: null,
});
