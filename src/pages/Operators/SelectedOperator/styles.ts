import styled from "styled-components/native";
import theme from "../../../../styles/theme";

export const OperatorHeader = styled.View`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const OperatorIcon = styled.Image.attrs({
  resizeMode: "contain",
})`
  width: 170px;
  height: 170px;
`;

export const OperatorName = styled.Text`
  font-weight: bold;
  font-size: 20px;
  color: ${theme.colors.darkBlue};
`;

export const OperatorDescription = styled.View`
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin: 10px auto;
  padding: 10px 0;
  border-top-width: 3;
  border-top-color: ${theme.colors.darkBlue};
`;

export const OperatorInfo = styled.Text`
  font-weight: bold;
  margin: 10px 0;
  font-size: 20px;
`;

export const OperatorValue = styled.Text`
  font-weight: normal;
  font-size: 18px;
`;
