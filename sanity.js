import {createClient} from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'



export const client = createClient({
    projectId: 'gz65ebqy',
    dataset: 'production',
    useCdn: true, // set to `true` to fetch from edge cache
    apiVersion: '2023-04-06', // use current date (YYYY-MM-DD) to target the latest API version
    // token: process.env.SANITY_SECRET_TOKEN // Only if you want to update content with the client
  })

  const builder = imageUrlBuilder(client)

  const urlFor = (source) => builder.image(source)


  export default client;
  export { urlFor };