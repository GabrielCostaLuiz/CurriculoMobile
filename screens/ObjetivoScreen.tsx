import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

export default function Objetivo(){
    return(
        <View style={estilo.area}>
        <Text style={estilo.nome}>Gabriel Costa Luiz</Text>
        <Image
        source={require("../img/eu.png")}
        style={{width: "50%", height:200, marginLeft:87 , marginBottom:20}}/>
         <Text style={estilo.titulo}>Objetivo</Text>
        <Text style={estilo.texto}>- Procuro oportunidade na área de T.I (Primeiro Emprego), visando
          crescimento profissional, pessoal e intelectual de forma contínua,
          sempre visando a excelência em todas as atividades que me forem
          destinadas.</Text>
          <Text style={estilo.linha}></Text>
        </View>
    );
}

const estilo = StyleSheet.create({
    area: {
      backgroundColor: "white",
      flex: 1,
    },
    nome: {
        marginTop: 10,
        fontSize: 30,
        textAlign: "center",
        marginBottom: 20,
    },
    titulo: {
        fontSize: 20,
        textAlign: "center",
        borderBottomWidth:2,
        marginBottom:10,
    },
    texto: {
        fontSize: 15,
        lineHeight: 20,
        textAlign: "justify",
        marginLeft: 10,
        marginBottom:10,
    },
    linha: {
        borderTopWidth:2,
      },
  });