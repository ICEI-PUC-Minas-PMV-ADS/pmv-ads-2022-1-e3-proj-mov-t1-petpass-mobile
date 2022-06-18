import React, { useContext } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MeusPets from "./MeusPets/index";
import Profile from "./Profile/index";
import { Entypo, Feather, FontAwesome5 } from "@expo/vector-icons";
import MeusPetsInfo from "./MeusPetsInfo/index";
import Presentation from "./presentation/Presentation";
import { CreateAccount } from "./CreateAccount/CreateAccount";
import CadastrarPet from "./CadastrarPet/CadastrarPet";
import { Login } from "./Login/Login";
import CadastrarVacina from "./CadastrarVacina/CadastrarVacina";

import GlobalContext from "../Hooks/login";
import ListaVacinas from "./ListaVacinas/ListaVacinas";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

export default function Routes() {
  const { planState } = useContext(GlobalContext);

  return (
    <>
      {/* ! */}
      {planState ? (
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={Presentation}
            options={{ header: () => null }}
          />
          <Stack.Screen
            name="Criar conta"
            component={CreateAccount}
            options={{ header: () => null }}
          />
          <Stack.Screen
            name="Login"
            component={Login}
            options={{ header: () => null }}
          />
          <Stack.Screen name="CadastrarPet" component={CadastrarPet} />
        </Stack.Navigator>
      ) : (
        <>
          <Tab.Navigator
            screenOptions={{
              tabBarStyle: {
                backgroundColor: "#fff",
                borderTopColor: "transparent",
              },
              tabBarActiveTintColor: "#19225B",
              // tabBarInactiveTintColor:
            }}
          >
            <Tab.Screen
              name="Meus Pets"
              component={MeusPets}
              options={{
                tabBarIcon: ({ size, color }) => (
                  <Entypo name="home" size={size} color={color} />
                ),
                title: "Meus Pets",
              }}
            />

            <Tab.Screen
              name="CadastrarPet"
              component={CadastrarPet}
              options={{
                tabBarIcon: ({ size, color }) => (
                  <Feather name="book" size={size} color={color} />
                ),
                title: "Cadastrar Pet",
              }}
            />

            <Tab.Screen
              name="Perfil"
              component={Profile}
              options={{
                tabBarIcon: ({ size, color }) => (
                  <Feather name="user" size={size} color={color} />
                ),
                title: "Perfil",
              }}
            />

            <Tab.Screen
              name="CadastrarVacina"
              component={CadastrarVacina}
              options={{
                tabBarIcon: ({ size, color }) => (
                  <FontAwesome5 name="syringe" size={size} color={color} />
                ),
                title: "Cadastrar Vacina",
              }}
            />

            <Tab.Screen
              name="ListaVacinas"
              component={ListaVacinas}
              options={{
                tabBarIcon: ({ size, color }) => (
                  <Feather name="list" size={size} color={color} />
                ),
                title: "Listar Vacinas",
              }}
            />

            <Tab.Screen
              name="InfoPet"
              component={MeusPetsInfo}
              options={{
                tabBarButton:() => null,
                tabBarIcon: ({ size, color }) => (
                  <Feather name="user" size={size} color={color} />
                ),
              }}
            />

          </Tab.Navigator>
        </>
      )}
    </>
  );
}
