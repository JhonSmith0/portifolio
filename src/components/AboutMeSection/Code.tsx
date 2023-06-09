import { useHookstate } from "@hookstate/core";
import styled from "styled-components";
import { aboutMeTextState, resetAboutMe } from "../../state/aboutMe";
import Editable from "react-contenteditable";
import { useEffect, useRef } from "react";

const SCode = styled.article`
  background: blue;
  height: 102vh;

  display: grid;
  grid-template-rows: auto 1fr;

  border-radius: 6px;
  overflow: hidden;
  header {
    padding: 0.9rem 1.2rem;
    background: #273138;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;

    .buttons {
      display: flex;
      gap: 0.6rem;

      button {
        width: 1.4rem;
        height: 1.4rem;
        border-radius: 50%;
        border: none;

        &.red {
          background: #ff3b30;
        }
        &.yellow {
          background: #ffd60a;
        }
        &.green {
          background: #34c759;
        }
      }
    }

    .title {
      justify-self: center;

      h2 {
        font-family: "Fira Code";
        font-style: normal;
        font-weight: 300;
        font-size: 1.6rem;
        line-height: 2.1rem;

        text-align: center;

        color: #ffffff;
        text-transform: uppercase;
      }
    }
  }
  .body {
    background: #1e2125;
    padding: 1.6rem;
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 1.8rem;
    line-height: 150%;

    color: #93989c;

    p {
      border: none;
      outline: none;
    }
  }
`;

function Code() {
  const state = useHookstate(aboutMeTextState);
  const text = state.get();

  const elm = useRef(null);

  useEffect(() => {
    document.body.addEventListener("click", (e) => {
      console.log("click");
      if (e.target !== elm.current) {
        resetAboutMe();
      }
    });
  }, [elm]);

  return (
    <SCode ref={elm}>
      <header>
        <div className="buttons">
          <button className="red"></button>
          <button className="yellow"></button>
          <button className="green"></button>
        </div>
        <div className="title">
          <h2>About-me</h2>
        </div>
        <div></div>
      </header>
      <div className="body">
        <Editable
          onBlur={(e) => {
            console.log(e);
          }}
          tagName="p"
          html={text}
          onChange={(e) => {
            state.set(e.target.value);
          }}
          spellCheck={false}
        ></Editable>
      </div>
    </SCode>
  );
}

export default Code;
