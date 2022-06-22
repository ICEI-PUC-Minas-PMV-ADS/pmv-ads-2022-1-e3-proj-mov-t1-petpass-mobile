import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import api from "../../api/api";
import { TextInput } from "react-native-web";

export default function App() {
  const [user, setUser] = useState([]);
  const [edit, setEdit] = useState(false);

  const [name, setName] = useState();
  const [email, setEmail] = useState();

  useEffect(() => {
    api.get("/users").then((res) => setUser(res.data));
  }, []);

  const handleEditProfile = (item) => {
    api.put(`/users/${item}`, { name, email });
    setEdit(false);
  };

  return (
    <View style={styles.container}>
      <View style={{ marginLeft: 30 }}>
        {edit ? (
          <TextInput
            defaultValue={user[0]?.name}
            style={{ marginTop: 50, fontSize: 20 }}
            onChangeText={setName}
          />
        ) : (
          <Text style={{ marginTop: 50, fontSize: 20 }}>
            Nome: {user[0]?.name}
          </Text>
        )}
        {edit ? (
          <TextInput
            defaultValue={user[0]?.email}
            style={{ marginTop: 20, fontSize: 20, marginBottom: 50 }}
            onChangeText={setEmail}
          />
        ) : (
          <Text style={{ marginTop: 30, fontSize: 20, marginBottom: 50 }}>
            Email: {user[0]?.email}
          </Text>
        )}

        <StatusBar style="auto" />
      </View>

      {edit ? (
        <Button
          style={{ marginTop: 50 }}
          title="Salvar dados"
          onPress={() => handleEditProfile(user[0]?.id)}
        />
      ) : (
        <Button
          style={{ marginTop: 50 }}
          title="Alterar dados"
          onPress={() => setEdit(true)}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
