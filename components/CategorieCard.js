import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

export default function CategorieCard({title,title2}) {
  return (
      <TouchableOpacity className="overflow-hidden">
        <Text className="inline-block mr-2 py-4 px-5  text-white bg-black rounded-lg ">
          {title}
        </Text>
      </TouchableOpacity>
  )
}