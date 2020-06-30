import React, { useState } from "react";
import { View, Text, StyleSheet, Image, ImageBackground } from "react-native";
import { FlatList } from "react-native-gesture-handler";

export default function Formacao() {
    const [dados, setDados] = useState([
        {
          curso: "#Técnico em Informática (cursando)",
          duracao: "Duração: 3 semestres ",
          senac: "Senac Tatuapé ",
        },
        {
            curso: "#Excel 2016 ",
            duracao: "Duração: 24 horas",
            senac: "Senac Tatuapé",
        },
        {
            curso: "#Excel 2016 Avançado ",
            duracao: "Duração: 39 horas",
            senac: "Senac Tatuapé",
        },
        {
            curso: "#Orientação Profissional com Inclusão Digital",
            duracao: "Duração: 8 horas",
            senac: "Server – Educação Profissional ",
            fim: "---------------------------"
        },
      ]);
  return (
    <View style={estilo.area}>
      <Text style={estilo.nome}>Gabriel Costa Luiz</Text>
      <Image
        source={require("../img/eu.png")}
        style={{ width: "40%", height: 150, marginLeft: 105, marginBottom: 20 }}
      />
      <Text style={estilo.titulo}>
        Formação
      </Text>
      <Text style={estilo.subtitulo}>- Escolaridade</Text>
      <Text style={estilo.texto}>Ensino médio completo </Text>
      <Text style={estilo.subtitulo}>- Graduações</Text>
  
      <FlatList
        data={Object.keys(dados)}
        renderItem={({ item, index }) => (
          <View>
            <Text style={estilo.cursos}>{dados[index].curso}</Text>
            <Text style={estilo.duracao}>{dados[index].duracao}</Text>
            <Text style={estilo.texto}>{dados[index].senac}</Text>
          </View>
        )}
      />
          <Text style={estilo.linha}>
      </Text>
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
  subtitulo: {
    fontSize: 18,
    textAlign: "justify",
    marginLeft: 10,
    marginBottom: 5,
    fontWeight: "bold",
  },
cursos: {
    fontSize: 15,
    textAlign: "justify",
    marginLeft: 10,
    marginBottom: 5,
    fontWeight: "bold",
  },
  duracao: {
    fontSize: 15,
    lineHeight: 20,
    textAlign: "justify",
    marginLeft: 10,
    marginBottom: 5,
  },
texto: {
  fontSize: 15,
  lineHeight: 20,

  marginLeft: 10,
  marginBottom: 15,
},
  linha: {
    borderTopWidth:2,
  },
});
