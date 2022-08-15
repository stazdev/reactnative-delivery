import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { FONTS } from "../constants";

const Header = ({
  containerStyle,
  title,
  titleStyle,
  leftComponent,
  rightComponent,
}) => {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        ...containerStyle,
        height: 50,
      }}
    >
      {/* left */}
      {leftComponent}
      {/* title */}
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text style={{ ...FONTS.h3, ...titleStyle }}>{title}</Text>
      </View>
      {/* right */}
      {rightComponent}
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({});
