<template>
  <div class="flex flex-1 flex-col md:pl-52">
    <main class="flex-1">
      <div class="space-y-4 py-6">
        <div class="mx-auto flex justify-between px-4 sm:px-6 md:px-8">
          <h1 class="text-lg font-semibold text-dark-text">Orders</h1>
          <button class="text-sm font-medium text-dark-text">Export</button>
        </div>
        <div
          class="mx-auto flex w-full flex-col space-y-5 px-4 sm:px-6 md:px-8"
        >
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
import AllOrdersCard from "@/components/AllOrdersCard.vue";
import AllOrdersTableCard from "@/components/AllOrdersTableCard.vue";
export default {
  name: "AllOrders",
  components: {
    AllOrdersCard,
    AllOrdersTableCard,
  },
};
</script>
