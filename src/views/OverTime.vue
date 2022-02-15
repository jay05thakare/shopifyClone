<template>
  <div class="md:pl-52 flex flex-col flex-1">
    <main class="flex-1">
      <div class="py-6 space-y-4">
        <div class="px-4 sm:px-6 md:px-8 flex flex-col space-y-6">
          <div class="flex justify-between">
            <div class="flex items-center">
              <!-- <button class="px-1.5 py-1 border border-gray-400 mr-2 rounded"><ArrowLeftIcon class="w-5 h-5 text-gray-500" /></button> -->
              <h1 class="text-lg font-semibold text-dark-text">Sales over time</h1>
            </div>
            <div class="space-x-6">
              <button class=" text-sm font-medium text-dark-text">Print</button>
              <button class=" text-sm font-medium text-dark-text">Export</button>
              <button class=" text-sm font-medium text-dark-text">Save as</button>
            </div>
          </div>
          <div class="flex space-x-4">
            <div class="flex items-center space-x-2">
              <span class="text-sm text-light-text">Date range</span>
              <button type="button" class=" inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded text-dark-text bg-white hover:bg-gray-50 max-w-max " >
                <span><CalendarIcon class="w-5 h-5 mr-1 text-gray-600" /></span>
                Jan 16-Feb 15, 2022
              </button>
            </div>
            <div class="flex items-center space-x-2">
              <span class="text-sm text-light-text">Group by</span>
              <button type="button" class=" inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded text-dark-text bg-white hover:bg-gray-50 max-w-max " >
                Day
                <span><ChevronDownIcon class="w-3 h-3 mt-1 ml-1 text-gray-600" /></span>
              </button>
            </div>
          </div>
        </div>
        <div class="mx-auto px-4 sm:px-6 md:px-8 space-y-5 flex flex-col w-full"
        >
          <!-- Replace with your content -->
          <div class=" flex flex-col space-y-4  items-start w-full " >
            <div class=" p-4 bg-dark-text text-white w-full rounded-lg space-y-2">
              <h3 class="font-medium">Total sales</h3>
              <div class="w-full h-72 bg-white bg-opacity-10 text-sm opacity-70">*graph</div>
            </div>
            <div class="bg-white border border-gray-200 rounded-lg w-full overflow-hidden">
              <div class="flex justify-between px-4 py-4 border-b border-gray-200">
                <WhiteButton buttonText='Manage filters'/>
                <WhiteButton buttonText='Edit columns'/>
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
import { CalendarIcon,ChevronDownIcon } from "@heroicons/vue/outline";
import WhiteButton from '@/components/WhiteButton.vue';
import OverTimeTable from '@/components/OverTimeTable.vue';


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
    return {
    };
  }
};
</script>