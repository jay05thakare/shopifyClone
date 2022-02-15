<template>
    <div class="md:pl-52 flex flex-col flex-1">
        <main class="flex-1">
        <div class="md:py-5 space-y-4">
            <div class="max-w-5xl mx-auto px-4 sm:px-6 md:px-8 space-y-4">
                <div class="flex justify-between relative xs:static">
                  <h1 class="pt-8 xs:pt-0 text-xl font-semibold text-dark-text whitespace-nowrap">Reports</h1>
                  <div class="xs:static absolute top-0 right-0">
                    <CreateReportButton />
                  </div>
                </div>
                <div class="w-full">
                    <label for="search" class="sr-only text-xs">Search</label>
                    <div class="relative">
                    <div class="pointer-events-none absolute inset-y-0 left-0 pl-3 flex items-center">
                        <SearchIcon class="h-5 w-5 text-gray-500" aria-hidden="true" />
                    </div>
                    <input id="search" name="search" class="block w-full bg-white border border-gray-300 rounded py-2 pl-10 pr-3 text-xs font-normal placeholder-gray-500 focus:outline-none focus:text-gray-900  sm:text-xs" placeholder="Search for reports" type="search" />
                    </div>
                </div>
            </div>
          <div class=" max-w-5xl mx-auto xs:px-4 sm:px-6 md:px-8 space-y-4 flex flex-col w-full overflow-hidden">
            <!-- Replace with your content -->
            <div class=" flex flex-col xl:flex-row space-y-4 xl:space-y-0 xl:space-x-4 items-start w-full " >
            <!-- column 1 -->
            <div class="w-full h-auto space-y-4">
              <div v-for="card in cardsCol1" :key="card.name" class=" w-full bg-white shadow border border-gray-200 p-5 rounded-lg space-y-4">
                <div class="flex justify-between">
                  <h2
                    class=" text-base text-dark-text font-medium pr-4" >
                    {{card.name}}
                  </h2>
                </div>
                <div class="text-sm text-dark-text">
                  <p>{{card.description}}</p>
                </div>
                <div :class="[card.contentStatus ? 'block' : 'hidden',' -mt-8 pb-4 border-b border-gray-200']">
                    <span class="uppercase text-xs font-medium">{{card.title}}</span>
                    <h2 class="text-3xl text-dark-text font-medium">{{card.value}}</h2>
                </div>
                <div>
                  <p class="uppercase text-xs font-medium">Reports</p>
                  <div class="text-sm text-indigo-500 mt-2">
                    <div v-for="link in card.showItemsBefore" :key="link.name" class="">
                      <div class="py-2.5 border-b border-gray-200"><a :href="link.link" class="hover:text-blue-800">{{link.name}}</a></div>
                    </div>
                    <div v-if="showAll" class="divide-y overflow-hidden">
                      <div  v-for="link in card.showItemsAfter" :key="link.name">
                        <div class="py-2.5"><a :href="link.link" class="hover:text-blue-800">{{link.name}}</a></div>
                      </div>
                      
                    </div>
                    <div>
                      <div class="flex justify-center pt-4"><button @click="showAll = !showAll" class="flex items-center p-1 hover:underline hover:text-blue-800">Show all <ChevronDownIcon class="w-4 h-4 ml-1 mt-0.5" /></button></div>

                      <transition>
                      
                      </transition>
                    </div>
                  </div>
                </div>
                <div :class="[card.contentStatus ? 'hidden': 'block', 'text-sm text-light-text p-4']">
                  <span>There were no sessions in this date range.</span>
                </div>
              </div>
            </div>
            <!-- column 2 -->
            <div class="w-full h-auto space-y-4">
              <div v-for="card in cardsCol2" :key="card.name" class=" w-full bg-white shadow border border-gray-200 p-5 rounded-lg space-y-4">
                <div class="flex justify-between">
                  <h2
                    class=" text-base text-dark-text font-medium pr-4" >
                    {{card.name}}
                  </h2>
                </div>
                <div class="text-sm text-dark-text">
                  <p>{{card.description}}</p>
                </div>
                <div :class="[card.contentStatus ? 'block' : 'hidden',' -mt-8 pb-4 border-b border-gray-200']">
                    <span class="uppercase text-xs font-medium">{{card.title}}</span>
                    <h2 class="text-3xl text-dark-text font-medium">{{card.value}}</h2>
                </div>
                <div>
                  <p class="uppercase text-xs font-medium">Reports</p>
                  <div class="text-sm text-indigo-500 mt-2">
                    <div v-for="link in card.showItemsBefore" :key="link.name" class="">
                      <div class="py-2.5 border-b border-gray-200"><a :href="link.link" class="hover:text-blue-800">{{link.name}}</a></div>
                    </div>
                    <div v-if="showAll" class="divide-y overflow-hidden">
                      <div  v-for="link in card.showItemsAfter" :key="link.name">
                        <div class="py-2.5"><a :href="link.link" class="hover:text-blue-800">{{link.name}}</a></div>
                      </div>
                      
                    </div>
                    <div>
                      <div class="flex justify-center pt-4"><button @click="showAll = !showAll" class="flex items-center p-1 hover:underline hover:text-blue-800">Show all <ChevronDownIcon class="w-4 h-4 ml-1 mt-0.5" /></button></div>

                      <transition>
                      
                      </transition>
                    </div>
                  </div>
                </div>
                <div :class="[card.contentStatus ? 'hidden': 'block', 'text-sm text-light-text p-4']">
                  <span>There were no sessions in this date range.</span>
                </div>
              </div>
            </div>
          </div>
            <!-- /End replace -->
          </div>
        </div>
      </main>
    </div>
</template>

<script>
import {ref} from 'vue'
import {SearchIcon,ChevronDownIcon} from '@heroicons/vue/outline'
import CreateReportButton from '../components/CreateReportButton.vue'

const cardsCol1 = [
  {
    name: "Sales",
    contentStatus: true,
    description: "Make business decisions by comparing sales across products, staff, channels, and more.",
    title: "Total sales last 30 days",
    value: "₹0.00",
    showItemsBefore:[
      {
        name:'Sales over time',
        href: '#',
      },
      {
        name:'Sales by product',
        href: '#',
      },
    ],
    showItemsAfter:[
      {
        name:'Sales by product variant SKU',
        href: '#',
      },
      {
        name:'Sales by product vendor',
        href: '#',
      },
      {
        name:'Sales by discount',
        href: '#',
      },
      {
        name:'Sales by traffic referrer',
        href: '#',
      },
      {
        name:'Sales by billing location',
        href: '#',
      },
      {
        name:'Sales by channel',
        href: '#',
      },
      {
        name:'Sales by customer name',
        href: '#',
      },
      {
        name:'Average order value over time',
        href: '#',
      },
    ],
  }, 
  {
    name: "Orders",
    contentStatus: true,
    description: "Get a sense of your store's order volume and flow, as well as overall fulfillment performance, with orders reports.",
    title: "ORDERS LAST 30 DAYS",
    value: "20",
    showItemsBefore:[
      {
        name:'Orders over time',
        href: '#',
      },
      {
        name:'Product orders and returns',
        href: '#',
      },
    ],
    showItemsAfter:[
      {
        name:'Fulfillment over time',
        href: '#',
      },
      {
        name:'Fulfillment, shipping, and delivery times',
        href: '#',
      },
    ],
  }, 
  {
    name: "Customers",
    contentStatus: true,
    description: "Gain insights into who your customers are and how they interact with your business.",
    title: "CUSTOMERS LAST 30 DAYS",
    value: "9",
    showItemsBefore:[
      {
        name:'Orders over time',
        href: '#',
      },
      {
        name:'Product orders and returns',
        href: '#',
      },
    ],
    showItemsAfter:[
      {
        name:'Fulfillment over time',
        href: '#',
      },
      {
        name:'Fulfillment, shipping, and delivery times',
        href: '#',
      },
    ],
  }, 
  {
    name: "Orders",
    contentStatus: true,
    description: "Get a sense of your store's order volume and flow, as well as overall fulfillment performance, with orders reports.",
    title: "ORDERS LAST 30 DAYS",
    value: "20",
    showItemsBefore:[
      {
        name:'Orders over time',
        href: '#',
      },
      {
        name:'Product orders and returns',
        href: '#',
      },
    ],
    showItemsAfter:[
      {
        name:'Fulfillment over time',
        href: '#',
      },
      {
        name:'Fulfillment, shipping, and delivery times',
        href: '#',
      },
    ],
  }, 
  {
    name: "Customers",
    contentStatus: true,
    description: "Gain insights into who your customers are and how they interact with your business.",
    title: "CUSTOMERS LAST 30 DAYS",
    value: "9",
    showItemsBefore:[
      {
        name:'Orders over time',
        href: '#',
      },
      {
        name:'Product orders and returns',
        href: '#',
      },
    ],
    showItemsAfter:[
      {
        name:'Fulfillment over time',
        href: '#',
      },
      {
        name:'Fulfillment, shipping, and delivery times',
        href: '#',
      },
    ],
  }, 
]

const cardsCol2 = [
  {
    name: "Acquisition",
    contentStatus: true,
    description: "Increase visitor engagement by knowing where your visitors are coming from and measuring the success of your campaigns.",
    title: "SESSIONS LAST 30 DAYS",
    value: "0",
    showItemsBefore:[
      {
        name:'Sessions over time',
        href: '#',
      },
      {
        name:'Sessions by referrer',
        href: '#',
      },
    ],
    showItemsAfter:[
      {
        name:'Sessions by location',
        href: '#',
      },
    ],
  }, 
  {
    name: "Profit margin",
    contentStatus: true,
    description: "See how products and locations contribute to the gross profit and margin for your business.",
    title: "PROFIT THIS MONTH TO DATE",
    value: "₹0.00",
    showItemsBefore:[
      {
        name:'Profit by product',
        href: '#',
      },
      {
        name:'Profit by product variant SKU',
        href: '#',
      },
    ],
    showItemsAfter:[
    ],
  }, 
  {
    name: "Customers",
    contentStatus: true,
    description: "Gain insights into who your customers are and how they interact with your business.",
    title: "CUSTOMERS LAST 30 DAYS",
    value: "9",
    showItemsBefore:[
      {
        name:'Orders over time',
        href: '#',
      },
      {
        name:'Product orders and returns',
        href: '#',
      },
    ],
    showItemsAfter:[
      {
        name:'Fulfillment over time',
        href: '#',
      },
      {
        name:'Fulfillment, shipping, and delivery times',
        href: '#',
      },
    ],
  }, 
  {
    name: "Orders",
    contentStatus: true,
    description: "Get a sense of your store's order volume and flow, as well as overall fulfillment performance, with orders reports.",
    title: "ORDERS LAST 30 DAYS",
    value: "20",
    showItemsBefore:[
      {
        name:'Orders over time',
        href: '#',
      },
      {
        name:'Product orders and returns',
        href: '#',
      },
    ],
    showItemsAfter:[
      {
        name:'Fulfillment over time',
        href: '#',
      },
      {
        name:'Fulfillment, shipping, and delivery times',
        href: '#',
      },
    ],
  }, 
  {
    name: "Customers",
    contentStatus: true,
    description: "Gain insights into who your customers are and how they interact with your business.",
    title: "CUSTOMERS LAST 30 DAYS",
    value: "9",
    showItemsBefore:[
      {
        name:'Orders over time',
        href: '#',
      },
      {
        name:'Product orders and returns',
        href: '#',
      },
    ],
    showItemsAfter:[
      {
        name:'Fulfillment over time',
        href: '#',
      },
      {
        name:'Fulfillment, shipping, and delivery times',
        href: '#',
      },
    ],
  }, 
]


    export default {
        name:'AnalyticsReport',
        components:{
            CreateReportButton,
            SearchIcon,
            ChevronDownIcon
        },
  setup() {
    const showAll = ref(false)
    return {
      cardsCol1,
      cardsCol2,
      showAll,
    }
  },
        
    }
</script>

<style scoped>

</style>