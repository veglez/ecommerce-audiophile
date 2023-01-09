import styled from "styled-components";

export const StyledHeader = styled.header`
  display: flex;
  background-color: ${(props) => props.theme.pallete.main.black};
  justify-content: space-between;
  padding: 34px 24px;
  color: ${(props) => props.theme.pallete.neutral.white};
`;

export const Wrapper = styled.div<{ isOpen: boolean }>`
  position: absolute;
  top: 93px;
  right: ${(props) => (props.isOpen ? 0 : "100vw")};
  transition: all 0.5s;
  width: 100vw;
  padding: 32px 12px;
  background-color: ${(props) => props.theme.pallete.neutral.white};
`;
