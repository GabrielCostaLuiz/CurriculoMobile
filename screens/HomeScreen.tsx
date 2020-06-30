import React from "react";
import { View, Text, StyleSheet, Image, ImageBackground } from "react-native";

const image = { uri: "https://reactjs.org/logo-og.png" };

export default function Home(){
    return(
        <View style={estilo.area}>
        <Text style={estilo.nome}>Gabriel Costa Luiz</Text>
        <Image
        source={require("../img/eu.png")}
        style={{width: "50%", height:200, marginLeft:87 , marginBottom:20}}/>
        <Text style={estilo.titulo}> Dados Pessoais </Text>
        <Text style={estilo.texto}>- Nacionalidade: Brasileiro</Text>
        <Text style={estilo.texto}>- Estado Civil: Solteiro</Text>
        <Text style={estilo.texto}>- Idade: 17</Text>
        <Text style={estilo.texto}>- Contato: (xx) xxxxx-xxxx</Text>
        <Text style={estilo.texto}>- Email: gabrielti2019@gmail.com</Text>
        <Text style={estilo.textof}>- Endereço: Rua Malva Isco, São Paulo - SP</Text>
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
      marginBottom:5,
    },
    textof: {
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