import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

export default function CategorieCard({title,title2}) {
  return (
      <TouchableOpacity>
        <Text className=" mr-2 py-3 px-5 text-white bg-black rounded-full ">
          {title}
        </Text>
      </TouchableOpacity>
  )
}