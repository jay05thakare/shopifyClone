<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div class="flex flex-col">
    <div class="-my-2 sm:-mx-6 lg:-mx-8">
      <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
        <div class="shadow  border-b border-gray-200 sm:rounded-lg divide-y divide-gray-200">
          <h2 class=" font-semibold text-base text-dark-text min-w-full bg-white py-3 px-4">Campaign</h2>
          <Newside />
          <table class=" min-w-full divide-y divide-gray-200">
            <thead class="text-left text-xs text-dark-text tracking-wider bg-white">
              <tr>
                <th scope="col" class="  px-4 py-3 font-semibold">
                  Name
                </th>
                <th scope="col" class="text-right lg:text-left px-4 py-3 font-semibold">
                  Status
                </th>
                <th scope="col" class="hidden lg:table-cell px-4 py-3 font-semibold">
                  Cost
                </th>
                <th scope="col" class="hidden lg:table-cell px-4 py-3 font-semibold">
                  Sales
                </th>
                <th scope="col" class="hidden lg:table-cell px-4 py-3 font-semibold">
                  Sessions
                </th>
                <th scope="col" class="hidden lg:table-cell  px-4 py-3">
                </th>
              </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200">
              <tr v-for="recent in recentMarketing" :key="recent.email">
                <td class="px-4 py-4 truncate lg:space-y-0">
                  <div class="flex items-start">
                    <div class="flex-shrink-0 mt-1">
                      <img class="h-4 w-4 rounded-full" :src="recent.image" alt="" />
                    </div>
                    <div class="ml-2">
                      <h3 class="text-xs font-semibold text-gray-900">
                        {{ recent.name }}
                      </h3>
                      <div class="text-xs text-gray-500">
                        Created: {{ recent.createdDate }} at {{recent.createdTime}}
                      </div>
                    </div>
                  </div>
                  <div :class="[ recent.status=='Active'? 'visible':'hidden', 'block lg:hidden pt-1.5 text-left font-semibold text-xs text-dark-text tracking-wider']">Sales</div>
                  <div :class="[ recent.status=='Active'? 'visible':'hidden', 'block lg:hidden py-1 text-left font-semibold text-xs text-dark-text tracking-wider']">Sessions</div>
                </td>
                <td class="hidden lg:table-cell px-4 py-4 whitespace-nowrap align-top">
                  <span :class="[ recent.status=='Active'?  'bg-green-200':'bg-cyan-200', 'px-2 inline-flex text-xs leading-5 font-semibold rounded-full text-green-800']">
                    {{recent.status}}
                  </span>
                </td>
                <td class="hidden lg:table-cell px-4 py-4 whitespace-nowrap align-top">
                  <div class="text-sm text-dark-text">₹{{ recent.cost }}</div>
                </td>
                <td class="hidden lg:table-cell px-4 py-4 whitespace-nowrap align-top">
                  <div class="text-sm text-dark-text">₹{{ recent.sales }}</div>
                </td>
                <td class="hidden lg:table-cell px-4 py-4 whitespace-nowrap align-top ">
                  <div class="text-sm text-dark-text">{{ recent.sessions }}</div>
                </td>
                <td class="hidden lg:table-cell  py-4 align-top">
                  <Menu as="div" class="flex-shrink-0 relative ml-5">
                    <div>
                      <MenuButton class="hover:bg-gray-100 p-2 rounded flex items-center space-x-2">
                        <img class="w-4" src="@/assets/images/dots-horizontal.svg" alt="">
                      </MenuButton>
                    </div>
                    <transition enter-active-class="transition ease-out duration-100" enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100" leave-active-class="transition ease-in duration-75" leave-from-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95">
                      <MenuItems class="origin-top-right absolute z-10 right-0 mt-2  rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 py-1 focus:outline-none">
                        <MenuItem v-for="item in userNavigation" :key="item.name" v-slot="{ active }">
                          <a :href="item.href" :class="[active ? 'bg-gray-100' : '', 'block py-2 px-5 text-sm text-gray-700 whitespace-nowrap']">{{ item.name }}</a>
                        </MenuItem>
                      </MenuItems>
                    </transition>
                  </Menu>
                </td>

                <td class=" lg:hidden flex flex-col items-end px-4 py-4 align-top">
                  <a href="#" class=""><img class="w-4" src="@/assets/images/dots-horizontal.svg" alt=""></a>
                  <span :class="[ recent.status=='Active'?  'bg-green-200':'bg-cyan-200', 'px-2 inline-flex text-xs leading-5 font-semibold rounded-full text-green-800']">
                    {{recent.status}}
                  </span>
                  <div :class="[ recent.status=='Active'? 'visible':'hidden', 'py-0.5 align-middle text-sm text-dark-text']">₹{{ recent.sales }}</div>
                  <div :class="[ recent.status=='Active'? 'visible':'hidden', 'py-0 align-middle text-sm text-dark-text']">{{ recent.sessions }}</div>
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
import { Menu, MenuButton, MenuItem, MenuItems,} from '@headlessui/vue'
import Newside from './Newside'

const recentMarketing = [
  {
    image: '/img/shopify-logo.58408198.png',
    name: 'Abandoned checkout emails by Shopify',
    createdDate: 'Jan 01',
    createdTime: '11:59 pm',
    status:'Active',
    cost: '0.00',
    sales: '0.00',
    sessions: '0',
  },
  {
    image: '/img/shopify-logo.58408198.png',
    name: 'Abandoned checkout emails by Shopify',
    createdDate: 'Jan 01',
    createdTime: '11:59 pm',
    status:'Draft',
    cost: '0.00',
    sales: '0.00',
    sessions: '0',
  },
  // More people...
]

const userNavigation = [
  { name: 'Edit settings', href: '#' },
  { name: 'View reports', href: '#' },
]

export default {
  name:"CampaignTable",
  components:{Menu, 
  MenuButton, 
  MenuItem, 
  MenuItems,
  Newside},
  setup() {
    return {
      recentMarketing,
      userNavigation,
    }
  },
}
</script>