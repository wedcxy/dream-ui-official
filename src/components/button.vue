<template>
  <div>
    <section>
      <p class="title">Button按钮</p>
      <p class="title_list">各种样式按钮</p>
    </section>

    <dr-card>
      <div slot="header">Button按钮基本用法</div>
      <section class="button">
        <dr-button>默认按钮</dr-button>
        <dr-button type="primary">primary按钮</dr-button>
        <dr-button type="success">success按钮</dr-button>
        <dr-button type="info">info 按钮</dr-button>
        <dr-button type="warning">warning按钮</dr-button>
        <dr-button type="danger">danger按钮</dr-button>
      </section>

      <section>
        <dr-link type="primary ">代码例子：</dr-link>
        <p class="title_list">
          通过使用
          <span class="textShow">type</span>属性可以选配样式
        </p>
        <code style="color:#979a9a;">
          <p>&#60;dr-button&#62;默认按钮&#60;/dr-button&#62;</p>
          <p>&#60;dr-button type="primary"&#62;primary按钮&#60;/dr-button&#62;</p>
          <p>&#60;dr-button type="success"&#62;success按钮&#60;/dr-button&#62;</p>
          <p>&#60;dr-button type="info"&#62;info 按钮&#60;/dr-button&#62;</p>
          <p>&#60;dr-button type="warning"&#62;warning按钮&#60;/dr-button&#62;</p>
          <p>&#60;dr-button type="danger"&#62;danger按钮&#60;/dr-button&#62;</p>
        </code>
      </section>
    </dr-card>

    <dr-card>
      <div slot="header">自定义按钮尺寸</div>
      <section class="button" style="justify-content:space-around">
        <dr-button>默认按钮</dr-button>
        <dr-button size="medium">medium尺寸</dr-button>
        <dr-button size="small ">small尺寸</dr-button>
        <dr-button size="mini">mini尺寸</dr-button>
      </section>
      <section>
        <dr-link type="primary ">代码例子：</dr-link>
        <p class="title_list">
          使用
          <span class="textShow">size</span>属性可以配置按钮的大小
        </p>
        <code style="color:#979a9a;">
          <p>&#60;dr-button&#62;默认按钮&#60;/dr-button&#62;</p>
          <p>&#60;dr-button size="medium"&#62;medium尺寸&#60;/dr-button&#62;</p>
          <p>&#60;dr-button size="small "&#62;small尺寸&#60;/dr-button&#62;</p>
          <p>&#60;dr-button size="mini"&#62;mini尺寸&#60;/dr-button&#62;</p>
        </code>
      </section>
    </dr-card>

    <dr-card>
      <div slot="header">iocn按钮</div>
      <section class="button" style="justify-content:space-around">
        <dr-button icon="jiandu">默认按钮</dr-button>
        <dr-button type="primary" icon="tongzhi">按钮</dr-button>
        <dr-button type="success" icon="xiaoyu">按钮</dr-button>
        <dr-button type="info" icon="gerenbangong">按钮</dr-button>
      </section>
      <section>
        <dr-link type="primary ">代码例子：</dr-link>
        <p class="title_list">
          使用
          <span class="textShow">icon</span>可以给按钮前面添加图标
        </p>
        <code style="color:#979a9a;">
          <p>&#60;dr-button icon="jiandu"&#62;默认按钮&#60;/dr-button&#62;</p>
          <p>&#60;dr-button type="primary" icon="tongzhi"&#62;按钮&#60;/dr-button&#62;</p>
          <p>&#60;dr-button type="success" icon="xiaoyu"&#62;按钮&#60;/dr-button&#62;</p>
          <p>&#60;dr-button type="info" icon="gerenbangong"&#62;按钮&#60;/dr-button&#62;</p>
        </code>
      </section>
    </dr-card>

    <dr-card>
      <div slot="header">圆形按钮</div>
      <section class="button" style="justify-content:space-around">
        <dr-button :round="true">默认按钮</dr-button>
        <dr-button :round="true" size="medium">medium按钮</dr-button>
        <dr-button :round="true" size="small ">small按钮</dr-button>
        <dr-button :round="true" size="mini">mini按钮</dr-button>
      </section>
      <section>
        <dr-link type="primary ">代码例子：</dr-link>
        <p class="title_list">
          使用
          <span class="textShow">round</span>属性可以配置圆形按钮
        </p>
        <code style="color:#979a9a;">
          <p>&#60;dr-button :round="true"&#62;默认按钮&#60;/dr-button&#62;</p>
          <p>&#60;dr-button :round="true" size="medium"&#62;medium按钮&#60;/dr-button&#62;</p>
          <p>&#60;dr-button :round="true" size="small "&#62;按钮&#60;/dr-button&#62;</p>
          <p>&#60;dr-button :round="true" size="mini"&#62;按钮&#60;/dr-button&#62;</p>
        </code>
      </section>
    </dr-card>

    <dr-card>
      <div slot="header">dr-button 按钮参数</div>

      <section>
        <el-table :data="parameter" style="width: 100%">
          <el-table-column prop="parameterName" label="参数名称" width="180"></el-table-column>
          <el-table-column prop="explain" label="说明" width="180"></el-table-column>
          <el-table-column prop="default" label="默认值"></el-table-column>
          <el-table-column prop="choosable" label="可选值" width="180"></el-table-column>
          <el-table-column prop="type" label="类型"></el-table-column>
        </el-table>
      </section>
    </dr-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
       parameter: [
        {
          parameterName: "type",
          explain: "按钮样式",
          default: "default",
          choosable: "default / primary  /success / info /warning / danger",
          type: "String",
        },
        {
          parameterName: "size",
          explain: "按钮尺寸",
          default: "default",
          choosable: "medium / small / mini",
          type: "String"
        },
        {
          parameterName: "round",
          explain: "按钮尺寸",
          default: "default",
          choosable: "medium / small / mini",
          type: "String"
        },
        {
          parameterName: "size",
          explain: "是否启用圆形",
          default: "false",
          choosable: "————",
          type: "boolean"
        },
        {
          parameterName: "icon",
          explain: "按钮图标",
          default: "null",
          choosable: "————",
          type: "string"
        }
      ],
    };
  },
  methods: {},
  created() {},
};
</script>

<style lang='less' scoped>
.title {
  font-size: 20px;
  font-weight: 500;
}
.title_list {
  font-size: 14px;
  color: #bdc3c7;
}
.button {
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;
}
.textShow {
  color: #626567;
}
</style>