import { View, Image, Text, TouchableOpacity } from "react-native";
import React from "react";
import { themeColors } from "@/theme";
import * as Icon from "react-native-feather";


export default function DishRow({ item }) {


  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "white",
        padding: 16,
        borderRadius: 30,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        marginBottom: 16,
        marginHorizontal: 16,
      }}
    >
      <Image
        style={{ borderRadius: 30, height: 100, width: 100 }}
        source={item.image}
      />
      <View
        style={{
          flex: 1,
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <View style={{ paddingLeft: 16 }}>
          <Text style={{ fontSize: 24 }}>{item.name}</Text>
          <Text style={{ color: "#474747" }}>{item.description}</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            paddingLeft: 16,
            alignItems: "center",
          }}
        >
          <Text
            style={{
              color: "#474747",
              fontSize: 18,
              fontWeight: "bold",
            }}
          >
            ${item.price}
          </Text>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <TouchableOpacity
              
              style={{
                padding: 8,
                borderRadius: 50,
                backgroundColor: themeColors.bgColor(1),
              }}
            >
              <Icon.Minus strokeWidth={2} height={20} width={20} stroke={"white"} />
            </TouchableOpacity>
            <Text style={{ paddingHorizontal: 16, fontSize: 18 }}>
              {2} 
            </Text>
            <TouchableOpacity
             
              style={{
                padding: 8,
                borderRadius: 50,
                backgroundColor: themeColors.bgColor(1),
              }}
            >
              <Icon.Plus strokeWidth={2} height={20} width={20} stroke={"white"} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}
