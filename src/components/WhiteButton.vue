<template>
  <button
    type="button"
    class="inline-flex items-center rounded border border-gray-300 bg-white px-4 py-1.5 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50"
  >
    {{ buttonText }}
  </button>
</template>

<script>
export default {
  name: "WhiteButton",
  props: ["buttonText"],
};
</script>
