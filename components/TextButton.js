import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { COLORS, FONTS } from "../constants";

const TextButton = ({
  label,
  label2,
  disabled,
  buttonContainerStyle,
  labelStyle,
  label2Style,
  onPress,
}) => {
  return (
    <TouchableOpacity
      style={{
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: COLORS.primary,
        ...buttonContainerStyle,
      }}
      disabled={disabled}
      onPress={onPress}
    >
      <Text style={{ color: "white", ...FONTS.h3, ...labelStyle }}>
        {label}
      </Text>

      {/* {label2 !== "" && (
        <Text
          style={{
            flex: 1,
            textAlign: "center",
            color: COLORS.white,
            ...FONTS.h3,
            ...label2Style,
          }}
        >
          {label2}
        </Text>
      )} */}
    </TouchableOpacity>
  );
};

export default TextButton;

const styles = StyleSheet.create({});
