<template>
  <!-- <div class="pl-52 bg-black bg-opacity-30 w-full h-screen text-white flex justify-center items-center"> -->
  <div
    class="relative w-full max-w-xl overflow-hidden rounded-lg bg-white text-black shadow"
  >
    <div
      class="flex items-center justify-between border-b border-gray-300 px-5 py-4"
    >
      <h2 class="text-xl">Create custom report</h2>
      <button class="w-6 rounded hover:bg-gray-200">
        <svg
          @click="$emit('close')"
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6 text-light-text hover:text-black"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
            clip-rule="evenodd"
          />
        </svg>
      </button>
    </div>

    <div class="flex h-80 max-h-80 overflow-hidden">
      <!-- Main content -->
      <div class="flex flex-1 items-stretch overflow-y-auto">
        <main class="flex-1">
          <div class="mx-auto max-w-7xl px-2">
            <!-- content here -->
            <div class="space-y-4 px-4 py-4 text-sm">
              <p class="text-dark-text">
                Start by selecting a report template. You can edit columns and
                filters after you create your custom report.
              </p>
              <div class="">
                <label for="report-name" class="block text-sm text-dark-text">
                  Report name
                </label>
                <div class="mt-1">
                  <input
                    type="text"
                    name="report-name"
                    id="report-name"
                    autocomplete="given-name"
                    class="block w-full rounded-md border-gray-400 text-sm"
                  />
                </div>
              </div>
              <div>
                <fieldset>
                  <div>
                    <legend class="font-medium text-dark-text">
                      Report template
                    </legend>
                  </div>
                  <div class="mt-4 space-y-4">
                    <div class="flex items-center">
                      <input
                        id="push-everything"
                        name="push-notifications"
                        type="radio"
                        class="h-4 w-4 border-gray-300 text-blue-600 ring-1 ring-gray-500 focus:ring-blue-500"
                        checked
                      />
                      <label
                        for="push-everything"
                        class="ml-3 block text-sm text-dark-text"
                      >
                        Sales over time
                      </label>
                    </div>
                    <div class="flex items-center">
                      <input
                        id="push-email"
                        name="push-notifications"
                        type="radio"
                        class="h-4 w-4 border-gray-300 text-blue-600 ring-1 ring-gray-500 focus:ring-blue-500"
                      />
                      <label
                        for="push-email"
                        class="ml-3 block text-sm text-dark-text"
                        >Payments by method</label
                      >
                    </div>
                    <div class="flex items-center">
                      <input
                        id="push-nothing"
                        name="push-notifications"
                        type="radio"
                        class="h-4 w-4 border-gray-300 text-blue-600 ring-1 ring-gray-500 focus:ring-blue-500"
                      />
                      <label
                        for="push-nothing"
                        class="ml-3 block text-sm text-dark-text"
                        >Taxes collected over time</label
                      >
                    </div>
                    <div class="flex items-center">
                      <input
                        id="push-nothing"
                        name="push-notifications"
                        type="radio"
                        class="h-4 w-4 border-gray-300 text-blue-600 ring-1 ring-gray-500 focus:ring-blue-500"
                      />
                      <label
                        for="push-nothing"
                        class="ml-3 block text-sm text-dark-text"
                        >Sessions over time</label
                      >
                    </div>
                    <div class="flex items-center">
                      <input
                        id="push-nothing"
                        name="push-notifications"
                        type="radio"
                        class="h-4 w-4 border-gray-300 text-blue-600 ring-1 ring-gray-500 focus:ring-blue-500"
                      />
                      <label
                        for="push-nothing"
                        class="ml-3 block text-sm text-dark-text"
                        >Customers by order value</label
                      >
                    </div>
                  </div>
                </fieldset>
              </div>
            </div>
            <!-- content ends -->
          </div>
        </main>
      </div>
    </div>

    <div
      class="flex justify-end space-x-2 border-t border-gray-300 p-4 text-sm"
    >
      <button
        class="rounded border border-gray-300 py-2 px-4 font-medium"
        @click="$emit('close')"
      >
        Cancel
      </button>
      <button
        class="rounded border border-gray-300 bg-primary py-2 px-4 font-medium text-white"
      >
        Create custom report
      </button>
    </div>
  </div>
  <!-- </div> -->
</template>

<script>
import { ref } from "vue";
import {} from "@heroicons/vue/outline";
import { MailIcon } from "@heroicons/vue/solid";

const files = [
  {
    name: "Shopify Email",
    icon: MailIcon,
    features:
      "Shopify Email • 2,500 free emails per month; $1 per 1,000 additional emails • Campaign",
    description:
      "Create emails to share promotions and updates with customers.",
    current: true,
  },
  {
    name: "Facebook audience building ad",
    icon: MailIcon,
    features: "Facebook • Paid • Campaign",
    description:
      "Find new customers by reaching people who are interested in products like yours.",
    current: true,
  },
  {
    name: "Facebook dynamic retargeting ad",
    icon: MailIcon,
    features: "Shopify Email • Paid • Campaign",
    description:
      "Promote products to visitors who have expressed interest on your store.",
    current: true,
  },
  {
    name: "Facebook page post",
    icon: MailIcon,
    features: "Shopify Email • Free • Campaign",
    description: "Promote products to your existing audience on Facebook.",
    current: true,
  },
  {
    name: "Snapchat brand awareness ad",
    icon: MailIcon,
    features: "Snapchat Ads • Paid • Campaign",
    description: "Promote products to audiences on Snapchat.",
    current: true,
  },
  {
    name: "Snapchat dynamic shopping ad",
    icon: MailIcon,
    features: "Snapchat Ads • Paid • Campaign",
    description:
      "Reach new audiences or retarget existing audiences with shoppable product ads.",
    current: true,
  },
  // More files...
];

export default {
  name: "CreateCampaignPopup",
  components: {
    // ChevronRightIcon,
    //   XIcon,
  },
  data() {
    return {
      tabs: [
        { name: "All", href: "#", current: true },
        { name: "Ads", href: "#", current: false },
        { name: "Email", href: "#", current: false },
        { name: "Social Post", href: "#", current: false },
        { name: "SMS", href: "#", current: false },
      ],
    };
  },
  setup() {
    const mobileMenuOpen = ref(false);

    return {
      //   tabs,
      files,
      mobileMenuOpen,
    };
  },
  methods: {
    // selectTab(tab) {
    //   this.tabs.forEach(t => (t.current = false))
    //   tab.current = true
    // },
    // toggleMobileMenu() {
    //   this.mobileMenuOpen = !this.mobileMenuOpen
    // },
    selectTab: function (selectedTab) {
      this.tabs.forEach((tab) => {
        tab.current = tab.name == selectedTab.name;
      });
    },
  },
};
</script>
