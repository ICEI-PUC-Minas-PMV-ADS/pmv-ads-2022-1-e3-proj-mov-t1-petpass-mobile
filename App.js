import React from "react";
import Routes from "./src/pages/routes";
import { NavigationContainer } from "@react-navigation/native";
import GlobalPlanContext from "./src/Hooks/GlobalState";

export default function App() {
  return (
    <GlobalPlanContext>
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
    </GlobalPlanContext>
  );
}
