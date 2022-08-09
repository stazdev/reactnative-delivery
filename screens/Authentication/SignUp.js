import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { AuthLayout } from "../";
import { FormInput, TextButton, TextIconButton } from "../../components";
import { COLORS, SIZES, icons, FONTS } from "../../constants";
// import { utils } from "../../utils";

const SignUp = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [showPass, setShowPass] = useState(false);

  const [emailError, setEmailError] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  function isEnabledSignup() {
    return (
      email != "" &&
      password != "" &&
      emailError == "" &&
      username != "" &&
      passwordError == "" &&
      usernameError == ""
    );
  }

  return (
    <AuthLayout
      title={"Getting Started"}
      subtitle="Create an account to continue"
      titleContainerStyle={{ marginTop: SIZES.radius }}
    >
      {/* form input and signup */}
      <View style={{ flex: 1, marginTop: SIZES.padding }}>
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

        <FormInput
          label={"Username"}
          containerStyle={{ marginTop: SIZES.radius }}
          onChange={(value) => {
            setUserName(value);
          }}
          //   errMsg={usernameError}
          appendComponent={
            <View style={{ justifyContent: "center" }}>
              <Image
                source={
                  username == "" || (username != "" && usernameError == "")
                    ? icons.correct
                    : icons.cancel
                }
                style={{
                  height: 20,
                  width: 20,
                  tintColor:
                    username == ""
                      ? COLORS.gray
                      : username != "" && emailError == ""
                      ? COLORS.green
                      : COLORS.red,
                }}
              />
            </View>
          }
        />

        <FormInput
          label={"Password"}
          secureTextEntry={!showPass}
          autoCompleteType="password"
          onChange={(value) => {
            // utils.validatePassword(value, setPasswordError);
            setPassword(value);
          }}
          //   errMsg={passwordError}
          containerStyle={{ marginTop: SIZES.radius }}
          appendComponent={
            <TouchableOpacity
              style={{
                justifyContent: "center",
                width: 40,
                alignItems: "center",
              }}
              onPress={() => setShowPass(!showPass)}
            >
              <Image
                source={showPass ? icons.eye_close : icons.eye}
                style={{ height: 20, width: 20, tintColor: COLORS.gray }}
              />
            </TouchableOpacity>
          }
        />

        {/* signup button */}
        <TextButton
          label={"Sign Up"}
          disabled={isEnabledSignup() ? false : true}
          buttonContainerStyle={{
            height: 55,
            alignItems: "center",
            marginTop: SIZES.padding,
            borderRadius: SIZES.radius,
            backgroundColor: isEnabledSignup()
              ? COLORS.primary
              : COLORS.transparentPrimary,
          }}
          onPress={() => navigation.navigate("Otp")}
        />

        <View
          style={{
            flexDirection: "row",
            marginTop: SIZES.radius,
            justifyContent: "center",
          }}
        >
          <Text style={{ color: COLORS.darkGray, ...FONTS.body3 }}>
            Already have an account
          </Text>
          <TextButton
            label={"Sign In"}
            buttonContainerStyle={{ backgroundColor: null }}
            labelStyle={{ color: COLORS.primary, ...FONTS.h3 }}
            onPress={() => navigation.goBack()}
          />
        </View>
      </View>
      {/* footer section */}
      <View>
        <TextIconButton
          containerStyle={{
            height: 50,
            alignItems: "center",
            borderRadius: SIZES.radius,
            backgroundColor: COLORS.blue,
          }}
          icon={icons.fb}
          iconPosition="LEFT"
          iconStyle={{ tintColor: COLORS.white }}
          label="Continue with facebook"
          labelStyle={{ marginLeft: SIZES.radius, color: COLORS.white }}
        />
        <TextIconButton
          containerStyle={{
            height: 50,
            alignItems: "center",
            marginTop: SIZES.radius,
            borderRadius: SIZES.radius,
            backgroundColor: COLORS.lightGray2,
          }}
          icon={icons.google}
          iconPosition="LEFT"
          iconStyle={{ tintColor: null }}
          label="Continue with google"
          labelStyle={{ marginLeft: SIZES.radius }}
        />
      </View>
    </AuthLayout>
  );
};

export default SignUp;
