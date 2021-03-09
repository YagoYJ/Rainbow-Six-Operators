import { useNavigation } from "@react-navigation/core";
import React from "react";
import { Text } from "react-native";

import operators from "../operators";

import {
  AttackersContainer,
  Operator,
  OperatorsContainer,
  OperatorIcon,
} from "../styles";

export default function Defenders() {
  const { navigate } = useNavigation();
  
  return (
    <AttackersContainer>
      <OperatorsContainer>
        {operators.map(
          (operator) =>
            operator.data.role === "Defender" && (
              <Operator
                key={operator.data.id}
                onPress={() =>
                  navigate("SelectedOperator", { operator: operator })
                }
              >
                <OperatorIcon source={operator.icon} />
                <Text>{operator.data.name}</Text>
              </Operator>
            )
        )}
      </OperatorsContainer>
    </AttackersContainer>
  );
}
