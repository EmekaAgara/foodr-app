import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import { selectBasketItems, selectBasketTotal } from '../features/basketSlice'
import { useNavigation } from '@react-navigation/native'

const BasketIcon = () => {
    const items = useSelector(selectBasketItems);
    const navigation = useNavigation();
    const basketTotal = useSelector(selectBasketTotal);
  return (
    <View className="absolute bottom-10 w-full z-50">
      <TouchableOpacity className="mx-5 bg-red-500 p-4 shadow-2xl rounded-md flex-row items-center space-x-1">
        <Text className="text-white font-extrabold text-lg bg-red-700 py-1 px-2">
            {items.length}
        </Text>
        <Text className="flex-1 text-white font-bold text-lg text-center">
            View Cart
        </Text>
        <Text className="text-lg text-white font-extrabold">
            N{basketTotal}
        </Text>
      </TouchableOpacity>
    </View>
  )
}

export default BasketIcon