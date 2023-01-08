import styled from "styled-components";

export const StyledArticle = styled.article`
  width: 100%;
  max-width: 350px;
  border-radius: 8px;
  background: ${(props) => props.theme.pallete.main.gray};
  position: relative;
  padding-block-start: 116px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledPicture = styled.picture`
  position: absolute;
  left: 50%;
  top: 0px;
  transform: translate(-50%, -50%);
  width: 35%;
`;

export const Text = styled.h2`
  text-align: center;
  margin-block-end: 15px;
`;
