import { Image, View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import * as Animatable from "react-native-animatable"
import * as Progress from "react-native-progress"
import { useNavigation } from '@react-navigation/native'



const PreparingOrderScreen = () => {
    const navigation = useNavigation();
    useEffect(() => {
        setTimeout(() => {
            navigation.navigate("Delivery");
        }, 5000);
    },  []);




  return (
    <SafeAreaView className=" bg-white justify-center flex-1 items-center">
      <Animatable.Image
      source={require("../assets/successful.gif")}
      animation="slideInUp"
      iterationCount={1}
      className=" h-72 w-72"
      />

      <Animatable.Text
      animation="slideInUp"
      iterationCount={1}
      className="text-lg p-10 my-10 text-black font-bold text-center">
        Your order was successful!!! we will let you know when the delivery team picks up your delivery
      </Animatable.Text>

      <Progress.Circle size={60} indeterminate={true} color="black"/>
    </SafeAreaView>
  )
}

export default PreparingOrderScreen