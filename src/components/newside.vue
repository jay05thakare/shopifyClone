<template>
    <div>
        <div class="min-w-0 flex-1 md:px-8 lg:px-0">
              <div class="flex items-center justify-center px-6 py-2 md:max-w-3xl md:mx-auto lg:max-w-none lg:mx-0 xl:px-0">
                <div class=" w-3/4 max-w-2xl">
                  <label for="search" class="sr-only text-xs">Search</label>
                  <div class="relative">
                    <div class="pointer-events-none absolute inset-y-0 left-0 pl-3 flex items-center">
                      <SearchIcon class="h-5 w-5 text-gray-500" aria-hidden="true" />
                    </div>
                    <input id="search" name="search" class="block w-full bg-gray-100 border border-gray-300 rounded py-2 pl-10 pr-3 text-xs font-normal placeholder-gray-500 focus:outline-none focus:text-gray-900 focus:placeholder-gray-400 focus:ring-1 focus:ring-rose-500 focus:border-rose-500 sm:text-xs" placeholder="Search" type="search" />
                  </div>
                </div>
              </div>
            </div>

    </div>
</template>

<script>
import {
  SearchIcon,
} from '@heroicons/vue/solid'
    export default {
        components: {
            SearchIcon
        },
    }
</script>

<style lang="scss" scoped>

</style>