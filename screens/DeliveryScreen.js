import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { featured } from "@/constants";
import MapView, { Marker } from "react-native-maps";
import { themeColors } from "@/theme";
import * as Icon from "react-native-feather";


export default function DeliveryScreen() {
  const restaurant = featured.restaurants[0];
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1 }}>
      {/* Map View */}
      <MapView
        initialRegion={{
          latitude: restaurant.lat,
          longitude: restaurant.lng,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
        style={{ flex: 1 }}
        mapType="standard"
      >
        <Marker
          coordinate={{
            latitude: restaurant.lat,
            longitude: restaurant.lng,
          }}
          title={restaurant.name}
          description={restaurant.description}
          pinColor={themeColors.bgColor(1)}
        />
      </MapView>

      <View
        style={{
          borderTopRightRadius: 40,
          borderTopLeftRadius: 40,
          marginTop: -12,
          backgroundColor: "white",
          position: "relative",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            paddingHorizontal: 5,
            paddingTop: 10,
          }}
        >
          <View>
            <Text style={{ fontSize: 18, color: "#4b5563", fontWeight: "600" }}>
              Estimated Arrival
            </Text>
            <Text style={{ fontSize: 30, fontWeight: "900", color: "#4b5563" }}>
              20-30 Minutes
            </Text>
            <Text style={{ marginTop: 8, color: "#4b5563", fontWeight: "600" }}>
              Your order is on its way!
            </Text>
          </View>
          <Image
            style={{
              width: 50,
              height: 50,
              marginRight: 60,
              borderRadius: 25,
            }}
            source={require("../assets/images/63304c0ead674232ee58af3dbc63b464.gif")}
          />
        </View>

        <View
          style={{
            backgroundColor: themeColors.bgColor(0.8),
            padding: 8,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            borderRadius: 100,
            marginVertical: 10,
            marginHorizontal: 8,
          }}
        >
          <View
            style={{
              width: 66,
              height: 66,
              padding: 8,
              borderRadius: 33,
              backgroundColor: "rgba(255,255,255,0.4)",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Image
              style={{
                width: 50,
                height: 50,
                borderRadius: 25,
              }}
              source={require("../assets/images/Smiling-arab-deliveryman-with-opening-pizza-box-on-transparent-background-PNG.png")}
            />
          </View>
          <View style={{ flex: 1, marginLeft: 8 }}>
            <Text style={{ fontSize: 16, fontWeight: "bold", color: "white" }}>
              Alex Norman
            </Text>
            <Text
              style={{ fontSize: 16, fontWeight: "semibold", color: "white" }}
            >
              Your Rider
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginRight: 8,
            }}
          >
            <TouchableOpacity
              style={{
                backgroundColor: "white",
                padding: 8,
                borderRadius: 50,
                marginRight: 8, // Space between icons
              }}
            >
              <Icon.Phone
                fill={themeColors.bgColor(1)}
                strokeWidth={1}
                stroke={themeColors.bgColor(1)}
              />
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => navigation.navigate("Home")}
              style={{
                backgroundColor: "white",
                padding: 8,
                borderRadius: 50,
              }}
            >
              <Icon.X stroke={"red"} strokeWidth={4} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}
