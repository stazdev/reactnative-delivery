import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import React from "react";
import {
  COLORS,
  dummyData,
  FONTS,
  icons,
  images,
  SIZES,
} from "../../constants";
import {
  CartQuantityButton,
  Header,
  IconButton,
  IconLabel,
  LineDivider,
  StepperInput,
  TextButton,
} from "../../components";
import { useState } from "react";

const FoodDetail = ({ route, navigation }) => {
  const { item } = route.params;
  const [selectedSize, setSelectedSize] = useState("");
  const [qt, setQt] = useState(1);

  function renderHeader() {
    return (
      <Header
        title={"DETAILS"}
        containerStyle={{
          height: 50,
          marginHorizontal: SIZES.padding,
          marginTop: 40,
        }}
        leftComponent={
          <IconButton
            icon={icons.back}
            containerStyle={{
              width: 40,
              height: 40,
              justifyContent: "center",
              alignItems: "center",
              borderWidth: 1,
              borderRadius: SIZES.radius,
              borderColor: COLORS.gray2,
            }}
            iconStyle={{
              width: 20,
              height: 20,
              tintColor: COLORS.gray2,
            }}
            onPress={() => navigation.goBack()}
          />
        }
        rightComponent={<CartQuantityButton quantity={1} />}
      />
    );
  }

  function renderDetails() {
    return (
      <View
        style={{
          marginTop: SIZES.radius,
          marginBottom: SIZES.padding,
          marginHorizontal: SIZES.padding,
        }}
      >
        {/* food card  */}
        <View
          style={{
            height: 190,
            borderRadius: 15,
            backgroundColor: COLORS.lightGray2,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: SIZES.base,
              paddingHorizontal: SIZES.radius,
            }}
          >
            <View style={{ flexDirection: "row" }}>
              <Image
                source={icons.calories}
                style={{ width: 30, height: 30 }}
              />
              <Text style={{ color: COLORS.darkGray2, ...FONTS.body4 }}>
                {item.calories} Calories
              </Text>
            </View>

            <Image
              source={icons.love}
              style={{
                width: 20,
                height: 20,
                tintColor: item.isFavourite ? COLORS.primary : COLORS.gray,
              }}
            />
          </View>

          {/* food image  */}
          <Image
            source={item.image}
            resizeMode={"contain"}
            style={{ height: 170, width: "100%" }}
          />
        </View>

        {/* food info */}
        <View style={{ marginTop: SIZES.padding }}>
          <Text style={{ ...FONTS.h1 }}>{item.name}</Text>
          <Text
            style={{
              marginTop: SIZES.base,
              color: COLORS.gray,
              textAlign: "justify",
              ...FONTS.body3,
            }}
          >
            {item.description}
          </Text>

          {/* ratings duration shipping */}
          <View
            style={{
              flexDirection: "row",
              marginTop: SIZES.padding,
            }}
          >
            <IconLabel
              containerStyle={{ backgroundColor: COLORS.primary }}
              icon={icons.star}
              label={"4.5"}
              labelStyle={{
                color: COLORS.white,
              }}
            />

            <IconLabel
              containerStyle={{
                marginLeft: SIZES.radius,
                paddingHorizontal: 0,
              }}
              icon={icons.clock}
              iconStyle={{ tintColor: COLORS.black }}
              label={"30 min"}
            />

            <IconLabel
              containerStyle={{
                marginLeft: SIZES.radius,
                paddingHorizontal: 0,
              }}
              icon={icons.dollar}
              iconStyle={{ tintColor: COLORS.black }}
              label={"free shipping"}
            />
          </View>

          {/* sizes */}
          <View
            style={{
              flexDirection: "row",
              marginTop: SIZES.padding,
              alignItems: "center",
            }}
          >
            <Text style={{ ...FONTS.h3 }}>Sizes:</Text>
            <View
              style={{
                flexDirection: "row",
                flexWrap: "wrap",
                marginLeft: SIZES.padding,
              }}
            >
              {dummyData.sizes.map((item, index) => {
                return (
                  <TextButton
                    key={`size-${index}`}
                    buttonContainerStyle={{
                      width: 55,
                      height: 55,
                      margin: 4,
                      borderWidth: 1,
                      borderRadius: SIZES.radius,
                      borderColor:
                        selectedSize == item.id ? COLORS.primary : COLORS.gray2,
                      backgroundColor:
                        selectedSize == item.id ? COLORS.primary : null,
                    }}
                    label={item.label}
                    labelStyle={{
                      color:
                        selectedSize == item.id ? COLORS.white : COLORS.gray2,
                      ...FONTS.body2,
                    }}
                    onPress={() => setSelectedSize(item.id)}
                  />
                );
              })}
            </View>
          </View>
        </View>
      </View>
    );
  }

  function renderRestaurant() {
    return (
      <View
        style={{
          flexDirection: "row",
          marginVertical: SIZES.padding,
          marginHorizontal: SIZES.padding,
          alignItems: "center",
        }}
      >
        <Image
          source={images.profile}
          style={{
            height: 50,
            width: 50,
            borderRadius: SIZES.radius,
          }}
        />

        <View
          style={{
            flex: 1,
            marginLeft: SIZES.radius,
            justifyContent: "center",
          }}
        >
          <Text style={{ ...FONTS.h3 }}>Reality Kitchen</Text>
          <Text style={{ color: COLORS.gray, ...FONTS.body4 }}>
            2.0km away from you
          </Text>
        </View>
      </View>
    );
  }

  function renderFooter() {
    return (
      <View
        style={{
          flexDirection: "row",
          height: 120,
          alignItems: "center",
          paddingHorizontal: SIZES.padding,
          paddingBottom: SIZES.radius,
        }}
      >
        <StepperInput
          value={qt}
          onAdd={() => setQt(qt + 1)}
          onMinus={() => {
            if (qt > 1) {
              setQt(qt - 1);
            }
          }}
        />
        <TextButton
          buttonContainerStyle={{
            flex: 1,
            flexDirection: "row",
            height: 60,
            marginLeft: SIZES.radius,
            paddingHorizontal: SIZES.radius,
            borderRadius: SIZES.radius,
            backgroundColor: COLORS.primary,
          }}
          label="Buy Now"
          label2={"$15.99"}
          onPress={() => navigation.navigate("CartTab")}
        />
      </View>
    );
  }
  return (
    <View style={{ flex: 1, backgroundColor: COLORS.white }}>
      {/* head  */}
      {renderHeader()}
      {/* body */}
      <ScrollView>
        {/* food details section */}
        {renderDetails()}
        <LineDivider />
        {/* restaurant section */}
        {renderRestaurant()}
      </ScrollView>
      <LineDivider />
      {/* footer */}
      {renderFooter()}
    </View>
  );
};

export default FoodDetail;

const styles = StyleSheet.create({});
