import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  min-height: 320px;
  height: 320px;
  padding: 101px 24px;
  width: 100%;

  & > * {
    position: relative;
    z-index: 10;
  }
`;

export const ImgContainer = styled.div`
  position: absolute;
  z-index: 1;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;

  & picture {
    height: 100%;
  }
`;
