import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { FONTS, SIZES } from "../constants";

const IconLabel = ({ containerStyle, icon, iconStyle, label, labelStyle }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        paddingVertical: SIZES.base,
        paddingHorizontal: SIZES.radius,
        borderRadius: SIZES.radius,
        ...containerStyle,
      }}
    >
      <Image
        source={icon}
        style={{
          height: 20,
          width: 20,
          ...iconStyle,
        }}
      />
      <Text style={{ marginLeft: SIZES.base, ...FONTS.body3, ...labelStyle }}>
        {label}
      </Text>
    </View>
  );
};

export default IconLabel;

const styles = StyleSheet.create({});
