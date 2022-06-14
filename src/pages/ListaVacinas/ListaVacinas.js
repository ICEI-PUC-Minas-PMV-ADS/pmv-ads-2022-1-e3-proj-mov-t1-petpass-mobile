import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
import { Feather, FontAwesome5 } from "@expo/vector-icons";
import api from "../../api/api";
import { useNavigation, useIsFocused } from "@react-navigation/native";

export default function ListaVacinas({ route }) {
  const { petId } = route.params;

  const [vacina, setVacina] = useState();
  const isFocused = useIsFocused();

  useEffect(() => {
    api.get(`/pets/${petId}/vacinas`).then((res) => setVacina(res.data));
  }, [isFocused]);

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <ScrollView>
        {vacina?.length !== 0 ? (
          <>
            {vacina?.map((item) => (
              <View style={styles.box}>
                <Image
                  style={styles.img}
                  source={require("../../../img/ImagemVacina.PNG")}
                />
                <View>
                  <Text style={styles.nome}>Nome: {item.nome}</Text>
                  <Text style={styles.vacina}>Vacina: {item.vacina}</Text>
                  <Text style={styles.vacina}>Dose: {item.dose}</Text>
                </View>

                <View style={styles.icon}>
                  <Feather name="eye" size={25} />

                  <TouchableOpacity
                    onPress={() => navigation.navigate()}
                  ></TouchableOpacity>
                </View>
              </View>
            ))}
          </>
        ) : (
          <Text>Você não tem nenhuma vacina</Text>
        )}
      </ScrollView>

      <TouchableOpacity onPress={() => navigation.navigate("CadastrarVacina")}>
        <View style={styles.addVacina}>
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
    marginTop: 40,
    marginRight: 45,
  },
  addVacina: {
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
