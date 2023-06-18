
<template>
    <MobileRegisterPage v-if="isMobine"></MobileRegisterPage>
    <PcRegisterPage v-else></PcRegisterPage>
    
</template>
  
<script>
import MobileRegisterPage from './platform/MobileRegisterPage.vue';
import PcRegisterPage from './platform/PcRegisterPage.vue';

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
        PcRegisterPage,
        MobileRegisterPage
    },
    methods: {
        
    }
}
</script>
  
<style scoped>

</style>
  