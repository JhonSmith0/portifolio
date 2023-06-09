import styled from "styled-components";
import { Button } from "../styled/Button";
import { useHookstate } from "@hookstate/core";
import { useEffect } from "react";
import { interval } from "../../utils/interval";
import { Typing } from "../Typing";

const SContent = styled.div`
  display: flex;
  padding: 7.4rem 8.4rem;
  justify-content: space-between;
  align-items: center;
  color: white;

  .introduction {
    h1 {
      font-size: 5.6rem;
      margin-bottom: 1rem;
      font-family: "Roboto", "Inter";
    }

    p {
      font-size: 2.4rem;
      font-weight: 200;
      color: #20c997;
    }

    .cv {
      background: none;
      outline: none;
      color: inherit;
      padding: 1.4rem 3.2rem;
      border: solid 1px #20c997;
      font-family: inherit;
      font-size: 1.8rem;
      margin-block: 2.4rem;
      cursor: pointer;
    }
  }
`;

function Content() {
  return (
    <SContent>
      <div className="introduction">
        <h1>
          <span>Hello,</span>
          <br />
          <span>I'm Smith</span>
          <br />
          <Typing text="Fullstack Developer" startFull={true} />
        </h1>
        <p>nice too meet you !</p>
        <Button>
          <span>View my CV</span>
        </Button>
      </div>
    </SContent>
  );
}

export default Content;
