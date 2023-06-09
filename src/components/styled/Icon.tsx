import styled from "styled-components";

export const Icon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  --size: 2.4rem;

  svg {
    min-width: var(--size);
    min-height: var(--size);
    color: inherit;
  }
`;
