import { useContext, useEffect, useState } from "react";
import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import api from "../../api/api";
import { useIsFocused } from "@react-navigation/native";

export default function MeusPetsInfo({ route }) {
  const { petId } = route.params;

  const [pet, setPet] = useState({});
  const isFocused = useIsFocused();

  useEffect(() => {
    api.get(`/pets/${petId}?_embed=vacinas`).then((res) => setPet(res.data));
  }, [isFocused]);

  const dateNascimento = new Date(pet.dataNascimento);
  const formatDataNascimento = dateNascimento.toLocaleDateString("pt-BR", {
    timeZone: "UTC",
  });

  const dateRegistro = new Date(pet.dataRegistro);
  const formatDataRegistro = dateRegistro.toLocaleDateString("pt-BR", {
    timeZone: "UTC",
  });

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.box}>
          <View>
            <Image
              style={styles.img}
              source={require("../../../img/dog.jpg")}
            />
          </View>
          <View>
            <Text style={styles.nome}>{pet.nome}</Text>
            <Text style={styles.dados}>Raça: {pet.raca}</Text>
            <Text style={styles.dados}>Tipo: {pet.tipo}</Text>
            <Text style={styles.dados}>Idade: {pet.idade}</Text>
            <Text style={styles.dados}>Peso: {pet.peso}</Text>
            <Text style={styles.dados}>
              Data de Nascimento: {formatDataNascimento}
            </Text>
            <Text style={styles.dados}>
              Data de Registro: {formatDataRegistro}
            </Text>
          </View>

          <View style={styles.vac}>
            {pet.vacinas?.length !== 0 ? (
              <>
                {pet.vacinas?.map((item, key) => (
                  <View style={styles.box} key={key}>
                    <Image
                      style={styles.img}
                      source={require("../../assets/vacina.png")}
                    />
                    <View>
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
          </View>
        </View>
      </ScrollView>
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
    flexDirection: "column",
  },
  vac: {
    margin: 10,
    borderRadius: 20,
    backgroundColor: "#fff",
  },
  img: {
    width: 80,
    height: 80,
    borderRadius: 50,
    margin: 10,
    alignItems: "center",
  },
  nome: {
    paddingLeft: 15,
    paddingBottom: 5,
    fontWeight: "bold",
    fontSize: 17,
    color: "#363F5F",
    flexDirection: "column",
  },
  dados: {
    paddingLeft: 15,
    paddingBottom: 5,
    fontSize: 17,
    color: "#969CB3",
    flexDirection: "column",
  },
});
