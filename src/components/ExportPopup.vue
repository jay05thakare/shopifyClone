<template>
  <!-- <div class="pl-52 bg-black bg-opacity-30 w-full h-screen text-white flex justify-center items-center"> -->
  <div
    class="relative w-full min-w-full max-w-xl overflow-hidden rounded-lg bg-white text-black shadow"
  >
    <div
      class="flex w-full items-center justify-between border-b border-gray-300 px-5 py-4"
    >
      <h2 class="text-xl">Export orders</h2>
      <button class="w-6 rounded hover:bg-gray-200">
        <svg
          @click="$emit('close')"
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6 text-light-text hover:text-black"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
            clip-rule="evenodd"
          />
        </svg>
      </button>
    </div>

    <div class="flex h-80 max-h-80 w-full overflow-hidden">
      <!-- Main content -->
      <div class="flex flex-1 items-stretch overflow-y-auto">
        <main class="flex-1">
          <div class="mx-auto max-w-7xl px-2">
            <!-- content here -->
            <div class="p-4 text-sm">
              <div class="opacity-0">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab
                sapiente illo quaerat rem aperiam!
              </div>
              <div class="-mt-10 space-y-4">
                <fieldset>
                  <div>
                    <legend class="text-dark-text">Export</legend>
                  </div>
                  <div v-for="ex in exs" :key="ex.id" class="mt-4 space-y-4">
                    <div
                      :class="[
                        ex.disabled
                          ? 'cursor-not-allowed opacity-25'
                          : 'cursor-pointer',
                        'flex items-center',
                      ]"
                    >
                      <input
                        :id="ex.id"
                        name="Export"
                        type="radio"
                        :class="[
                          ex.disabled ? 'cursor-not-allowed' : 'cursor-pointer',
                          '-mt-2 h-4 w-4 border-gray-300 text-blue-600 ring-1 ring-gray-500 focus:ring-blue-500',
                        ]"
                        :checked="ex.id === 'Current page'"
                        :disabled="ex.disabled"
                      />
                      <label
                        :for="ex.id"
                        :class="[
                          ex.disabled ? 'cursor-not-allowed' : 'cursor-pointer',
                          'ml-3 -mt-2 block text-sm text-dark-text',
                        ]"
                      >
                        {{ ex.id }}
                      </label>
                    </div>
                  </div>
                </fieldset>
                <fieldset>
                  <div>
                    <legend class="text-dark-text">Export as</legend>
                  </div>
                  <div
                    v-for="exas in exass"
                    :key="exas.id"
                    class="mt-4 space-y-4"
                  >
                    <div
                      :class="[
                        exas.disabled
                          ? 'cursor-not-allowed opacity-25'
                          : 'cursor-pointer',
                        'flex items-center',
                      ]"
                    >
                      <input
                        :id="exas.id"
                        name="Export as"
                        type="radio"
                        class="-mt-2 h-4 w-4 border-gray-300 text-blue-600 ring-1 ring-gray-500 focus:ring-blue-500"
                        :checked="
                          exas.id ===
                          'CSV for Excel, Numbers, or other spreadsheet programs'
                        "
                      />
                      <label
                        :for="exas.id"
                        class="ml-3 -mt-2 block text-sm text-dark-text"
                      >
                        {{ exas.id }}
                      </label>
                    </div>
                  </div>
                </fieldset>
              </div>
            </div>
            <!-- content ends -->
          </div>
        </main>
      </div>
    </div>

    <div
      class="flex w-full justify-end space-x-2 border-t border-gray-300 p-4 text-sm"
    >
      <button
        class="rounded border border-gray-300 py-2 px-4 font-medium"
        @click="$emit('close')"
      >
        Cancel
      </button>
      <button
        class="rounded border border-gray-300 py-2 px-4 font-medium"
        @click="$emit('close')"
      >
        Export transaction histories
      </button>
      <button
        class="rounded border border-gray-300 bg-primary py-2 px-4 font-medium text-white"
      >
        Export orders
      </button>
    </div>
  </div>
  <!-- </div> -->
</template>

<script>
import { ref } from "vue";
import {} from "@heroicons/vue/outline";

const exs = [
  {
    id: "Current page",
  },
  {
    id: "All orders",
  },
  {
    id: "Selected: 0 orders",
    disabled: true,
  },
  {
    id: "20 orders matching your search",
    disabled: true,
  },
  {
    id: "Orders by date",
  },
];

const exass = [
  {
    id: "CSV for Excel, Numbers, or other spreadsheet programs",
  },
  {
    id: "Plain CSV file",
  },
];

export default {
  name: "ExportPopup",
  setup() {
    const mobileMenuOpen = ref(false);

    return {
      //   tabs,
      exs,
      exass,
      mobileMenuOpen,
    };
  },
  methods: {
    selectTab: function (selectedTab) {
      this.tabs.forEach((tab) => {
        tab.current = tab.name == selectedTab.name;
      });
    },
  },
};
</script>
