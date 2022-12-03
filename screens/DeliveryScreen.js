import { Image, View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native'
import { useSelector } from 'react-redux'
import { selectRestaurant } from '../features/restaurantSlice'
import { XCircleIcon } from 'react-native-heroicons/solid'
import * as Progress from "react-native-progress"
import MapView, {Marker} from 'react-native-maps'


const DeliveryScreen = () => {
    const navigation = useNavigation();
    const restaurant = useSelector(selectRestaurant);
  return (
    <View className="flex-1">
        <SafeAreaView className="z-50">
            <View className="flex-row justify-between items-center p-5">
                <TouchableOpacity onPress={() => navigation.navigate("Home")}>
                    <XCircleIcon color={"red"} size={40}/>
                </TouchableOpacity>
                <Text className="font-light text-lg">Contact us</Text>
            </View>

            <View className="bg-white mx-5 my-2 rounded-md p-5 z-50 shadow-md">
              <View className="flex-row justify-between">
              <View>
                <Text className="text-lg text-gray-400">Delivery will arrive in</Text>
                <Text className="text-4xl font-bold">10-20 minutes</Text>
              </View>
              <Image
                source={require("../assets/delivery.gif")}
                className="h-20 w-20"
              
              />
              </View>
              <Progress.Bar size={30} color="red" indeterminate={true}/>
              <Text className="mt-3 text-gray-500">
                Your order from {restaurant.title} has been confirmed
              </Text>
            </View>     
        </SafeAreaView>
        <MapView
          initialRegion={{
            latitude:restaurant.lat,
            longitude:restaurant.long,
            latitudeDelta:0.005,
            longitudeDelta:0.005,
          }}
          className="flex-1 -mt-10 z-0"
          mapType="mutedStandard"
          >
            <Marker
            coordinate={{
              latitude:restaurant.lat,
            longitude:restaurant.long,
            }}
            title={restaurant.title}
            description={restaurant.short_description}
            identifier="origin"
            pinColor="#FF0000"
            />
          </MapView>
    </View>
  )
}

export default DeliveryScreen