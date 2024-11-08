import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import React from "react";
import { featured } from "@/constants";
import { themeColors } from "@/theme";
import * as Icon from "react-native-feather";
import { useNavigation } from "@react-navigation/native";


export default function CartScreen() {
  const restaurant = featured.restaurants[0];
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      {/* Back Button and Header */}
      <View
        style={{
          padding: 16,
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.25,
          shadowRadius: 4,
          elevation: 5,
          alignItems: "center",
          position: "relative",
        }}
      >
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{
            backgroundColor: themeColors.bgColor(1),
            position: "absolute",
            top: 8,
            left: 16,
            borderRadius: 50,
            padding: 8,
            zIndex: 10,
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.25,
            shadowRadius: 4,
            elevation: 5,
          }}
        >
          <Icon.ArrowLeft strokeWidth={3} stroke={"white"} />
        </TouchableOpacity>
        <Text style={{ fontSize: 24, fontWeight: "bold", color: "black" }}>
          Your Cart
        </Text>
        <Text style={{ fontSize: 18, fontWeight: "bold", color: "#6B7280" }}>
          {restaurant.name}
        </Text>
      </View>

      {/* Delivery Time Section */}
      <View
        style={{
          backgroundColor: themeColors.bgColor(0.2),
          flexDirection: "row",
          paddingHorizontal: 16,
          paddingVertical: 12,
          alignItems: "center",
        }}
      >
        <Image
          source={require("../assets/images/ship-2-chieu-la-gi_b52e7e65d8ae49f3b0d9d394f835fbcf_grande.webp")}
          style={{ height: 40, width: 40, borderRadius: 20 }}
        />
        <Text style={{ flex: 1, paddingLeft: 8, color: "black" }}>
          Deliver in 20-30 minutes
        </Text>
        <TouchableOpacity>
          <Text style={{ fontWeight: "bold", color: themeColors.text }}>
            Change
          </Text>
        </TouchableOpacity>
      </View>

      {/* Dishes List */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 50,
        }}
        style={{ backgroundColor: "white", paddingTop: 16 }}
      >
        {restaurant.dishes.map((dish, index) => (
          <View
            key={index}
            style={{
              flexDirection: "row",
              alignItems: "center",
              paddingHorizontal: 16,
              paddingVertical: 8,
              backgroundColor: "white",
              borderRadius: 20,
              marginHorizontal: 16,
              marginBottom: 12,
              shadowColor: "#000",
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.25,
              shadowRadius: 3.84,
              elevation: 5,
            }}
          >
            <Text style={{ fontWeight: "bold", color: themeColors.text }}>
              2 x
            </Text>
            <Image
              source={dish.image}
              style={{
                height: 50,
                width: 50,
                borderRadius: 25,
                marginHorizontal: 8,
              }}
            />
            <Text style={{ flex: 1, fontWeight: "bold", color: "black" }}>
              {dish.name}
            </Text>
            <Text style={{ fontWeight: "bold", color: "black" }}>
              ${dish.price}
            </Text>
            <TouchableOpacity
              style={{
                padding: 10,
                borderRadius: "50%",
                backgroundColor: themeColors.bgColor(1),
              }}
            >
              <Icon.Minus strokeWidth={2} height={20} stroke={"white"} />
            </TouchableOpacity>
            
          </View>
        ))}
      </ScrollView>

      {/* totals */}
      <View
        style={{
          padding: 16,
          paddingLeft: 24,
          paddingRight: 24,
          borderTopRightRadius: 30,
          borderTopLeftRadius: 30,
          paddingVertical: 16,
          backgroundColor: themeColors.bgColor(0.2),
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            padding: 16,
            alignItems: "center",
          }}
        >
          <Text style={{ color: "#000000" }}>Subtotal</Text>
          <Text style={{ color: "#000000" }}>$20</Text>
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            padding: 16,
            alignItems: "center",
          }}
        >
          <Text style={{ color: "#000000" }}>Delivery Fee</Text>
          <Text style={{ color: "#000000" }}>$10</Text>
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            padding: 16,
            alignItems: "center",
          }}
        >
          <Text style={{ color: "#000000", fontWeight: "bold" }}>
            Order Total
          </Text>
          <Text style={{ color: "#000000", fontWeight: "bold" }}>$60</Text>
        </View>
        <View>
          <TouchableOpacity
          onPress={() => navigation.navigate("OrderPrepairing")}
            style={{
              backgroundColor: themeColors.bgColor(1),
              padding: 10,
              borderRadius: 10,
            }}
          >
            <Text
              style={{
                color: "white",
                textAlign: "center",
                fontWeight: "bold",
                fontSize: 16,
              }}
            >
                Place Order
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
