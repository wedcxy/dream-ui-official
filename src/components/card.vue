<template>
  <div>
    <section>
      <p class="title">Card卡片</p>
      <p class="title_list">将信息聚合在卡片容器中展示。</p>
    </section>

    <!-- 基础用法 -->
    <dr-card>
      <div slot="header">基础用法</div>
      <p class="title_list" style="margin-bottom:30px; line-height: 30px;">
        Card 组件包括
        <span class="textShow">header</span>
        和
        <span class="textShow">body</span>部分，
        <span class="textShow">header</span>部分需要有显式具名 slot 分发，同时也是可选的。
      </p>
      <dr-link type="primary">代码例子：</dr-link>

      <code style="color:#979a9a;">
        <p>&#60;dr-card&#62;</p>
        <p style="text-indent: 2em;">&#60;div slot="header"&#62;Header效果展示 &#60;/div&#62;</p>
        <p style="text-indent: 1em;">&#60;div&#62;</p>
        <p style="text-indent: 2em;">&#60;ul&#62;</p>
        <p style="text-indent: 3em;">&#60;li&#62;body内容区域1&#60;/li&#62;</p>
        <p style="text-indent: 3em;">&#60;li&#62;body内容区域2&#60;/li&#62;</p>
        <p style="text-indent: 3em;">&#60;li&#62;body内容区域3&#60;/li&#62;</p>
        <p style="text-indent: 3em;">&#60;li&#62;body内容区域4&#60;/li&#62;</p>
        <p style="text-indent: 2em;">&#60;/ul&#62;</p>
        <p style="text-indent: 1em;">&#60;/div&#62;</p>
        <p>&#60;/dr-card&#62;</p>
      </code>

    <!-- 效果展示 -->
      <dr-card>
        <div slot="header">Header效果展示</div>
        <div>
          <ul>
            <li>body内容区域1</li>
            <li>body内容区域2</li>
            <li>body内容区域3</li>
            <li>body内容区域4</li>
          </ul>
        </div>
      </dr-card>
    </dr-card>

    <!-- header插槽样式参数 -->
    <dr-card>
      <div slot="header">header插槽样式参数</div>
      <p class="title_list" style="margin-bottom:30px; line-height: 30px;">
        Card 组件
        <span class="textShow">header</span>插槽样式参数
        分为
        <span class="textShow">titleCenter</span>和
        <span class="textShow">titleColor</span>部分，
        <span class="textShow">titleCenter</span>参数负责控制标题的是否居中显示，
        <span class="textShow">titleColor</span>参数可以自定义标题文本颜色
      </p>


       <dr-link type="primary">代码例子：</dr-link>

      <code style="color:#979a9a;">
        <p>&#60;dr-card :titleCenter="true" titleColor="#41b6e6"&#62;</p>
           <p style="text-indent: 2em;">&#60;div slot="header"&#62;</p>
               <p style="text-indent: 4em;">&#60;dr-icon icon="qingtian"&#62;&#60;/dr-icon&#62;</p>
               <p style="text-indent: 4em;">titleCenter参数居中,titleColor自定义文本颜色效果</p>
           <p style="text-indent: 2em;">&#60;/div&#62;</p>
       <p>&#60;/dr-card&#62;</p>
      </code>

       <!-- 效果展示 -->
       <dr-card :titleCenter="true" titleColor="#41b6e6">
           <div slot="header">
               <dr-icon icon="qingtian"></dr-icon>
               titleCenter参数居中,titleColor自定义文本颜色效果
           </div>
       </dr-card>
    </dr-card>

    <!-- Card组件基础样式参数 -->
    <dr-card>
      <div slot="header">Card组件基础样式参数</div>
      <p class="title_list" style="margin-bottom:30px;line-height: 30px;">
        Card 组件样式参数分为
        <span class="textShow">show</span>设置Card的阴影是否展示，
        <span class="textShow">borderColor</span>参数自定义边框颜色
        <span class="textShow">entiretyColor</span>参数自定义body部分字体颜色
        <span class="textShow">backgroundColor</span>参数可以自定义Card背景颜色
      </p>


       <dr-link type="primary">代码例子：</dr-link>

      <code style="color:#979a9a;">
        <p>&#60;dr-card :show="false" borderColor="#41b6e6" entiretyColor="#fff" backgroundColor="#41b6e6"&#62;</p>
           <p style="text-indent: 2em;">&#60;div slot="header"&#62;</p>
               <p style="text-indent: 4em;">&#60;dr-icon icon="qingtian"&#62;&#60;/dr-icon&#62;</p>
                <p style="text-indent: 4em;">Card组件基本样式参数</p>
           <p style="text-indent: 2em;">&#60;/div&#62;</p>
           <p style="text-indent: 2em;">&#60;p&#62;文本展示&#60;/p&#62;</p>
       <p>&#60;/dr-card&#62;</p>
      </code>

       <!-- 效果展示 -->
       <dr-card :show="false" borderColor="#41b6e6" entiretyColor="#fff" backgroundColor="#41b6e6">
           <div slot="header">
               <dr-icon icon="qingtian"></dr-icon>
               Card组件基本样式参数
           </div>
           <p>文本展示</p>
       </dr-card>
    </dr-card>

    <!-- Card参数列表 -->
    <dr-card>
      <div slot="header">dr-Card 卡片参数</div>

      <section>
        <el-table :data="parameter" style="width: 100%">
          <el-table-column prop="parameterName" label="参数名称" width="180"></el-table-column>
          <el-table-column prop="explain" label="说明" width="180"></el-table-column>
          <el-table-column prop="default" label="默认值"></el-table-column>
          <el-table-column prop="choosable" label="可选值" width="180"></el-table-column>
          <el-table-column prop="type" label="类型"></el-table-column>
        </el-table>
      </section>

      <p>header参数:</p>

      <section>
        <el-table :data="header" style="width: 100%">
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
          parameterName: "header",
          explain: "通过指定slot的name,插入特定的DOM",
          default: "---",
          choosable: "---",
          type: "String",
        },
        {
          parameterName: "show",
          explain: "设置阴影显示",
          default: "true",
          choosable: "---",
          type: "boolean"
        },
        {
          parameterName: "borderColor",
          explain: "自定义背景边框颜色",
          default: "#fff",
          choosable: "rgb,rgba",
          type: "String"
        },
        {
          parameterName: "entiretyColor",
          explain: "设置body部分字体颜色",
          default: "#303133",
          choosable: "---",
          type: "string"
        },
        {
          parameterName: "backgroundColor",
          explain: "设置card背景颜色",
          default: "#fff",
          choosable: "---",
          type: "string"
        }
      ],
      header:[
        {
          parameterName: "titleCenter",
          explain: "标题是否居中",
          default: "false",
          choosable: "---",
          type: "boolean",
        },
        {
          parameterName: "titleColor",
          explain: "标题文本样式",
          default: "#303133",
          choosable: "---",
          type: "string",
        }
      ]
    };
  },
  methods: {},
  created() {},
};
</script>

<style lang='less' scoped>
</style>