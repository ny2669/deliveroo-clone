import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'resturants',
  title: 'Resturants',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Resturant name',
      type: 'string',
      validation: (Rule) => Rule.required()
    }),
       defineField({
      name: 'short_description',
      title: 'Short Description',
      type: 'string',
      validation: (Rule) => Rule.max(200)
    }),
     defineField({
      name: 'image',
      title: 'Image of the Resturant',
      type: 'image',
     
    }),
     defineField({
      name: 'lat',
      title: 'Lat of the Resturant',
      type: 'number',
     
    }),
    defineField({
      name: 'long',
      title: 'Long of the Resturant',
      type: 'number',
     
    }),
     defineField({
      name: 'address',
      title: 'Resturant Address',
      type: 'string',
      validation: (Rule) => Rule.required()
    }),
   defineField({
      name: 'rating',
      title: 'enter rating from (1-5 stars)',
      type: 'number',
      validation: (Rule) => Rule.required().min(1).max(5).error('please enter a number between 1-5')
    }),
    defineField({
      name: 'type',
      title: 'Category',
      type: 'reference',
      to: [{type: 'category'}]
    }),
    defineField({
      name: 'dishes',
      title: 'Dishes',
      type: 'array',
      of: [{type: 'reference',  to: [{type: 'dish'}]}],

    }),
   
  
  ],

  
})
