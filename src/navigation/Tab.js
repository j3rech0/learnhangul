import React from "react";
import { Vowels, Consonants } from "../screens";
import { ButtonGroup, ButtonTab } from "../../style";
import { Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useTheme } from "@react-navigation/native";

const Tabs = createBottomTabNavigator();

const BaseTabs = ({ state, descriptors, navigation }) => {
  
  const { colors } = useTheme();

  return (
    <ButtonGroup>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key,
          });
        };

        return (
          <ButtonTab
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            key={route.key}
            style={{
              backgroundColor: isFocused
                ? colors.TEXT_COLOR
                : colors.PRIMARY_COLOR,
              borderColor: isFocused ? colors.PRIMARY_COLOR : colors.TEXT_COLOR,
            }}
          >
            <Text
              style={{
                textAlign: "center",
                color: isFocused ? colors.PRIMARY_COLOR : colors.TEXT_COLOR,
              }}
            >
              {label}
            </Text>
          </ButtonTab>
        );
      })}
    </ButtonGroup>
  );
};

const Footer = () => {
  return (
    <>
      <Tabs.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName="Consonants"
        tabBar={(props) => <BaseTabs {...props} />}
      >
        <Tabs.Screen name="Consonants" component={Consonants} />
        <Tabs.Screen name="Vowels" component={Vowels} />
      </Tabs.Navigator>
    </>
  );
};

export default Footer;
