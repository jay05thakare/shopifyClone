<template>
    <div class="md:pl-52 flex flex-col flex-1">
        <main class="flex-1">
        <div class="py-6 space-y-4">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 text-dark-text flex justify-between">
                <h1 class="text-lg font-semibold">Products</h1>
                <button class="font-medium text-xs">Import</button>
            </div>
          <div class=" max-w-7xl mx-auto px-4 sm:px-6 md:px-8 space-y-8 flex flex-col w-full">
            <!-- Replace with your content -->
            <div class=" bg-white rounded-md divide-y flex flex-col items-center shadow">
                <h2 class=" py-5 px-2 text-2xl text-dark-text">First up: decide what you’re selling</h2>
                <div class="flex divide-x">
                    <div class="h-full">
                    <div class=" flex flex-col items-center p-3 rounded-md shadow-sm text-xs space-y-4 pt-5 pb-14">
                        <div class=""><img src="@/assets/images/shopify-bg-2.svg" alt=""></div>
                        <h4 class="text-lg text-dark-text">Your own products</h4>
                        <p class="w-10/12 text-xs text-light-text text-center">Add photos and descriptions for whatever products or services you plan to sell.</p>
                        <div><Button Button="Add products" /></div>
                    </div>
                    </div>
                    <div class="h-full">
                    <div class=" flex flex-col items-center p-3 rounded-md shadow-sm text-xs space-y-4 pt-5 pb-14">
                        <div class=""><img src="@/assets/images/shopify-bg-1.svg" alt=""></div>
                        <h4 class="text-lg text-dark-text">Dropshipping and wholesale</h4>
                        <p class="w-10/12 text-xs text-light-text text-center">See what products are out there and curate your own unique collection to sell.</p>
                        <div><Button Button="Explore Product" /></div>
                    </div>
                    </div>
                    <div class="h-full">
                    <div class=" flex flex-col items-center p-3 rounded-md shadow-sm text-xs space-y-4 pt-5 pb-14">
                        <div class=""><img src="@/assets/images/shopify-bg-5.svg" alt=""></div>
                        <h4 class="text-lg text-dark-text">Print on demande</h4>
                        <p class="w-10/12 text-xs text-light-text text-center">Whatever you design only gets printed and delivered when a customer places an order.</p>
                        <div><Button Button="Design Product" /></div>
                    </div>
                    </div>
                </div>
            </div>
                <span class="text-xxs mx-auto flex py-6"><img class="w-4 mr-1" src="@/assets/images/information.svg" alt=""> Learn more about <a class=" text-blue-600 underline" href="#">products</a></span>
            <!-- /End replace -->
          </div>
        </div>
      </main>
    </div>
</template>

<script>
import Button from '../components/Button.vue'

    export default {
        name:'Products',
        components:{
            Button,
        },
    }
</script>