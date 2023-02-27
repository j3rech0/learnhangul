import React, { useState } from "react";
import { Cards, CardItem } from "../../style";
import { useFonts } from "expo-font";

const Card = (props) => {
  const [shouldShow, setShouldShow] = useState(true);

  const [fontsLoaded] = useFonts({
    NotoSerifKR: require("../../assets/fonts/NotoSerifKR-Regular.otf"),
    Inter: require("../../assets/fonts/Inter-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Cards
      onPress={() => {
        setShouldShow(!shouldShow);
      }}
    >
      {shouldShow ? (
        <CardItem fontSize={props.fz}>{props.front}</CardItem>
      ) : (
        <CardItem
          style={{
            fontFamily: "Inter",
            color: "#ef5858",
          }}
        >
          {props.back}
        </CardItem>
      )}
    </Cards>
  );
};

export default Card;
