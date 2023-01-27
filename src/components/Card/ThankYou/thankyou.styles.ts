import Flex from "@components/UI/Flex";
import styled from "styled-components";

export const Container = styled(Flex)`
  padding: 24px;
  background-color: ${(props) => props.theme.pallete.main.gray};
`;

export const OtherItems = styled.div`
  position: relative;
  margin-block-start: 12px;
  padding-block-start: 12px;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    width: 100%;
    height: 1px;
    background-color: ${({ theme }) => theme.pallete.neutral.black};
    opacity: 0.08;
  }
`;

export const GrandTotal = styled(Flex)`
  padding: 15px 24px;
  background-color: ${({ theme }) => theme.pallete.neutral.black};
`;
export const MainContainer = styled(Flex)`
  background-color: ${({ theme }) => theme.pallete.neutral.white};
  padding: 15px 24px;
  border-radius: 8px;
`;
