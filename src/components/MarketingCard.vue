<template>
  <div class="">
    <!-- Card -->
    <div class="justify-center bg-white shadow xs:rounded-lg">
      <div class="border border-gray-200 p-4 pt-3">
        <dl>
          <dt class="truncate text-sm font-medium text-gray-500">
            <button
              data-tooltip-target="tooltip-top"
              :data-tooltip-placement="position"
              type="button"
              class="mb-2 rounded-lg border-b-2 border-dotted border-gray-300 bg-bg-hover text-center text-sm font-medium text-dark-text dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 md:mb-0"
            >
              {{ name }}
            </button>
            <div
              id="tooltip-top"
              role="tooltip"
              class="tooltip invisible absolute z-10 inline-block rounded-lg bg-white py-2 px-3 text-xs text-dark-text opacity-0 shadow"
            >
              {{ title }}
              <div class="tooltip-arrow" data-popper-arrow></div>
            </div>
          </dt>
          <dd>
            <div v-if="amount" class="text-lg font-medium text-gray-900">
              ₹{{ amount }} -
            </div>
            <div v-else class="text-lg font-medium text-gray-900">
              {{ value }} -
            </div>
          </dd>
        </dl>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MarketingCard",
  components: {},
  props: ["name", "value", "amount", "title", "position"],
};
</script>
