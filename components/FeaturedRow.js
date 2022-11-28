import { View, Text, ScrollView, Image } from 'react-native'
import React from 'react'
import { EllipsisVerticalIcon } from 'react-native-heroicons/outline'
import ResturantCard from './ResturantCard'

const FeaturedRow = ({ id, title, description}) => {
  return (
    <View>
      <View className="mt-4 flex-row items-center justify-between px-4">
        <Text className="font-bold text-lg">{title}</Text>
        <EllipsisVerticalIcon color="red"/>
      </View>
      <Text className="text-xs text-gray-500 px-4">{description}</Text>
      <ScrollView
        horizontal
        contentContainerStyle={{
            paddingHorizontal:15,
        }}
        showsHorizontalScrollIndicator={false}
        className="pt-4">
        
        <ResturantCard
            id={19}
            fee="N300"
            title="test title"
            imgUrl="https://emekaagara.com/wp-content/uploads/2021/06/emeka.jpg"
            rating={4.5}
            genre="Nigerian"
            address="lekki lagos Nigeria"
            short_description="TEST THE DESCRIPTION"
            dishes={[]}
            long={20}
            lat={10}
        />

        <ResturantCard
            id={19}
            fee="N300"
            title="test title"
            imgUrl="https://emekaagara.com/wp-content/uploads/2021/06/emeka.jpg"
            rating={4.5}
            genre="Nigerian"
            address="lekki lagos Nigeria"
            short_description="TEST THE DESCRIPTION"
            dishes={[]}
            long={20}
            lat={10}
        />
        <ResturantCard
            id={19}
            fee="N300"
            title="test title"
            imgUrl="https://emekaagara.com/wp-content/uploads/2021/06/emeka.jpg"
            rating={4.5}
            genre="Nigerian"
            address="lekki lagos Nigeria"
            short_description="TEST THE DESCRIPTION"
            dishes={[]}
            long={20}
            lat={10}
        />
        <ResturantCard
            id={19}
            fee="N300"
            title="test title"
            imgUrl="https://emekaagara.com/wp-content/uploads/2021/06/emeka.jpg"
            rating={4.5}
            genre="Nigerian"
            address="lekki lagos Nigeria"
            short_description="TEST THE DESCRIPTION"
            dishes={[]}
            long={20}
            lat={10}
        />
        <ResturantCard
            id={19}
            fee="N300"
            title="test title"
            imgUrl="https://emekaagara.com/wp-content/uploads/2021/06/emeka.jpg"
            rating={4.5}
            genre="Nigerian"
            address="lekki lagos Nigeria"
            short_description="TEST THE DESCRIPTION"
            dishes={[]}
            long={20}
            lat={10}
        />
        <ResturantCard
            id={19}
            fee="N300"
            title="test title"
            imgUrl="https://emekaagara.com/wp-content/uploads/2021/06/emeka.jpg"
            rating={4.5}
            genre="Nigerian"
            address="lekki lagos Nigeria"
            short_description="TEST THE DESCRIPTION"
            dishes={[]}
            long={20}
            lat={10}
        />


            

            

        </ScrollView>
    </View>
  )
}

export default FeaturedRow