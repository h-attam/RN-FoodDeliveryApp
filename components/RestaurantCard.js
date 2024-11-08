import { View, Text, TouchableWithoutFeedback, Image } from "react-native";
import React from "react";
import * as Icon from "react-native-feather";
import { themeColors } from "@/theme";
import { useNavigation } from "@react-navigation/native";



export default function RestaurantCard({ item }) {
  const navigation = useNavigation();
  return (
    <TouchableWithoutFeedback
    onPress={() => navigation.navigate("Restaurant" ,{...item})}
    >  
      <View
        style={{
          marginRight: 24,
          backgroundColor: themeColors.bgColor(0.2),
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 4 },
          shadowOpacity: 0.15,
          shadowRadius: 7,
          elevation: 5,
        }}
      >
        <Image
          style={{
            height: 144, 
            width: 256, 
            borderTopLeftRadius: 24, 
            borderTopRightRadius: 24,
          }}
          source={item.image }
          resizeMode="cover"
        />
        <View
          style={{ padding: 12, marginBottom: 8 }}
        >
          <Text style={{ fontSize: 18, fontWeight: "bold" }}>
            {item.name}
          </Text>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              marginTop: 4
            }}
          >
            <Image
              style={{ height: 16, width: 16 }}
              source={require("../assets/images/vecteezy_mobile-game-golden-star-clipart-design-illustration_9342559.png")}
            />
            <Text style={{ fontSize: 14, marginLeft: 8 }}>
              <Text style={{ color: "#16a34a" }}>{item.stars}</Text>{" "}
              <Text style={{ color: "#475569" }}>
                {item.reviews} reviews .{" "}
                <Text style={{ fontWeight: "bold" }}>{item.category}</Text>
              </Text>
            </Text>
          </View>
          <View style={{
            flexDirection: "row",
            alignItems: "center",
            marginTop: 4
          }}>
            <Icon.MapPin color="gray" width={15} height={15} />
            <Text style={{ color: "gray", fontSize: 14, marginLeft: 4 }}>
              {item.address} 
            </Text>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}
