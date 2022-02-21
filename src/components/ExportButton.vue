<template>
  <div>
    <button
      type="button"
      @click="showModal = true"
      class="inline-flex items-center rounded border border-transparent px-3 py-2 text-sm font-medium text-dark-text hover:bg-gray-200"
    >
      Export
    </button>
    <transition name="fade" appear class="">
      <div
        class="fixed inset-0 z-40 bg-black bg-opacity-30"
        v-if="showModal"
      ></div>
    </transition>
    <transition name="slide" appear>
      <div
        class="absolute left-1/2 top-1/2 z-40 -translate-x-1/2 -translate-y-1/2 transform"
        v-if="showModal"
      >
        <ExportPopup @close="showModal = false" />
      </div>
    </transition>
  </div>
</template>

<script>
import ExportPopup from "./ExportPopup";
export default {
  name: "ExportButton",
  components: {
    ExportPopup,
  },
  data() {
    return {
      showModal: false,
    };
  },
};
</script>
