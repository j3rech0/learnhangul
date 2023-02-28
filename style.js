import styled from "styled-components/native";
import Constants from "expo-constants";
import { FlatGrid } from "react-native-super-grid";
import { Path } from "react-native-svg";
import { Feather } from "@expo/vector-icons";
import { svg } from "./src/constants/svg";

export const ButtonTab = styled.TouchableOpacity(() => ({
  borderRadius: 6,
  paddingTop: 10,
  paddingBottom: 10,
  paddingLeft: 20,
  paddingRight: 20,
  width: 152,
  textAlign: "center",
  margin: "0 20px",
  borderWidth: "1px",
  borderStyle: "solid",
}));

export const ButtonGroup = styled.View((props) => ({
  flexDirection: "row",
  justifyContent: "center",
  paddingBottom: 20,
  paddingTop: 20,
  borderTopWidth: 1,
  borderWidth: 1,
  borderColor: props.theme["BORDER_TOP"],
  borderLeftWidth: 0,
  borderBottomWidth: 0,
  borderRightWidth: 0,
}));

export const SVGLogo = styled(Path).attrs((props) => ({
  d: svg.logo,
  fill: props.theme["TEXT_COLOR"],
}))``;

export const FlexInline = styled.View(() => ({
  marginTop: 50,
  marginRight: 20,
  marginBottom: 20,
  display: "flex",
  justifyContent: "space-between",
  flexDirection: "row",
}));

export const ToggleButtonSVG = styled(Feather).attrs((props) => ({
  color: props.theme["TOGGLE_ICON_COLOR"],
  name: props.theme["TOGGLE_ICON"],
}))``;

export const Logo = styled.Image.attrs((props) => ({
  source: props.theme["LOGO"],
  width: (props) => props.width,
  height: (props) => props.height,
}));

export const Container = styled.SafeAreaView((props) => ({
  backgroundColor: props.theme["PRIMARY_COLOR"],
  flex: 1,
  justifyContent: "space-between",
  paddingTop: Constants.statusBarHeight + "px",
}));

export const Head = styled.View(() => ({
  paddingLeft: 30,
  alignItems: "center",
  justifyContent: "center",
  display: "flex",
}));

export const Cards = styled.TouchableOpacity(() => ({}));

export const CardItem = styled.Text((props) => ({
  alignSelf: "center",
  fontSize: props.fontSize || "20px",
  fontFamily: "NotoSerifKR",
  color: props.theme["TEXT_COLOR"],
  display: "flex",
  paddingTop: 10,
  paddingBottom: 10,
}));

export const GridContainer = styled.View((props) => ({
  flex: 1,
  alignItems: "center",
  backgroundColor: props.theme["PRIMARY_COLOR"],
}));

export const ThemeButton = styled.TouchableOpacity(() => ({}));

export const Grid = styled(FlatGrid)(() => ({
  width: "100%",
}));
