import { StyleSheet, Text, View, Image, BackHandler } from "react-native";
import React, { useEffect } from "react";
import { COLORS, FONTS, images, SIZES } from "../../constants";
import { TextButton } from "../../components";

const Success = ({ navigation }) => {
  //prevent navigating back to previous screen
  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      () => {
        return true;
      }
    );

    return backHandler.remove();
  }, []);
  return (
    <View
      style={{
        flex: 1,
        paddingHorizontal: SIZES.padding,
        backgroundColor: COLORS.white,
      }}
    >
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Image
          source={images.success}
          resizeMode={"contain"}
          style={{ height: 150, width: 150 }}
        />
        <Text
          style={{
            marginTop: SIZES.padding,
            ...FONTS.h1,
          }}
        >
          Congratulation
        </Text>
        <Text
          style={{
            textAlign: "center",
            marginTop: SIZES.base,
            color: COLORS.darkGray,
            ...FONTS.body3,
          }}
        >
          Payment successful
        </Text>
      </View>
      <TextButton
        buttonContainerStyle={{
          height: 55,
          marginBottom: SIZES.padding,
          borderRadius: SIZES.radius,
          backgroundColor: COLORS.primary,
        }}
        label={"Done"}
        onPress={() => navigation.navigate("DeliveryStatus")}
      />
    </View>
  );
};

export default Success;

const styles = StyleSheet.create({});
