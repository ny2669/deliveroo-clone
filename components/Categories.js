import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { ScrollView } from 'react-native'
import CategoriesCard from './CategoriesCard'
import {client} from '../sanity'
import { urlFor } from '../sanity'

const Categories = () => {

  const [category,setCategory] = useState([])



useEffect(() => {

  const getCategories  = async() => {
    
    
   const getData = await client.fetch(`*[_type == 'category']`).then(data => {

    setCategory(data)
    return data
  })

return getData


  }


  getCategories()
},[])


  return (
    <ScrollView horizontal showsHorizontalScrollIndicator='false' contentContainerStyle={{
paddingHorizontal:15,
paddingTop:10,

    }}>

      {category.map(item => (

<CategoriesCard key={item._id} imgUrl={urlFor(item.image).url()} title={item.name}/>


      ))}






    </ScrollView>
  )
}
export default Categories