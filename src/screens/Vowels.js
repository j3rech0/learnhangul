import React from "react";
import { DATA } from "../../src/constants";
import { Grid, GridContainer } from "../../style";
import Card from "../components/Card";

const VOWELS = [...DATA][0].vowels;

const Item = ({ item }) => {
  return <Card front={item.front} back={item.back} fz="25px" />;
};

const Vowels = () => {
  const renderItem = ({ item }) => {
    return <Item item={item} />;
  };

  return (
    <GridContainer>
      <Grid
        itemDimension={100}
        data={VOWELS}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
    </GridContainer>
  );
};

export default Vowels;
