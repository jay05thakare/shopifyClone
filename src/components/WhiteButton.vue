<template>
    <button type="button" class="inline-flex items-center px-4 py-1.5 border border-gray-300 shadow-sm text-sm font-medium rounded text-gray-700 bg-white hover:bg-gray-50">
    {{buttonText}}
  </button>
</template>

<script>
    export default {
        name: 'WhiteButton',
        props: ['buttonText'],
    }
</script>