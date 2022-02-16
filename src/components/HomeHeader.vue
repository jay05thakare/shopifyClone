<template>
  <div class="sticky top-0 z-50 border-b border-gray-200">
    <Popover as="template" v-slot="{ open }">
      <header
        :class="[
          open ? 'fixed inset-0 z-40 overflow-y-auto' : '',
          'bg-white shadow-sm lg:static lg:overflow-y-visible',
        ]"
      >
        <div class="mx-auto px-1">
          <div class="relative flex justify-between">
            <div class="flex py-2 md:absolute md:inset-y-0 md:left-0 lg:static">
              <div
                class="flex w-40 flex-shrink-0 items-center rounded hover:bg-gray-200"
              >
                <a href="#" class="flex items-center space-x-4 pl-2">
                  <img
                    class="block h-6 w-auto"
                    src="@/assets/images/shopify-logo.png"
                    alt="Workflow"
                  />
                  <span class="text-xs font-medium capitalize">store name</span>
                </a>
              </div>
            </div>
            <div class="min-w-0 flex-1 md:px-8 lg:px-0">
              <div
                class="flex items-center justify-center px-6 py-2 md:mx-auto md:max-w-3xl lg:mx-0 lg:max-w-none xl:px-0"
              >
                <div class="w-3/4 max-w-2xl">
                  <label for="search" class="sr-only text-xs">Search</label>
                  <div class="relative">
                    <div
                      class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3"
                    >
                      <SearchIcon
                        class="h-5 w-5 text-gray-500"
                        aria-hidden="true"
                      />
                    </div>
                    <input
                      id="search"
                      name="search"
                      class="focus:outline-none block w-full rounded border border-gray-300 bg-gray-100 py-2 pl-10 pr-3 text-xs font-normal placeholder-gray-500 focus:border-rose-500 focus:text-gray-900 focus:placeholder-gray-400 focus:ring-1 focus:ring-rose-500 sm:text-xs"
                      placeholder="Search"
                      type="search"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div
              class="flex items-center md:absolute md:inset-y-0 md:right-0 lg:hidden"
            >
              <!-- Mobile menu button -->
              <PopoverButton
                class="focus:outline-none -mx-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-rose-500"
              >
                <span class="sr-only">Open menu</span>
                <MenuIcon
                  v-if="!open"
                  class="block h-6 w-6"
                  aria-hidden="true"
                />
                <XIcon v-else class="block h-6 w-6" aria-hidden="true" />
              </PopoverButton>
            </div>

            <div
              class="hidden lg:flex lg:items-center lg:justify-end xl:col-span-4"
            >
              <!-- Profile dropdown -->
              <Menu as="div" class="relative ml-5 flex-shrink-0">
                <div>
                  <MenuButton
                    class="focus:outline-none flex items-center space-x-2 rounded p-2 hover:bg-gray-100 focus:ring-2 focus:ring-rose-500 focus:ring-offset-2"
                  >
                    <img
                      class="h-6 w-6 rounded-full"
                      :src="user.profilePic"
                      alt=""
                    />
                    <span class="text-xs font-medium">{{ user.name }}</span>
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
                    class="focus:outline-none absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5"
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
                          'block py-2 px-4 text-sm text-gray-700',
                        ]"
                        >{{ item.name }}</a
                      >
                    </MenuItem>
                  </MenuItems>
                </transition>
              </Menu>
            </div>
          </div>
        </div>

        <PopoverPanel as="nav" class="lg:hidden" aria-label="Global">
          <div class="mx-auto max-w-3xl space-y-1 px-2 pt-2 pb-3 sm:px-4">
            <a
              v-for="item in navigation"
              :key="item.name"
              :href="item.href"
              :aria-current="item.current ? 'page' : undefined"
              :class="[
                item.current ? 'bg-gray-100 text-gray-900' : 'hover:bg-gray-50',
                'block rounded-md py-2 px-3 text-base font-medium',
              ]"
              >{{ item.name }}</a
            >
          </div>
          <div class="border-t border-gray-200 pt-4">
            <div class="mx-auto flex max-w-3xl items-center px-4 sm:px-6">
              <div class="flex-shrink-0">
                <img
                  class="h-10 w-10 rounded-full"
                  :src="user.imageUrl"
                  alt=""
                />
              </div>
              <div class="ml-3">
                <div class="text-base font-medium text-gray-800">
                  {{ user.name }}
                </div>
                <div class="text-sm font-medium text-gray-500">
                  {{ user.email }}
                </div>
              </div>
              <button
                type="button"
                class="focus:outline-none ml-auto flex-shrink-0 rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:ring-2 focus:ring-rose-500 focus:ring-offset-2"
              >
                <span class="sr-only">View notifications</span>
                <BellIcon class="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div class="mx-auto mt-3 max-w-3xl space-y-1 px-2 sm:px-4">
              <a
                v-for="item in userNavigation"
                :key="item.name"
                :href="item.href"
                class="block rounded-md py-2 px-3 text-base font-medium text-gray-500 hover:bg-gray-50 hover:text-gray-900"
                >{{ item.name }}</a
              >
            </div>
          </div>

          <div class="mx-auto mt-6 max-w-3xl px-4 sm:px-6">
            <a
              href="#"
              class="flex w-full items-center justify-center rounded-md border border-transparent bg-rose-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-rose-700"
            >
              New Post
            </a>

            <div class="mt-6 flex justify-center">
              <a
                href="#"
                class="text-base font-medium text-gray-900 hover:underline"
              >
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
import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Popover,
  PopoverButton,
  PopoverPanel,
} from "@headlessui/vue";
import { SearchIcon } from "@heroicons/vue/solid";
import { BellIcon, MenuIcon, XIcon } from "@heroicons/vue/solid";

const user = {
  name: "Jay Thakare",
  email: "chelseahagon@example.com",
  profilePic: "@/assets/images/profile-pic.png",
};
const userNavigation = [
  { name: "Your Profile", href: "#" },
  { name: "Settings", href: "#" },
  { name: "Sign out", href: "#" },
];

export default {
  name: "HomeHeader",
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
    };
  },
};
</script>
