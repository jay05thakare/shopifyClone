<template>
  <!-- <div class="pl-52 bg-black bg-opacity-30 w-full h-screen text-white flex justify-center items-center"> -->
  <div class="relative w-full rounded-lg bg-white text-black shadow">
    <div class="flex">
      <!-- Main content -->
      <div class="flex w-full flex-1 items-stretch">
        <main class="w-full flex-1">
          <div class="mx-2">
            <!-- Tabs -->
            <div class="mt-3 sm:mt-2">
              <!-- mobile -->
              <!-- desktop -->
              <div class="flex flex-col">
                <div class="mb-2 flex items-center border-b border-gray-300">
                  <nav class="-mb-px flex flex-1" aria-label="Tabs">
                    <button
                      v-for="tab in tabs"
                      :key="tab.name"
                      :class="[
                        tab.current
                          ? 'border-primary text-dark-text'
                          : 'border-transparent text-light-text hover:border-gray-400 hover:text-dark-text',
                        'mx-1 whitespace-nowrap border-b-2  py-3 px-4 text-sm',
                      ]"
                      @click="selectTab(tab)"
                    >
                      {{ tab.name }}
                    </button>
                  </nav>
                </div>
                <AllOrdersPageSearchAssets />
                <div class="w-full">
                  <AllOrdersTable />
                </div>
              </div>
            </div>

            <!-- list -->
            <!-- <section  class="" aria-labelledby="gallery-heading">
                                <div role="list" class="flex flex-col"> -->
            <!-- </div>
                            </section> -->
          </div>
        </main>
      </div>
    </div>
  </div>
  <!-- </div> -->
</template>

<script>
import { ref } from "vue";
// import {
//     ChevronRightIcon
// //   XIcon,
// } from '@heroicons/vue/outline'
import AllOrdersPageSearchAssets from "./AllOrdersPageSearchAssets.vue";
import AllOrdersTable from "./AllOrdersTable.vue";

export default {
  name: "CreateCampaignPopup",
  components: {
    //   ChevronRightIcon,
    AllOrdersPageSearchAssets,
    AllOrdersTable,
    //   XIcon,
  },
  data() {
    return {
      tabs: [
        { name: "All", href: "#", current: true },
        { name: "Unfulfilled", href: "#", current: false },
        { name: "Unpaid", href: "#", current: false },
        { name: "Open", href: "#", current: false },
        { name: "Closed", href: "#", current: false },
      ],
    };
  },
  setup() {
    const mobileMenuOpen = ref(false);

    return {
      mobileMenuOpen,
    };
  },
  methods: {
    // selectTab(tab) {
    //   this.tabs.forEach(t => (t.current = false))
    //   tab.current = true
    // },
    // toggleMobileMenu() {
    //   this.mobileMenuOpen = !this.mobileMenuOpen
    // },
    selectTab: function (selectedTab) {
      this.tabs.forEach((tab) => {
        tab.current = tab.name == selectedTab.name;
      });
    },
  },
};
</script>
