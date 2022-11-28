import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import {MapPin,UserIcon,ChevronDownIcon,SearchIcon,AdjustmentsIcon, MapPinIcon, ChatBubbleBottomCenterIcon, AdjustmentsVerticalIcon} from "react-native-heroicons/outline"

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
        <AdjustmentsVerticalIcon color={"red"} size={30}/>
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
    </SafeAreaView>
  )
}

export default HomeScreen
