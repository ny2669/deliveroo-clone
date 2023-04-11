import { View, Text, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { ArrowDownRightIcon, ArrowRightCircleIcon, ArrowRightIcon } from 'react-native-heroicons/outline'
import RestuarantCard from './RestuarantCard'
import  { client } from '../sanity';

const FeaturedRow = ({id ,title, description}) => {

   const [resturants, setResturants] = useState([])


   useEffect(() =>{


      const restuarant = async() =>{
  
          const products = await client.fetch(`*[_type == 'featured' && _id == $id]{
              ...,
              resturants[]->{
                ...,
                dishes[]->,
                type->{
                  name
                }
                
              }
            }[0]`,
            {id}).then(data => {
  
              setResturants(data?.resturants)
              return data.resturants
            })
  
            return products
  
      }
  
     restuarant()
  
     },[id])
  



  return (
    <View className=''>
     <View className='mt-4 flex-row items-center justify-between px-4'>
        <Text className='font-bold text-lg'>{title}</Text>
        <ArrowRightIcon/>
     </View>

     <Text className='text-xs text-gray-500 px-4'>{description}</Text>

     <ScrollView horizontal contentContainerStyle={{

        paddingHorizontal: 15,
    
     }} showsHorizontalScrollIndicator={false} className='pt-4'>
{resturants?.map(item => (
           <RestuarantCard key={item?._id} id={item?._id} imgUrl={item?.image} title={item?.name} rating={item?.rating} genre={item?.type?.name} address={item?.address} short_description={item?.short_description} dishes={item?.dishes} long={item?.long} lat={item?.lat}/>

))}
    
     </ScrollView>
    </View>
  )
}

export default FeaturedRow