<template>
    <div class="container">
        <div class="titleIcon">{{ title }}</div>
        <img class="line" src="../assets/icon_step_line.png" alt="">
        <img class="lineTip" src="../assets/icon_step_line_tip.png" alt="">
        <div class="desc">{{ desc }}</div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'PcRegister',
    props: {
      title: String,
      desc: String
    }
  }
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>

  .container {
    position: relative;
  }

  .titleIcon {
    margin-top: -6px;
    margin-left: 40px;
    width: 112px;
    height: 32px;
    line-height: 32px;
    font-size: 18px;
    font-weight: 900;
    color: white;
    background-image: url("../assets/icon_step_bg.png");
    background-repeat: no-repeat;
    background-position: center;
    border: none;
    background-color: transparent;
  }
  .line {
    margin-left: 36px;
  }
  .lineTip {
    position: absolute;
    right: 4px;
    top: 42px;
  }
  .desc {
    margin-left: 40px;
    color: white;
    font-size: 14px;
    text-align: left;
    left: 0;
  }
  </style>
  