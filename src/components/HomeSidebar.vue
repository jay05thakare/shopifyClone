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
      <Dialog as="div" class="fixed inset-0 flex z-40 md:hidden" @close="sidebarOpen = false">
        <TransitionChild as="template" enter="transition-opacity ease-linear duration-300" enter-from="opacity-0" enter-to="opacity-100" leave="transition-opacity ease-linear duration-300" leave-from="opacity-100" leave-to="opacity-0">
          <DialogOverlay class="fixed inset-0 bg-gray-600 bg-opacity-75" />
        </TransitionChild>
        <TransitionChild as="template" enter="transition ease-in-out duration-300 transform" enter-from="-translate-x-full" enter-to="translate-x-0" leave="transition ease-in-out duration-300 transform" leave-from="translate-x-0" leave-to="-translate-x-full">
          <div class="relative flex-1 flex flex-col max-w-xs w-full bg-gray-100">
            <TransitionChild as="template" enter="ease-in-out duration-300" enter-from="opacity-0" enter-to="opacity-100" leave="ease-in-out duration-300" leave-from="opacity-100" leave-to="opacity-0">
              <div class="absolute top-0 right-0 -mr-12 pt-2">
                <button type="button" class="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" @click="sidebarOpen = false">
                  <span class="sr-only">Close sidebar</span>
                  <XIcon class="h-6 w-6 text-white" aria-hidden="true" />
                </button>
              </div>
            </TransitionChild>
            <div class="flex-1 h-0 pt-5 pb-4 overflow-y-auto">
              <div class="flex-shrink-0 flex items-center px-4">
                <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-logo-indigo-600-mark-gray-800-text.svg" alt="Workflow" />
              </div>
              <nav class="mt-5 px-2 space-y-1">
                <a v-for="item in navigation" :key="item.name" :href="item.href" :class="[item.current ? 'bg-gray-100 text-gray-900' : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900', 'group flex items-center px-2 py-2 text-base font-medium rounded-md']">
                  <component :is="item.icon" :class="[item.current ? 'text-gray-500' : 'text-gray-400 group-hover:text-gray-500', 'mr-4 flex-shrink-0 h-6 w-6']" aria-hidden="true" />
                  {{ item.name }}
                </a>
              </nav>
            </div>
            <div class="flex-shrink-0 flex border-t border-gray-200 p-4">
              <a href="#" class="flex-shrink-0 group block">
                <div class="flex items-center">
                  <div>
                    <img class="inline-block h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                  </div>
                  <div class="ml-3">
                    <p class="text-base font-medium text-gray-700 group-hover:text-gray-900">
                      Tom Cook
                    </p>
                    <p class="text-sm font-medium text-gray-500 group-hover:text-gray-700">
                      View profile
                    </p>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </TransitionChild>
        <div class="flex-shrink-0 w-14">
          <!-- Force sidebar to shrink to fit close icon -->
        </div>
      </Dialog>
    </TransitionRoot>

    <!-- Static sidebar for desktop -->
    <div class="hidden md:flex md:w-52 md:flex-col md:fixed md:inset-y-0">
      <!-- Sidebar component, swap this element with another sidebar if you like -->
      <div class="flex-1 flex flex-col min-h-0 border-r border-gray-200 bg-gray-100 shadow">
        <div class="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
          <nav class="mt-10 flex-1 bg-gray-100 space-y-1 md:pr-2 space-y-5">
            <div>
                <a v-for="item in navigation" :key="item.name" :href="item.href" :class="[item.current ? 'bg-bg-primary border-l-2 border-primary text-primary' : ' hover:bg-bg-hover text-dark-text', 'group flex items-center px-4 py-1 text-xs  font-semibold rounded-r']">
                <component :is="item.icon" :class="[item.current ? 'text-primary' : 'text-icon-primary', ' mr-3 flex-shrink-0 h-5 w-5']" aria-hidden="true" />
                {{ item.name }}
                </a>
            </div>
            <div class=" px-4 space-y-1">
                <div class="flex justify-between items-center">
                    <p class="uppercase text-xxs font-semibold text-light-text">sales channel</p>
                    <button class="w-5 h-5"><img src="@/assets/images/plus.svg" alt=""></button>
                </div>
                <div class="flex justify-between items-center ">
                    <a v-for="item in navigation2" :key="item.name" :href="item.href" :class="[item.current ? 'bg-bg-primary border-l-2 border-primary text-primary' : ' hover:bg-bg-hover text-dark-text', 'group flex items-center py-1 text-xs  font-semibold rounded-r']">
                    <component :is="item.icon" :class="[item.current ? 'text-primary' : 'text-icon-primary', ' mr-3 flex-shrink-0 h-5 w-5']" aria-hidden="true" />
                    {{ item.name }}
                    </a>
                    <a href=""><img class="w-4 h-4 mr-1" src="@/assets/images/eye.svg" alt=""></a>
                </div>
            </div>
            
          </nav>
        </div>

        <div class="flex-shrink-0 flex border-t border-gray-200 p-4">
          <a href="#" class="flex-shrink-0 w-full group block">
            <div class="flex items-center">
                <img class="w-5 h-5 text-icon-primary mr-3" src="@/assets/images/setting-gear.svg" alt="">
                <span class=" text-xs font-semibold text-dark-text">Settings</span>
            </div>
          </a>
        </div>
      </div>
    </div>
        <!-- shrinked sidebar for mobile size -->
      <div class="sticky top-0 z-50 md:hidden pl-1 pt-1 sm:pl-3 sm:pt-3 bg-gray-100">
        <button type="button" class="-ml-0.5 -mt-0.5 h-12 w-12 inline-flex items-center justify-center rounded-md text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500" @click="sidebarOpen = true">
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
import { ref } from 'vue'
import { Dialog, DialogOverlay, TransitionChild, TransitionRoot } from '@headlessui/vue'
import {
  CalendarIcon,
  ChartBarIcon,
  FolderIcon,
  HomeIcon,
  InboxIcon,
  MenuIcon,
  UsersIcon,
  XIcon,
  CogIcon,
  ArchiveIcon,
  
} from '@heroicons/vue/solid'

const navigation = [
  { name: 'Home', href: '#', icon: HomeIcon, current: true },
  { name: 'Orders', href: '#', icon: UsersIcon, current: false },
  { name: 'Products', href: '#', icon: FolderIcon, current: false },
  { name: 'Customer', href: '#', icon: CalendarIcon, current: false },
  { name: 'Analytics', href: '#', icon: InboxIcon, current: false },
  { name: 'Marketing', href: '#', icon: ChartBarIcon, current: false },
  { name: 'Discounts', href: '#', icon: ChartBarIcon, current: false },
  { name: 'Apps', href: '#', icon: ChartBarIcon, current: false },
]

const navigation2 = [
  { name: 'Online Store', href: '#', icon: ArchiveIcon, current: false },
]

export default {
    name: 'HomeSidebar',
  components: {
    Dialog,
    DialogOverlay,
    TransitionChild,
    TransitionRoot,
    MenuIcon,
    XIcon,
    CogIcon,
    ArchiveIcon,
  },
  setup() {
    const sidebarOpen = ref(false)

    return {
      navigation,
      navigation2,
      sidebarOpen,
    }
  },
}
</script>