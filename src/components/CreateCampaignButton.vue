<template>
  <div>
        <button type="button" @click="showModal = true" class="inline-flex items-center px-3 py-2 border border-transparent text-xs font-medium rounded shadow-sm text-white bg-primary hover:bg-dark-primary">
            Create campaign
        </button>
        <transition name="fade" appear class="">
            <div class=" fixed inset-0 z-30 bg-black bg-opacity-30" v-if="showModal" @click="showModal = false"></div>
        </transition>
        <transition name="slide" appear>
            <div class="absolute z-40 top-1/4 left-1/4" v-if="showModal">
                <CreateCampaignPopup/>
            </div>
        </transition>
  </div>
</template>

<script>
import CreateCampaignPopup from './CreateCampaignPopup'
export default {
    name:'CreateCampaignButton',
    components: {
        CreateCampaignPopup,
    },
    data() {
        return {
            showModal: false,
        }
    },
}
</script>