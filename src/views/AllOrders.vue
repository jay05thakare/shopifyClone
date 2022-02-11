<template>
    <div class="md:pl-52 flex flex-col flex-1">
        <main class="flex-1">
        <div class="py-6 space-y-4">
            <div class=" mx-auto px-4 sm:px-6 md:px-8 flex justify-between">
                <h1 class="text-lg font-semibold text-dark-text">Orders</h1>
                <button class=" text-sm font-medium text-dark-text">Export</button>
            </div>
          <div class=" mx-auto px-4 sm:px-6 md:px-8 space-y-8 flex flex-col w-full">
            <!-- Replace with your content -->
            <AllOrdersCard />
            <AllOrdersTableCard />
            <!-- /End replace -->
          </div>
        </div>
      </main>
    </div>
</template>

<script>
import AllOrdersCard from '@/components/AllOrdersCard.vue';
import AllOrdersTableCard from '@/components/AllOrdersTableCard.vue';
    export default {
        name:'AllOrders',
        components:{
            AllOrdersCard,
            AllOrdersTableCard,
        },
    }
</script>