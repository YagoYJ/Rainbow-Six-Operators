import React from "react";
import { HeaderContainer } from "./styles";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/core";

export default function Header() {
  const navigation = useNavigation();
  return (
    <HeaderContainer>
      <FontAwesome
        name="chevron-left"
        color="#ffffff"
        size={25}
        onPress={() => navigation.goBack()}
      />
    </HeaderContainer>
  );
}
