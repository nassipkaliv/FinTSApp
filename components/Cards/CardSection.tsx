import React from "react";
import styled from "styled-components/native";

// components
import CardItem from "./CardItem";
import logo1 from "./../../assets/cards/visa_white.png";

const CardsList = styled.FlatList`
  width: 100%;
  padding-left: 25px;
  flex: 1;
  padding-bottom: 15px;
`;

const CardSection = (props: { data?: object[]; navigation: any }) => {
  const handlePress = (balance: string) => {
    props.navigation.navigate("Balance");
  };
  return (
    <CardsList
      data={[
        { account: "3845757744", balance: 20000.5, logo: logo1 },
        { account: "3845737744", balance: 20000.5, logo: logo1 },
        { account: "3845257744", balance: 20000.5, logo: logo1 },
      ]}
      contentContainerStyle={{
        paddingRight: 25,
        alignItems: "center",
      }}
      showsHorizontalScrollIndicator={false}
      horizontal={true}
      keyExtractor={(item: any) => item.account.toString()}
      renderItem={({ item }: any) => (
        <CardItem
          logo={item.logo}
          balance={item.balance}
          accountNo={item.account}
          handlePress={handlePress}
        />
      )}
    />
  );
};

export default CardSection;