<template>
    <!-- <div class="pl-52 bg-black bg-opacity-30 w-full h-screen text-white flex justify-center items-center"> -->
        <div class="relative bg-white text-black w-full max-w-xl rounded-lg shadow overflow-hidden">
            <div class="flex justify-between items-center px-5 py-4 border-b border-gray-300">
                <h2 class=" text-xl">Select an activity</h2>
                <button class="w-5"><img class="text-black" src="@/assets/images/close.svg" alt="" @click="showModal = false"></button>
            </div>


                <div class="flex max-h-80 h-80 overflow-hidden">
                    <!-- Main content -->
                    <div class="flex-1 flex items-stretch overflow-y-auto">
                        <main class="flex-1">
                        <div class="max-w-7xl mx-auto px-2">
                            <!-- Tabs -->
                            <div class="mt-3 sm:mt-2">
                                <!-- mobile -->
                            <div class="sm:hidden">
                                <label for="tabs" class="sr-only">Select a tab</label>
                                <!-- Use an "onChange" listener to redirect the user to the selected tab URL. -->
                                <select id="tabs" name="tabs" class="block w-full pl-3 pr-10 py-2 text-base border-gray-300 sm:text-sm rounded-md">
                                <option selected="">Recently Viewed</option>
                                <option>Recently Added</option>
                                <option>Favorited</option>
                                </select>
                            </div>
                            <!-- desktop -->
                            <div class="hidden sm:block">
                                <div class="flex items-center border-b border-gray-300">
                                <nav class="flex-1 -mb-px flex" aria-label="Tabs">
                                    <button v-for="tab in tabs" :key="tab.name"   :class="[tab.current ? 'border-primary text-dark-text' : 'border-transparent text-light-text hover:text-dark-text hover:border-gray-300', 'whitespace-nowrap py-2 border-b-2 text-sm px-4 mx-1']" @click="selectTab(tab)">
                                    {{ tab.name }}
                                    </button>
                                </nav>
                                </div>
                            </div>
                            </div>

                            <!-- list -->
                            <section v-for="tab in tabs" :key="tab.name" class="" aria-labelledby="gallery-heading">
                            <h2 id="gallery-heading" class="sr-only">All</h2>
                            <ul v-if="tab.current && tab.name === 'All'" role="list" class="flex flex-col divide-y-2">
                                <li v-for="file in files" :key="file.name" class="flex justify-between w-full py-3 px-3">
                                    <component :is="file.icon" class=" mr-5 h-5 w-5" aria-hidden="true" />
                                    <div class="flex justify-between w-full items-center">
                                        <div class=" w-11/12">
                                            <h3 class=" text-base font-semibold text-dark-text">{{file.name}}</h3>
                                            <p class=" text-sm text-light-text">{{file.features}}</p>
                                            <p class="text-sm text-dark-text">{{file.description}}</p>
                                        </div>
                                        <div><ChevronRightIcon class="w-5 text-gray-600" /></div>
                                    </div>
                                </li>
                            </ul>
                            <ul v-else-if="tab.current && tab.name === 'Ads'" role="list" class="flex flex-col divide-y-2">
                                <li v-for="file in files" :key="file.name" class="flex justify-between w-full py-3 px-3">
                                    <!-- <component :is="file.icon" class=" mr-5 h-5 w-5" aria-hidden="true" /> -->
                                    <div class="flex justify-between w-full items-center">
                                        <div class=" w-11/12">
                                            <h3 class=" text-base font-semibold text-dark-text">{{file.name}}</h3>
                                            <p class=" text-sm text-light-text">{{file.features}}</p>
                                            <p class="text-sm text-dark-text">{{file.description}}</p>
                                        </div>
                                        <div><ChevronRightIcon class="w-5 text-gray-600" /></div>
                                    </div>
                                </li>
                            </ul>
                            </section>
                            
                            <p class="px-4 py-2 text-xs text-light-text">Increase sessions, engage shoppers, and promote products by adding more marketing apps. <a href="#" class="underline text-blue-500 text-xs whitespace-nowrap">Visit the Shopify App store</a></p>
                        </div>
                        </main>

                        
                    </div>
                </div>


            <div class="p-4 flex justify-end border-t border-gray-300 ">
                <button class="shadow py-2 px-4" @click="showModal = false">Close</button>
            </div>
        </div>
    <!-- </div> -->
</template>

<script>
import { ref } from 'vue'
import {
    ChevronRightIcon
//   XIcon,
} from '@heroicons/vue/outline'
import { MailIcon } from '@heroicons/vue/solid'

// const tabs = [
//   { name: 'All', href: '#', current: true },
//   { name: 'Ads', href: '#', current: false },
//   { name: 'Email', href: '#', current: false },
//   { name: 'Social Post', href: '#', current: false },
//   { name: 'SMS', href: '#', current: false },
// ]
const files = [
  {
    name: 'Shopify Email',
    icon:MailIcon,
    features:'Shopify Email • 2,500 free emails per month; $1 per 1,000 additional emails • Campaign',
    description:'Create emails to share promotions and updates with customers.',
    current: true,
  },
  {
    name: 'Facebook audience building ad',
    icon:MailIcon,
    features:'Facebook • Paid • Campaign',
    description:'Find new customers by reaching people who are interested in products like yours.',
    current: true,
  },
  {
    name: 'Facebook dynamic retargeting ad',
    icon:MailIcon,
    features:'Shopify Email • Paid • Campaign',
    description:'Promote products to visitors who have expressed interest on your store.',
    current: true,
  },
  {
    name: 'Facebook page post',
    icon:MailIcon,
    features:'Shopify Email • Free • Campaign',
    description:'Promote products to your existing audience on Facebook.',
    current: true,
  },
  {
    name: 'Snapchat brand awareness ad',
    icon:MailIcon,
    features:'Snapchat Ads • Paid • Campaign',
    description:'Promote products to audiences on Snapchat.',
    current: true,
  },
  {
    name: 'Snapchat dynamic shopping ad',
    icon:MailIcon,
    features:'Snapchat Ads • Paid • Campaign',
    description:'Reach new audiences or retarget existing audiences with shoppable product ads.',
    current: true,
  },
  // More files...
]

export default {
    name: 'CreateCampaignPopup',
  components: {
      ChevronRightIcon,
    //   XIcon,
  },
  data(){
      return({
          tabs: [
                    { name: 'All', href: '#', current: true },
                    { name: 'Ads', href: '#', current: false },
                    { name: 'Email', href: '#', current: false },
                    { name: 'Social Post', href: '#', current: false },
                    { name: 'SMS', href: '#', current: false },
                ],
      })
  },
  setup() {
    const mobileMenuOpen = ref(false)

    return {
    //   tabs,
      files,
      mobileMenuOpen,
    }
  },
  methods:{
    // selectTab(tab) {
    //   this.tabs.forEach(t => (t.current = false))
    //   tab.current = true
    // },
    // toggleMobileMenu() {
    //   this.mobileMenuOpen = !this.mobileMenuOpen
    // },
    selectTab: function(selectedTab) {
          this.tabs.forEach(tab => {
                  tab.current = (tab.name == selectedTab.name);
          });
      },
  },
}
</script>