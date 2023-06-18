<template>
    <div class="container">
        <div class="stepRadioItem">{{ number }}</div>
        <div class="top_vertical_line dashed" v-if="number > 1"></div>
        <div class="bottom_vertical_line dashed"></div> 
        <div class="titleIcon">{{ title }}</div>
        <img class="line" src="../assets/icon_mobile_step_line.png" alt="">
        <div class="desc">{{ desc }}</div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'MobileStepItem',
    props: {
      number: String,
      title: String,
      desc: String
    }
  }
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>

  .container {
    position: relative;
    background-color: #05000F;
  }

  .stepRadioItem {
    position: absolute;
    background-color: #4C62FB;
    color: white;
    font-size: 14px;
    width: 24px;
    height: 24px;
    line-height: 24px;
    text-align: center;
    border-radius: 50%;
    left: 16px;
    top: 2px;
   }

  .titleIcon {
    margin-top: 41px;
    margin-left: 52px;
    width: 112px;
    height: 32px;
    font-size: 18px;
    font-weight: 900;
    color: white;
    background-image: url("../assets/icon_step_bg.png");
    background-repeat: no-repeat;
    background-position: center;
    border: none;
    background-color: transparent;
  }
  .top_vertical_line {
    position: absolute;
    left: 28px;
    top: -41px;
    height: 41px;
    width: 1px;
  }
  .bottom_vertical_line {
    position: absolute;
    left: 28px;
    top: 24px;
    bottom: 0;
    width: 1px;
  }
  .dashed {
    background-image: linear-gradient(to bottom, #4C62FB 5px, transparent 2px); /* 从上到下渐变，交替设置蓝色和透明色 */
    background-position: left;
    background-size: 1px 10px;
  }
  .line {
    margin-left: 22px;
  }
  .desc {
    margin-left: 52px;
    margin-right: 16px;
    color: white;
    font-size: 14px;
    text-align: left;
    left: 0;
  }
  </style>
  