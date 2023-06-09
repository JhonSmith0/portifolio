import { FaNodeJs, FaPython, FaReact } from "react-icons/fa";
import {
  SiExpress,
  SiJest,
  SiNestjs,
  SiNextdotjs,
  SiPrisma,
  SiTypescript,
} from "react-icons/si";

import { ISkill } from "../../interface";

export const skillsState: ISkill[] = [
  {
    name: "React",
    percentage: 0.9,
    icon: FaReact,
  },
  {
    name: "Typescript",
    percentage: 0.95,
    icon: SiTypescript,
  },
  {
    name: "NodeJS",
    percentage: 0.9,
    icon: FaNodeJs,
  },
  {
    name: "Nest",
    percentage: 0.85,
    icon: SiNestjs,
  },
  {
    name: "Express",
    percentage: 0.7,
    icon: SiExpress,
  },
  {
    name: "Prisma",
    percentage: 0.8,
    icon: SiPrisma,
  },
  {
    name: "Jest",
    percentage: 0.7,
    icon: SiJest,
  },
  {
    name: "Python",
    percentage: 0.6,
    icon: FaPython,
  },
  {
    name: "NextJS",
    percentage: 0.8,
    icon: SiNextdotjs,
  },
].sort((a, b) => b.percentage - a.percentage);
