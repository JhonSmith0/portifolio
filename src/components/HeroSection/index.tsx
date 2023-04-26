import styled from "styled-components";
import SSection from "../styled/SSection";
import Content from "./Content";
import Header from "./Header";

const SHeroSection = styled(SSection)`
  background: #171a1d;
`;

export default function HeroSection() {
  return (
    <SHeroSection>
      <Header />
      <Content />
    </SHeroSection>
  );
}
