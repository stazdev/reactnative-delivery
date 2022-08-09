import React, { useState } from "react";
import { useRef } from "react";
import {
  View,
  Text,
  ImageBackground,
  Image,
  Animated,
  StyleSheet,
  FlatList,
} from "react-native";
import { TextButton } from "../../components";
import { images, FONTS, SIZES, COLORS, constants } from "../../constants";

const OnBoarding = ({ navigation }) => {
  const scrollX = useRef(new Animated.Value(0)).current;
  const flatListRef = useRef();
  const [currentIndex, setCurrentIndex] = useState(0);
  const onViewChangeRef = useRef(({ viewableItems, changed }) => {
    setCurrentIndex(viewableItems[0].index);
  });

  function renderHeaderLogo() {
    return (
      <View style={styles.headerLogo}>
        <Image
          source={images.logo_02}
          resizeMode="contain"
          style={{ width: SIZES.width * 0.5, height: 100 }}
        />
      </View>
    );
  }

  const Dots = () => {
    const dotPosition = Animated.divide(scrollX, SIZES.width);
    return (
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {constants.onboarding_screens.map((item, index) => {
          const dotColor = dotPosition.interpolate({
            inputRange: [index - 1, index, index + 1],
            outputRange: [
              COLORS.lightOrange,
              COLORS.primary,
              COLORS.lightOrange,
            ],
            extrapolate: "clamp",
          });
          const dotWidth = dotPosition.interpolate({
            inputRange: [index - 1, index, index + 1],
            outputRange: [10, 30, 10],
            extrapolate: "clamp",
          });
          return (
            <Animated.View
              key={`dot-${index}`}
              style={{
                borderRadius: 5,
                marginHorizontal: 6,
                width: dotWidth,
                height: 10,
                backgroundColor: dotColor,
              }}
            />
          );
        })}
      </View>
    );
  };
  function renderFooter() {
    return (
      <View style={{ height: 160 }}>
        {/* dot indicator */}
        <View style={{ flex: 1, justifyContent: "center" }}>
          <Dots />
        </View>
        {/* button */}
        {currentIndex < constants.onboarding_screens.length - 1 && (
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              paddingHorizontal: SIZES.padding,
              marginVertical: SIZES.padding,
            }}
          >
            <TextButton
              buttonContainerStyle={{ backgroundColor: null }}
              labelStyle={{ color: COLORS.darkGray2 }}
              onPress={() => navigation.replace("SignIn")}
              label={"Skip"}
            />
            <TextButton
              buttonContainerStyle={{
                height: 60,
                width: 200,
                borderRadius: SIZES.radius,
              }}
              label={"Next"}
              onPress={() => {
                flatListRef?.current?.scrollToIndex({
                  index: currentIndex + 1,
                  animated: true,
                });
              }}
            />
          </View>
        )}
        {currentIndex == constants.onboarding_screens.length - 1 && (
          <View
            style={{
              paddingHorizontal: SIZES.padding,
              marginVertical: SIZES.padding,
            }}
          >
            <TextButton
              label={"Let's Get Started"}
              buttonContainerStyle={{ height: 60, borderRadius: SIZES.radius }}
              onPress={() => navigation.replace("SignIn")}
            />
          </View>
        )}
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {renderHeaderLogo()}
      <Animated.FlatList
        ref={flatListRef}
        horizontal
        pagingEnabled
        data={constants.onboarding_screens}
        scrollEventThrottle={16}
        snapToAlignment="center"
        showsHorizontalScrollIndicator={false}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: false }
        )}
        onViewableItemsChanged={onViewChangeRef.current}
        keyExtractor={(item) => `${item.id}`}
        renderItem={({ item, index }) => (
          <View style={{ width: SIZES.width }}>
            {/* header */}
            <View style={{ flex: 3 }}>
              <ImageBackground
                source={item.backgroundImage}
                style={{
                  flex: 1,
                  justifyContent: "flex-end",
                  alignItems: "center",
                  width: "100%",
                  height: index == 1 ? "95.5%" : "100%",
                }}
              >
                <Image
                  source={item.bannerImage}
                  resizeMode="contain"
                  style={{
                    width: SIZES.width * 0.8,
                    height: SIZES.width * 0.8,
                    marginBottom: -SIZES.padding,
                  }}
                />
              </ImageBackground>
            </View>
            {/* detail */}

            <View
              style={{
                flex: 1,
                marginTop: 30,
                alignItems: "center",
                justifyContent: "center",
                paddingHorizontal: SIZES.radius,
              }}
            >
              <Text style={{ ...FONTS.h1, fontSize: 25 }}>{item.title}</Text>
              <Text
                style={{
                  marginTop: SIZES.radius,
                  textAlign: "center",
                  color: COLORS.darkGray,
                  paddingHorizontal: SIZES.padding,
                  ...FONTS.body3,
                }}
              >
                {item.description}
              </Text>
            </View>
          </View>
        )}
      />
      {renderFooter()}
    </View>
  );
};

export default OnBoarding;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  headerLogo: {
    position: "absolute",
    top: SIZES.height > 800 ? 50 : 25,
    left: 0,
    right: 0,
    justifyContent: "center",
    alignItems: "center",
  },
});
