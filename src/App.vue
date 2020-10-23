<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<style lang="less">
#app {
  overflow:-moz-scrollbars-none;
  -ms-overflow-style:none;
  ::-webkit-scrollbar {
    width: 10px;
    height: 5px;
    background-color: transparent;
  }
  ::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px transparent;
    border-radius: 10px;
    background-color: transparent;
  }
  ::-webkit-scrollbar-thumb {
    border-radius: 10px;
    height: 10px;
    -webkit-box-shadow: inset 0 0 6px transparent;
    background-color: transparent;
  }
  font-family: Helvetica Neue, Helvetica, PingFang SC, Hiragino Sans GB,
    Microsoft YaHei, SimSun, sans-serif;
  .title {
    font-size: 20px;
    font-weight: 500;
  }
  .title_list {
    font-size: 14px;
    color: #bdc3c7;
  }
  .textShow {
  color: #626567;
}
}
</style>
