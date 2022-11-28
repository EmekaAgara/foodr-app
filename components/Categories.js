import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import CategorieCard from './CategorieCard'

const Categories = () => {
  return (
    <ScrollView contentContainerStyle={{paddingHorizontal:18, paddingTop:0,}} horizontal directionalLockEnabled={true} showsHorizontalScrollIndicator={false}>
        <CategorieCard title="Breakfast"/>
        <CategorieCard title="Nigerian"/>
        <CategorieCard title="Junks"/>
        <CategorieCard title="Pizza"/>
        <CategorieCard title="Burgers"/>
        <CategorieCard title="Vegetarian"/>
        <CategorieCard title="Breakfast"/>
        <CategorieCard title="Lunch"/>
        <CategorieCard title="Dinner"/>
        <CategorieCard title="Brunch"/>
    </ScrollView>

  )
}

export default Categories