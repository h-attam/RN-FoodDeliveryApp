import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import React from "react";
import { themeColors } from "@/theme";
import RestaurantCard from '../components/RestaurantCard';

export default function FeaturedRow({ title, description, restaurants }) {
  return (
    <View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          paddingLeft: 4,
          paddingRight: 4,
        }}
      >
        <View>
          <Text style={{ fontWeight: "bold", fontSize: 18 }}>{title}</Text>
          <Text style={{ color: "#6B7280", fontSize: 12 }}>{description}</Text>
        </View>
        <TouchableOpacity activeOpacity={0.7}>
          <Text style={{ color: themeColors.text, fontWeight: "bold" }}>
            See All
          </Text>
        </TouchableOpacity>
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 15 }}
        style={{ overflow: "visible" }}
      >
        {restaurants.length === 0 ? (
          <Text style={{ textAlign: "center", padding: 10 }}>
            No restaurants available
          </Text>
        ) : (
          restaurants.map((restaurant) => (
            <RestaurantCard item={restaurant} key={restaurant.id} />
          ))
        )}
      </ScrollView>
    </View>
  );
}
