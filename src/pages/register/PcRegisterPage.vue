<template>
  <div class="container">
    <div class="bgImageContainer">
      <div class="content wrapper_01">
        <img class="tip" src="../../assets/pc_register_tip.png" alt="tip">
        <div class="registerContent">
          <el-input 
          v-model="input" 
          class="emial-input input-view"
          placeholder="Email Address">
            <template #prefix>
              <el-icon class="el-input__icon"><message /></el-icon>
            </template>
          </el-input>
          <el-input 
          v-model="input" 
          class="password-input input-view"
          placeholder="Password">
            <template #prefix>
              <el-icon class="el-input__icon"><lock /></el-icon>
            </template>
          </el-input>
          <el-input 
          v-model="input" 
          class="password-confirm-input input-view"
          placeholder="Password">
            <template #prefix>
              <el-icon class="el-input__icon"><lock /></el-icon>
            </template>
          </el-input>
        </div>
      </div>
    </div>
  </div>
</template>
  
<script>
export default {
  data() {
    return {
      input: ""
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
  
<style scoped>
.container {
  width: 100%;
  height: 2080px;
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
  width: 300px;
  height: 400px;
  padding: 50px;
  background-color: white;
  right: 0;
  top: 305px;
  border-radius: 8px;
}

.input-view {
  height: 55px;
}

.email-input {

}

.password-input {
  margin-top: 20px;
}

.password-confirm-input {
  margin-top: 20px;
}
</style>
  