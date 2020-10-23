<template>
  <div class="home">
    <el-menu mode="horizontal" class="menu" router>
      <el-menu-item index="1">
        <template >
          <svg class="icon" aria-hidden="true" style="font-size:30px">
            <use xlink:href="#icon-network-agent" />
          </svg>
          <span style="font-size:30px;color:#A2EEFF">dream-vue-ui</span>
        </template>
      </el-menu-item>
      <el-menu-item index='/Document' style="float: right">
        <template>
          <i class="el-icon-folder-opened"></i>
          <span>文档</span>
        </template>
      </el-menu-item>
    </el-menu>


    <section class="body">

      <section class="body-left body-box">
        <section class="title">
          <svg class="icon" aria-hidden="true" style="font-size:100px">
            <use xlink:href="#icon-network-agent" />
          </svg>
          <span style="font-size:60px;color:#A2EEFF">dream-vue-ui</span>
        </section>
        <section style="font-size:20px;color:#3a9ad9;margin-top:20px">
          <p>基于vue和web component封装的ui库</p>
          <p><a href="https://www.iconfont.cn/?spm=a313x.7781069.1998910419.d4d0a486a" style="text-decoration:none;font-size:20px;color:#3a9ad9;">icon图标来自iconfont-阿里巴巴</a></p>
        </section>
        <section style="margin-top:40px">
          <el-button type="primary" round @click="push">
            <template>
              <svg class="icon" aria-hidden="true" style="font-size:20px">
                <use xlink:href="#icon-shoutao" />
              </svg>
              <span>快速上手</span>
            </template>
          </el-button>
          <el-button type="warning" round @click="introduce">
            <template>
              <svg class="icon" aria-hidden="true" style="font-size:20px">
                <use xlink:href="#icon-xinkejieshao" />
              </svg>
              <span>介绍</span>
            </template>
          </el-button>
         
        </section>
      </section>


      <section class="body-right body-box">
        <svg class="icon" aria-hidden="true" style="font-size:300px">
            <use xlink:href="#icon-network-agent" />
          </svg>
      </section>
    </section>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {
   
  },
  methods:{
    push(){
      this.$router.push('/install')
    },
    introduce(){
      alert('我还没有想好怎么介绍自己哦！！！')
    }
  }
};
</script>

<style lang="less" scoped>
.menu{
  padding-left:50px;
  padding-right:200px;
}
.body{
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  margin-top: 5%;
  .body-box{
    width: 40%;
    height: 400px;
    border-radius: 20px;
    box-sizing: border-box;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}
</style>
