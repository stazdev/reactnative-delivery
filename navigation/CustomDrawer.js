import React, { useContext, useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
} from "@react-navigation/drawer";

import { MainLayout } from "../screens";
import {
  COLORS,
  SIZES,
  FONTS,
  constants,
  icons,
  dummyData,
} from "../constants";
import Animated from "react-native-reanimated";
import { TabContext } from "../context/TabContext";

const Drawer = createDrawerNavigator();

const CustomDrawerItem = ({ label, icon, isFocused, onPress }) => {
  return (
    <TouchableOpacity
      style={{
        flexDirection: "row",
        height: 40,
        marginBottom: SIZES.base,
        alignItems: "center",
        paddingLeft: SIZES.radius,
        borderRadius: SIZES.base,
        backgroundColor: isFocused ? COLORS.transparentBlack1 : null,
      }}
      onPress={onPress}
      activeOpacity={0.8}
    >
      <Image
        source={icon}
        style={{
          height: 20,
          width: 20,
          tintColor: COLORS.white,
        }}
      />
      <Text style={{ marginLeft: 15, color: COLORS.white, ...FONTS.h3 }}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

const CustomDrawerContent = ({ navigation }) => {
  const { selectedTab, setSelectedTab } = useContext(TabContext);

  return (
    <DrawerContentScrollView
      scrollEnabled={true}
      contentContainerStyle={{ flex: 1 }}
    >
      <View style={{ flex: 1, paddingHorizontal: SIZES.radius }}>
        {/* close */}
        <View style={{ alignItems: "flex-start", justifyContent: "center" }}>
          <TouchableOpacity
            style={{ alignItems: "center", justifyContent: "center" }}
            onPress={() => navigation.closeDrawer()}
          >
            <Image
              source={icons.cross}
              style={{ height: 35, width: 35, tintColor: COLORS.white }}
            />
          </TouchableOpacity>
        </View>

        {/* profile */}
        <TouchableOpacity
          style={{
            flexDirection: "row",
            marginTop: SIZES.radius,
            alignItems: "center",
          }}
          onPress={() => console.log("This is my profile")}
        >
          <Image
            source={dummyData.myProfile.profile_image}
            style={{ width: 50, height: 50, borderRadius: SIZES.radius }}
          />

          <View style={{ marginLeft: SIZES.radius }}>
            <Text style={{ color: COLORS.white, ...FONTS.h3 }}>Oluwashola</Text>
            <Text style={{ color: COLORS.white, ...FONTS.body4 }}>
              View Profile
            </Text>
          </View>
        </TouchableOpacity>

        {/* drawer items */}
        <View style={{ flex: 1, marginTop: SIZES.padding }}>
          <CustomDrawerItem
            label={constants.screens.home}
            icon={icons.home}
            isFocused={selectedTab == constants.screens.home}
            onPress={() => {
              setSelectedTab(constants.screens.home),
                navigation.navigate("MainLayout");
            }}
          />
          <CustomDrawerItem
            label={constants.screens.my_wallet}
            icon={icons.wallet}
          />
          <CustomDrawerItem
            label={constants.screens.notification}
            icon={icons.notification}
            isFocused={selectedTab == constants.screens.notification}
            onPress={() => {
              setSelectedTab("Notification"), navigation.navigate("MainLayout");
            }}
          />
          <CustomDrawerItem
            label={constants.screens.favourite}
            icon={icons.favourite}
            isFocused={selectedTab == constants.screens.favourite}
            onPress={() => {
              setSelectedTab(constants.screens.favourite),
                navigation.navigate("MainLayout");
            }}
          />

          {/* white line  */}
          <View
            style={{
              height: 1,
              marginVertical: SIZES.radius,
              marginLeft: SIZES.radius,
              backgroundColor: COLORS.lightGray1,
            }}
          />
          <CustomDrawerItem label={"Track your order"} icon={icons.location} />
          <CustomDrawerItem label={"Coupons"} icon={icons.coupon} />
          <CustomDrawerItem label={"Settings"} icon={icons.setting} />
          <CustomDrawerItem label={"Invite a friend"} icon={icons.profile} />
          <CustomDrawerItem label={"Help Center"} icon={icons.help} />
        </View>
        <View style={{ marginBottom: SIZES.padding }}>
          <CustomDrawerItem label={"Log Out"} icon={icons.logout} />
        </View>
      </View>
    </DrawerContentScrollView>
  );
};

const CustomDrawer = () => {
  const [progress, setProgress] = useState(new Animated.Value(0));
  const scale = Animated.interpolateNode(progress, {
    inputRange: [0, 1],
    outputRange: [1, 0.8],
  });
  const borderRadius = Animated.interpolateNode(progress, {
    inputRange: [0, 1],
    outputRange: [0, 26],
  });
  const animatedStyle = { borderRadius, transform: [{ scale }] };
  return (
    <View style={{ flex: 1, backgroundColor: COLORS.primary }}>
      <Drawer.Navigator
        screenOptions={{
          headerShown: false,
          headerStyle: {
            backgroundColor: "transparent",
          },
          drawerStyle: {
            backgroundColor: "transparent",
          },
          drawerType: "slide",
          overlayColor: "transparent",
          sceneContainerStyle: { backgroundColor: "transparent" },
        }}
        drawerContent={(props) => {
          setTimeout(() => {
            setProgress(props.progress);
          }, 0);
          return <CustomDrawerContent navigation={props.navigation} />;
        }}
        initialRouteName="MainLayout"
      >
        <Drawer.Screen name="MainLayout">
          {(props) => (
            <MainLayout {...props} drawerAnimationStyle={animatedStyle} />
          )}
        </Drawer.Screen>
      </Drawer.Navigator>
    </View>
  );
};

export default CustomDrawer;
