import styled from "styled-components/native";
import theme from "../../../../../styles/theme";

export const HeaderContainer = styled.View`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 30px 20px;
  background-color: ${theme.colors.black};
`;
