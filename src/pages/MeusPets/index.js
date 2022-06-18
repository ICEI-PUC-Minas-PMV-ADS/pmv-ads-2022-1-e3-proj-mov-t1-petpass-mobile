import React, { useContext, useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Feather, FontAwesome5 } from "@expo/vector-icons";
import api from "../../api/api";
import { useNavigation, useIsFocused } from "@react-navigation/native";
import PetContext from "../../Hooks/pets";

export default function MeusPets() {
  const [pets, setPets] = useState();
  const isFocused = useIsFocused();

  useEffect(() => {
    api.get("/pets").then((res) => setPets(res.data));
  }, [isFocused]);

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
              <View style={styles.box} key={key}>
                <Image
                  style={styles.img}
                  source={require("../../../img/dog.jpg")}
                />

                <View style={{ width: 160 }}>
                  <Text style={styles.nome}>{item.nome}</Text>
                  <Text style={styles.raça}>Raça: {item.raca}</Text>
                  <Text style={styles.raça}>Tipo: {item.tipo}</Text>
                </View>

                <View style={styles.icon}>
                  <TouchableOpacity
                    key={key}
                    onPress={() =>
                      navigation.navigate("InfoPet", {
                        petId: item.id,
                      })
                    }
                  >
                    <Feather name="eye" size={25} />
                  </TouchableOpacity>
                </View>

                <View style={styles.icon}>
                  <TouchableOpacity
                    onPress={() =>
                      navigation.navigate("ListaVacinas", {
                        petId: item.id,
                      })
                    }
                  >
                    <FontAwesome5 name="syringe" size={25} />
                  </TouchableOpacity>
                </View>
              </View>
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
    paddingBottom: 5,
    fontWeight: "bold",
    fontSize: 17,
    color: "#363F5F",
    flexDirection: "column",
  },
  raça: {
    fontWeight: "bold",
    color: "#969CB3",
  },
  icon: {
    marginTop: 40,
    marginRight: 45,
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
