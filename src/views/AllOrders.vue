<template>
  <div class="flex flex-1 flex-col md:pl-52">
    <main class="flex-1">
      <div class="space-y-4 py-6">
        <div
          class="relative mx-auto flex justify-between px-4 xs:static sm:px-6 md:px-8"
        >
          <h1 class="pt-8 text-lg font-semibold text-dark-text xs:pt-0">
            Orders
          </h1>
          <div class="absolute top-0 right-0 xs:static">
            <ExportButton />
          </div>
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
import ExportButton from "@/components/ExportButton.vue";
import AllOrdersCard from "@/components/AllOrdersCard.vue";
import AllOrdersTableCard from "@/components/AllOrdersTableCard.vue";
export default {
  name: "AllOrders",
  components: {
    ExportButton,
    AllOrdersCard,
    AllOrdersTableCard,
  },
};
</script>
