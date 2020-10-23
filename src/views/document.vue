<template>
  <div id="document">
  

    <el-container>
      <el-header>
        <el-menu mode="horizontal" class="menu" router>
          <el-menu-item index="/">
            <template>
              <svg class="icon" aria-hidden="true" style="font-size:40px">
                <use xlink:href="#icon-network-agent" />
              </svg>
              <span style="font-size:30px;color:#A2EEFF">dream-vue-ui</span>
            </template>
          </el-menu-item>
        </el-menu>
      </el-header>
      <el-container>
        <!-- 左边 -->
        <el-aside width="280px" class="box_left" :style="{height:windowHeight}">
          <el-menu router style="text-align: center;border:none;">
            <el-menu-item index="/install">快速上手</el-menu-item>
            <el-menu-item>
              <span style=" font-weight: bold;">组件</span>
            </el-menu-item>
            <el-menu-item index="/icon">Icon图标</el-menu-item>
            <el-menu-item index="/button">Button按钮</el-menu-item>
            <el-menu-item index="/card">Card卡片</el-menu-item>
            <el-menu-item index="/link">Link</el-menu-item>
          </el-menu>
        </el-aside>

        <!-- 右边 -->
        <el-main class="box_right" :style="{height:windowHeight}">
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      
    }
  },
  methods: {},
  created() {
     
  },
  computed:{
    windowHeight(){
      return  document.documentElement.clientHeight - 70 + 'px' || document.body.clientHeight - 70 + 'px';
    }
  }
};
</script>

<style lang='less' scoped>
#document {
  width: 1200px;
  margin: 0 auto;
  font-size: 20px;
  .content {
    display: flex;
    flex-direction: row;
    .left-menu {
      width: 280px;
    }
    .right {
      width: 920px;
    }
  }
  .box_left{
    overflow: auto;
  }
  .box_right{
    overflow: auto;
  }
  

  


}
</style>