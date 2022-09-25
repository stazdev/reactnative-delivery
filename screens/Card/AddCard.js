import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ImageBackground,
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import React, { useState, useEffect } from "react";
import { utils } from "../../utils";
import { COLORS, FONTS, icons, images, SIZES } from "../../constants";
import {
  FormInput,
  FormInputCheck,
  Header,
  IconButton,
  RadioButton,
  TextButton,
} from "../../components";

const AddCard = ({ navigation, route }) => {
  const [selectedCard, setSelectedCard] = useState(null);

  const [cardNumber, setCardNumber] = useState("");
  const [cardNumberError, setCardNumberError] = useState("");
  const [cardName, setCardName] = useState("");
  const [cardNameError, setCardNameError] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [expiryDateError, setExpiryDateError] = useState("");
  const [cvv, setCvv] = useState("");
  const [cvvError, setCvvError] = useState("");
  const [isRemember, setIsRemenber] = useState(false);

  useEffect(() => {
    let { selectedCard } = route.params;
    setSelectedCard(selectedCard);
  }, []);
  function renderHeader() {
    return (
      <Header
        title={"ADD NEW CARD"}
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
        rightComponent={<View style={{ width: 40 }} />}
      />
    );
  }

  function renderForm() {
    return (
      <View
        style={{
          marginTop: SIZES.padding * 2,
        }}
      >
        <FormInput
          label={"Card Number"}
          keyboardType="number-pad"
          maxLength={19}
          value={cardNumber}
          onChange={(value) => {
            setCardNumber(
              value
                .replace(/\s/g, "")
                .replace(/(\d{4})/g, "$1 ")
                .trim()
            );
            utils.validateInput(value, 19, setCardNumberError);
          }}
          errMsg={cardNumberError}
          appendComponent={
            <FormInputCheck value={cardNumber} error={cardNumberError} />
          }
        />

        <FormInput
          label={"Card Holder Name"}
          value={cardName}
          containerStyle={{ marginTop: SIZES.radius }}
          onChange={(value) => {
            utils.validateInput(value, 1, setCardNameError);
            setCardName(value);
          }}
          errMsg={cardNameError}
          appendComponent={
            <FormInputCheck value={cardName} error={cardNameError} />
          }
        />

        <View
          style={{
            flexDirection: "row",
            marginTop: SIZES.radius,
          }}
        >
          <FormInput
            label={"Expiry Date"}
            placeholder="MM/YY"
            value={expiryDate}
            maxLength={5}
            containerStyle={{ flex: 1 }}
            onChange={(value) => {
              utils.validateInput(value, 5, setExpiryDateError);
              setExpiryDate(value);
            }}
            appendComponent={
              <FormInputCheck value={expiryDate} error={expiryDateError} />
            }
          />
          <FormInput
            label={"CVV"}
            value={cvv}
            maxLength={3}
            containerStyle={{ flex: 1, marginLeft: SIZES.radius }}
            onChange={(value) => {
              utils.validateInput(value, 3, setCvvError);
              setCvv(value);
            }}
            appendComponent={<FormInputCheck value={cvv} error={cvvError} />}
          />
        </View>
        <View
          style={{
            alignItems: "flex-start",
            marginTop: SIZES.padding,
          }}
        >
          <RadioButton
            label={"Remember card details"}
            isSelected={isRemember}
            onPress={() => setIsRemenber(!isRemember)}
          />
        </View>
      </View>
    );
  }
  function renderCard() {
    return (
      <ImageBackground
        source={images.card}
        style={{
          height: 200,
          width: "100%",
          marginTop: SIZES.radius,
          borderRadius: SIZES.radius,
          overflow: "hidden",
        }}
      >
        <Image
          source={selectedCard?.icon}
          resizeMode="contain"
          style={{
            position: "absolute",
            top: 20,
            right: 20,
            height: 40,
            width: 80,
          }}
        />
        {/* card details */}
        <View
          style={{
            position: "absolute",
            bottom: 10,
            left: 0,
            right: 0,
            paddingHorizontal: SIZES.padding,
          }}
        >
          <Text
            style={{
              color: COLORS.white,
              ...FONTS.h3,
            }}
          >
            {cardName}
          </Text>
          <View style={{ flexDirection: "row" }}>
            <Text
              style={{
                flex: 1,
                color: COLORS.white,
                ...FONTS.body3,
              }}
            >
              {cardNumber}
            </Text>
            <Text
              style={{
                color: COLORS.white,
                ...FONTS.body3,
              }}
            >
              {expiryDate}
            </Text>
          </View>
        </View>
      </ImageBackground>
    );
  }

  function renderFooter() {
    return (
      <View
        style={{
          paddingTop: SIZES.radius,
          paddingBottom: SIZES.padding,
          paddingHorizontal: SIZES.padding,
        }}
      >
        <TextButton
          buttonContainerStyle={{
            height: 60,
            borderRadius: SIZES.radius,
            backgroundColor: COLORS.primary,
          }}
          label={"Add Card"}
          onPress={() => navigation.goBack()}
        />
      </View>
    );
  }
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: COLORS.white,
      }}
    >
      {renderHeader()}
      <KeyboardAwareScrollView
        keyboardDismissMode="on-drag"
        contentContainerStyle={{
          flexGrow: 1,
          paddingHorizontal: SIZES.padding,
        }}
      >
        {renderCard()}
        {/* form inputs */}
        {renderForm()}
      </KeyboardAwareScrollView>
      {renderFooter()}
    </View>
  );
};

export default AddCard;

const styles = StyleSheet.create({});
