import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import React from "react";
import { COLORS, FONTS, icons, SIZES } from "../constants";

const HorizontalFoodCard = ({ containerStyle, imageStyle, item, onPress }) => {
  return (
    <View>
      <TouchableOpacity
        style={{
          flexDirection: "row",
          borderRadius: SIZES.radius,
          backgroundColor: COLORS.lightGray2,
          ...containerStyle,
        }}
        activeOpacity={0.8}
        onPress={onPress}
      >
        {/* image  */}
        <Image source={item.image} style={imageStyle} />
        {/* info  */}

        <View style={{ flex: 1 }}>
          <Text style={{ ...FONTS.h3, fontSize: 17 }}>{item.name}</Text>
          <Text style={{ ...FONTS.body4, color: COLORS.darkGray2 }}>
            {item.description}
          </Text>
          <Text style={{ ...FONTS.h2, marginBottom: SIZES.base }}>
            ${item.price}
          </Text>
        </View>
        {/* calories  */}
        <View
          style={{
            flexDirection: "row",
            position: "absolute",
            top: 5,
            right: SIZES.radius,
          }}
        >
          <Image source={icons.calories} style={{ width: 30, height: 30 }} />
          <Text style={{ color: COLORS.darkGray2, ...FONTS.body5 }}>
            {item.calories} Calories
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default HorizontalFoodCard;

const styles = StyleSheet.create({});
