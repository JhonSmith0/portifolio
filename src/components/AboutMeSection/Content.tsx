import styled from "styled-components";

export const SAboutMeSectionContent = styled.div`
  color: #ffffff;
  font-family: "Inter";
  h2 {
    font-style: normal;
    font-weight: 700;
    font-size: 5.6rem;
    line-height: 6.8rem;

    margin-bottom: 1.8rem;
  }

  p {
    font-style: normal;
    font-weight: 300;
    font-size: 1.8rem;
    line-height: 150%;
    margin-bottom: 1.4rem;
  }
`;
function AboutMeSectionContent() {
  return (
    <SAboutMeSectionContent>
      <h2>About-me</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc maximus
        commodo ornare. Phasellus gravida justo quis nulla elementum blandit.
        Quisque ornare ullamcorper nisi, in laoreet metus auctor ac. Praesent
        nisl erat, semper suscipit purus sed, semper pulvinar nunc. Morbi quis
        nunc vitae nisl accumsan rutrum. Donec non felis ipsum. Vestibulum
        mattis justo blandit dui lacinia mattis. Donec eget lorem non urna
        faucibus iaculis. Quisque congue ipsum nec ornare commodo.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc maximus
        commodo ornare. Phasellus gravida justo quis nulla elementum blandit.
        Quisque ornare ullamcorper nisi, in laoreet metus auctor ac. Praesent
        nisl erat, semper suscipit purus sed, semper pulvinar nunc. Morbi quis
        nunc vitae nisl accumsan rutrum. Donec non felis ipsum. Vestibulum
        mattis justo blandit dui lacinia mattis. Donec eget lorem non urna
        faucibus iaculis. Quisque congue ipsum nec ornare commodo.{" "}
      </p>
    </SAboutMeSectionContent>
  );
}

export default AboutMeSectionContent;
