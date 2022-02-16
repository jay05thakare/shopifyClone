<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div class="flex flex-col">
    <div class="-my-2 sm:-mx-6 lg:-mx-8">
      <div class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
        <div
          class="divide-y divide-gray-200 border-b border-gray-200 shadow sm:rounded-lg"
        >
          <h2
            class="min-w-full bg-white py-3 px-4 text-base font-semibold text-dark-text"
          >
            Campaign
          </h2>
          <CampaignPageSearchAssets />
          <table class="min-w-full divide-y divide-gray-200">
            <thead
              class="bg-white text-left text-xs tracking-wider text-dark-text"
            >
              <tr>
                <th scope="col" class="px-4 py-3 font-semibold">Name</th>
                <th
                  scope="col"
                  class="px-4 py-3 text-right font-semibold lg:text-left"
                >
                  Status
                </th>
                <th
                  scope="col"
                  class="hidden px-4 py-3 font-semibold lg:table-cell"
                >
                  Cost
                </th>
                <th
                  scope="col"
                  class="hidden px-4 py-3 font-semibold lg:table-cell"
                >
                  Sales
                </th>
                <th
                  scope="col"
                  class="hidden px-4 py-3 font-semibold lg:table-cell"
                >
                  Sessions
                </th>
                <th scope="col" class="hidden px-4 py-3 lg:table-cell"></th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-200 bg-white">
              <tr v-for="recent in recentMarketing" :key="recent.email">
                <td class="truncate px-4 py-4 lg:space-y-0">
                  <div class="flex items-start">
                    <div class="mt-1 flex-shrink-0">
                      <img
                        class="h-4 w-4 rounded-full"
                        :src="recent.image"
                        alt=""
                      />
                    </div>
                    <div class="ml-2">
                      <h3 class="text-xs font-semibold text-gray-900">
                        {{ recent.name }}
                      </h3>
                      <div class="text-xs text-gray-500">
                        Created: {{ recent.createdDate }} at
                        {{ recent.createdTime }}
                      </div>
                    </div>
                  </div>
                  <div
                    :class="[
                      recent.status == 'Active' ? 'visible' : 'hidden',
                      'block pt-1.5 text-left text-xs font-semibold tracking-wider text-dark-text lg:hidden',
                    ]"
                  >
                    Sales
                  </div>
                  <div
                    :class="[
                      recent.status == 'Active' ? 'visible' : 'hidden',
                      'block py-1 text-left text-xs font-semibold tracking-wider text-dark-text lg:hidden',
                    ]"
                  >
                    Sessions
                  </div>
                </td>
                <td
                  class="hidden whitespace-nowrap px-4 py-4 align-top lg:table-cell"
                >
                  <span
                    :class="[
                      recent.status == 'Active'
                        ? 'bg-green-200'
                        : 'bg-cyan-200',
                      'inline-flex rounded-full px-2 text-xs font-semibold leading-5 text-green-800',
                    ]"
                  >
                    {{ recent.status }}
                  </span>
                </td>
                <td
                  class="hidden whitespace-nowrap px-4 py-4 align-top lg:table-cell"
                >
                  <div class="text-sm text-dark-text">₹{{ recent.cost }}</div>
                </td>
                <td
                  class="hidden whitespace-nowrap px-4 py-4 align-top lg:table-cell"
                >
                  <div class="text-sm text-dark-text">₹{{ recent.sales }}</div>
                </td>
                <td
                  class="hidden whitespace-nowrap px-4 py-4 align-top lg:table-cell"
                >
                  <div class="text-sm text-dark-text">
                    {{ recent.sessions }}
                  </div>
                </td>
                <td class="hidden py-4 align-top lg:table-cell">
                  <Menu as="div" class="relative ml-5 flex-shrink-0">
                    <div>
                      <MenuButton
                        class="flex items-center space-x-2 rounded p-2 hover:bg-gray-100"
                      >
                        <img
                          class="w-4"
                          src="@/assets/images/dots-horizontal.svg"
                          alt=""
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
                        class="focus:outline-none absolute right-0 z-10 mt-2 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5"
                      >
                        <MenuItem
                          v-for="item in userNavigation"
                          :key="item.name"
                          v-slot="{ active }"
                        >
                          <a
                            :href="item.href"
                            :class="[
                              active ? 'bg-gray-100' : '',
                              'block whitespace-nowrap py-2 px-5 text-sm text-gray-700',
                            ]"
                            >{{ item.name }}</a
                          >
                        </MenuItem>
                      </MenuItems>
                    </transition>
                  </Menu>
                </td>

                <td
                  class="flex flex-col items-end px-4 py-4 align-top lg:hidden"
                >
                  <a href="#" class=""
                    ><img
                      class="w-4"
                      src="@/assets/images/dots-horizontal.svg"
                      alt=""
                  /></a>
                  <span
                    :class="[
                      recent.status == 'Active'
                        ? 'bg-green-200'
                        : 'bg-cyan-200',
                      'inline-flex rounded-full px-2 text-xs font-semibold leading-5 text-green-800',
                    ]"
                  >
                    {{ recent.status }}
                  </span>
                  <div
                    :class="[
                      recent.status == 'Active' ? 'visible' : 'hidden',
                      'py-0.5 align-middle text-sm text-dark-text',
                    ]"
                  >
                    ₹{{ recent.sales }}
                  </div>
                  <div
                    :class="[
                      recent.status == 'Active' ? 'visible' : 'hidden',
                      'py-0 align-middle text-sm text-dark-text',
                    ]"
                  >
                    {{ recent.sessions }}
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/vue";
import CampaignPageSearchAssets from "./CampaignPageSearchAssets";

const recentMarketing = [
  {
    image: "/img/shopify-logo.58408198.png",
    name: "Abandoned checkout emails by Shopify",
    createdDate: "Jan 01",
    createdTime: "11:59 pm",
    status: "Active",
    cost: "0.00",
    sales: "0.00",
    sessions: "0",
  },
  {
    image: "/img/shopify-logo.58408198.png",
    name: "Abandoned checkout emails by Shopify",
    createdDate: "Jan 01",
    createdTime: "11:59 pm",
    status: "Draft",
    cost: "0.00",
    sales: "0.00",
    sessions: "0",
  },
  // More people...
];

const userNavigation = [
  { name: "Edit settings", href: "#" },
  { name: "View reports", href: "#" },
];

export default {
  name: "CampaignTable",
  components: {
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
    CampaignPageSearchAssets,
  },
  setup() {
    return {
      recentMarketing,
      userNavigation,
    };
  },
};
</script>
