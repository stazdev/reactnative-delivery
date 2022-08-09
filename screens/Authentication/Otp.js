import React, { useState } from "react";
import OTPInputView from "@twotalltotems/react-native-otp-input";
import { View, Text } from "react-native";
import { AuthLayout } from "../";
import { TextButton } from "../../components";
import { COLORS, SIZES, FONTS } from "../../constants";
import { useEffect } from "react";

const Otp = ({ navigation }) => {
  const [timer, setTimer] = useState(60);

  useEffect(() => {
    let interval = setInterval(() => {
      setTimer((prevTimer) => {
        if (prevTimer > 0) {
          return prevTimer - 1;
        } else {
          prevTimer;
        }
      });
    }, 1000);
    return () => clearImmediate(interval);
  }, []);
  return (
    <AuthLayout
      title={"OTP Authentication"}
      subtitle="An OTP has been sent to your registered email"
      titleContainerStyle={{ marginTop: SIZES.padding * 2 }}
    >
      {/* otp input section */}
      <View style={{ flex: 1, marginTop: SIZES.padding * 2 }}>
        <OTPInputView
          pinCount={4}
          style={{ width: "100%", height: 50 }}
          codeInputFieldStyle={{
            width: 65,
            height: 65,
            borderRadius: SIZES.radius,
            backgroundColor: COLORS.lightGray2,
            color: COLORS.black,
            ...FONTS.h3,
          }}
          onCodeFilled={(code) => {
            console.log(code);
          }}
        />
        {/* countdown section */}
        <View
          style={{
            flexDirection: "row",
            marginTop: SIZES.padding,
            justifyContent: "center",
          }}
        >
          <Text style={{ color: COLORS.darkGray, ...FONTS.body3 }}>
            Didn't receive code
          </Text>
          <TextButton
            label={`Resend (${timer}s)`}
            disabled={timer == 0 ? false : true}
            buttonContainerStyle={{
              marginLeft: SIZES.base,
              backgroundColor: null,
            }}
            labelStyle={{ color: COLORS.primary, ...FONTS.h3 }}
            onPress={() => setTimer(60)}
          />
        </View>
      </View>
      <View>
        <TextButton
          label={"Continue"}
          buttonContainerStyle={{
            backgroundColor: COLORS.primary,
            height: 50,
            alignItems: "center",
            borderRadius: SIZES.radius,
          }}
          onPress={() => console.log("Continue")}
        />

        <View
          style={{
            marginTop: SIZES.padding,
            alignItems: "center",
          }}
        >
          <Text style={{ color: COLORS.darkGray, ...FONTS.body3 }}>
            By signing up, ypu agree to our
          </Text>
          <TextButton
            label={"Terms and Conditions"}
            buttonContainerStyle={{ backgroundColor: null }}
            labelStyle={{ color: COLORS.primary, ...FONTS.h3 }}
            onPress={() => console.log("terms&Conditions")}
          />
        </View>
      </View>
    </AuthLayout>
  );
};

export default Otp;
