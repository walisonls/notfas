import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import AppLoading from "expo-app-loading";
import { AntDesign } from "@expo/vector-icons";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
} from "react-native";

import { useFonts, Lato_400Regular } from "@expo-google-fonts/lato";

export default function App() {
  const image = require("./resources/bg.jpg");

  const [tarefas, setarTarefas] = useState([
    {
      id: 1,
      tarefa: "Minha primeira tarefa",
    },
    {
      id: 2,
      tarefa: "Minha segunda tarefa",
    },
  ]);

  let [fontsLoaded] = useFonts({
    Lato_400Regular,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {

    function deletarTarefas(id){
      alert("Tarefa com ID: "+id+"foi deletada com sucesso!")
      //deletar tarefa usando o id como endereço.
      let newTarefas = tarefas.filter(function(val){
        return val.id != id;
      });

      setarTarefas(newTarefas)
    }

    return (
      <ScrollView style={styles.container}>
        <StatusBar hidden={true} />
        <ImageBackground source={image} style={styles.image}>
          <View style={styles.coverView}>
            <Text style={styles.textHeader}>
              Lista de tarefas - Walison Lima
            </Text>
          </View>
        </ImageBackground>

        {tarefas.map(function (val) {
          return (
            <View style={styles.tarefaSingle}>
              <View style={{ flex: 1, width: "100%", padding: 10 }}>
                <Text>{val.tarefa}</Text>
              </View>
              <View style={{ alignItems: "flex-end", flex: 1, padding: 10 }}>
                <TouchableOpacity onPress={()=> deletarTarefas(val.id)}>
                  <AntDesign name="minuscircleo" size={24} color="black" />
                </TouchableOpacity>
              </View>
            </View>
          );
        })}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {},
  image: {
    width: "100%",
    height: 100,
    resizeMode: "cover",
  },
  coverView: {
    width: "100%",
    height: 100,
    backgroundColor: "rgba(0,0,0,.5)",
  },
  textHeader: {
    textAlign: "center",
    color: "white",
    fontSize: 20,
    marginTop: 40,
    fontFamily: "Lato_400Regular",
  },
  tarefaSingle: {
    marginTop: 30,
    width: "100%",
    borderBottomWidth: 1,
    borderBottomColor: "black",
    flexDirection: "row",
    paddingBottom: 10,
  },
});
