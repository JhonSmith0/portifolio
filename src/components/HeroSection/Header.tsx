import styled from "styled-components";

const SHeader = styled.header`
  border-bottom: solid 1px #343a40;
  font-family: "Fira code";
  color: white;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 1.8rem;
  padding-block: 2.2rem;

  font-size: 1.6rem;

  background: #1a1e21;

  > div {
    display: flex;
    gap: 3.2rem;
  }
`;

export default function Header() {
  return (
    <SHeader>
      <span>&lt;Smith/&gt;</span>
      <div>
        <p>About-me</p>
        <p>Skills</p>
        <p>Projects</p>
      </div>
    </SHeader>
  );
}
