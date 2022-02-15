<template>
    <div class="bg-white w-full px-4 z-10">
        <div class="min-w-0 w-full flex-1 ">
            <div class="flex flex-col lg:flex-row w-full lg:items-center justify-center  py-2 md:mx-auto lg:mx-0 xl:px-0 space-y-2 lg:space-y-0 lg:space-x-2">
                <div class="w-full">
                    <label for="search" class="sr-only text-xs">Search</label>
                    <div class="relative">
                    <div class="pointer-events-none absolute inset-y-0 left-0 pl-3 flex items-center">
                        <SearchIcon class="h-5 w-5 text-gray-500" aria-hidden="true" />
                    </div>
                    <input id="search" name="search" class="block w-full bg-white border border-gray-300 rounded py-2 pl-10 pr-3 text-xs font-normal placeholder-gray-500 focus:outline-none focus:text-gray-900  sm:text-xs" placeholder="Filter orders" type="search" />
                    </div>
                </div>
                <div class="flex justify-between space-x-2">
                    <div class="flex border border-gray-300 rounded min-w-min divide-x">
                        <!-- filter -->
                        <Menu as="div" class="relative inline-block text-left">
                            <div>
                            <MenuButton class="inline-flex justify-center w-full shadow-sm px-4 py-1.5 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50  whitespace-nowrap">
                                <FilterIcon class="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
                                Filter
                            </MenuButton>
                            </div>

                            <transition enter-active-class="transition ease-out duration-100" enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100" leave-active-class="transition ease-in duration-75" leave-from-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95">
                            <MenuItems class="origin-top-right absolute -right-10 mt-2 min-w-min  rounded-md shadow-xl border border-gray-200 bg-white py-4">

                                <div class=" w-96 space-y-4">
                                    <p class=" whitespace-nowrap px-4">No filters applied to this view</p>
                                    <div class="flex items-center justify-between px-4">
                                        <div class="flex space-x-2">
                                            <!-- select filter -->
                                            <Menu as="div" class="relative inline-block text-left">
                                                <div>
                                                <MenuButton class="inline-flex justify-center items-center w-full shadow-sm px-4 py-2 bg-white text-sm font-medium text-dark-text hover:bg-gray-50  whitespace-nowrap border border-gray-300 rounded">
                                                    Select filter
                                                    <ChevronDownIcon class="-mr-2 ml-5 mt-1 h-4 w-4" />
                                                </MenuButton>
                                                </div>

                                                <transition enter-active-class="transition ease-out duration-100" enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100" leave-active-class="transition ease-in duration-75" leave-from-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95">
                                                <MenuItems class="origin-top-right absolute left-0 mt-2 rounded-md shadow-xl border border-gray-200 bg-white py-4 h-96 overflow-y-scroll px-2">
                                                    <div v-for="filter in filters" :key="filter" class="">
                                                    <MenuItem v-slot="{ active }">
                                                        <div :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', ' px-4 py-2.5 text-sm whitespace-nowrap flex items-center cursor-pointer']">
                                                        <label  class="block text-sm text-gray-600 cursor-pointer">
                                                            {{filter}}
                                                        </label></div>
                                                    </MenuItem>
                                                    </div>
                                                </MenuItems>
                                                </transition>
                                            </Menu>
                                            <!-- select filter end -->
                                            <!-- value -->
                                            <Menu as="div" class="relative inline-block text-left opacity-30">
                                                <div>
                                                <MenuButton class="inline-flex justify-center items-center w-full shadow-sm px-4 py-2 bg-white text-sm font-medium text-dark-text hover:bg-gray-50  whitespace-nowrap border border-gray-300 rounded cursor-not-allowed">
                                                    Select Value
                                                    <ChevronDownIcon class="-mr-2 ml-5 mt-1 h-4 w-4" />
                                                </MenuButton>
                                                </div>

                                                <transition enter-active-class="transition ease-out duration-100" enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100" leave-active-class="transition ease-in duration-75" leave-from-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95">
                                                <MenuItems class="origin-top-right absolute right-0 mt-2 rounded-md shadow-xl border border-gray-200 bg-white py-4 hidden">
                                                    <div class="py-1">
                                                    <MenuItem v-for="value in values" :key="value" v-slot="{ active }">
                                                        <div :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'mb-0.5 px-4 py-1.5 text-sm whitespace-nowrap flex items-center cursor-pointer']">
                                                        <input  name="notification-method" type="checkbox" class=" cursor-pointer mt-1 h-4 w-4 text-blue-600 border-2 border-gray-300 rounded" />
                                                        <label  class="ml-2 block text-sm text-gray-600 cursor-pointer">
                                                            {{value}}
                                                        </label></div>
                                                    </MenuItem>
                                                    </div>
                                                </MenuItems>
                                                </transition>
                                            </Menu>
                                            <!-- value end -->
                                        </div>
                                        <XIcon class="w-5 h-5 text-gray-300"/>
                                    </div>
                                <div class="px-4 pt-3 border-t border-gray-300">
                                    <button class="flex items-center whitespace-nowrap space-x-2 text-blue-600"><PlusIcon class="w-5 h-5 text"/><span>Filters</span></button>
                                </div>
                                </div>
                            </MenuItems>
                            </transition>
                        </Menu>
                        <!-- filter end -->
                        <!-- column -->
                        <Menu as="div" class="relative inline-block text-left">
                            <div>
                            <MenuButton class="inline-flex justify-center w-full shadow-sm px-4 py-1.5 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50  whitespace-nowrap">
                                <CollectionIcon class="-ml-1 mr-2 h-5 w-5" />
                                Column
                            </MenuButton>
                            </div>

                            <transition enter-active-class="transition ease-out duration-100" enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100" leave-active-class="transition ease-in duration-75" leave-from-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95">
                            <MenuItems class="origin-top-right absolute right-0 mt-2 rounded-md shadow-xl border border-gray-200 bg-white py-4">
                                <p class=" text-sm text-light-text px-4 pb-3">Columns</p>
                                <div class="py-1">
                                <MenuItem v-for="column in columns" :key="column" v-slot="{ active }">
                                    <div :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'mb-1 px-4 py-0.5 text-sm whitespace-nowrap flex items-center cursor-pointer']">
                                    <input  name="notification-method" type="checkbox" checked class=" cursor-pointer mt-1 h-4 w-4 text-blue-600 border-2 border-gray-300 rounded" />
                                    <label  class="ml-2 block text-sm text-gray-600 cursor-pointer">
                                        {{column}}
                                    </label></div>
                                </MenuItem>
                                </div>
                            </MenuItems>
                            </transition>
                        </Menu>
                        <!-- column end -->
                        <!-- sort -->
                        <Menu as="div" class="relative inline-block text-left">
                            <div>
                            <MenuButton class="inline-flex justify-center w-full shadow-sm px-4 py-1.5 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 ">
                                <SwitchVerticalIcon class="-ml-1 mr-2 h-5 w-5" />
                                Sort
                            </MenuButton>
                            </div>

                            <transition enter-active-class="transition ease-out duration-100" enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100" leave-active-class="transition ease-in duration-75" leave-from-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95">
                            <MenuItems class="origin-top-right absolute right-0 mt-2 rounded-md shadow-xl bg-white border border-gray-200 py-4">
                                <p class=" text-sm text-light-text px-4 pb-3">Sort by</p>
                                <div v-for="sort in sorts" :key="sort" class="">
                                <MenuItem v-slot="{ active }">
                                    <div :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', ' px-4 mb-0.5 py-0.5 text-sm whitespace-nowrap flex items-center']">
                                    <input  name="notification-method" type="radio" class="h-4 w-4 text-blue-600 border-2 border-gray-400 cursor-pointer" />
                                    <label  class="ml-2 block text-sm text-gray-700">
                                        {{sort}}
                                    </label></div>
                                </MenuItem>
                                </div>
                                <div class="px-4 pt-3 space-y-3 border-t border-gray-300">
                                    <button class="flex items-center whitespace-nowrap space-x-2"><ArrowUpIcon class="w-5 h-5 text"/><span>Lowest to highest</span></button>
                                    <button class="flex items-center whitespace-nowrap space-x-2"><ArrowDownIcon class="w-5 h-5 text"/><span>Highest to lowest</span></button>
                                </div>
                            </MenuItems>
                            </transition>
                        </Menu>
                        <!-- sort end -->
                    </div>
                    <div>
                        <Menu as="div" class="relative inline-block text-left">
                            <div>
                            <MenuButton class="inline-flex items-center px-2 py-1.5 border border-gray-300 shadow-sm text-sm font-medium rounded text-gray-700 bg-white hover:bg-gray-50">
                                •••
                            </MenuButton>
                            </div>

                            <transition enter-active-class="transition ease-out duration-100" enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100" leave-active-class="transition ease-in duration-75" leave-from-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95">
                            <MenuItems class="origin-top-right absolute right-0 mt-2 rounded-md shadow-xl bg-white border border-gray-200 py-4">
                                <div v-for="option in options" :key="option" class="">
                                <MenuItem v-slot="{ active }">
                                    <div :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', ' px-4 mb-1.5 py-0.5 text-sm whitespace-nowrap flex items-center']">
                                    <label  class="ml-2 block text-sm text-gray-700">
                                        {{option}}
                                    </label>
                                    </div>
                                </MenuItem>
                                </div>
                            </MenuItems>
                            </transition>
                        </Menu>
                    </div>
                </div>
                
            </div>
            
        </div>

            <!-- This example requires Tailwind CSS v2.0+ -->
        


    </div>
</template>

<script>
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
import { SwitchVerticalIcon, SearchIcon, ChevronDownIcon} from '@heroicons/vue/solid'
import { FilterIcon, CollectionIcon,ArrowUpIcon,ArrowDownIcon,XIcon,PlusIcon } from '@heroicons/vue/outline'

const values = ['Value 1', 'Value 2','Value 3', 'and so on' ]
const filters = ['Delivery method', 'Status','Payment status', 'Return status', 'Fullfillment status', 'Tagged with', 'Not tagged with', 'App', 'Chargeback and inquiry status', 'Risk level','Date', 'Credit card (Last four digits)' ]
const columns = ['Order', 'Date', 'Customer', 'Total', 'Payment status', 'Return status', 'Fullfillment status', 'Items', 'Delivery methods', 'Tags']
const sorts = ['Order number', 'Date', 'Customer name', 'Payment status','Fulfillment status', 'Total']
const options = ['Save as', 'Create view']

    export default {
        name:'AllOrdersPageSearchAssets',
        components: {
            SearchIcon,
            SwitchVerticalIcon,
            FilterIcon,
            CollectionIcon,
            ArrowUpIcon,
            ArrowDownIcon,
            XIcon,
            ChevronDownIcon,
            PlusIcon,
            // DotsHorizontalIcon,
            Menu,
            MenuButton,
            MenuItem,
            MenuItems,
        },
        setup(){
            return {
                values,
                filters,
                columns,
                sorts,
                options
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>