import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
  place-items: center;
  place-content: center;

  @media screen and (min-width: ${(props) => props.theme.breakpoints.tablet}) {
    grid-template-columns: 277px 395px;
    grid-template-rows: auto auto;
    gap: 20px 18px;

    & > * {
      width: 100%;
      max-width: initial;
    }

    & > *:first-child {
      grid-column: 1 / 2;
      grid-row: 1 / 2;
    }

    & > *:nth-child(2) {
      grid-column: 1 / 2;
      grid-row: 2 / 3;
    }

    & > *:nth-child(3) {
      grid-column: 2 / 3;
      grid-row: 1 / 3;
    }
  }

  @media screen and (min-width: ${(props) => props.theme.breakpoints.desktop}) {
    grid-template-columns: 445px 635px;
  }
`;
