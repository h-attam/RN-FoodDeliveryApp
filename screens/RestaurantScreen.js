import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import React, { useEffect } from "react";
import { useRoute } from "@react-navigation/native";
import * as Icon from "react-native-feather";
import { themeColors } from "@/theme";
import { useNavigation } from "expo-router";
import DishRow from '../components/dishRow';
import CartIcon from '../components/cartIcon';
import { StatusBar } from "expo-status-bar";



export default function RestaurantScreen() {
  const { params } = useRoute();
  const navigation = useNavigation();
  const item = params;
 

 

  return (
    <View>
      <CartIcon />
      <StatusBar style="light" />
      <ScrollView>
        <View style={{ position: "relative" }}>
          <Image style={{ width: "100%", height: 200 }} source={item.image} />
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={{
              position: "absolute",
              top: 14,
              left: 4,
              backgroundColor: "#f9fafb",
              padding: 2,
              borderRadius: 50,
              shadowColor: "#000",
              shadowOpacity: 0.1,
              shadowRadius: 2,
              shadowOffset: { width: 0, height: 2 },
            }}
          >
            <Icon.ArrowLeft strokeWidth={3} stroke={themeColors.bgColor(1)} />
          </TouchableOpacity>
        </View>
        <View
          style={{
            borderTopLeftRadius: 40,
            borderTopRightRadius: 40,
            backgroundColor: "white",
            marginTop: 12,
            paddingTop: 6,
          }}
        >
          <View style={{ paddingHorizontal: 20 }}>
            <Text style={{ fontSize: 30, fontWeight: "bold" }}>{item.name}</Text>
            <View style={{ flexDirection: "row", marginTop: 4 }}>
              <View style={{ flexDirection: "row", alignItems: "center", marginRight: 8 }}>
                <Image
                  style={{ height: 16, width: 16 }}
                  source={require("../assets/images/vecteezy_mobile-game-golden-star-clipart-design-illustration_9342559.png")}
                />
                <Text style={{ fontSize: 14, marginLeft: 8 }}>
                  <Text style={{ color: "#16a34a" }}>{item.stars}</Text>{" "}
                  <Text style={{ color: "#475569" }}>
                    {item.reviews} reviews · <Text style={{ fontWeight: "bold" }}>{item.category}</Text>
                  </Text>
                </Text>
              </View>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Icon.MapPin color="gray" width={15} height={15} />
                <Text style={{ color: "gray", fontSize: 14, marginLeft: 4 }}>{item.address}</Text>
              </View>
            </View>
            <Text style={{ color: "gray", marginTop: 4 }}>{item.description}</Text>
          </View>
        </View>
        <View style={{ backgroundColor: "white", paddingBottom: 36 }}>
          <Text style={{ paddingHorizontal: 20, fontSize: 20, fontWeight: "bold", marginTop: 15, marginBottom: 20 }}>
            Menu
          </Text>
          {item.dishes.map((dish, index) => (
            <DishRow item={{ ...dish }} key={index} />
          ))}
        </View>
      </ScrollView>
    </View>
  );
}
