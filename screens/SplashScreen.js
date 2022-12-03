import { SafeAreaView, Image, View, Text } from 'react-native'
import React, { useEffect } from 'react'
// import { SafeAreaView } from 'react-native-safe-area-context'
import * as Animatable from "react-native-animatable"
import * as Progress from "react-native-progress"
import { useNavigation } from '@react-navigation/native'



const SplashScreen = () => {
    const navigation = useNavigation();
    useEffect(() => {
        setTimeout(() => {
            navigation.navigate("Home");
        }, 4000);
    },  []);




  return (
    <SafeAreaView className=" bg-black justify-center ">
        
      <Animatable.Image
      source={require("../assets/restaurant.jpg")}
      animation="slideInUp"
      iterationCount={1}
      className=" h-screen w-screen"
      resizeMode='contain'
      
      />
      <SafeAreaView className="mb-96 items-center">
        <Text className="pb-3 text-4xl text-white font-bold">Logging in .... </Text>
        <Progress.Circle className="pb-13" size={20} indeterminate={true} color="white"/>
        </SafeAreaView>
      
    </SafeAreaView>
  )
}

export default SplashScreen