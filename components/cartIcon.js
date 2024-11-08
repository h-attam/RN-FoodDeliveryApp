import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { themeColors } from "@/theme";
import { useNavigation } from "@react-navigation/native";


export default function CartIcon() {
  const navigation = useNavigation();

 

  return (
    <View
      style={{ position: "absolute", bottom: 16, width: "100%", zIndex: 50 }}
    >
      <TouchableOpacity
        onPress={() => navigation.navigate("Cart")}
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginHorizontal: 16,
          borderRadius: 50,
          padding: 16,
          paddingVertical: 12,
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.25,
          shadowRadius: 4,
          elevation: 5,
          backgroundColor: themeColors.bgColor(1),
        }}
      >
        <View
          style={{
            padding: 8,
            paddingHorizontal: 16,
            borderRadius: 50,
            backgroundColor: "rgba(255, 255, 255 ,0.3)",
          }}
        >
          <Text style={{ fontWeight: "900", color: "white", fontSize: 18 }}>
            {3} 
          </Text>
        </View>
        <Text
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            fontWeight: "900",
            color: "white",
            fontSize: 18,
            textAlign: "center",
          }}
        >
          View Cart
        </Text>
        <Text
          style={{
            fontSize: 20,
            fontWeight: "900",
            fontFamily: "Helvetica",
            textAlign: "center",
            color: "white",
          }}
        >
          ${60} 
        </Text>
      </TouchableOpacity>
    </View>
  );
}
