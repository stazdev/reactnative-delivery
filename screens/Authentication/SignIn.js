import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { AuthLayout } from "../";
import {
  FormInput,
  CustomSwitch,
  TextButton,
  TextIconButton,
} from "../../components";
import { COLORS, SIZES, icons, FONTS } from "../../constants";
// import { utils } from "../../utils";

const SignIn = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [password, setPassword] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [saveMe, setSaveMe] = useState(false);

  function isEnabledSignin() {
    return email != "" && password != "" && emailError == "";
  }
  return (
    <AuthLayout
      subtitle={"Welcome back we have missed you"}
      title={"Let's Sign You In"}
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
          // errMsg={emailError}
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
          label={"Password"}
          secureTextEntry={!showPass}
          autoCompleteType="password"
          onChange={(value) => setPassword(value)}
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

        <View
          style={{
            flexDirection: "row",
            marginTop: SIZES.radius,
            justifyContent: "space-between",
          }}
        >
          <CustomSwitch value={saveMe} onChange={(value) => setSaveMe(value)} />
          <TextButton
            label={"Forgot Password"}
            buttonContainerStyle={{ backgroundColor: null }}
            labelStyle={{ color: COLORS.gray, ...FONTS.body4 }}
            onPress={() => navigation.navigate("ForgotPassword")}
          />
        </View>
        {/* signin button */}
        <TextButton
          label={"Sign In"}
          // disabled={isEnabledSignin() ? false : true}
          buttonContainerStyle={{
            height: 55,
            alignItems: "center",
            marginTop: SIZES.padding,
            borderRadius: SIZES.radius,
            backgroundColor: COLORS.primary,
            // backgroundColor: isEnabledSignin()
            //   ? COLORS.primary
            //   : COLORS.transparentPrimary,
          }}
        />

        {/* signup section */}
        <View
          style={{
            flexDirection: "row",
            marginTop: SIZES.radius,
            justifyContent: "center",
          }}
        >
          <Text style={{ color: COLORS.gray, ...FONTS.body3 }}>
            Don't have an account
          </Text>
          <TextButton
            label={"Sign Up"}
            buttonContainerStyle={{ backgroundColor: null, marginLeft: 3 }}
            labelStyle={{ color: COLORS.primary, ...FONTS.h3 }}
            onPress={() => navigation.navigate("SignUp")}
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

export default SignIn;
