<template>
  <div>
        <button type="button" @click="showModal = true" class="inline-flex items-center px-3 py-2 border border-transparent text-xs font-medium rounded shadow-sm text-white bg-primary hover:bg-dark-primary">
            Create custom report
        </button>
        <transition name="fade" appear class="">
            <div class=" fixed inset-0 z-40 bg-black bg-opacity-30" v-if="showModal" @click="showModal = false"></div>
        </transition>
        <transition name="slide" appear>
            <div class="absolute z-40 left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2" v-if="showModal">
                <CreateReportPopup/>
            </div>
        </transition>
  </div>
</template>

<script>
import CreateReportPopup from './CreateReportPopup'
export default {
    name:'CreateReportButton',
    components: {
        CreateReportPopup,
    },
    data() {
        return {
            showModal: false,
        }
    },
}
</script>