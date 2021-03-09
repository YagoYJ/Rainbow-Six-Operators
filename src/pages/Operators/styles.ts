import styled from "styled-components/native";

export const AttackersContainer = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
})`
  flex: 1;
  padding: 20px;
`;

export const OperatorsContainer = styled.View`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 40px;
`;

export const Operator = styled.TouchableOpacity`
  width: 48%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const OperatorIcon = styled.Image.attrs({
  resizeMode: "cover",
})`
  width: 130px;
  height: 130px;
`;
