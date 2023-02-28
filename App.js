import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { ThemeProvider } from "styled-components/native";
import { Container, ThemeButton, FlexInline, ToggleButtonSVG } from "./style";
import Header from "./src/components/Header";
import Tab from "./src/navigation/Tab";
import { darkTheme, lightTheme } from "./src/constants";
import { StatusBar } from "expo-status-bar";
import { useColorScheme } from "react-native";

export default function App() {
  const scheme = useColorScheme();
  const [theme, setTheme] = useState(scheme);

  const toggleTheme = async () => {
    const themeValue = theme === "dark" ? "light" : "dark";
    setTheme(themeValue);
  };

  const NavTheme = theme === "light" ? lightTheme : darkTheme;
  const ExtendTheme = {
    colors: {
      ...NavTheme,
    },
  };

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <Container> 
        <FlexInline>
          <Header />
          <ThemeButton
            onPress={() => {
              toggleTheme();
            }}
          >
            <ToggleButtonSVG size={24} />
          </ThemeButton>
        </FlexInline>
        <NavigationContainer theme={ExtendTheme}>
          <Tab />
        </NavigationContainer>
        <StatusBar style="light" />
      </Container>
    </ThemeProvider>
  );
}
