import { StyleSheet, Text, View, Image } from "react-native";
import React, { useEffect, useState } from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { COLORS, dummyData, FONTS, icons, SIZES } from "../../constants";
import {
  CardItem,
  FooterTotal,
  FormInput,
  Header,
  IconButton,
} from "../../components";

const Checkout = ({ navigation, route }) => {
  const [selectedCard, setSelectedCard] = useState(null);

  useEffect(() => {
    let { selectedCard } = route.params;
    setSelectedCard(selectedCard);
  }, []);

  function renderHeader() {
    return (
      <Header
        title={"CHECKOUT"}
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
        {selectedCard &&
          dummyData.myCards.map((item, index) => {
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

  function renderDeliveryAddress() {
    return (
      <View style={{ marginTop: SIZES.padding }}>
        <Text
          style={{
            ...FONTS.h3,
          }}
        >
          Delivery Address
        </Text>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginTop: SIZES.radius,
            paddingVertical: SIZES.radius,
            paddingHorizontal: SIZES.padding,
            borderWidth: 2,
            borderRadius: SIZES.radius,
            borderColor: COLORS.lightGray2,
          }}
        >
          <Image source={icons.location1} style={{ width: 40, height: 40 }} />
          <Text
            style={{ marginLeft: SIZES.radius, width: "85%", ...FONTS.body3 }}
          >
            300 Post street, Caifornia
          </Text>
        </View>
      </View>
    );
  }

  function renderCoupon() {
    return (
      <View
        style={{
          marginTop: SIZES.padding,
        }}
      >
        <Text style={{ ...FONTS.h3 }}>Add Coupon</Text>
        <FormInput
          inputContainerStyle={{
            marginTop: 0,
            paddingLeft: SIZES.padding,
            paddingRight: 0,
            borderWidth: 2,
            borderColor: COLORS.lightGray2,
            backgroundcolor: COLORS.white,
            overflow: "hidden",
          }}
          placeholder={"Coupon code"}
          appendComponent={
            <View
              style={{
                width: 60,
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: COLORS.primary,
              }}
            >
              <Image
                source={icons.discount}
                style={{ width: 40, height: 40 }}
              />
            </View>
          }
        />
      </View>
    );
  }
  return (
    <View style={{ flex: 1, backgroundColor: COLORS.white }}>
      {renderHeader()}
      <KeyboardAwareScrollView
        keyboardDismissMode="on-drag"
        extraScrollHeight={-200}
        contentContainerStyle={{
          flexGrow: 1,
          paddingHorizontal: SIZES.padding,
          paddingBottom: 20,
        }}
      >
        {renderMyCards()}
        {renderDeliveryAddress()}
        {renderCoupon()}
      </KeyboardAwareScrollView>
      <FooterTotal
        subTotal={38.99}
        shippingFee={1}
        total={39.99}
        onPress={() => navigation.replace("Success")}
      />
    </View>
  );
};

export default Checkout;

const styles = StyleSheet.create({});
