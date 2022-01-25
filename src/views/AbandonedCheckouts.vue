<template>
    <div class="md:pl-52 flex flex-col flex-1">
        <main class="flex-1">
        <div class="py-6 space-y-4">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
                <h1 class="text-lg font-semibold text-dark-text">Abandoned Checkouts</h1>
            </div>
          <div class=" max-w-7xl mx-auto px-4 sm:px-6 md:px-8 space-y-8 flex flex-col w-full">
            <!-- Replace with your content -->
            <div class=" flex flex-col items-center p-3 rounded-md bg-white shadow-sm text-xs space-y-4 pt-5 pb-14">
                <div class=" w-52"><img src="@/assets/images/shopify-bg-6.svg" alt=""></div>
                <h4 class="text-lg text-dark-text">Abandoned checkouts will show here</h4>
                <p class="w-4/12 text-xs text-light-text text-center">See when customers put an item in their cart but don’t check out. You can also email customers a link to their cart.</p>
                <!-- <div><Button Button="Create draft order" /></div> -->
            </div>
            <span class="text-xxs mx-auto flex py-6"><img class="w-4 mr-1" src="@/assets/images/information.svg" alt=""> Learn more about  <a class=" text-blue-600 underline" href="#">creating draft orders</a></span>
            <!-- /End replace -->
          </div>
        </div>
      </main>
    </div>
</template>

<script>
// import Button from '../components/Button.vue'

    export default {
        name:'AbandonedCheckouts',
        components:{
            // Button,
        },
    }
</script>