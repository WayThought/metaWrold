
<template>
    <MobileLoginPage v-if="isMobine"></MobileLoginPage>
    <PcLoginPage v-else></PcLoginPage>
    
</template>
  
<script>
import MobileLoginPage from './platform/MobileLoginPage.vue';
import PcLoginPage from './platform/PcLoginPage.vue';

export default {
    name: 'LoginPage',
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
        MobileLoginPage,
        PcLoginPage
    },
    methods: {
        
    }
}
</script>
  
<style scoped>

</style>
  