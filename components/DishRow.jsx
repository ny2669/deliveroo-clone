import { View, Text, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import { MinusCircleIcon, PlusCircleIcon, PlusIcon } from 'react-native-heroicons/outline'
import {Store} from '../store/store'



const DishRow = ({id, name, price, description, image}) => {



    
const addtoCart = Store(state => state.adddToBasket)
const cart = Store(state => state.cart.items)
const RemoveBasket = Store(state => state.removeFromCart)



const handleAddToCart = () => {
    addtoCart({id, name, price, description, image});
  }


  const handleRemoveFromCart = (id) => {
    const itemIndex = cart.findIndex(item => item.id === id);
    if (itemIndex === -1) {
      // Item not found in the cart
      return;
    }
    const itemToRemove = cart[itemIndex];
    if (itemToRemove.quantity > 1) {
      // If there are more than one item with the same id in the cart,
      // decrease the quantity of the first one.
      const updatedItems = [...cart];
      updatedItems[itemIndex] = {...updatedItems[itemIndex], quantity: updatedItems[itemIndex].quantity - 1};
      RemoveBasket(updatedItems[itemIndex]);
    } else {
      // If there's only one item with the given id in the cart, remove it.
      RemoveBasket(itemToRemove);
    }
  };

  const cartItem = cart.find(item => item.id === id);
  const cartItemQuantity = cart ? cart.quantity : 0;

console.log(cart)


    const [isPressed, setIsPressed] = useState(false)

  return (
    <>
    
    <TouchableOpacity onPress={() => setIsPressed(!isPressed)} className={`bg-white border border-gray-200 p-4 ${isPressed && 'border-b-0'}`}>
        <View className='flex-row'>
   <View className='flex-1 pr-2'>


    <Text className='text-lg mb-1'>{name}</Text>
    <Text className='text-gray-400'>{description}</Text>
    <Text className='text-gray-400'>£{price}</Text>

 
   
   </View>
   <View className=''>
    <Image source={{uri: image}} style={{borderWidth: 1, borderColor: 'gray'}} className='w-20 h-20 bg-gray-400 p-4'/>
   </View>
   </View>
    </TouchableOpacity>




    {isPressed && (

<View className='bg-white px-4'>


<View className='flex-row items-center space-x-2 pb-3'>

       

<TouchableOpacity onPress={() => handleRemoveFromCart(id)}>
<MinusCircleIcon color={'#00CCBB'} size={40}/>

        </TouchableOpacity>

  
        <Text>{cart.find(item => item.id === id)?.quantity || 0}</Text>

        <TouchableOpacity onPress={handleAddToCart} >

        <PlusCircleIcon color='#00CCBB' size={40}/>
        
        </TouchableOpacity>
    </View>

    

</View>

    )}
    </>
  )
}

export default DishRow