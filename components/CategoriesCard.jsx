import React from 'react'
import { Image, Text, TouchableOpacity } from 'react-native'
import { ScrollView } from 'react-native'


const CategoriesCard = ({title, imgUrl}) => {
  return (
    <TouchableOpacity className='relative mr-2'>
        <Image source={{
            uri: imgUrl
        }}
        className='h-20 w-20 rouneded'
        />
        <Text className='absolute bottom-1 left-1 text-white font-bold'>{title}</Text>
    </TouchableOpacity>
  )
}

export default CategoriesCard