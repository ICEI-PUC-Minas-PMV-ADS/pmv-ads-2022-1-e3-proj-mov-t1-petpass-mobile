import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
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
            {vacina?.map((item, key) => (
              <View style={styles.box} key={key}>
                <Image
                  style={styles.img}
                  source={require("../../assets/vacina.png")}
                />
                <View>
                  <Text style={styles.nome}>Nome: {item.nome}</Text>
                  <Text style={styles.dados}>Vacina: {item.vacina}</Text>
                  <Text style={styles.dados}>Dose: {item.dose}</Text>
                  <Text style={styles.dados}>
                    Data Aplicação: {item.dataAplicacao}
                  </Text>
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
    paddingTop: 10,
    fontWeight: "bold",
    fontSize: 17,
    color: "#363F5F",
  },
  dados: {
    fontWeight: "bold",
    color: "#969CB3",
    fontSize: 15,
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
});
