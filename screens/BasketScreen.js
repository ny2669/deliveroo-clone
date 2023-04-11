import { View, Text, ScrollView, SafeAreaView } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { useRoute } from '@react-navigation/native'
import { Store } from '../store/store'


const BasketScreen = () => {

const items = Store(state => state.cart.items)
const resturant = Store(state => state.resturantSlice)
let results ;

useEffect(() => {

const groupItems = items.reduce(() => {

(results[items.id] = results[items.id] || []).push(items)
return results

}, {})

resturant(groupItems)

},[items])


// console.log(resturant)

  return (
    <SafeAreaView>
    <View className=''>
    <View className=''>
    <View className=''>
      <Text className=''>Basket</Text>
      <Text className=''>{resturant.title}</Text>
      </View>
    </View>
    </View>
    </SafeAreaView>
  )
}

export default BasketScreen