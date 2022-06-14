import React, { useEffect, useState } from "react";
import { StyleSheet, View, ScrollView, TouchableOpacity } from "react-native";
import { TextInput, Button, List } from "react-native-paper";
import DateTimePicker from "@react-native-community/datetimepicker";
import moment from "moment";
import api from "../../api/api";
import { useNavigation, useIsFocused } from "@react-navigation/native";
import { FontAwesome5 } from "@expo/vector-icons";

const CadastrarVacina = () => {
  const [nome, setNome] = useState("");
  const [vacina, setVacina] = useState("");
  const [idade, setIdade] = useState("");
  const [dataRegistro, setDataRegistro] = useState(new Date());
  const [dose, setDose] = useState("");
  const [petId, setPetId] = useState("");

  const [petExpanded, setPetExpanded] = useState(false);
  const [vacinaExpanded, setVacinaExpanded] = useState(false);

  const [pets, setPets] = useState();
  const isFocused = useIsFocused();

  const navigation = useNavigation();

  const [showDataRegistroPicker, setShowDataRegistroPicker] = useState(false);

  const dataCreateVacina = {
    nome,
    vacina,
    idade,
    dataRegistro,
    dose,
    petId
  };
  const handleCreateVacina = () => {
    setTimeout(() => {
      api
        .post("/vacinas", dataCreateVacina)
        .then(() => navigation.navigate("Meus Pets"))
        .catch((err) => console.error(err));
    }, 1000);
  };

  useEffect(() => {
    api.get("/pets").then((res) => setPets(res.data));
  }, [isFocused]);

  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <ScrollView>
          <List.Section title="Pet">
            <List.Accordion
              title={nome}
              expanded={petExpanded}
              onPress={() => setPetExpanded(!petExpanded)}
              left={(props) => <List.Icon {...props} icon="paw" />}
            >
              {pets?.map((item) => (
                <List.Item title={item.nome} onPress={() => {
                  setPetId(item.id)
                  setNome(item.nome)
              }} />
              ))}
            </List.Accordion>
          </List.Section>

          <List.Section title="Vacina">
            <List.Accordion
              title={vacina}
              expanded={vacinaExpanded}
              onPress={() => setVacinaExpanded(!vacinaExpanded)}
              left={(props) => <List.Icon {...props} icon={({ size, color }) => (
                <FontAwesome5 name="syringe" size={25} />
              )} />}
            >
              <List.Item title="V8 ou V10" onPress={(text) => setVacina("V8 ou V10")} />
              <List.Item title="Gripe Canina" onPress={(text) => setVacina("Gripe Canina")} />
              <List.Item title="Giardiase" onPress={(text) => setVacina("Giardiase")} />
              <List.Item title="Anti-rábica" onPress={(text) => setVacina("Anti-rábica")} />  
            </List.Accordion>
          </List.Section>

          <TextInput
            label="Idade de aplicação(em semanas)"
            value={idade}
            onChangeText={(text) => setIdade(text)}
          />

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

          <TouchableOpacity onPress={() => setShowDataRegistroPicker(true)}>
            <TextInput
              label="Data de Aplicação"
              value={moment(dataRegistro).format("DD/MM/YYYY")}
              left={<TextInput.Icon name="calendar" />}
              onChangeText={(text) => setDataRegistro(text)}
              editable={false}
            />
          </TouchableOpacity>

          <TextInput
            label="Dose aplicada"
            value={dose}
            onChangeText={(text) => setDose(text)}
          />

          <View style={{ justifyContent: "center", paddingHorizontal: 40 }}>
            <Button
              mode="contained"
              style={{
                marginTop: 30,
              }}
              theme={{ roundness: 20 }}
              onPress={() => handleCreateVacina()}
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

export default CadastrarVacina;
