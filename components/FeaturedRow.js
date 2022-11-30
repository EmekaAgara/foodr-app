import { View, Text, ScrollView, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { EllipsisVerticalIcon } from 'react-native-heroicons/outline'
import ResturantCard from './ResturantCard'
import sanityClient from "../sanity"



const FeaturedRow = ({ id, title, description}) => {
  const [restaurants, setRestaurants] = useState([]);
  
  
  useEffect(() => {
    sanityClient.fetch(
      
      `
      *[_type == "featured" && _id == $id] {
        ...,
        restaurants[]->{
          ...,
          dishes[]->,
          type->{
            name
          }
        },
      }[0]
      `,
      {id}
    
    )
    .then((data) => {
      setRestaurants(data?.restaurants);
    });
  },  []);
  console.log(restaurants);


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
        

        {restaurants?.map((restaurant) => (
        <ResturantCard
          id={restaurant.id}
          key={restaurant.id}
          fee="N300"
          title={restaurant.name}
          imgUrl={restaurant.image}
          rating={restaurant.rating}
          genre={restaurant.type?.name}
          address={restaurant.address}
          short_description={restaurant.short_description}
          // dishes={[]}
          // long={20}
          // lat={10}
        />


          
        ))}

        </ScrollView>
    </View>
  )
}

export default FeaturedRow