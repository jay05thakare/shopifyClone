<template>
  <div class="flex flex-1 flex-col md:pl-52">
    <main class="flex-1">
      <div class="space-y-4 md:py-5">
        <div class="mx-auto max-w-4xl px-4 sm:px-6 md:px-8">
          <div class="relative flex justify-between xs:static">
            <h1
              class="whitespace-nowrap pt-8 text-xl font-semibold text-dark-text xs:pt-0"
            >
              Marketing campaign
            </h1>
            <div class="absolute top-0 right-0 xs:static">
              <CreateCampaignButton />
            </div>
          </div>
          <div class="my-4">
            <CampaignBanner
              :title="banner.title"
              :description="banner.description"
              :buttonText="banner.buttonText"
              :image="banner.image"
            />
          </div>
          <div>
            <p class="text-base font-semibold text-dark-text">
              Results from marketing
              <span class="text-xs text-light-text"
                ><span class="whitespace-nowrap"
                  >{{ marketing.new }}, {{ marketing.newYear }}</span
                >
                compared to
                <span class="whitespace-nowrap"
                  >{{ marketing.last }}, {{ marketing.lastYear }}</span
                ></span
              >
            </p>
          </div>
        </div>
        <div
          class="mx-auto flex w-full max-w-4xl flex-col space-y-4 overflow-hidden xs:px-4 sm:px-6 md:px-8"
        >
          <!-- Replace with your content -->
          <div
            class="mt-2 grid grid-cols-1 gap-0 xs:grid-cols-2 xs:gap-3 lg:grid-cols-4"
          >
            <MarketingCard
              v-for="card in cards"
              :key="card.name"
              :name="card.name"
              :value="card.value"
              :amount="card.amount"
              :title="card.title"
              :position="card.position"
            />
          </div>
          <CampaignTable />
          <div class="mx-auto flex py-6 px-2 text-xxs xs:px-4">
            <div>
              <img
                class="mt-0.5 mr-3 w-4 xs:mr-1"
                src="@/assets/images/information.svg"
                alt=""
              />
            </div>
            <div>
              Learn more about &nbsp;
              <a class="whitespace-nowrap text-blue-600 underline" href="#">
                marketing campaigns
              </a>
            </div>
          </div>
          <!-- /End replace -->
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import CreateCampaignButton from "../components/CreateCampaignButton.vue";
import MarketingCard from "../components/MarketingCard.vue";
import CampaignBanner from "../components/CampaignBanner.vue";
import CampaignTable from "../components/CampaignTable.vue";

const cards = [
  { name: "Sessions", value: "0", title: "title", position: "top" },
  { name: "Orders", value: "0", title: "title", position: "bottom" },
  { name: "Sales", amount: "0.00", title: "title", position: "top" },
  { name: "Cost", amount: "0.00", title: "title", position: "bottom" },
];

const banner = {
  title: "Launch a one-click multichannel campaign",
  description:
    "Grow your audience, promote a sales event, or showcase new products across channels. Our customizable templates make it easy, with recommended sales channels, prefilled content, and scheduling.",
  buttonText: "View campaign templates",
  image:
    "https://cdn.shopify.com/shopifycloud/web/assets/v1/b16c70f8da6bd88abed3c80c605ce6ab.svg",
};

const marketing = {
  new: "Jan 1-Jan 30",
  newYear: "2022",
  last: "Dec 2-Dec 31",
  lastYear: "2021",
};

export default {
  name: "MarketingCampaign",
  components: {
    CreateCampaignButton,
    MarketingCard,
    CampaignTable,
    CampaignBanner,
  },
  setup() {
    return {
      marketing,
      banner,
      cards,
    };
  },
};
</script>

<style scoped></style>
