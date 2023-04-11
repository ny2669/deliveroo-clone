import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Store } from '../store/store'
import { useNavigation } from '@react-navigation/native'


const Basket = () => {

const navigation = useNavigation()

const item = Store(state => state.cart.items)
// const BasketTotal = Store(state => state.basketTotal)


const totals = item.reduce((total, item) => total += item.price, 0);

// console.log(BasketTotal)

if(item.lengh === 0) return null

  return (
    <View className='absolute bottom-10 w-full z-50'>
        <TouchableOpacity className={`flex-row  mx-5 p-4 rounded-ld space-x-1 items-center  bg-[#00CCBB]`} on onPress={() => navigation.navigate('Basket')}>
        <Text className='text-lg text-white font-extrabold px-2 py-1 bg-[#01A296]'>{item.length}</Text>
        <Text  className='text-lg text-white font-extrabold flex-1 text-center'>View Basket</Text>
        <Text className='text-lg text-white font-extrabold'>£ {totals}</Text>
        </TouchableOpacity>

    </View>
  )
}

export default Basket