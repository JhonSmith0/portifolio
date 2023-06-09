import styled from "styled-components";

export const Dash = styled.span<{ blink?: boolean }>`
  width: 0.6ch;

  margin-inline: 2px;

  display: inline-block;

  border-bottom: solid 1px white;

  @keyframes blinking {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  ${(props) =>
    props.blink &&
    `
    animation: blinking .3s infinite backwards alternate;


  `}
`;
