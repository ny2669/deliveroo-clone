import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Image } from 'react-native'
import { MapIcon, StarIcon } from 'react-native-heroicons/outline'
import { urlFor } from '../sanity'
import { useNavigation } from '@react-navigation/native'




const RestuarantCard = ({id,imgUrl,title,rating,genre,address,short_description, dishes, long,lat}) => {

const navigation = useNavigation()

  return (
    <>
    <TouchableOpacity className='bg-white mr-3 shadow' onPress={() => {
navigation.navigate('Restuarant',{
  id, imgUrl,title,rating,genre,address,short_description, dishes, long,lat

})
    }}>
  <Image source={{
    uri: urlFor(imgUrl).url(),
  }} 
  className='h-36 w-64 rounded-sm'/>

  <View className='px-3 pb-4'>
    <Text className='font-bold text-lg pt-2'>{title}</Text>
  </View>
<View className='flex-row items-center space-x-1' >
    <StarIcon color={'green'} opacity={0.5} size={22}/>
    <Text className='text-sm text-gray-500'>
        <Text className='text-green-500'>{rating}</Text> . {genre}</Text>
        
</View>

<View className='flex-row items-center space-x-1'>
        <MapIcon color='gray' opacity={0.4} size={22}/>
        <Text className='text-xs text-gray-500'>Near by {address}</Text>
        </View>
    </TouchableOpacity>
    </>
  )
}

export default RestuarantCard