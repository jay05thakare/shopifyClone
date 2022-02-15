<template>
    <div class="md:pl-64 flex flex-col flex-1">
        <main class="flex-1">
        <div class="py-6">
          <div class="max-w-3xl mx-auto px-4 sm:px-6 md:px-8 space-y-5">
            <!-- Replace with your content -->
            <div :class="[close ? 'hidden': 'flex', ' p-3 rounded-md bg-gray-900 text-white text-xs space-x-2']">
              <div class="flex flex-col sm:flex-row sm:space-x-2 sm:space-y-0 space-y-2">
                <p>Give your business time to grow. Get Shopify monthly or select a one-year, two-year, or three-year plan for savings of up to 25%.</p>
                <Button class=" w-max" Button="Select a plan" />
              </div>
              <div>
                  <button @click="close = true" class="w-4 h-4 z-10">
                    <XIcon class="w-4 h-4 text-white"/>
                  </button>
              </div>
            </div>

            <InfoCard v-for="item in infoCard" :key="item.title" :title="item.title" :description="item.description" :buttonText="item.buttonText"/>
            <!-- /End replace -->
          </div>
        </div>
      </main>
    </div>
</template>

<script>
import {ref} from 'vue'
import {XIcon} from '@heroicons/vue/outline'
import Button from '../components/Button.vue'
import InfoCard from '../components/InfoCard.vue'

const infoCard = [
    {
        title:"Join The Future of Commerce Live Digital Event",
        description:"Hear research from our global survey of 12,000 consumers and get practical tips for succeeding in 2022. Sessions for the Americas, Europe, and Asia Pacific coming Feb 15th, 16th, and 24th.",
        buttonText:"Register Now",
    },
    {
        title:"Free Headshots for Entrepreneurs at Shopify NYC",
        description:"Come join us at Shopify NYC to get your free headshots in our on-site studio, and meet the Shopify NYC team of Community Managers.",
        buttonText:"Reserve your spot",
    },
    {
        title:"Get to know Shopify with guided video tutorialsC",
        description:"Keep learning with new and upcoming videos by subscribing to the Shopify Help Center YouTube Channel.",
        buttonText:"Explore YouTube channel",
    },
    {
        title:"Join The Future of Commerce Live Digital Event",
        description:"Hear research from our global survey of 12,000 consumers and get practical tips for succeeding in 2022. Sessions for the Americas, Europe, and Asia Pacific coming Feb 15th, 16th, and 24th.",
        buttonText:"Register Now",
    },
    {
        title:"Free Headshots for Entrepreneurs at Shopify NYC",
        description:"Come join us at Shopify NYC to get your free headshots in our on-site studio, and meet the Shopify NYC team of Community Managers.",
        buttonText:"Reserve your spot",
    },
    {
        title:"Get to know Shopify with guided video tutorialsC",
        description:"Keep learning with new and upcoming videos by subscribing to the Shopify Help Center YouTube Channel.",
        buttonText:"Explore YouTube channel",
    },
]

    export default {
        name:'Home',
        components:{
          XIcon,
            Button,
            InfoCard,
        },
  setup() {
    const close = ref(false)
    return {
      close,
      infoCard,
    }
  },
        
    }
</script>

<style scoped>

</style>