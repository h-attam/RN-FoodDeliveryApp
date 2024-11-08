import { View, Text, Image } from "react-native";
import React, { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";


export default function OrderPrepairingScreen() {
    const navigation = useNavigation();
  useEffect(() => {
    setTimeout(() => {

      //Teslimat ekranına geç
      navigation.navigate("Delivery");
    }, 3000);
  }, []);
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "white",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Image
        style={{ height: 425, width: 425 }}
        source={require("../assets/images/without-mockup-3.gif")}
      ></Image>
    </View>
  );
}
