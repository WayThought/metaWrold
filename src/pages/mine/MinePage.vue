
<template>
    <MobileMinePage v-if="isMobine"></MobileMinePage>
    <PcMinePage v-else></PcMinePage>
    
</template>
  
<script>
import PcMinePage from './platform/PcMinePage.vue';
import MobileMinePage from './platform/MobileMinePage.vue';

export default {
    name: 'RegisterPage',
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
        PcMinePage,
        MobileMinePage
    },
    methods: {
        
    }
}
</script>
  
<style scoped>

</style>
  