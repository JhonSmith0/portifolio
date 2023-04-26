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
