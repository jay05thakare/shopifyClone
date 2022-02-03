<template>
  <div class="sticky top-0 z-50 border-b border-gray-200">
  <Popover as="template" v-slot="{ open }">
      <header :class="[open ? 'fixed inset-0 z-40 overflow-y-auto' : '', 'bg-white shadow-sm lg:static lg:overflow-y-visible']">
        <div class=" mx-auto px-1">
          <div class="relative flex justify-between">
            <div class="flex md:absolute md:left-0 md:inset-y-0 lg:static py-2">
              <div class="flex-shrink-0 flex items-center hover:bg-gray-200 rounded w-40">
                <a href="#" class="flex items-center space-x-4 pl-2">
                  <img class="block h-6 w-auto" src="@/assets/images/shopify-logo.png" alt="Workflow" />
                  <span class="capitalize text-xs font-medium ">store name</span>
                </a>
              </div>
            </div>
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
            <div class="flex items-center md:absolute md:right-0 md:inset-y-0 lg:hidden">
              <!-- Mobile menu button -->
              <PopoverButton class="-mx-2 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-rose-500">
                <span class="sr-only">Open menu</span>
                <MenuIcon v-if="!open" class="block h-6 w-6" aria-hidden="true" />
                <XIcon v-else class="block h-6 w-6" aria-hidden="true" />
              </PopoverButton>
            </div>


            <div class="hidden lg:flex lg:items-center lg:justify-end xl:col-span-4">
              <!-- Profile dropdown -->
              <Menu as="div" class="flex-shrink-0 relative ml-5">
                <div>
                  <MenuButton class="hover:bg-gray-100 p-2 rounded flex items-center focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rose-500 space-x-2">
                    <img class="h-6 w-6 rounded-full" :src="user.profilePic" alt="" />
                    <span class="text-xs font-medium">{{user.name}}</span>
                  </MenuButton>
                </div>
                <transition enter-active-class="transition ease-out duration-100" enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100" leave-active-class="transition ease-in duration-75" leave-from-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95">
                  <MenuItems class="origin-top-right absolute z-10 right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 py-1 focus:outline-none">
                    <MenuItem v-for="item in userNavigation" :key="item.name" v-slot="{ active }">
                      <a :href="item.href" :class="[active ? 'bg-gray-100' : '', 'block py-2 px-4 text-sm text-gray-700']">{{ item.name }}</a>
                    </MenuItem>
                  </MenuItems>
                </transition>
              </Menu>
            </div>
          </div>
        </div>

        <PopoverPanel as="nav" class="lg:hidden" aria-label="Global">
          <div class="max-w-3xl mx-auto px-2 pt-2 pb-3 space-y-1 sm:px-4">
            <a v-for="item in navigation" :key="item.name" :href="item.href" :aria-current="item.current ? 'page' : undefined" :class="[item.current ? 'bg-gray-100 text-gray-900' : 'hover:bg-gray-50', 'block rounded-md py-2 px-3 text-base font-medium']">{{ item.name }}</a>
          </div>
          <div class="border-t border-gray-200 pt-4">
            <div class="max-w-3xl mx-auto px-4 flex items-center sm:px-6">
              <div class="flex-shrink-0">
                <img class="h-10 w-10 rounded-full" :src="user.imageUrl" alt="" />
              </div>
              <div class="ml-3">
                <div class="text-base font-medium text-gray-800">{{ user.name }}</div>
                <div class="text-sm font-medium text-gray-500">{{ user.email }}</div>
              </div>
              <button type="button" class="ml-auto flex-shrink-0 bg-white rounded-full p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rose-500">
                <span class="sr-only">View notifications</span>
                <BellIcon class="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div class="mt-3 max-w-3xl mx-auto px-2 space-y-1 sm:px-4">
              <a v-for="item in userNavigation" :key="item.name" :href="item.href" class="block rounded-md py-2 px-3 text-base font-medium text-gray-500 hover:bg-gray-50 hover:text-gray-900">{{ item.name }}</a>
            </div>
          </div>

          <div class="mt-6 max-w-3xl mx-auto px-4 sm:px-6">
            <a href="#" class="w-full flex items-center justify-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-rose-600 hover:bg-rose-700">
              New Post
            </a>

            <div class="mt-6 flex justify-center">
              <a href="#" class="text-base font-medium text-gray-900 hover:underline">
                Go Premium
              </a>
            </div>
          </div>
        </PopoverPanel>
      </header>
    </Popover>
    </div>
</template>

<script>
import { Menu, MenuButton, MenuItem, MenuItems, Popover, PopoverButton, PopoverPanel } from '@headlessui/vue'
import {
  SearchIcon,
} from '@heroicons/vue/solid'
import { BellIcon, MenuIcon, XIcon } from '@heroicons/vue/solid'

const user = {
  name: 'Jay Thakare',
  email: 'chelseahagon@example.com',
  profilePic: '@/assets/images/profile-pic.png',
}
const userNavigation = [
  { name: 'Your Profile', href: '#' },
  { name: 'Settings', href: '#' },
  { name: 'Sign out', href: '#' },
]

export default {
    name: 'HomeHeader',
  components: {
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
    Popover,
    PopoverButton,
    PopoverPanel,
    BellIcon,
    MenuIcon,
    SearchIcon,
    XIcon,
  },
  setup() {
    return {
      user,
      userNavigation,
    }
  },
}
</script>

