import { Image, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import {MapPin,UserIcon,ChevronDownIcon,AdjustmentsIcon, MapPinIcon, ChatBubbleBottomCenterIcon, AdjustmentsVerticalIcon, BellAlertIcon, CheckBadgeIcon, MagnifyingGlassIcon} from "react-native-heroicons/outline"

const HomeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown:false,
    });

  }, []);

  return (
    <SafeAreaView className="bg-white p-10 ">
      <View className='flex-row pb-3 items-center mx-4 space-x-2'>
      <View>
        <CheckBadgeIcon color={"green"} size={25}/>
      </View>

        <View className='items-center flex-1'>
          <Text className="font-semibold text-gray-400 text-xs">Current Location</Text>
          <Text className=" font-medium text-base ">
            <MapPinIcon size={15} color="red"/>
             Lekki, Nigeria</Text>
        </View>
        <Image source={{uri:"https://emekaagara.com/wp-content/uploads/2021/06/emeka.jpg",}}
        className="h-8 w-8 bg-gray-200 p-4 rounded-full"
        />
      </View>

      <View className="flex-row items-center space-x-2 pb-2 mx-4">
        <View className="flex-row flex-1 space-x-2 rounded-md bg-gray-100 p-3.5">
          <MagnifyingGlassIcon color="#9ca3af" size={20}/>
          <TextInput
            placeholder="Search resturants and meals"
            keyboardType="default"
          />
        </View>
      </View>
    </SafeAreaView>
  )
}

export default HomeScreen
