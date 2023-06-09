import styled from "styled-components";

export const Button = styled.button`
  --cl: #20c997;

  background: none;
  outline: none;
  color: inherit;
  padding: 1.4rem 3.2rem;
  border: solid 1px var(--cl);
  font-family: inherit;
  font-size: 1.8rem;
  margin-block: 2.4rem;
  cursor: pointer;
  overflow: hidden;

  position: relative;
  &::after {
    content: "";
    display: inline-block;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 1;
    transform: translateX(-100%);
    transition: all 0.3s 0s;
  }

  transition: transform 0.1s 0s;
  border-radius: 3px;

  span {
    position: relative;
    z-index: 2;
  }

  &:active {
    transform: scale(1.1);
  }

  &:hover {
    &::after {
      background: var(--cl);
      transform: translateX(0);
    }
  }
`;
