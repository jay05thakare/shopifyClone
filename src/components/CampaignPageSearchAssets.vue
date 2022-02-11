<template>
    <div class="bg-white w-full px-4">
        <div class="min-w-0 w-full flex-1 md:px-8 lg:px-0">
            <div class="flex w-full items-center justify-center px-6 py-2 md:max-w-3xl md:mx-auto lg:max-w-none lg:mx-0 xl:px-0 space-x-2">
            <div class="w-full">
                <label for="search" class="sr-only text-xs">Search</label>
                <div class="relative">
                <div class="pointer-events-none absolute inset-y-0 left-0 pl-3 flex items-center">
                    <SearchIcon class="h-5 w-5 text-gray-500" aria-hidden="true" />
                </div>
                <input id="search" name="search" class="block w-full bg-gray-100 border border-gray-300 rounded py-2 pl-10 pr-3 text-xs font-normal placeholder-gray-500 focus:outline-none focus:text-gray-900  sm:text-xs" placeholder="Search" type="search" />
                </div>
            </div>
            <Menu as="div" class="relative inline-block text-left">
                <div>
                <MenuButton class="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50  whitespace-nowrap">
                    Date Created
                    <ChevronDownIcon class="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
                </MenuButton>
                </div>

                <transition enter-active-class="transition ease-out duration-100" enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100" leave-active-class="transition ease-in duration-75" leave-from-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95">
                <MenuItems class="origin-top-right absolute right-0 mt-2 px-4  rounded-md shadow-lg bg-white ">
                    <div class="py-1">
                    <MenuItem v-slot="{ active }">
                        <div :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm whitespace-nowrap']">
                        <input  name="notification-method" type="radio" class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300" />
                        <label  class="ml-3 block text-sm font-medium text-gray-700">
                            In the last week
                        </label></div>
                    </MenuItem>
                    <MenuItem v-slot="{ active }">
                        <a href="#" :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm whitespace-nowrap']">In the last month</a>
                    </MenuItem>
                    <MenuItem v-slot="{ active }">
                        <a href="#" :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm whitespace-nowrap']">In the last three months</a>
                    </MenuItem>
                    <MenuItem v-slot="{ active }">
                        <a href="#" :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm whitespace-nowrap']">In the last year</a>
                    </MenuItem>
                    <form method="POST" action="#">
                        <MenuItem v-slot="{ active }">
                        <button type="submit" :class="[active ? 'bg-gray-100 text-gray-600' : 'text-gray-700', 'block w-full text-left px-4 py-2 text-xs']">
                            Clear
                        </button>
                        </MenuItem>
                    </form>
                    </div>
                </MenuItems>
                </transition>
            </Menu>
            <Menu as="div" class="relative inline-block text-left">
                <div>
                <MenuButton class="inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 ">
                    <SwitchVerticalIcon class="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
                    Sort
                </MenuButton>
                </div>

                <transition enter-active-class="transition ease-out duration-100" enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100" leave-active-class="transition ease-in duration-75" leave-from-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95">
                <MenuItems class="origin-top-right absolute right-0 mt-2 px-4 rounded-md shadow-lg bg-white ">
                    <div class="py-1">
                    <MenuItem v-slot="{ active }">
                        <a href="#" :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm whitespace-nowrap']">Recently Created</a>
                    </MenuItem>
                    <MenuItem v-slot="{ active }">
                        <a href="#" :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm whitespace-nowrap']">Title A-Z</a>
                    </MenuItem>
                    <MenuItem v-slot="{ active }">
                        <a href="#" :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm whitespace-nowrap']">Title Z-A</a>
                    </MenuItem>
                    </div>
                </MenuItems>
                </transition>
            </Menu>
            </div>
            
        </div>

            <!-- This example requires Tailwind CSS v2.0+ -->
        


    </div>
</template>

<script>
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
import { ChevronDownIcon,SwitchVerticalIcon } from '@heroicons/vue/solid'
import {
  SearchIcon,
} from '@heroicons/vue/solid'
    export default {
        name:'CampaignPageSearchAssets',
        components: {
            SearchIcon,
            SwitchVerticalIcon,
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
    ChevronDownIcon,
        },
    }
</script>

<style lang="scss" scoped>

</style>