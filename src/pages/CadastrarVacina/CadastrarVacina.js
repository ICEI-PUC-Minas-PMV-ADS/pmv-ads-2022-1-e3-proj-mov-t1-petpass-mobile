import React, { useState } from "react";
import { View, ScrollView } from "react-native";
import { TextInput, Button } from "react-native-paper";

const CadastrarVacina = ({ navigation }) => {
  const [nome, setNome] = useState("");
  const [vacina, setVacina] = useState("");
  const [idade, setIdade] = useState("");
  const [data, setData] = useState("");
  const [dose, setDose] = useState("");

  const onSubmit = async ({ formData }) => {
    let token = await AsyncStorage.getItem("token");

    const data = new FormData();
    data.append("nome", { input: nome });
    data.append("vacina", { input: vacina });
    data.append("idade", { input: idade });
    data.append("data", { input: data });
    data.append("dose", { input: dose });

    axios
      .post("api", data, {
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: "application/json",
          "Content-Type": "multipart/form-data",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "POST",
          "Access-Control-Allow-Headers": "Content-Type, Authorization",
          "Access-Control-Allow-Credentials": "true",
        },
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <View>
      <ScrollView>
        <TextInput
          label="Nome do pet"
          value={nome}
          onChangeText={(text) => setNome(text)}
        />
        <TextInput
          label="Vacina"
          value={vacina}
          onChangeText={(text) => setVacina(text)}
        />

        <TextInput
          label="Idade de aplicação(em semanas)"
          value={idade}
          onChangeText={(text) => setIdade(text)}
        />
        <TextInput
          label="Data de aplicação"
          value={data}
          onChangeText={(text) => setData(text)}
        />
        <TextInput
          label="Dose aplicada"
          value={dose}
          onChangeText={(text) => setDose(text)}
        />

        <Button
          title={"Cadastrar vacina"}
          onPress={() => onSubmit({ formData })}
        />
      </ScrollView>
    </View>
  );
};

export default CadastrarVacina;
