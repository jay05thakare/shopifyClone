<template>
  <div class="z-10 w-full bg-white px-4">
    <div class="w-full min-w-0 flex-1">
      <div
        class="flex w-full flex-col justify-center space-y-2 py-2 md:mx-auto lg:mx-0 lg:flex-row lg:items-center lg:space-y-0 lg:space-x-2 xl:px-0"
      >
        <div class="w-full">
          <label for="search" class="sr-only text-xs">Search</label>
          <div class="relative">
            <div
              class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3"
            >
              <SearchIcon class="h-5 w-5 text-gray-500" aria-hidden="true" />
            </div>
            <input
              id="search"
              name="search"
              class="focus:outline-none block w-full rounded border border-gray-300 bg-white py-2 pl-10 pr-3 text-xs font-normal placeholder-gray-500 focus:text-gray-900 sm:text-xs"
              placeholder="Filter orders"
              type="search"
            />
          </div>
        </div>
        <div class="flex justify-between space-x-2">
          <div class="flex min-w-min divide-x rounded border border-gray-300">
            <!-- filter -->
            <Menu as="div" class="relative inline-block text-left">
              <div>
                <MenuButton
                  class="inline-flex w-full justify-center whitespace-nowrap bg-white px-4 py-1.5 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50"
                >
                  <FilterIcon class="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
                  Filter
                </MenuButton>
              </div>

              <transition
                enter-active-class="transition ease-out duration-100"
                enter-from-class="transform opacity-0 scale-95"
                enter-to-class="transform opacity-100 scale-100"
                leave-active-class="transition ease-in duration-75"
                leave-from-class="transform opacity-100 scale-100"
                leave-to-class="transform opacity-0 scale-95"
              >
                <MenuItems
                  class="absolute -right-10 mt-2 min-w-min origin-top-right rounded-md border border-gray-200 bg-white py-4 shadow-xl"
                >
                  <div class="w-96 space-y-4">
                    <p class="whitespace-nowrap px-4">
                      No filters applied to this view
                    </p>
                    <div class="flex items-center justify-between px-4">
                      <div class="flex space-x-2">
                        <!-- select filter -->
                        <Menu as="div" class="relative inline-block text-left">
                          <div>
                            <MenuButton
                              class="inline-flex w-full items-center justify-center whitespace-nowrap rounded border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-dark-text shadow-sm hover:bg-gray-50"
                            >
                              Select filter
                              <ChevronDownIcon
                                class="-mr-2 ml-5 mt-1 h-4 w-4"
                              />
                            </MenuButton>
                          </div>

                          <transition
                            enter-active-class="transition ease-out duration-100"
                            enter-from-class="transform opacity-0 scale-95"
                            enter-to-class="transform opacity-100 scale-100"
                            leave-active-class="transition ease-in duration-75"
                            leave-from-class="transform opacity-100 scale-100"
                            leave-to-class="transform opacity-0 scale-95"
                          >
                            <MenuItems
                              class="absolute left-0 mt-2 h-96 origin-top-right overflow-y-scroll rounded-md border border-gray-200 bg-white py-4 px-2 shadow-xl"
                            >
                              <div
                                v-for="filter in filters"
                                :key="filter"
                                class=""
                              >
                                <MenuItem v-slot="{ active }">
                                  <div
                                    :class="[
                                      active
                                        ? 'bg-gray-100 text-gray-900'
                                        : 'text-gray-700',
                                      ' flex cursor-pointer items-center whitespace-nowrap px-4 py-2.5 text-sm',
                                    ]"
                                  >
                                    <label
                                      class="block cursor-pointer text-sm text-gray-600"
                                    >
                                      {{ filter }}
                                    </label>
                                  </div>
                                </MenuItem>
                              </div>
                            </MenuItems>
                          </transition>
                        </Menu>
                        <!-- select filter end -->
                        <!-- value -->
                        <Menu
                          as="div"
                          class="relative inline-block text-left opacity-30"
                        >
                          <div>
                            <MenuButton
                              class="inline-flex w-full cursor-not-allowed items-center justify-center whitespace-nowrap rounded border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-dark-text shadow-sm hover:bg-gray-50"
                            >
                              Select Value
                              <ChevronDownIcon
                                class="-mr-2 ml-5 mt-1 h-4 w-4"
                              />
                            </MenuButton>
                          </div>

                          <transition
                            enter-active-class="transition ease-out duration-100"
                            enter-from-class="transform opacity-0 scale-95"
                            enter-to-class="transform opacity-100 scale-100"
                            leave-active-class="transition ease-in duration-75"
                            leave-from-class="transform opacity-100 scale-100"
                            leave-to-class="transform opacity-0 scale-95"
                          >
                            <MenuItems
                              class="absolute right-0 mt-2 hidden origin-top-right rounded-md border border-gray-200 bg-white py-4 shadow-xl"
                            >
                              <div class="py-1">
                                <MenuItem
                                  v-for="value in values"
                                  :key="value"
                                  v-slot="{ active }"
                                >
                                  <div
                                    :class="[
                                      active
                                        ? 'bg-gray-100 text-gray-900'
                                        : 'text-gray-700',
                                      'mb-0.5 flex cursor-pointer items-center whitespace-nowrap px-4 py-1.5 text-sm',
                                    ]"
                                  >
                                    <input
                                      name="notification-method"
                                      type="checkbox"
                                      class="mt-1 h-4 w-4 cursor-pointer rounded border-2 border-gray-300 text-blue-600"
                                    />
                                    <label
                                      class="ml-2 block cursor-pointer text-sm text-gray-600"
                                    >
                                      {{ value }}
                                    </label>
                                  </div>
                                </MenuItem>
                              </div>
                            </MenuItems>
                          </transition>
                        </Menu>
                        <!-- value end -->
                      </div>
                      <XIcon class="h-5 w-5 text-gray-300" />
                    </div>
                    <div class="border-t border-gray-300 px-4 pt-3">
                      <button
                        class="flex items-center space-x-2 whitespace-nowrap text-blue-600"
                      >
                        <PlusIcon class="text h-5 w-5" /><span>Filters</span>
                      </button>
                    </div>
                  </div>
                </MenuItems>
              </transition>
            </Menu>
            <!-- filter end -->
            <!-- column -->
            <Menu as="div" class="relative inline-block text-left">
              <div>
                <MenuButton
                  class="inline-flex w-full justify-center whitespace-nowrap bg-white px-4 py-1.5 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50"
                >
                  <CollectionIcon class="-ml-1 mr-2 h-5 w-5" />
                  Column
                </MenuButton>
              </div>

              <transition
                enter-active-class="transition ease-out duration-100"
                enter-from-class="transform opacity-0 scale-95"
                enter-to-class="transform opacity-100 scale-100"
                leave-active-class="transition ease-in duration-75"
                leave-from-class="transform opacity-100 scale-100"
                leave-to-class="transform opacity-0 scale-95"
              >
                <MenuItems
                  class="absolute right-0 mt-2 origin-top-right rounded-md border border-gray-200 bg-white py-4 shadow-xl"
                >
                  <p class="px-4 pb-3 text-sm text-light-text">Columns</p>
                  <div class="py-1">
                    <MenuItem
                      v-for="column in columns"
                      :key="column"
                      v-slot="{ active }"
                    >
                      <div
                        :class="[
                          active
                            ? 'bg-gray-100 text-gray-900'
                            : 'text-gray-700',
                          'mb-1 flex cursor-pointer items-center whitespace-nowrap px-4 py-0.5 text-sm',
                        ]"
                      >
                        <input
                          name="notification-method"
                          type="checkbox"
                          checked
                          class="mt-1 h-4 w-4 cursor-pointer rounded border-2 border-gray-300 text-blue-600"
                        />
                        <label
                          class="ml-2 block cursor-pointer text-sm text-gray-600"
                        >
                          {{ column }}
                        </label>
                      </div>
                    </MenuItem>
                  </div>
                </MenuItems>
              </transition>
            </Menu>
            <!-- column end -->
            <!-- sort -->
            <Menu as="div" class="relative inline-block text-left">
              <div>
                <MenuButton
                  class="inline-flex w-full justify-center bg-white px-4 py-1.5 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50"
                >
                  <SwitchVerticalIcon class="-ml-1 mr-2 h-5 w-5" />
                  Sort
                </MenuButton>
              </div>

              <transition
                enter-active-class="transition ease-out duration-100"
                enter-from-class="transform opacity-0 scale-95"
                enter-to-class="transform opacity-100 scale-100"
                leave-active-class="transition ease-in duration-75"
                leave-from-class="transform opacity-100 scale-100"
                leave-to-class="transform opacity-0 scale-95"
              >
                <MenuItems
                  class="absolute right-0 mt-2 origin-top-right rounded-md border border-gray-200 bg-white py-4 shadow-xl"
                >
                  <p class="px-4 pb-3 text-sm text-light-text">Sort by</p>
                  <div v-for="sort in sorts" :key="sort" class="">
                    <MenuItem v-slot="{ active }">
                      <div
                        :class="[
                          active
                            ? 'bg-gray-100 text-gray-900'
                            : 'text-gray-700',
                          ' mb-0.5 flex items-center whitespace-nowrap px-4 py-0.5 text-sm',
                        ]"
                      >
                        <input
                          name="notification-method"
                          type="radio"
                          class="h-4 w-4 cursor-pointer border-2 border-gray-400 text-blue-600"
                        />
                        <label class="ml-2 block text-sm text-gray-700">
                          {{ sort }}
                        </label>
                      </div>
                    </MenuItem>
                  </div>
                  <div class="space-y-3 border-t border-gray-300 px-4 pt-3">
                    <button
                      class="flex items-center space-x-2 whitespace-nowrap"
                    >
                      <ArrowUpIcon class="text h-5 w-5" /><span
                        >Lowest to highest</span
                      >
                    </button>
                    <button
                      class="flex items-center space-x-2 whitespace-nowrap"
                    >
                      <ArrowDownIcon class="text h-5 w-5" /><span
                        >Highest to lowest</span
                      >
                    </button>
                  </div>
                </MenuItems>
              </transition>
            </Menu>
            <!-- sort end -->
          </div>
          <div>
            <Menu as="div" class="relative inline-block text-left">
              <div>
                <MenuButton
                  class="inline-flex items-center rounded border border-gray-300 bg-white px-2 py-1.5 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50"
                >
                  •••
                </MenuButton>
              </div>

              <transition
                enter-active-class="transition ease-out duration-100"
                enter-from-class="transform opacity-0 scale-95"
                enter-to-class="transform opacity-100 scale-100"
                leave-active-class="transition ease-in duration-75"
                leave-from-class="transform opacity-100 scale-100"
                leave-to-class="transform opacity-0 scale-95"
              >
                <MenuItems
                  class="absolute right-0 mt-2 origin-top-right rounded-md border border-gray-200 bg-white py-4 shadow-xl"
                >
                  <div v-for="option in options" :key="option" class="">
                    <MenuItem v-slot="{ active }">
                      <div
                        :class="[
                          active
                            ? 'bg-gray-100 text-gray-900'
                            : 'text-gray-700',
                          ' mb-1.5 flex items-center whitespace-nowrap px-4 py-0.5 text-sm',
                        ]"
                      >
                        <label class="ml-2 block text-sm text-gray-700">
                          {{ option }}
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
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/vue";
import {
  SwitchVerticalIcon,
  SearchIcon,
  ChevronDownIcon,
} from "@heroicons/vue/solid";
import {
  FilterIcon,
  CollectionIcon,
  ArrowUpIcon,
  ArrowDownIcon,
  XIcon,
  PlusIcon,
} from "@heroicons/vue/outline";

const values = ["Value 1", "Value 2", "Value 3", "and so on"];
const filters = [
  "Delivery method",
  "Status",
  "Payment status",
  "Return status",
  "Fullfillment status",
  "Tagged with",
  "Not tagged with",
  "App",
  "Chargeback and inquiry status",
  "Risk level",
  "Date",
  "Credit card (Last four digits)",
];
const columns = [
  "Order",
  "Date",
  "Customer",
  "Total",
  "Payment status",
  "Return status",
  "Fullfillment status",
  "Items",
  "Delivery methods",
  "Tags",
];
const sorts = [
  "Order number",
  "Date",
  "Customer name",
  "Payment status",
  "Fulfillment status",
  "Total",
];
const options = ["Save as", "Create view"];

export default {
  name: "AllOrdersPageSearchAssets",
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
  setup() {
    return {
      values,
      filters,
      columns,
      sorts,
      options,
    };
  },
};
</script>

<style lang="scss" scoped></style>
