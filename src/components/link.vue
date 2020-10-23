<template>
  <div>
    <section>
      <p class="title">Link链接</p>
      <p class="title_list">文本超链接集合</p>
    </section>

    <!-- 基本用法 -->
    <dr-card>
      <div slot="header">基础用法</div>
      <section class="text">
        <dr-link>默认链接</dr-link>
        <dr-link type="primary">primary链接</dr-link>
        <dr-link type="success">success链接</dr-link>
        <dr-link type="warning">warning链接</dr-link>
        <dr-link type="danger ">danger链接</dr-link>
        <dr-link type="info">info链接</dr-link>
      </section>

      <dr-link type="primary ">代码例子：</dr-link>
      <p class="title_list" style="margin-bottom:30px">
        使用
        <span class="textShow">type</span>属性可以选择不同类型链接
      </p>

      <code style="color:#979a9a;">
        <p>&#60;dr-link&#62;默认链接&#60;/dr-link&#62;</p>
        <p>&#60;dr-link type="primary"&#62;primary链接&#60;/dr-link&#62;</p>
        <p>&#60;dr-link type="success"&#62;success链接&#60;/dr-link&#62;</p>
        <p>&#60;dr-link type="warning"&#62;warning链接&#60;/dr-link&#62;</p>
        <p>&#60;dr-link type="danger "&#62;danger链接&#60;/dr-link&#62;</p>
        <p>&#60;dr-link type="info"&#62;info链接&#60;/dr-link&#62;</p>
      </code>
    </dr-card>

    <!-- 是否禁用 -->
    <dr-card>
      <div slot="header">禁用链接</div>
      <section class="text">
        <dr-link :disabled="true">默认链接</dr-link>
        <dr-link type="primary" :disabled="true">primary链接</dr-link>
        <dr-link type="success" :disabled="true">success链接</dr-link>
        <dr-link type="warning" :disabled="true">warning链接</dr-link>
        <dr-link type="danger " :disabled="true">danger链接</dr-link>
        <dr-link type="info" :disabled="true">info链接</dr-link>
      </section>

      <dr-link type="primary ">代码例子：</dr-link>
      <p class="title_list" style="margin-bottom:30px">
        使用
        <span class="textShow">disabled</span>属性通过false / true 可以是否禁止使用
      </p>

      <code style="color:#979a9a;">
        <p>&#60;dr-link :disabled="true"&#62;默认链接&#60;/dr-link&#62;</p>
        <p>&#60;dr-link type="primary" :disabled="true"&#62;primary链接&#60;/dr-link&#62;</p>
        <p>&#60;dr-link type="success" :disabled="true"&#62;success链接&#60;/dr-link&#62;</p>
        <p>&#60;dr-link type="warning" :disabled="true"&#62;warning链接&#60;/dr-link&#62;</p>
        <p>&#60;dr-link type="danger " :disabled="true"&#62;danger链接&#60;/dr-link&#62;</p>
        <p>&#60;dr-link type="info" :disabled="true"&#62;info链接&#60;/dr-link&#62;</p>

        
      </code>
    </dr-card>

    <!-- icon文本链接 -->
    <dr-card>
      <div slot="header">icon链接</div>
      <section class="text">
        <dr-link icon="leizhenyu">默认链接</dr-link>
        <dr-link type="primary" icon="daxue">primary链接</dr-link>
        <dr-link type="success" icon="qingduwumai">success链接</dr-link>
        <dr-link type="warning" icon="baoxue">warning链接</dr-link>
        <dr-link type="danger " icon="bingbao">danger链接</dr-link>
        <dr-link type="info" icon="zhongduwumai1">info链接</dr-link>
      </section>

      <dr-link type="primary ">代码例子：</dr-link>
      <p class="title_list" style="margin-bottom:30px">
        使用
        <span class="textShow">disabled</span>属性通过false / true 可以是否禁止使用
      </p>

      <code style="color:#979a9a;">
        <p>&#60;dr-link :disabled="true"&#62;默认链接&#60;/dr-link&#62;</p>
        <p>&#60;dr-link type="primary" :disabled="true"&#62;primary链接&#60;/dr-link&#62;</p>
        <p>&#60;dr-link type="success" :disabled="true"&#62;success链接&#60;/dr-link&#62;</p>
        <p>&#60;dr-link type="warning" :disabled="true"&#62;warning链接&#60;/dr-link&#62;</p>
        <p>&#60;dr-link type="danger " :disabled="true"&#62;danger链接&#60;/dr-link&#62;</p>
        <p>&#60;dr-link type="info" :disabled="true"&#62;info链接&#60;/dr-link&#62;</p>

        
      </code>
    </dr-card>

    <!-- underline禁止下划线 -->
    <dr-card>
      <div slot="header">underline禁止下划线</div>
      <section class="text">
        <dr-link :underline="true">默认链接</dr-link>
        <dr-link type="primary" :underline="true">primary链接</dr-link>
        <dr-link type="success" :underline="true">success链接</dr-link>
        <dr-link type="warning" :underline="true">warning链接</dr-link>
        <dr-link type="danger " :underline="true">danger链接</dr-link>
        <dr-link type="info" :underline="true">info链接</dr-link>
      </section>

      <dr-link type="primary ">代码例子：</dr-link>
      <p class="title_list" style="margin-bottom:30px">
        使用
        <span class="textShow">underline</span>属性通过false / true 可以是否禁止下划线
      </p>

      <code style="color:#979a9a;">
        <p>&#60;dr-link :underline="true"&#62;默认链接&#60;/dr-link&#62;</p>
        <p>&#60;dr-link type="primary" :underline="true"&#62;primary链接&#60;/dr-link&#62;</p>
        <p>&#60;dr-link type="success" :underline="true"&#62;success链接&#60;/dr-link&#62;</p>
        <p>&#60;dr-link type="warning" :underline="true"&#62;warning链接&#60;/dr-link&#62;</p>
        <p>&#60;dr-link type="danger " :underline="true"&#62;danger链接&#60;/dr-link&#62;</p>
        <p>&#60;dr-link type="info" :underline="true"&#62;info链接&#60;/dr-link&#62;</p>
      </code>
    </dr-card>

    <!-- href原生属性 -->
    <dr-card>
      <div slot="header">href原生属性</div>
      <section class="text">
        <dr-link href="https://www.iconfont.cn/?spm=a313x.7781069.1998910419.d4d0a486a">默认链接</dr-link>
        <dr-link type="primary" href="https://www.iconfont.cn/?spm=a313x.7781069.1998910419.d4d0a486a">primary链接</dr-link>
        <dr-link type="success" href="https://www.iconfont.cn/?spm=a313x.7781069.1998910419.d4d0a486a">success链接</dr-link>
        <dr-link type="warning" href="https://www.iconfont.cn/?spm=a313x.7781069.1998910419.d4d0a486a">warning链接</dr-link>
        <dr-link type="danger " href="https://www.iconfont.cn/?spm=a313x.7781069.1998910419.d4d0a486a">danger链接</dr-link>
        <dr-link type="info" href="https://www.iconfont.cn/?spm=a313x.7781069.1998910419.d4d0a486a">info链接</dr-link>
      </section>

      <dr-link type="primary ">代码例子：</dr-link>
      <p class="title_list" style="margin-bottom:30px">
        使用
        <span class="textShow">href</span>属性实现a标签页面跳转效果
      </p>

      <code style="color:#979a9a;">
        <p>&#60;dr-link href="https://www.baidu.com"&#62;默认链接&#60;/dr-link&#62;</p>
        <p>&#60;dr-link type="primary" href="https://www.baidu.com"&#62;primary链接&#60;/dr-link&#62;</p>
        <p>&#60;dr-link type="success" href="https://www.baidu.com"&#62;success链接&#60;/dr-link&#62;</p>
        <p>&#60;dr-link type="warning" href="https://www.baidu.com"&#62;warning链接&#60;/dr-link&#62;</p>
        <p>&#60;dr-link type="danger " href="https://www.baidu.com"&#62;danger链接&#60;/dr-link&#62;</p>
        <p>&#60;dr-link type="info" href="https://www.baidu.com"&#62;info链接&#60;/dr-link&#62;</p>
      </code>
    </dr-card>


    <!-- link参数列表 -->
    <dr-card>
      <div slot="header">dr-link 链接参数</div>

      <section >
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
          explain: "类型",
          default: "default",
          choosable: "primary / success / warning / danger / info",
          type: "String",
        },
        {
          parameterName: "disabled",
          explain: "是否禁用状态",
          default: "false",
          choosable: "---",
          type: "String",
        },
        {
          parameterName: "underline",
          explain: "是否禁止下划线",
          default: "false",
          choosable: "---",
          type: "boolean",
        },
        {
          parameterName: "href",
          explain: "原生 href 属性",
          default: "null",
          choosable: "---",
          type: "string",
        },
      ],
    };
  },
  methods: {},
  created() {},
};
</script>

<style lang='less' scoped>
.text {
  margin-bottom: 30px;
  display: flex;
  justify-content: space-around;
}
</style>