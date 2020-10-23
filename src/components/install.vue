<template>
  <div class="install">
    <section>
      <p class="title">快速上手</p>
      <p class="title_list">本节将介绍如何在项目中使用 Dream</p>
    </section>
    <section>
      <p class="title">引入Dream</p>
      <p class="title_list">介绍使用NPM安装Dream</p>
      <dr-card>
        <dr-link type="primary" icon="wendang" style="pointer-events: none;">npm i dream-vue-ui</dr-link>
      </dr-card>
    </section>
    <section>
      <p class="title">main.js 引入 Dream</p>
      <p class="title_list">在 main.js 中写入以下内容：</p>
      <dr-card>
        <dr-link type="primary" icon="wendang" :underline="false" style="pointer-events: none;">
          <p>import Vue from 'vue';</p>
          <p>import DreamUI from 'dream-vue-ui'</p>
          <p>import 'dream-vue-ui/dist/dream-vue-ui.css'</p>
          <p> import App from './App.vue';</p><br>
          <p>Vue.use(DreamUI);</p><br>
          <p>new Vue({</p>
          <p> el: '#app',</p>
          <p> render: h => h(App)</p>
          <p> });</p>
        </dr-link>
      </dr-card>
    </section>

     <section>
      <p class="title">意见反馈</p>
      <p class="title_list">邮箱：3148264655@qq.com</p>
    </section>

    <section>
      <p class="title">打赏</p>
      <p class="title_list">开发不易</p>
      <img src="../assets/zf.jpg" alt="二维码支付" style="width:250px;">
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {},
  created() {},
};
</script>

<style lang='less' scoped>
.install {
  font-size: 14px;
  section {
    margin-bottom: 50px;
  }
  .title{
     font-size: 20px;
     font-weight: 500;
  }
  .title_list{
   font-size:14px;
   color:#bdc3c7;
}
}
</style>