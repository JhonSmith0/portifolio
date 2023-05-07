import styled from "styled-components";

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
  }
`;

function Code() {
  return (
    <SCode>
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
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam
          minima soluta repellat aperiam odio tenetur quaerat vel eligendi
          cupiditate quos, fugit quia dicta reprehenderit beatae repellendus
          dolorum provident ipsam voluptas?
        </p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum, alias
          rem. Sint dolor nobis consequuntur maiores debitis, fugit accusantium,
          doloribus eligendi aliquam, consequatur a officia fuga optio cum
          corporis nulla?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
          animi illum blanditiis quod ut nemo praesentium, at, ea a cum quidem
          quisquam eos ducimus voluptas ullam similique quam fugit. Quae?
        </p>
      </div>
    </SCode>
  );
}

export default Code;
