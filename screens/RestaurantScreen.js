import { Image, View, Text, ScrollView, TouchableOpacity } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { urlFor } from '../sanity';
import { ArrowLeftIcon,BanknotesIcon, MapPinIcon } from 'react-native-heroicons/outline';
import { StarIcon } from 'react-native-heroicons/solid';
import DishRow from '../components/DishRow';

const RestaurantScreen = () => {
    const navigation = useNavigation();
    const{
        params:{fee,imgUrl,title,rating,genre,address,short_description,dishes,long,lat},
    
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

      <View className="bg-white">
        <View className="px-4 pt-4">
            <Text className="text-3xl font-bold">{title}</Text>
            <View className="flex-row space-x-2 my-1">
                <View className="flex-row items-center space-x-1">
                    <StarIcon color="gold" size={22}/>
                    <Text className="text-xs text-gray-500">{rating} • {genre}</Text>
                    <MapPinIcon color="red" size={22}/>
                    <Text className="text-xs text-gray-500">20 mins away • {address}</Text>
                </View>
            </View>
            
            <View className="flex-row space-x-2 mb-2">
                <View className="flex-row items-center space-x-1">
                <BanknotesIcon color="black" size={20}/>
                <Text className="text-xs text-gray-500">N300 • Delivery Fee</Text>
                </View>
            </View>
            <Text className="text-gray-500 mt-2 pb-4">{short_description}</Text>
        </View>   
      </View>
      <View>
      <Text className="px-4 pt-6 mb-3 font-bold text-xl">Menu</Text>
      
      {dishes.map((dish) => (
        <DishRow
            key={dish._id}
            id={dish._id}
            name={dish.name}
            description={dish.short_description}
            price={dish.price}
            image={dish.image}
            
        />
        ))}
        </View>
    </ScrollView>
  )
}

export default RestaurantScreen