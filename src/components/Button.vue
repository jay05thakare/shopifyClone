<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <button
    type="button"
    class="focus:outline-none inline-flex items-center whitespace-nowrap rounded border border-transparent bg-primary px-3 py-2 text-sm font-medium text-white shadow-sm hover:bg-dark-primary focus:ring-2 focus:ring-primary focus:ring-offset-2"
  >
    {{ Button }}
  </button>
</template>

<script>
export default {
  name: "Button",
  props: ["Button"],
};
</script>
