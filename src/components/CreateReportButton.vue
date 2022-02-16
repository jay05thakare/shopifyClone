<template>
  <div>
    <button
      type="button"
      @click="showModal = true"
      class="inline-flex items-center rounded border border-transparent bg-primary px-3 py-2 text-xs font-medium text-white shadow-sm hover:bg-dark-primary"
    >
      Create custom report
    </button>
    <transition name="fade" appear class="">
      <div
        class="fixed inset-0 z-40 bg-black bg-opacity-30"
        v-if="showModal"
        @click="showModal = false"
      ></div>
    </transition>
    <transition name="slide" appear>
      <div
        class="absolute left-1/2 top-1/2 z-40 -translate-x-1/2 -translate-y-1/2 transform"
        v-if="showModal"
      >
        <CreateReportPopup />
      </div>
    </transition>
  </div>
</template>

<script>
import CreateReportPopup from "./CreateReportPopup";
export default {
  name: "CreateReportButton",
  components: {
    CreateReportPopup,
  },
  data() {
    return {
      showModal: false,
    };
  },
};
</script>
