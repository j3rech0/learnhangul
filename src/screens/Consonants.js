import React from "react";
import { Grid, GridContainer } from "../../style";
import { DATA } from "../../src/constants";
import Card from "../components/Card";

const CONSONANTS = [...DATA][0].consonants;

const Item = ({ item }) => {
  return <Card front={item.front} back={item.back} fz="25px" />;
};

const Consonants = () => {
  const renderItem = ({ item }) => {
    return <Item item={item} />;
  };

  return (
    <GridContainer style={{ justifyContent: "center" }}>
      <Grid
        itemDimension={100}
        data={CONSONANTS}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
    </GridContainer>
  );
};

export default Consonants;
