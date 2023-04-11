import { Image, SafeAreaView, ScrollView, Text, TextInput, View } from 'react-native';
import React, { Component, useEffect, useLayoutEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { AdjustmentsVerticalIcon, ChevronDownIcon, MagnifyingGlassIcon,UsersIcon } from "react-native-heroicons/outline";
import Categories from '../components/Categories';
import FeaturedRow from '../components/FeaturedRow';

import sanityClient, { client } from '../sanity';




const HomeScreen = () => {

    // global.URLSearchParams = URLSearchParams;
     const navigation = useNavigation()

     const [featuredCategories, setFeaturedCategories] = useState([])
     




     useLayoutEffect(() =>{
        navigation.setOptions({

            headerShown: false,
        })

     },[])





   




const getFeatured = async () => {

    const test = await client.fetch(` *[_type == 'featured']{
                         ...,
                    resturants[]->{
                          ...,
                         dishes[]->,
                         
                       }
                      }`).then(data => {
  
  
  setFeaturedCategories(data)
                          return data
                      })
  
                      return test
  }


  useEffect(() => {


    getFeatured()


   },[])






  

    return (
      <SafeAreaView className='bg-white pt-5'>
       
        <View className='flex-row pb-3 items-center mx-4 space-x-2 px-4'>
            <Image source={{
                uri: 'https://links.papareact.com/wru'
            }} className='h-7 w-7 bg-gray-300 p-4 rounded-full'/>
       
        <View className='flex-1'>
            <Text className='font-bold text-gray-400 text-xs'>Deliver Now</Text>
            <Text className='font-bold text-lg'>Current Location 

            <ChevronDownIcon size={20} color={'#00CCBB'} />
            </Text>
        </View>
        
        <UsersIcon size={35} color={'#00CCBB'}/>
        </View>

        <View className='flex-row items-center space-x-2 pb-2 mx-4'>
           <View className='flex-row flex-1 space-x-2 bg-gray-200 p-3 '>
            <MagnifyingGlassIcon color='gray' size={20}/>

<TextInput placeholder='Restuarants and Cuisines' keyboardType='default'/>

           </View>
           <AdjustmentsVerticalIcon color={'#00CCBB'}/>

        </View>

<ScrollView>
<Categories/>
{featuredCategories?.map(item => (

<FeaturedRow key={item._id} id={item._id} title={item.name} description={item.short_description}/> 

))}


{/* 
<FeaturedRow id='2' title='Tasty Discounts' description='Everybodys been enjoying these jusice discounts!'/>

<FeaturedRow id='3' title='Offers near you!' description='Why not support your local restuarant tonight!'/> */}


</ScrollView>

      </SafeAreaView>
    )
  
}

export default HomeScreen

