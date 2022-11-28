import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { StarIcon } from 'react-native-heroicons/solid'
import { BanknotesIcon, MapPinIcon } from 'react-native-heroicons/outline'

const ResturantCard = ({id,fee,imgUrl,title,rating,genre,address,short_description,dishes,long,lat}) => {
  return (
    <TouchableOpacity className="bg-white mr-3 shadow rounded-md">
        <Image
            source={{
                uri:imgUrl,
            }}
            className="h-36 w-64 rounded-t-md"
        />
        <View className="px-3 pb-4">
            <Text className="font-bold text-lg pt-2">{title}</Text>
            <View className="flex-row items-center space-x-1">
                <StarIcon color="gold" size={20}/>
                <Text className="text-xs text-gray-500">
                    <Text className="text-gray-500">{rating}</Text> • {genre}
                </Text>
            </View>
            <View className="flex-row items-center space-x-1">
                <MapPinIcon color="red" size={20}/>
                <Text className="text-xs text-gray-500">{address} • 20 mins away</Text>
            </View>
            <View className="flex-row items-center space-x-1">
                <BanknotesIcon color="black" size={20}/>
                <Text className="text-xs text-black-500">{fee} • Delivery Fee</Text>
            </View>
        </View>
    </TouchableOpacity>
  )
}

export default ResturantCard