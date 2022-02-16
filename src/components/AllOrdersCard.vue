<template>
  <span
    class="relative z-0 inline-flex divide-x divide-black overflow-hidden rounded-md border border-gray-300 bg-dark-text text-white shadow-sm"
  >
    <button
      type="button"
      class="flex w-32 items-center justify-center px-4 py-4 text-sm hover:bg-black hover:bg-opacity-60"
    >
      7 days<ChevronDownIcon class="mx-0.5 mt-1 w-4" />
    </button>
    <a
      href="#"
      type="button"
      class="w-64 items-center px-4 py-4 text-sm hover:bg-black hover:bg-opacity-60"
    >
      <p class="mb-0.5">Orders</p>
      <span class="font-medium">20</span>
    </a>
    <a
      href="#"
      type="button"
      class="w-64 items-center px-4 py-4 text-sm hover:bg-black hover:bg-opacity-60"
    >
      <p class="mb-0.5">Ordered items</p>
      <span class="font-medium">45</span>
    </a>
    <a
      href="#"
      type="button"
      class="w-64 items-center px-4 py-4 text-sm hover:bg-black hover:bg-opacity-60"
    >
      <p class="mb-0.5">Returned items</p>
      <div class="flex">
        <span class="font-medium">0</span>
        <span class="flex text-sm text-light-text"
          ><ChevronDownIcon class="mx-0.5 w-4" />0%</span
        >
      </div>
    </a>
    <a
      href="#"
      type="button"
      class="w-64 items-center px-4 py-4 text-sm hover:bg-black hover:bg-opacity-60"
    >
      <p class="mb-0.5">Fulfilled orders</p>
      <div class="flex">
        <span class="font-medium">0</span>
      </div>
    </a>
    <a
      href="#"
      type="button"
      class="w-64 items-center px-4 py-4 text-sm hover:bg-black hover:bg-opacity-60"
    >
      <p class="mb-0.5">Time to fulfill</p>
      <div class="flex">
        <span class="font-medium">-</span>
      </div>
    </a>
  </span>
</template>

<script>
import { ChevronDownIcon } from "@heroicons/vue/solid";
export default {
  name: "AllOrdersCard",
  components: {
    ChevronDownIcon,
  },
};
</script>

<style lang="scss" scoped></style>
