import { Image, View, Text, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native'
import React, { useEffect, useMemo, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux';
import { selectRestaurant } from '../features/restaurantSlice';
import { selectBasketItems,removeFromBasket, selectBasketTotal } from '../features/basketSlice';
import { XCircleIcon } from 'react-native-heroicons/solid';
import { urlFor } from '../sanity';

const BasketScreen = () => {
    const navigation = useNavigation();
    const restaurant = useSelector(selectRestaurant);
    const items = useSelector(selectBasketItems);
    const basketTotal = useSelector(selectBasketTotal)
    const[groupedItemsInBasket, setGroupedItemsInBasket] = useState([]);
    const dispatch = useDispatch();

    useEffect(() => {
        const groupedItems = items.reduce((results, item) => {
            (results[item.id] = results[item.id] || [] ).push(item);
            return results;
        },{});
        setGroupedItemsInBasket(groupedItems);
    }, [items]);

    // console.log(groupedItemsInBasket);

  return (
    <SafeAreaView className="flex-1 bg-white">
        <View className="flex-1 bg-gray-100">
            <View className="p-5 border-b border-[red] bg-white shadow-xs">
                <View>
                    <Text className="text-lg font-bold text-center">My Cart</Text>
                    <Text className="text-center text-gray-400">{restaurant.title}</Text>
                </View>

                <TouchableOpacity onPress={navigation.goBack}
                    className="rounded-full bg-gray-100 absolute top-3 right-5">
                    <XCircleIcon color={"red"} height={50} width={50}/>
                </TouchableOpacity>
            </View>

            <View className="flex-row items-center space-x-4 px-4 py-3 bg-white my-5">
            <Image source={{
                uri:urlFor(restaurant.imgUrl).url(),
            }}
            className="h-9 w-9 bg-gray-300 p-4 rounded-full"
            />
            <Text className="flex-1">Delivers in 15 - 30 mins</Text>
            <TouchableOpacity>
                <Text className="text-red-600">Change</Text>
            </TouchableOpacity>
            </View>
            <ScrollView className="divide-y divide-gray-200">
                {Object.entries(groupedItemsInBasket).map(([key, items]) => (
                    <View key={key} className="flex-row items-center space-x-3 bg-white py-2 px-5">
                        <Text className="text-red-500">{items.length} X</Text>
                        <Image source={{uri:urlFor(items[0]?.image).url()}}
                        className="h-12 w-12 rounded-full"/>
                        <Text className="flex-1">{items[0]?.name}</Text>
                        <Text className="text-gray-600">
                        N{items[0]?.price}
                        </Text>
                        <TouchableOpacity>
                            <Text className="text-red-500 text-xs" onPress={()=> dispatch(removeFromBasket({id:key}))}>
                                Remove
                            </Text>
                        </TouchableOpacity>
                    </View>

                    
                ))}
            </ScrollView>
            <View className="p-5 bg-white mt-5 space-y-4">
                <View className="flex-row justify-between">
                    <Text className="text-gray-400">SubTotal</Text>
                    <Text className="text-gray-400">N{basketTotal}</Text>
                </View>

                <View className="flex-row justify-between">
                    <Text className="text-gray-400">Deliver Fee</Text>
                    <Text className="text-gray-400">N{300}</Text>
                </View>

                <View className="flex-row justify-between">
                    <Text className="text-black-400">Order Total</Text>
                    <Text className="font-extrabold">N{basketTotal + 300}</Text>
                </View>

                <TouchableOpacity onPress={() => navigation.navigate("PreparingOrderScreen")} className="rounded-md bg-red-500 p-4">
                    <Text className="text-center text-white text-lg font-bold">Confirm Order</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate("RemitaPaymentGateway")} className="rounded-md bg-red-500 p-4">
                    <Text className="text-center text-white text-lg font-bold">Pay With Remita</Text>
                </TouchableOpacity>
            </View>
        </View>

    </SafeAreaView>
  )
}

export default BasketScreen