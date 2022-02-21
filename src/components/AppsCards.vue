<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div class="rounded-lg bg-white w-full border border-gray-300 divide-y-2">
  <div v-for="item in items" :key="item.name" class=" overflow-hidden">
    <div class="py-4 w-full shadow space-y-4">
      <div>
        <div class="px-4 flex justify-between mt-2">
          <h2 class="font-medium">{{item.name}}</h2>
          <a class="text-blue-700 text-sm" href="#">See more</a>
        </div>
        <p class="px-4 text-sm text-light-text">{{item.tagLine}}</p>
      </div>

      <div class="flex w-full space-x-4 px-4">
        <div v-for="card in item.row" :key="card.name" class="p-4 w-1/3 flex flex-col justify-between rounded-md border border-gray-300">
          <div class="">
            <div class="flex items-center">
              <div class="flex-shrink-0 h-10 w-10 border border-gray-300 rounded overflow-hidden">
                <img class="h-10 w-10 object-cover" :src="card.logo" alt="" />
              </div>
              <div class="ml-2">
                <div class="text-sm text-dark-text truncate capitalize">
                  {{card.name}}
                </div>
                <div class="text-sm text-light-text">
                  by {{card.by}}
                </div>
              </div>
            </div>
            <div class="my-4 w-full h-36 border border-gray-300 rounded flex flex-col items-center justify-center overflow-hidden">
              <img :src="card.image" class=" rounded object-cover" alt="">
            </div>
            <p class="text-sm text-dark-text">
              {{card.desc}}
            </p>
          </div>
          <div class="mt-4 text-xs text-light-text">
            <span><StarIcon class="w-3 h-3 inline-block -mt-1.5 mr-1" /></span>
            <span>{{card.rating}} ({{card.reviewCount}} reviews)</span>
            <span v-for="feature in card.features" :key="feature"> •  {{feature}}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
import {StarIcon} from '@heroicons/vue/solid'

const items = [
  {
    name: 'Try dropshipping',
    tagLine: 'You pick which products to feature, they ship them to your customers.',
    row: [
      {
        name: "Oberlo ‑ Dropshipping App",
        by: "Shopify",
        logo: "https://pbs.twimg.com/profile_images/1313092010958610437/_2BmxG52_400x400.jpg",
        image: "https://cdn.shopify.com/app-store/listing_images/b1983a5240f536f4369a3e5861489e9c/banner/CJH6yrf0lu8CEAE=.png",
        desc: "Find products to sell on Shopify",
        rating: "4.3",
        reviewCount: "2,222",
        features: ["Free plan available"],
      },
      {
        name: "OptiMonk Popups: Email, Upsell",
        by: "Optimonk International Zrt",
        logo: "https://cdn.shopify.com/app-store/listing_images/e536008af724e81915b7952135759406/banner/COH3xrj0lu8CEAE=.jpg",
        image: "https://img.webdesign-inspiration.com/v7/webdesign-inspiration.com/uploads/design/2014-09/optimonk-com-18331.png",
        desc: "Email Pop ups, Exit Intent Popup, Upsell Pop ups & more.",
        rating: "4.9",
        reviewCount: "999",
        features: ["Free plan available"],
      },
      {
        name: "Sales Countdown Timer Bar 2.0",
        by: "Amai",
        logo: "https://cdn.shopify.com/app-store/listing_images/8e0710930178a2c9662c8dd768249846/icon/COTUzOigwvQCEAE=.png?height=60&width=60",
        image: "https://cdn.shopify.com/app-store/listing_images/8e0710930178a2c9662c8dd768249846/banner/CPPkxZiCtfACEAE=.jpeg",
        desc: "Countdown timer+counter. Count down clock. Sale countdown!",
        rating: "4.6",
        reviewCount: "10,111",
        features: ["Free plan available"],
      },
    ]
  },

  {
    name: 'Build your customer base',
    tagLine: 'Grab their attention and earn their loyalty.',
    row: [
      {
        name: "Free Shipping Bar",
        by: "Hextom",
        logo: "https://cdn.shopify.com/app-store/listing_images/635cce572624d1086ac37403cf25b5ee/icon/CMjyoI6Lm_QCEAE=.png?height=140&width=140",
        image: "https://cdn.shopify.com/app-store/listing_images/635cce572624d1086ac37403cf25b5ee/banner/CMuPgL30lu8CEAE=.jpg",
        desc: "Progressive shipping goals to boost sales & average cart value",
        rating: "4.3",
        reviewCount: "2,222",
        features: ["Free plan available"],
      },
      {
        name: "Hurrify ‑ Countdown Timer",
        by: "Yousef Khalidi",
        logo: "https://cdn.shopify.com/app-store/listing_images/0fd4cdd343a88b79577b53482698ee6f/icon/CJbPksn0lu8CEAE=.jpeg?height=140&quality=90&width=140",
        image: "https://cdn.shopify.com/app-store/listing_images/0fd4cdd343a88b79577b53482698ee6f/banner/CLSFoML0lu8CEAE=.png",
        desc: "Powerful, Effective & Instant Sales Booster.",
        rating: "4.9",
        reviewCount: "999",
        features: ["Free plan available", "2-day free trial"],
      },
      {
        name: "Tidio ‑ Live Chat & Chatbots",
        by: "TIDIO LLC",
        logo: "https://cdn.shopify.com/app-store/listing_images/c9308d01d0e596807cd697bab16009a1/icon/CMjbj7f0lu8CEAE=.png?height=140&width=140",
        image: "https://cdn.shopify.com/app-store/listing_images/c9308d01d0e596807cd697bab16009a1/banner/COvGmLn0lu8CEAE=.png",
        desc: "Live Chat boosted with Chatbots, Messenger, and Instagram",
        rating: "4.6",
        reviewCount: "10,111",
        features: ["Free plan available"],
      },
    ]
  }
]


export default {
  components: {
    StarIcon
  },
  setup() {
    return {
      items,
    };
  },
};
</script>
