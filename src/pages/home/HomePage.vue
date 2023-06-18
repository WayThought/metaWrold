<template>
    <MobileHomePage v-if="isMobine"></MobileHomePage>
    <PcHomePage v-else></PcHomePage>
</template>
  
<script>

import PcHomePage from './platform/PcHomePage.vue';
import MobileHomePage from './platform/MobileHomePage.vue';

export default {
    name: 'HomePage',
    props: {
        
    },
    data() {
        return {
            isMobine: this.utils.isMobine()
        }
    },
    created() {
        
    },
    components: {
        PcHomePage,
        MobileHomePage
    },
    methods: {
        
    }
}
</script>
  
<style scoped>

</style>
  