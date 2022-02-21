<template>
  <div class="max-w-xl space-y-4 bg-white">
    <div class="flex flex-col p-4">
      <div>
        <label for="range" class="block bg-white text-sm text-dark-text"
          >Date range</label
        >
        <select
          id="range"
          name="range"
          class="mt-1 block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-sm"
        >
          <option selected="">Today</option>
          <option>Yesterday</option>
          <option>Last 7 days</option>
          <option>Last 30 days</option>
          <option>Last 90 days</option>
          <option>Last month</option>
          <option>Last year</option>
        </select>
      </div>
      <div class="mt-4">
        <div class="flex space-x-4 text-sm text-dark-text">
          <div class="w-1/2 min-w-0 flex-1">
            <label for="starting" class="">Starting</label>
            <input
              type="text"
              name="starting"
              id="starting"
              class="relative mt-1 block w-full rounded border-gray-300 bg-transparent py-2 focus:z-10 sm:text-sm"
              placeholder="2022-02-22"
            />
          </div>
          <div class="w-1/2 min-w-0 flex-1">
            <label for="ending" class="">Ending</label>
            <input
              type="text"
              name="ending"
              id="ending"
              class="relative mt-1 block w-full rounded border-gray-300 bg-transparent py-2 focus:z-10 sm:text-sm"
              placeholder="2022-02-22"
            />
          </div>
        </div>
      </div>
      <div class="mt-4 w-full">
        <Calendar />
      </div>
      <div class="space-y-4">
        <fieldset class="space-y-5">
          <legend class="sr-only">Notifications</legend>
          <div class="relative flex items-start">
            <div class="flex h-5 items-center">
              <input
                id="comments"
                aria-describedby="comments-description"
                name="comments"
                type="checkbox"
                class="h-5 w-5 rounded border-gray-300 text-blue-600"
                checked
              />
            </div>
            <div class="ml-2 text-sm">
              <label for="comments" class="text-dark-text"
                >Compare to previous dates</label
              >
            </div>
          </div>
        </fieldset>
        <div>
          <label for="compare" class="block bg-white text-sm text-dark-text"
            >Compare to</label
          >
          <select
            id="compare"
            name="compare"
            class="mt-1 block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-sm"
          >
            <option selected="">Previous period</option>
            <option>Previous year</option>
          </select>
        </div>
      </div>
    </div>
    <div class="flex justify-between border-t border-gray-300 p-4 py-4">
      <WhiteButton buttonText="Cancel" />
      <Button Button="Apply" />
    </div>
  </div>
</template>

<script>
import Calendar from "@/components/Calendar.vue";
import WhiteButton from "@/components/WhiteButton.vue";
import Button from "@/components/Button.vue";
export default {
  name: "AnalyticsTodayDrop",
  components: {
    Calendar,
    WhiteButton,
    Button,
  },
};
</script>

<style lang="scss" scoped></style>
