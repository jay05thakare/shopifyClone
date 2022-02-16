<template>
  <div class="flex flex-1 flex-col md:pl-52">
    <main class="flex-1">
      <div class="space-y-4 py-6">
        <div class="flex flex-col space-y-6 px-4 sm:px-6 md:px-8">
          <div class="flex justify-between">
            <div class="flex items-center">
              <!-- <button class="px-1.5 py-1 border border-gray-400 mr-2 rounded"><ArrowLeftIcon class="w-5 h-5 text-gray-500" /></button> -->
              <h1 class="text-lg font-semibold text-dark-text">
                Sales over time
              </h1>
            </div>
            <div class="space-x-6">
              <button class="text-sm font-medium text-dark-text">Print</button>
              <button class="text-sm font-medium text-dark-text">Export</button>
              <button class="text-sm font-medium text-dark-text">
                Save as
              </button>
            </div>
          </div>
          <div class="flex space-x-4">
            <div class="flex items-center space-x-2">
              <span class="text-sm text-light-text">Date range</span>
              <button
                type="button"
                class="inline-flex max-w-max items-center rounded border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-dark-text shadow-sm hover:bg-gray-50"
              >
                <span><CalendarIcon class="mr-1 h-5 w-5 text-gray-600" /></span>
                Jan 16-Feb 15, 2022
              </button>
            </div>
            <div class="flex items-center space-x-2">
              <span class="text-sm text-light-text">Group by</span>
              <button
                type="button"
                class="inline-flex max-w-max items-center rounded border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-dark-text shadow-sm hover:bg-gray-50"
              >
                Day
                <span
                  ><ChevronDownIcon class="mt-1 ml-1 h-3 w-3 text-gray-600"
                /></span>
              </button>
            </div>
          </div>
        </div>
        <div
          class="mx-auto flex w-full flex-col space-y-5 px-4 sm:px-6 md:px-8"
        >
          <!-- Replace with your content -->
          <div class="flex w-full flex-col items-start space-y-4">
            <div
              class="w-full space-y-2 rounded-lg bg-dark-text p-4 text-white"
            >
              <h3 class="font-medium">Total sales</h3>
              <div
                class="h-72 w-full bg-white bg-opacity-10 text-sm opacity-70"
              >
                *graph
              </div>
            </div>
            <div
              class="w-full overflow-hidden rounded-lg border border-gray-200 bg-white"
            >
              <div
                class="flex justify-between border-b border-gray-200 px-4 py-4"
              >
                <WhiteButton buttonText="Manage filters" />
                <WhiteButton buttonText="Edit columns" />
              </div>
              <div>
                <OverTimeTable />
              </div>
            </div>
          </div>
          <!-- /End replace -->
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import { CalendarIcon, ChevronDownIcon } from "@heroicons/vue/outline";
import WhiteButton from "@/components/WhiteButton.vue";
import OverTimeTable from "@/components/OverTimeTable.vue";

export default {
  name: "OverTime",
  components: {
    CalendarIcon,
    // ArrowLeftIcon,
    ChevronDownIcon,
    WhiteButton,
    OverTimeTable,
  },
  setup() {
    return {};
  },
};
</script>
