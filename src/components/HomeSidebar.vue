<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <!--
    This example requires updating your template:

    ```
    <html class="h-full bg-gray-100">
    <body class="h-full">
    ```
  -->
  <div>
    <TransitionRoot as="template" :show="sidebarOpen">
      <Dialog
        as="div"
        class="fixed inset-0 z-40 flex md:hidden"
        @close="sidebarOpen = false"
      >
        <TransitionChild
          as="template"
          enter="transition-opacity ease-linear duration-300"
          enter-from="opacity-0"
          enter-to="opacity-100"
          leave="transition-opacity ease-linear duration-300"
          leave-from="opacity-100"
          leave-to="opacity-0"
        >
          <DialogOverlay class="fixed inset-0 bg-gray-600 bg-opacity-75" />
        </TransitionChild>
        <TransitionChild
          as="template"
          enter="transition ease-in-out duration-300 transform"
          enter-from="-translate-x-full"
          enter-to="translate-x-0"
          leave="transition ease-in-out duration-300 transform"
          leave-from="translate-x-0"
          leave-to="-translate-x-full"
        >
          <div
            class="relative flex w-full max-w-xs flex-1 flex-col bg-gray-100"
          >
            <TransitionChild
              as="template"
              enter="ease-in-out duration-300"
              enter-from="opacity-0"
              enter-to="opacity-100"
              leave="ease-in-out duration-300"
              leave-from="opacity-100"
              leave-to="opacity-0"
            >
              <div class="absolute top-0 right-0 -mr-12 pt-2">
                <button
                  type="button"
                  class="focus:outline-none ml-1 flex h-10 w-10 items-center justify-center rounded-full focus:ring-2 focus:ring-inset focus:ring-white"
                  @click="sidebarOpen = false"
                >
                  <span class="sr-only">Close sidebar</span>
                  <XIcon class="h-6 w-6 text-white" aria-hidden="true" />
                </button>
              </div>
            </TransitionChild>
            <div class="h-0 flex-1 overflow-y-auto pt-5 pb-4">
              <div class="flex flex-shrink-0 items-center px-4">
                <img
                  class="h-8 w-auto"
                  src="https://tailwindui.com/img/logos/workflow-logo-indigo-600-mark-gray-800-text.svg"
                  alt="Workflow"
                />
              </div>
              <nav class="mt-5 space-y-1 px-2">
                <template v-for="item in navigation" :key="item.name">
                  <div v-if="!item.children">
                    <a
                      href="#"
                      :class="[
                        item.current
                          ? 'bg-gray-100 text-gray-900'
                          : 'bg-white text-gray-600 hover:bg-gray-50 hover:text-gray-900',
                        'group flex w-full items-center rounded-md py-2 pl-2 text-sm font-medium',
                      ]"
                    >
                      <component
                        :is="item.icon"
                        :class="[
                          item.current
                            ? 'text-gray-500'
                            : 'text-gray-400 group-hover:text-gray-500',
                          'mr-3 h-6 w-6 flex-shrink-0',
                        ]"
                        aria-hidden="true"
                      />
                      {{ item.name }}
                    </a>
                  </div>
                  <Disclosure
                    as="div"
                    v-else
                    class="space-y-1"
                    v-slot="{ open }"
                  >
                    <DisclosureButton
                      :class="[
                        item.current
                          ? 'bg-gray-100 text-gray-900'
                          : 'bg-white text-gray-600 hover:bg-gray-50 hover:text-gray-900',
                        'group focus:outline-none flex w-full items-center rounded-md py-2 pl-2 pr-1 text-left text-sm font-medium focus:ring-2 focus:ring-indigo-500',
                      ]"
                    >
                      <component
                        :is="item.icon"
                        class="mr-3 h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                        aria-hidden="true"
                      />
                      <span class="flex-1">
                        {{ item.name }}
                      </span>
                      <svg
                        :class="[
                          open ? 'rotate-90 text-gray-400' : 'text-gray-300',
                          'ml-3 h-5 w-5 flex-shrink-0 transform transition-colors duration-150 ease-in-out group-hover:text-gray-400',
                        ]"
                        viewBox="0 0 20 20"
                        aria-hidden="true"
                      >
                        <path d="M6 6L14 10L6 14V6Z" fill="currentColor" />
                      </svg>
                    </DisclosureButton>
                    <DisclosurePanel class="space-y-1">
                      <DisclosureButton
                        v-for="subItem in item.children"
                        :key="subItem.name"
                        as="a"
                        :href="subItem.href"
                        class="group flex w-full items-center rounded-md py-2 pl-11 pr-2 text-sm font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                      >
                        {{ subItem.name }}
                      </DisclosureButton>
                    </DisclosurePanel>
                  </Disclosure>
                </template>
              </nav>
            </div>
            <div class="flex flex-shrink-0 border-t border-gray-200 p-4">
              <a href="#" class="group block flex-shrink-0">
                <div class="flex items-center">
                  <div>
                    <img
                      class="inline-block h-10 w-10 rounded-full"
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                    />
                  </div>
                  <div class="ml-3">
                    <p
                      class="text-base font-medium text-gray-700 group-hover:text-gray-900"
                    >
                      Tom Cook
                    </p>
                    <p
                      class="text-sm font-medium text-gray-500 group-hover:text-gray-700"
                    >
                      View profile
                    </p>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </TransitionChild>
        <div class="w-14 flex-shrink-0">
          <!-- Force sidebar to shrink to fit close icon -->
        </div>
      </Dialog>
    </TransitionRoot>

    <!-- Static sidebar for desktop -->
    <div class="hidden md:fixed md:inset-y-0 md:flex md:w-52 md:flex-col">
      <!-- Sidebar component, swap this element with another sidebar if you like -->
      <div
        class="flex min-h-0 flex-1 flex-col border-r border-gray-200 bg-gray-100 shadow"
      >
        <div class="flex flex-1 flex-col overflow-y-auto pt-5 pb-4">
          <nav class="mt-10 flex-1 space-y-1 bg-gray-100 md:pr-2">
            <template
              v-for="item in navigation"
              :key="item.name"
              class="w-full"
            >
              <div v-if="!item.children" class="w-full">
                <router-link
                  :to="item.link"
                  :class="[
                    item.current
                      ? 'border-l-2 border-primary bg-bg-primary text-primary'
                      : ' text-dark-text hover:bg-bg-hover',
                    'group flex w-full items-center rounded-r px-4 py-1.5 text-sm font-semibold',
                  ]"
                >
                  <component
                    :is="item.icon"
                    :class="[
                      item.current ? 'text-primary' : 'text-icon-primary',
                      ' mr-3 h-5 w-5 flex-shrink-0',
                    ]"
                    aria-hidden="true"
                  />
                  {{ item.name }}
                </router-link>
              </div>
              <Disclosure
                as="router-link"
                v-else
                class="w-full space-y-1"
                v-slot="{ open }"
              >
                <router-link :to="item.link">
                  <DisclosureButton
                    :class="[
                      item.current
                        ? 'border-l-2 border-primary bg-bg-primary text-primary'
                        : ' text-dark-text hover:bg-bg-hover',
                      'group flex w-full items-center rounded-r px-4 py-1.5 text-left text-sm font-semibold',
                    ]"
                  >
                    <component
                      :is="item.icon"
                      :class="[
                        item.current ? 'text-primary' : 'text-icon-primary',
                        ' mr-3 h-5 w-5 flex-shrink-0',
                      ]"
                      aria-hidden="true"
                    />
                    <span class="flex-1">
                      {{ item.name }}
                    </span>
                    <svg
                      :class="[
                        open ? 'rotate-90 text-gray-400' : 'text-gray-300',
                        'ml-3 h-5 w-5 flex-shrink-0 transform opacity-0 transition-colors duration-150 ease-in-out group-hover:text-gray-400',
                      ]"
                      viewBox="0 0 20 20"
                      aria-hidden="true"
                    >
                      <path d="M6 6L14 10L6 14V6Z" fill="currentColor" />
                    </svg>
                  </DisclosureButton>
                </router-link>

                <DisclosurePanel class="pb-1">
                  <DisclosureButton
                    v-for="subItem in item.children"
                    :key="subItem.name"
                    as="div"
                    :class="[
                      item.current
                        ? 'border-l-2 border-primary bg-bg-primary text-primary'
                        : ' text-light-text hover:bg-bg-hover',
                      'group flex items-center rounded-r py-1.5 pl-12 text-sm font-medium',
                    ]"
                  >
                    <router-link :to="subItem.link">
                      {{ subItem.name }}
                    </router-link>
                  </DisclosureButton>
                </DisclosurePanel>
              </Disclosure>
            </template>

            <div class="space-y-1 px-4 pt-5">
              <div class="flex items-center justify-between">
                <p class="text-xs font-semibold uppercase text-light-text">
                  sales channel
                </p>
                <button class="h-5 w-5">
                  <img src="@/assets/images/plus.svg" alt="" />
                </button>
              </div>
              <div class="flex items-center justify-between">
                <a
                  v-for="item in navigation2"
                  :key="item.name"
                  :href="item.href"
                  :class="[
                    item.current
                      ? 'border-l-2 border-primary bg-bg-primary text-primary'
                      : ' text-dark-text hover:bg-bg-hover',
                    'group flex items-center rounded-r py-1  text-sm font-medium',
                  ]"
                >
                  <component
                    :is="item.icon"
                    :class="[
                      item.current ? 'text-primary' : 'text-icon-primary',
                      ' mr-3 h-5 w-5 flex-shrink-0',
                    ]"
                    aria-hidden="true"
                  />
                  {{ item.name }}
                </a>
                <a href=""
                  ><img
                    class="mr-1 h-4 w-4"
                    src="@/assets/images/eye.svg"
                    alt=""
                /></a>
              </div>
            </div>
          </nav>
        </div>

        <div class="flex flex-shrink-0 border-t border-gray-200 p-4">
          <a href="#" class="group block w-full flex-shrink-0">
            <div class="flex items-center">
              <img
                class="mr-3 h-5 w-5 text-icon-primary"
                src="@/assets/images/setting-gear.svg"
                alt=""
              />
              <span class="text-xs font-semibold text-dark-text">Settings</span>
            </div>
          </a>
        </div>
      </div>
    </div>
    <!-- shrinked sidebar for mobile size -->
    <div
      class="sticky top-0 z-40 bg-gray-100 pl-1 pt-1 sm:pl-3 sm:pt-3 md:hidden"
    >
      <button
        type="button"
        class="focus:outline-none -ml-0.5 -mt-0.5 inline-flex h-12 w-12 items-center justify-center rounded-md text-gray-500 hover:text-gray-900 focus:ring-2 focus:ring-inset focus:ring-indigo-500"
        @click="sidebarOpen = true"
      >
        <span class="sr-only">Open sidebar</span>
        <MenuIcon class="h-6 w-6" aria-hidden="true" />
      </button>
    </div>

    <!-- <div class="md:pl-64 flex flex-col flex-1">
      <main class="flex-1">
        <div class="py-6">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
            <h1 class="text-2xl font-semibold text-gray-900">Dashboard</h1>
          </div>
          <div class="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
            Replace with your content
            <div class="py-4">
              <div class="border-4 border-dashed border-gray-200 rounded-lg h-96" />
            </div>
            /End replace
          </div>
        </div>
      </main>
    </div> -->
  </div>
</template>

<script>
import { ref } from "vue";
import {
  Dialog,
  DialogOverlay,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  TransitionChild,
  TransitionRoot,
} from "@headlessui/vue";
import {
  // CalendarIcon,
  ChartBarIcon,
  FolderIcon,
  HomeIcon,
  InboxIcon,
  MenuIcon,
  UsersIcon,
  XIcon,
  CogIcon,
  ArchiveIcon,
} from "@heroicons/vue/solid";

const navigation = [
  { name: "Home", link: "/", icon: HomeIcon, current: true },
  {
    name: "Orders",
    link: "/allOrders",
    icon: UsersIcon,
    current: false,
    children: [
      { name: "All orders", link: "/allOrders" },
      { name: "Drafts", link: "/drafts" },
      { name: "Abandoned checkouts", link: "/abandonedCheckouts" },
    ],
  },
  {
    name: "Products",
    link: "/products",
    icon: FolderIcon,
    current: false,
    children: [
      { name: "All products", link: "/products" },
      // {name:'Inventory', link:'#'},
      // {name:'Transfers', link:'#'},
      // {name:'Collections', link:'#'},
      // {name:'Gift cards', link:'#'},
    ],
  },
  // {
  //   name: 'Customer',
  //   link: '#',
  //   icon: CalendarIcon,
  //   current: false,
  //   },
  {
    name: "Analytics",
    link: "/AnalyticsDashboard",
    icon: InboxIcon,
    current: false,
    children: [
      { name: "Reports", link: "/AnalyticsReport" },
      // {name:'Live View', link:'#'},
    ],
  },
  {
    name: "Marketing",
    link: "/marketing",
    icon: ChartBarIcon,
    current: false,
    children: [
      { name: "Overview", link: "/marketing" },
      { name: "Campaigns", link: "/marketingCampaign" },
      // {name:'Automations', link:'#'},
    ],
  },
  // {
  //   name: 'Discounts',
  //   link: '#',
  //   icon: ChartBarIcon,
  //   current: false,
  //   },
  // {
  //   name: 'Apps',
  //   link: '#',
  //   icon: ChartBarIcon,
  //   current: false,
  //   },
];

const navigation2 = [
  { name: "Online Store", link: "#", icon: ArchiveIcon, current: false },
];

export default {
  name: "HomeSidebar",
  components: {
    Dialog,
    DialogOverlay,
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    TransitionChild,
    TransitionRoot,
    MenuIcon,
    XIcon,
    CogIcon,
    ArchiveIcon,
  },
  setup() {
    const sidebarOpen = ref(false);

    return {
      navigation,
      navigation2,
      sidebarOpen,
    };
  },
};
</script>
