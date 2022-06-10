import React, { useContext, useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import api from "../../api/api";
import { useNavigation } from "@react-navigation/native";
import PetContext from "../../Hooks/pets";

export default function MeusPets() {
  const [pets, setPets] = useState();

  useEffect(() => {
    api.get("/pets").then((res) => setPets(res.data));
  }, []);

  const navigation = useNavigation();

  const { setseila } = useContext(PetContext);

  const HandleClickNavigation = (item) => {
    setseila(item);
    navigation.navigate("InfoPet");
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        {pets?.length !== 0 ? (
          <>
            {pets?.map((item, key) => (
              <TouchableOpacity key={key} style={styles.box} onPress={() => HandleClickNavigation(item.id)}>
                <Image
                  style={styles.img}
                  source={require("../../../img/dog.jpg")}
                />
                <View>
                  <Text style={styles.nome}>{item.name}</Text>
                  <Text style={styles.raça}>Raça: {item.raca}</Text>
                </View>
              </TouchableOpacity>
            ))}
          </>
        ) : (
          <Text>Você não tem nenhum pet</Text>
        )}
      </ScrollView>

      <TouchableOpacity onPress={() => navigation.navigate("CadastrarPet")}>
        <View style={styles.addPet}>
          <Text style={styles.addText}> + </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#DCDCDC",
  },
  box: {
    margin: 10,
    borderRadius: 20,
    backgroundColor: "#fff",
    flexDirection: "row",
  },
  img: {
    width: 80,
    height: 80,
    borderRadius: 50,
    margin: 10,
  },
  nome: {
    paddingTop: 20,
    paddingLeft: 15,
    fontWeight: "bold",
    fontSize: 17,
    color: "#363F5F",
    flexDirection: "column",
  },
  raça: {
    padding: 15,
    fontWeight: "bold",
    color: "#969CB3",
  },
  icon: {
    paddingLeft: 70,
    paddingTop: 35,
  },
  addPet: {
    width: 60,
    height: 60,
    backgroundColor: "#fff",
    borderRadius: 60,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#c0c0c0",
    borderWidth: 1,
    bottom: 10,
    marginHorizontal: 310,
  },
  addText: {
    fontWeight: "bold",
    fontSize: 25,
  },
});
