import { StyleSheet, Text, View, TextInput } from "react-native";
import React from "react";
import { COLORS, FONTS, SIZES } from "../constants";

const FormInput = ({
  containerStyle,
  label,
  value = "",
  placeholder,
  inputStyle,
  inputContainerStyle,
  prependComponent,
  appendComponent,
  onChange,
  secureTextEntry,
  keyboardType = "default",
  autoCompleteType = "off",
  autoCapitalize = "none",
  errMsg = "",
  maxLength,
}) => {
  return (
    <View style={{ ...containerStyle }}>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Text style={{ color: COLORS.gray, ...FONTS.body4 }}>{label}</Text>
        <Text style={{ color: COLORS.red, ...FONTS.body4 }}>{errMsg}</Text>
      </View>

      <View
        style={{
          flexDirection: "row",
          height: SIZES.height > 800 ? 55 : 45,
          paddingHorizontal: SIZES.padding,
          marginTop: SIZES.height > 800 ? SIZES.base : 0,
          borderRadius: SIZES.radius,
          backgroundColor: COLORS.lightGray2,
          ...inputContainerStyle,
        }}
      >
        {prependComponent}
        <TextInput
          style={{ flex: 1, ...inputStyle }}
          value={value}
          maxLength={maxLength}
          placeholder={placeholder}
          placeholderTextColor={COLORS.gray2}
          secureTextEntry={secureTextEntry}
          keyboardType={keyboardType}
          autoCompleteType={autoCompleteType}
          autoCapitalize={autoCapitalize}
          onChangeText={(text) => onChange(text)}
        />
        {appendComponent}
      </View>
    </View>
  );
};

export default FormInput;

const styles = StyleSheet.create({});
