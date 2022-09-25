import { StyleSheet, Text, View, Platform } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { FONTS, SIZES, COLORS } from "../constants";
import LineDivider from "./LineDivider";
import TextButton from "./TextButton";

const FooterTotal = ({ subTotal, shippingFee, total, onPress }) => {
  return (
    <View style={{ marginBottom: 40 }}>
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
        colors={[COLORS.transparent, COLORS.lightGray1]}
        style={{
          position: "absolute",
          top: -15,
          left: 0,
          right: 0,
          height: Platform.OS === "ios" ? 200 : 50,
          borderTopLeftRadius: 15,
          borderTopRightRadius: 15,
        }}
      />

      <View
        style={{
          padding: SIZES.padding,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          backgroundColor: COLORS.white,
        }}
      >
        <View
          style={{
            flexDirection: "row",
          }}
        >
          <Text style={{ flex: 1, ...FONTS.body3 }}>Subtotal</Text>
          <Text style={{ ...FONTS.h3 }}>${subTotal.toFixed(2)}</Text>
        </View>

        <View
          style={{
            flexDirection: "row",
            marginTop: SIZES.base,
            marginBottom: SIZES.padding,
          }}
        >
          <Text style={{ flex: 1, ...FONTS.body3 }}>Shipping Fee</Text>
          <Text style={{ ...FONTS.h3 }}>${shippingFee.toFixed(2)}</Text>
        </View>
        <LineDivider />
        <View
          style={{
            flexDirection: "row",
            marginTop: SIZES.padding,
          }}
        >
          <Text style={{ flex: 1, ...FONTS.body3 }}>Total</Text>
          <Text style={{ ...FONTS.h3 }}>${total.toFixed(2)}</Text>
        </View>

        <TextButton
          buttonContainerStyle={{
            height: 60,
            marginTop: SIZES.padding,
            borderRadius: SIZES.radius,
            backgroundColor: COLORS.primary,
          }}
          label="Place your order"
          onPress={onPress}
        />
      </View>
    </View>
  );
};

export default FooterTotal;

const styles = StyleSheet.create({});
