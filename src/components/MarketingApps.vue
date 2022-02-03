<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div class=" bg-white">
    <div class=" xs:rounded-lg shadow overflow-hidden">
        <h2 class=" font-semibold text-base text-dark-text min-w-full bg-white py-3 px-4">Marketing apps</h2>
    <p class="text-sm text-dark-text px-4">Increase sessions, engage shoppers, and promote products by adding more marketing apps.</p>
    <dl class=" py-5 px-4  grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        <div v-for="app in apps" :key="app.name" class="relative">
            <dt class="flex">
                <div class=" pt-2 flex items-center justify-center h-5 w-5 rounded-md text-white">
                <img :src='app.image' alt="">
                </div>
                <a :href="app.link" class="ml-4 text-xs leading-6 font-semibold text-blue-500">{{ app.name }}</a>
            </dt>
            <dd class="mt-1 ml-9 text-xs text-gray-500">
                {{ app.description }}
            </dd>
            <dd class="mt-1 ml-9 text-xs text-blue-600 underline">
                <a :href="app.link">Set up app</a>
            </dd>
        </div>
    </dl>
    <div class="px-4 pb-5">
        <WhiteButton buttonText="View all marketing apps"/>
    </div>
    </div>
  </div>
</template>

<script>

import WhiteButton from './WhiteButton.vue'

const apps = [
  {
    name: 'Google',
    description:'Reach shoppers and get discovered across Google',
    link:'#',
      image:'https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg'
  },
  {
    name: 'Snapchat Ads',
    description:'Grow your business with shoppable ads on Snapchat!',
    link:'#',
      image:'https://i.pinimg.com/564x/65/a4/24/65a4240ae9174aa1e5f3af541faba57b.jpg'
  },
  {
    name: 'Seguno: Email Marketing',
    description:'Email marketing in less time — NEW email templates available!',
    link:'#',
      image:'https://cdn.shopify.com/app-store/listing_images/b6c8035c51d734fa4f88beb66b94a2d5/icon/CMG5orL0lu8CEAE=.png?height=60&width=60'
  },
  {
    name: 'Omnisend Email Marketing',
    description:'Email Marketing, Newsletter, SMS, Abandoned Cart & Pop Up',
    link:'#',
      image:'https://cdn.shopify.com/app-store/listing_images/9b0c952ebdfd9d278f559665ecf48f5c/icon/CKbgk/ulx/QCEAE=.png?height=60&width=60'
  },
  {
    name: 'SMSBump Marketing & Automation',
    description:'Text Marketing, Cart recovery, SMS Automations and Chat',
    link:'#',
      image:'https://sun-assets.s3.eu-west-1.amazonaws.com/keepshoppers/shopify-apps/5ff6ca84375acad17be8d722/logo.png'
  },
  
]

export default {
    name:'MarketingApps',
    components:{
        WhiteButton,
    },
  setup() {
    return {
      apps,
    }
  },
}
</script>