<template>
    <div class="md:pl-52 flex flex-col flex-1">
        <main class="flex-1">
        <div class="py-6 space-y-4">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
                <h1 class="text-lg font-semibold text-dark-text">Orders</h1>
            </div>
          <div class=" max-w-7xl mx-auto px-4 sm:px-6 md:px-8 space-y-8 flex flex-col w-full">
            <!-- Replace with your content -->
            <div class=" flex flex-col items-center p-3 rounded-md bg-white shadow-sm text-xs space-y-4 pt-5 pb-14">
                <div class=" w-52"><img src="@/assets/images/shopify-bg-3.svg" alt=""></div>
                <h4 class="text-lg text-dark-text">Your orders will show here</h4>
                <p class="w-4/12 text-xs text-light-text text-center">To get orders and accept payments from customers, you need to select a plan. You’ll only be charged for your plan after your free trial ends.</p>
                <div><Button Button="Select a plan" /></div>
            </div>
            <span class="text-xxs mx-auto flex py-6"><img class="w-4 mr-1" src="@/assets/images/information.svg" alt=""> Learn more about <a class=" text-blue-600 underline" href="#">orders</a></span>
            <!-- /End replace -->
          </div>
        </div>
      </main>
    </div>
</template>

<script>
import Button from '../components/Button.vue'

    export default {
        name:'AllOrders',
        components:{
            Button,
        },
    }
</script>