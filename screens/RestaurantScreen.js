import { Image, View, Text, ScrollView, TouchableOpacity } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { urlFor } from '../sanity';
import { ArrowLeftIcon } from 'react-native-heroicons/outline';

const RestaurantScreen = () => {
    const navigation = useNavigation();
    const{
        params:{id,fee,imgUrl,title,rating,genre,address,short_description,dishes,long,lat},
    
    } = useRoute();

    useLayoutEffect(() => {
      navigation.setOptions({
        headerShown:false,
      });

    }, [])


  return (
    <ScrollView>
      <View className="relative">
        <Image
            source={{
                uri:urlFor(imgUrl).url(),
            }}
            className="w-full h-96 bg-gray-200 p-4"
        />
        <TouchableOpacity
            onPress={navigation.goBack}
            className="absolute top-14 left-5 p-4 bg-gray-100 rounded-md">
            <ArrowLeftIcon size={20}/>
        </TouchableOpacity>    
      </View>
    </ScrollView>
  )
}

export default RestaurantScreen