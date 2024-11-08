import { View, Text, ScrollView, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import { categories as categoriesData } from '../constants/index'; // import categories data

export default function Categories() {
  const [activeCategory, setActiveCategory] = useState(null);
  const [categories, setCategories] = useState(categoriesData); // set initial state with imported categories data

  return (
    <View style={{ marginTop: 4 }}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: 15,
        }}
      >
        {categories.map((category, index) => {
          const isActive = category.id === activeCategory;

          return (
            <View
              key={index}
              style={{
                justifyContent: "center",
                alignItems: "center",
                marginRight: 24, // Tailwind 'mr-6' yerine sağ boşluk
              }}
            >
              <TouchableOpacity
                onPress={() => setActiveCategory(category.id)}
                style={{
                  padding: 4, // Tailwind 'p-1' yerine padding değeri
                  borderRadius: 999, // Tailwind 'rounded-full' için yüksek bir değer
                  shadowColor: "#000",
                  shadowOffset: { width: 0, height: 1 },
                  shadowOpacity: 0.2,
                  shadowRadius: 1.41,
                  backgroundColor: isActive ? "#4B5563" : "#E5E7EB", // isActive durumuna göre renk
                }}
              >
                <Image
                  style={{ width: 45, height: 45 }}
                  source={category.image}
                />
              </TouchableOpacity>
              <Text
                style={{
                  fontSize: 14,
                  marginTop: 4,
                  fontWeight: isActive ? "600" : "400", // isActive durumuna göre font ağırlığı
                  color: isActive ? "#1F2937" : "#6B7280", // isActive durumuna göre renk
                }}
              >
                {category.name}
              </Text>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
}
