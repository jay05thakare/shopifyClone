
<template>
<div class="space-y-4 bg-white max-w-xl">
  <div class="p-4 space-y-4 flex flex-col">
    <div>
      <label for="range" class="block text-sm text-dark-text bg-white">Date range</label>
      <select id="range" name="range" class="mt-1 block w-full pl-3 pr-10 py-2 border-gray-300 text-sm rounded-md">
        <option selected="">Today</option>
        <option>Yesterday</option>
        <option>Last 7 days</option>
        <option>Last 30 days</option>
        <option>Last 90 days</option>
        <option>Last month</option>
        <option>Last year</option>
      </select>
    </div>
    <div>
      <div class="flex space-x-4 text-sm text-dark-text">
        <div class="w-1/2 flex-1 min-w-0">
          <label for="starting" class="">Starting</label>
          <input type="text" name="starting" id="starting" class="relative block w-full  rounded bg-transparent focus:z-10 sm:text-sm border-gray-300 mt-1 py-2" placeholder="2022-02-22" />
        </div>
        <div class="w-1/2 flex-1 min-w-0">
          <label for="ending" class="">Ending</label>
          <input type="text" name="ending" id="ending" class="relative block w-full rounded bg-transparent focus:z-10 sm:text-sm border-gray-300 mt-1 py-2" placeholder="2022-02-22" />
        </div>
      </div>
    </div>
    <div class="w-full">
      <Calendar />
    </div>
    <div class=" space-y-4">
      <fieldset class="space-y-5">
        <legend class="sr-only">Notifications</legend>
        <div class="relative flex items-start">
          <div class="flex items-center h-5">
            <input id="comments" aria-describedby="comments-description" name="comments" type="checkbox" class=" h-5 w-5 text-blue-600 border-gray-300 rounded" checked/>
          </div>
          <div class="ml-2 text-sm">
            <label for="comments" class=" text-dark-text">Compare to previous dates</label>
          </div>
        </div>
      </fieldset>
      <div>
        <label for="compare" class="block text-sm text-dark-text bg-white">Compare to</label>
        <select id="compare" name="compare" class="mt-1 block w-full pl-3 pr-10 py-2 border-gray-300 text-sm rounded-md">
          <option selected="">Previous period</option>
          <option>Previous year</option>
        </select>
      </div>
    </div>
  </div>
    <div class="p-4 flex justify-between py-4 border-t border-gray-300">
      <WhiteButton buttonText='Cancel'/>
      <Button Button='Apply'/>
    </div>
    </div>
</template>

<script>
import Calendar from "@/components/Calendar.vue";
import WhiteButton from "@/components/WhiteButton.vue";
import Button from "@/components/Button.vue";
  export default {
    name: 'AnalyticsTodayDrop',
    components: {
      Calendar,
      WhiteButton,
      Button
    },
    
  }
</script>

<style lang="scss" scoped>

</style>
