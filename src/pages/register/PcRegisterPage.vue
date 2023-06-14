<template>
    <div class="container">
        <div class="bgImageContainer">
            <div class="content wrapper_01">
                <img class="tip" src="../../assets/pc_register_tip.png" alt="tip">
                <div class="registerContent">
                  
                  <el-input
                    v-model="input2"
                    class="w-50 m-2"
                    placeholder="Type something"
                    prefix-icon="el-icon-search"
                    >
                  </el-input>
                </div>
            </div>
        </div>
    </div>
</template>
  
  <script>
  // import { Search } from '@element-plus/icons-vue'

  export default {
    data() {
      return {
        input: "",
        input2: "",
        input4: ""
      }
    },
    name: 'PcRegisterPage',
    props: {
      title: String,
      desc: String
    },
    components: {

    }
  }
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  .container {
    /* position: relative; */
    width: 100%;
    height: 2080px;
    /* background-color: #05000F; */
    background-color: orange;
  }
  .bgImageContainer {
    width: 100%;
    height: 1080px;
    background-image: URL("../../assets/pc_login_bg.png");
    background-repeat: no-repeat;
    background-position: center;
  }
  .wrapper_01 {
    width: 1200px;
    margin: 0 auto;
  }
  .content {
    position: relative;
  }

  .tip {
    position: absolute;
    left: 0;
    top: 178px;
  }
  .registerContent {
    position: absolute;
    width: 403px;
    height: 556px;
    background-color: white;
    right: 0;
    top: 305px;
    border-radius: 8px;
  }
</style>
  