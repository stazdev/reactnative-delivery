import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { AuthLayout } from "../";
import { TextButton, FormInput } from "../../components";
import { COLORS, SIZES, icons, FONTS } from "../../constants";

const ForgotPassword = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  function isEnabledSendEmail() {
    return email != "" && emailError == "";
  }
  return (
    <AuthLayout
      title={"Password Recovery"}
      subtitle="Please enter your email to recover your password"
    >
      <View style={{ flex: 1, marginTop: SIZES.padding * 2 }}>
        <FormInput
          label={"Email"}
          keyboardType="email-address"
          autoCompleteType="email"
          onChange={(value) => {
            // utils.validateEmail(value, setEmailError);
            setEmail(value);
          }}
          //   errMsg={emailError}
          appendComponent={
            <View style={{ justifyContent: "center" }}>
              <Image
                source={
                  email == "" || (email != "" && emailError == "")
                    ? icons.correct
                    : icons.cancel
                }
                style={{
                  height: 20,
                  width: 20,
                  tintColor:
                    email == ""
                      ? COLORS.gray
                      : email != "" && emailError == ""
                      ? COLORS.green
                      : COLORS.red,
                }}
              />
            </View>
          }
        />
      </View>
      <TextButton
        label={"Send Email"}
        disabled={isEnabledSendEmail() ? false : true}
        buttonContainerStyle={{
          height: 55,
          alignItems: "center",
          marginTop: SIZES.padding,
          borderRadius: SIZES.radius,
          backgroundColor: isEnabledSendEmail()
            ? COLORS.primary
            : COLORS.transparentPrimary,
        }}
        onPress={() => navigation.goBack()}
      />
    </AuthLayout>
  );
};

export default ForgotPassword;
