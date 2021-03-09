import { useRoute } from "@react-navigation/core";
import React from "react";
import { View } from "react-native";
import Header from "../components/Header";
import { OperatorIcon } from "../styles";
import {
  OperatorHeader,
  OperatorName,
  OperatorDescription,
  OperatorInfo,
  OperatorValue,
} from "./styles";

interface ParamsProps {
  key: string;
  name: string;
  params: {
    operator: {
      data: {
        id: string;
        name: string;
        role: string;
        unit: string;
        ratings: {
          armor: number;
          speed: number;
        };
        meta: {
          sex: "f" | "m";
          country: string;
          season: string;
          height: number;
          weight: number;
        };
        bio: {
          real_name: string;
          birthplace: string;
        };
      };
      icon: string;
    };
  };
}

export default function SelectedOperator() {
  const { params } = useRoute<ParamsProps>();

  return (
    <>
      <Header />
      <OperatorHeader>
        <OperatorIcon source={params.operator.icon} />
        <OperatorName>{params.operator.data.name}</OperatorName>
      </OperatorHeader>
      <OperatorDescription>
        <OperatorInfo>
          Nome verdadeiro:{" "}
          <OperatorValue>{params.operator.data.bio.real_name}</OperatorValue>
        </OperatorInfo>
        <OperatorInfo>
          Posição:{" "}
          <OperatorValue>
            {params.operator.data.role === "Attacker" ? "Atacante" : "Defensor"}
          </OperatorValue>
        </OperatorInfo>
        <OperatorInfo>
          Resistência:{" "}
          <OperatorValue>{params.operator.data.ratings.armor}</OperatorValue>
        </OperatorInfo>
        <OperatorInfo>
          Velocidade:{" "}
          <OperatorValue>{params.operator.data.ratings.speed}</OperatorValue>
        </OperatorInfo>
        <OperatorInfo>
          Força Tática:{" "}
          <OperatorValue>{params.operator.data.unit}</OperatorValue>
        </OperatorInfo>
      </OperatorDescription>
    </>
  );
}
