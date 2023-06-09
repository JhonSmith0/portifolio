import styled from "styled-components";
import { ProjectItem, StyledProjectItem } from "./ProjectItem";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { useHookstate } from "@hookstate/core";
import { memo, useEffect, useRef } from "react";

export const StyledProjectsCarousel = styled.div`
  color: white;
  overflow: hidden;

  .slide {
    cursor: pointer;
    transition: all 0.3s 0s;
    &:not(.selected) {
      transform: scale(0.8);
      filter: blur(6px);
    }
  }

  ${StyledProjectItem} {
    background: blue;
  }
`;

export const ProjectsCarousel = memo(() => {
  const selected = useHookstate(1);

  console.log({ selected: selected.get() });

  return (
    <StyledProjectsCarousel>
      <Carousel
        infiniteLoop
        useKeyboardArrows
        showArrows={false}
        showThumbs={false}
        swipeable
        selectedItem={selected.get()}
        onChange={(e) => selected.set(e)}
        transitionTime={500}
        centerMode
        centerSlidePercentage={30}
        showIndicators={false}
        showStatus={false}
        onClickItem={(e) => {
          selected.set(e);
        }}
      >
        {Array.from({ length: 5 }, (_, i) => (
          <ProjectItem key={i} active={selected.get() === i} />
        ))}
      </Carousel>
    </StyledProjectsCarousel>
  );
});
