import styled from "styled-components";

export const StyledArticle = styled.article`
  width: 100%;
  max-width: 350px;
  min-width: 223px;
  border-radius: 8px;
  background: ${(props) => props.theme.pallete.main.gray};
  position: relative;
  padding-block-start: 88px;
  margin-block-start: 52px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (${(props) => props.theme.breakpoints.desktop}) {
    padding-block-start: 116px;
  } ;
`;

export const StyledPicture = styled.picture`
  position: absolute;
  left: 50%;
  top: 0px;
  transform: translate(-50%, -50%);
  width: min-content;

  img {
    width: initial;
    height: initial;
  }
`;

export const Text = styled.h2`
  text-align: center;
  margin-block-end: 15px;
  font-weight: ${(props) => props.theme.typography.weights.bold};
  font-size: 1.8rem;
  line-height: 2.5rem;
  text-align: center;
  letter-spacing: 0.128571rem;
  text-transform: uppercase;
`;
