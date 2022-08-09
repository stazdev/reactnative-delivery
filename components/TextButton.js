import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { COLORS, FONTS } from "../constants";

const TextButton = ({
  label,
  disabled,
  buttonContainerStyle,
  labelStyle,
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
    </TouchableOpacity>
  );
};

export default TextButton;

const styles = StyleSheet.create({});
