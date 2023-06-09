import styled from "styled-components";
import { Icon } from "../styled/Icon";
import { AiFillGithub, AiOutlineEye } from "react-icons/ai";
import { SmallTitle, Title } from "../styled/Title";

export const StyledProjectItem = styled.div<{ active?: boolean }>`
  position: relative;
  overflow: hidden;
  box-shadow: 0 12px 12px rgba(0, 0, 0, 0.3);

  border-radius: 0.8rem;

  ${Icon} {
    --size: 3.2rem;
  }

  &::after {
    content: "";
    display: block;

    position: absolute;

    top: 0;
    bottom: 0;
    left: 0;
    right: 0;

    background: transparent;

    z-index: 98;

    transition: all 0.3s 0s;
  }

  &.active {
    .bar {
      transform: translateX(0);
    }

    &:hover {
      &::after {
        background: rgba(0, 0, 0, 0.4);
        backdrop-filter: blur(5px);
      }
      .desc {
        transform: translateY(0);
      }
    }
  }

  .bar {
    z-index: 100;
    display: flex;
    gap: 0.9rem;
    position: absolute;
    top: 1rem;
    right: -2rem;
    background: #38d9a9;
    border-radius: 7px;
    padding: 0.4rem 1.2rem;
    padding-right: 2.5rem;
    transition: all 0.3s 0s;

    transform: translateX(100%);
  }

  .desc {
    background: rgba(0, 0, 0, 0.4);
    backdrop-filter: blur(5px);
    color: white;
    position: absolute;
    font-size: 1.6rem;
    bottom: 0;
    padding: 1.8rem;

    width: 100%;
    height: 100%;

    transform: translateY(100%);
    transition: all 0.3s 0.1s;
    z-index: 99;

    p {
      text-align: left;
    }

    ${Title} {
      padding-top: 4.8rem;
      text-align: left;
    }
  }

  color: black;
`;
export function ProjectItem(props: { active?: boolean }) {
  return (
    <StyledProjectItem className={props.active ? "active" : ""}>
      <img
        src="https://images.unsplash.com/photo-1496614932623-0a3a9743552e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
        alt=""
      />
      <div className="bar">
        <Icon>
          <AiFillGithub />
        </Icon>
        <Icon>
          <AiOutlineEye />
        </Icon>
      </div>
      <div className="desc">
        <SmallTitle>Financial</SmallTitle>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi
          architecto maiores laudantium praesentium. Magni odit porro temporibus
          eius dolor ratione esse a omnis dolores, delectus consectetur
          perferendis fuga ipsam minima.
        </p>
      </div>
    </StyledProjectItem>
  );
}
