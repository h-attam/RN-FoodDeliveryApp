import { View, Text, SafeAreaView, TextInput, ScrollView } from 'react-native';
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import * as Icon from "react-native-feather";
import { themeColors } from '../theme/index';
import Categories from "../components/categories";
import FeaturedRow from '../components/featuredRow';
import { featured } from '../constants/index';

export default function HomeScreen() {
  return (
    <SafeAreaView style={{ backgroundColor: 'white', flex: 1 }}>
      <StatusBar barStyle="dark-content" />

      {/* Search Bar */}
      <View style={{ flexDirection: 'row', alignItems: 'center', paddingHorizontal: 16, paddingBottom: 8 }}>
        <View style={{ 
          flexDirection: 'row', 
          flex: 1, 
          alignItems: 'center', 
          padding: 12, 
          borderRadius: 999, 
          borderWidth: 1, 
          borderColor: '#d1d5db' 
        }}>
          <Icon.Search height={25} width={25} stroke="gray" />
          <TextInput 
            placeholder='Restaurant' 
            style={{ marginLeft: 8, flex: 1 }} 
          />
          <View style={{
            flexDirection: 'row', 
            alignItems: 'center', 
            borderLeftWidth: 1, 
            paddingLeft: 8, 
            borderColor: '#d1d5db' 
          }}>
            <Icon.MapPin height={20} width={20} stroke="gray" />
            <Text style={{ color: '#4b5563', marginLeft: 4 }}>New York, NYC</Text>
          </View>
        </View>
        <View style={{backgroundColor:themeColors.bgColor(1), borderRadius:"50%", marginHorizontal:10}}>
          <Icon.Sliders  height="30" width="30" strokeWidth={2.5} stroke="white"/>
        </View>
      </View>

      {/* main */}
      <ScrollView showsVerticalScrollIndicator={false}
      contentContainerStyle={{
        paddingBottom:20
      }}
      >
        {/* categories */}
        <Categories/>

        {/* featured */}
        <View style={{ marginTop: 20 }}>
        {
          [featured,featured,featured].map((item,index) => {
            return (
              <FeaturedRow
              key={index}
              title={item.title}
              restaurants={item.restaurants}
              description ={item.description}
              />
            )
          })
        }
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
