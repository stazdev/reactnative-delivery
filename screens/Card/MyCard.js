import { StyleSheet, Text, View, ScrollView } from "react-native";
import React from "react";
import { COLORS, dummyData, FONTS, icons, SIZES } from "../../constants";
import { CardItem, Header, IconButton, TextButton } from "../../components";
import { useState } from "react";

const MyCard = ({ navigation }) => {
  const [selectedCard, setSelectedCard] = useState(null);
  function renderHeader() {
    return (
      <Header
        title={"MY CARDS"}
        containerStyle={{
          height: 50,
          marginHorizontal: SIZES.padding,
          marginTop: 40,
        }}
        leftComponent={
          <IconButton
            icon={icons.back}
            containerStyle={{
              width: 40,
              height: 40,
              justifyContent: "center",
              alignItems: "center",
              borderWidth: 1,
              borderRadius: SIZES.radius,
              borderColor: COLORS.gray2,
            }}
            iconStyle={{
              width: 20,
              height: 20,
              tintColor: COLORS.gray2,
            }}
            onPress={() => navigation.goBack()}
          />
        }
        rightComponent={<View style={{ width: 40 }} />}
      />
    );
  }

  function renderMyCards() {
    return (
      <View>
        {dummyData.myCards.map((item, index) => {
          return (
            <CardItem
              key={`MyCard-${item.id}`}
              item={item}
              isSelected={
                `${selectedCard?.key}-${selectedCard?.id}` ==
                `MyCard-${item.id}`
              }
              onPress={() => setSelectedCard({ ...item, key: "MyCard" })}
            />
          );
        })}
      </View>
    );
  }

  function renderAddNewCard() {
    return (
      <View
        style={{
          marginTop: SIZES.padding,
        }}
      >
        <Text
          style={{
            ...FONTS.h3,
          }}
        >
          Add New Card
        </Text>
        {dummyData.allCards.map((item, index) => {
          return (
            <CardItem
              key={`NewCard-${item.id}`}
              item={item}
              isSelected={
                `${selectedCard?.key}-${selectedCard?.id}` ==
                `NewCard-${item.id}`
              }
              onPress={() => setSelectedCard({ ...item, key: "NewCard" })}
            />
          );
        })}
      </View>
    );
  }

  function renderFooter() {
    return (
      <View
        style={{
          paddingTop: SIZES.radius,
          paddingBottom: SIZES.padding,
          paddingHorizontal: SIZES.padding,
        }}
      >
        <TextButton
          buttonContainerStyle={{
            height: 60,
            borderRadius: SIZES.radius,
            backgroundColor: COLORS.primary,
          }}
          label={selectedCard?.key == "NewCard" ? "Add" : "Place your order"}
          onPress={() => {
            if (selectedCard?.key == "NewCard") {
              navigation.navigate("AddCard", { selectedCard: selectedCard });
            } else {
              navigation.navigate("Checkout", { selectedCard: selectedCard });
            }
          }}
        />
      </View>
    );
  }
  return (
    <View style={{ flex: 1, backgroundColor: COLORS.white }}>
      {renderHeader()}
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          marginTop: SIZES.radius,
          paddingHorizontal: SIZES.padding,
          paddingBottom: SIZES.radius,
        }}
      >
        {/* my cards  */}
        {renderMyCards()}
        {/* add new cards  */}
        {renderAddNewCard()}
      </ScrollView>
      {/* footer  */}
      {renderFooter()}
    </View>
  );
};

export default MyCard;

const styles = StyleSheet.create({});
