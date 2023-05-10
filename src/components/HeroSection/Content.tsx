import styled from "styled-components";

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
    }

    p {
      font-size: 2.4rem;
      font-weight: 200;
      color: #20c997;
    }

    .cv {
      position: relative;
      background: none;
      outline: none;
      color: inherit;
      padding: 1.4rem 3.2rem;
      border: solid 1px #20c997;
      color: #20c997;
      border-radius: 3px;
      font-family: inherit;
      font-size: 1.8rem;
      margin-block: 2.4rem;
      cursor: pointer;

      transition: color .3s, transform .3s cubic-bezier(.44,2,.19,.68);

      span {
        position: relative;
        z-index: 2;
      }

      &::after {
          content: '';
          position:absolute;
          display: block;
          top: 0;
          right: 0;
          width: 0%;
          transform: scale(1.0029);
          height: 100%;
          background: transparent;
          transition: width .3s, background .3s;
          z-index: 1;
        }
      &:hover {
        color: #fff;
        transform: scale(1.1);
        &::after {
          width: 100%;
          left: 0;
          background: #20c997;
        }
      }
    }
  }
`;
function Content() {
  return (
    <SContent>
      <div className="introduction">
        <h1>
          Hello,
          <br />
          I'm Smith
          <br />
          Fullstack Developer
        </h1>
        <p>nice too meet you !</p>
        <button className="cv">
          <span>View My CV</span>
        </button>
      </div>
    </SContent>
  );
}

export default Content;
