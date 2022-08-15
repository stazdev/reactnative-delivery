import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import React from "react";
import { COLORS } from "../constants";

const IconButton = ({ containerStyle, icon, iconStyle, onPress }) => {
  return (
    <TouchableOpacity style={{ ...containerStyle }} onPress={onPress}>
      <Image
        source={icon}
        style={{ height: 30, width: 30, tintColor: COLORS.white, ...iconStyle }}
      />
    </TouchableOpacity>
  );
};

export default IconButton;

const styles = StyleSheet.create({});
