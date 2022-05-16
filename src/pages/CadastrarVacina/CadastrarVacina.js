import React, { useState } from "react";
import { View, ScrollView } from "react-native";
import { TextInput, Button } from "react-native-paper";

const CadastrarVacina = () => {
  const [nome, setNome] = useState("");
  const [vacina, setVacina] = useState("");
  const [idade, setIdade] = useState("");
  const [data, setData] = useState("");
  const [dose, setDose] = useState("");

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
          onPress={() => console.log("Pressed")}
        />
      </ScrollView>
    </View>
  );
};

export default CadastrarVacina;
