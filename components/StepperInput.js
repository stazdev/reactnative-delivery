import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { COLORS, FONTS, icons, SIZES } from "../constants";
import IconButton from "./IconButton";

const StepperInput = ({ containerStyle, value = 1, onAdd, onMinus }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        paddingHorizontal: SIZES.base,
        height: 60,
        width: 130,
        backgroundColor: COLORS.lightGray2,
        borderRadius: SIZES.radius,
        ...containerStyle,
      }}
    >
      <IconButton
        containerStyle={{
          // width: 50,
          alignItems: "center",
          justifyContent: "center",
        }}
        icon={icons.minus}
        iconStyle={{
          height: 25,
          width: 25,
          tintColor: value > 1 ? COLORS.primary : COLORS.gray,
        }}
        onPress={onMinus}
      />

      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text style={{ ...FONTS.h2, color: COLORS.black }}>{value}</Text>
      </View>

      <IconButton
        containerStyle={{
          // width: 50,
          alignItems: "center",
          justifyContent: "center",
        }}
        icon={icons.plus}
        iconStyle={{
          height: 25,
          width: 25,
          tintColor: COLORS.primary,
        }}
        onPress={onAdd}
      />
    </View>
  );
};

export default StepperInput;

const styles = StyleSheet.create({});
