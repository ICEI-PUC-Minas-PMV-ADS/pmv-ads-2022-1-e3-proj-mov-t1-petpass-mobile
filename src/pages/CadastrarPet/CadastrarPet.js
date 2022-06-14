import React, { useState } from "react";
import { StyleSheet, View, TouchableOpacity, ScrollView } from "react-native";
import { Appbar, TextInput, Button, Text, List } from "react-native-paper";
import DateTimePicker from "@react-native-community/datetimepicker";
import moment from "moment";
import api from "../../api/api";
import { useNavigation } from "@react-navigation/native";

const CadastrarPet = () => {
  const [nome, setNome] = useState("");
  const [tipo, setTipo] = useState("");
  const [sexo, setSexo] = useState("");
  const [raca, setRaca] = useState("");
  const [peso, setPeso] = useState("");
  const [idade, setIdade] = useState("");

  const [showDataNascimentoPicker, setShowDataNascimentoPicker] =
    useState(false);
  const [showDataRegistroPicker, setShowDataRegistroPicker] = useState(false);

  const [dataNascimento, setDataNascimento] = useState(new Date());
  const [dataRegistro, setDataRegistro] = useState(new Date());

  const [tipoExpanded, setTipoExpanded] = useState(false);
  const [sexoExpanded, setSexoExpanded] = useState(false);

  const navigation = useNavigation();

  const dataCreatePet = {
    nome,
    tipo,
    sexo,
    raca,
    peso,
    idade,
    dataNascimento,
    dataRegistro,
  };
  const handleCreatePet = () => {
    setTimeout(() => {
      api
        .post("/pets", dataCreatePet)
        .then(() => navigation.navigate("Meus Pets"))
        .catch((err) => console.error(err));
    }, 1000);
  };

  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <ScrollView>
          <TextInput
            label="Nome"
            value={nome}
            onChangeText={(text) => setNome(text)}
          />
          <List.Section title="Tipo">
            <List.Accordion
              title={tipo}
              expanded={tipoExpanded}
              onPress={() => setTipoExpanded(!tipoExpanded)}
              left={(props) => <List.Icon {...props} icon="paw" />}
            >
              <List.Item
                title="Cachorro"
                onPress={(text) => setTipo("Cachorro")}
              />
              <List.Item title="Gato" onPress={(text) => setTipo("Gato")} />
            </List.Accordion>
          </List.Section>

          <List.Section title="Sexo">
            <List.Accordion
              title={sexo}
              expanded={sexoExpanded}
              onPress={() => setSexoExpanded(!sexoExpanded)}
              left={(props) => (
                <List.Icon {...props} icon="gender-male-female" />
              )}
            >
              <List.Item title="Macho" onPress={(text) => setSexo("Macho")} />
              <List.Item title="Femea" onPress={(text) => setSexo("Femea")} />
            </List.Accordion>
          </List.Section>

          <TextInput
            label="Raça"
            value={raca}
            onChangeText={(text) => setRaca(text)}
          />
          <TextInput
            label="Peso (kg)"
            value={peso}
            onChangeText={(text) => setPeso(text)}
          />
          <TextInput
            label="Idade"
            value={idade}
            onChangeText={(text) => setIdade(text)}
          />
          {showDataNascimentoPicker && (
            <DateTimePicker
              testID="dateTimeNascimentoPicker"
              value={dataNascimento}
              mode={"date"}
              is24Hour={true}
              display="default"
              onTouchCancel={() => setShowDataNascimentoPicker(false)}
              onChange={(event, date) => {
                setShowDataNascimentoPicker(false);
                setDataNascimento(date);
              }}
            />
          )}
          {showDataRegistroPicker && (
            <DateTimePicker
              testID="dateTimeRegistroPicker"
              value={dataRegistro}
              mode={"date"}
              is24Hour={true}
              display="default"
              onTouchCancel={() => setShowDataRegistroPicker(false)}
              onChange={(event, date) => {
                setShowDataRegistroPicker(false);
                setDataRegistro(date);
              }}
            />
          )}
          <TouchableOpacity onPress={() => setShowDataNascimentoPicker(true)}>
            <TextInput
              label="Data de Nascimento"
              value={moment(dataNascimento).format("DD/MM/YYYY")}
              left={<TextInput.Icon name="calendar" />}
              onChangeText={(text) => setDataNascimento(text)}
              editable={false}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setShowDataRegistroPicker(true)}>
            <TextInput
              label="Data de Registro"
              value={moment(dataRegistro).format("DD/MM/YYYY")}
              left={<TextInput.Icon name="calendar" />}
              onChangeText={(text) => setDataRegistro(text)}
              editable={false}
            />
          </TouchableOpacity>
          <View style={{ justifyContent: "center", paddingHorizontal: 40 }}>
            <Button
              mode="contained"
              style={{
                marginTop: 30,
              }}
              theme={{ roundness: 20 }}
              onPress={() => handleCreatePet()}
            >
              Cadastrar
            </Button>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

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
    marginTop: 10,
    justifyContent: "center",
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
});

export default CadastrarPet;
