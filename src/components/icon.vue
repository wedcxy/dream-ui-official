<template>
  <div>
    <dr-card>
      <div slot="header">
        <dr-icon icon="shouwenguanli"></dr-icon>朴素icon图标
      </div>
      <section class="icon_box">
        <div v-for="item in simplicity" :key="item">
          <dr-icon :icon="item" class="font"></dr-icon>
          <p>{{item}}</p>
        </div>
      </section>
    </dr-card>

    <dr-card>
      <div slot="header">
        <dr-icon icon="fawenguanli"></dr-icon>彩色icon图标
      </div>
      <section class="icon_box">
        <div v-for="item in colours" :key="item">
          <dr-icon :icon="item" class="font"></dr-icon>
          <p>{{item}}</p>
        </div>
      </section>
    </dr-card>

    <dr-card>
      <div slot="header">
        <dr-icon icon="fawenguanli"></dr-icon>icon图标使用方法
      </div>
      <code v-text="code" style="color:#979a9a"></code>
    </dr-card>

    <dr-card>
      <el-table :data="parameter" style="width: 100%">
        <el-table-column prop="parameterName" label="参数名称" width="180"></el-table-column>
        <el-table-column prop="explain" label="说明" width="180"></el-table-column>
        <el-table-column prop="default" label="默认值"></el-table-column>
        <el-table-column prop="choosable" label="可选值" width="180"></el-table-column>
        <el-table-column prop="type" label="类型"></el-table-column>
      </el-table>
    </dr-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      simplicity: [
        "shouye",
        "shenhe_gaizhang",
        "yuyin",
        "paizhao",
        "tijiao",
        "saoma",
        "fenxiang",
        "shuaxin1",
        "yidianzan",
        "dianzan",
        "yishoucang",
        "shoucang",
        "shaixuan",
        "zhuanfa",
        "zhiding",
        "sousuo1",
        "beifen_fuzhi",
        "xiazai2",
        "shangchuan",
        "daochu1",
        "daoru1",
        "bianji_xiugai",
        "baocun1",
        "fabu",
        "shanchu1",
        "xinzeng_tianjia",
        "queding_queren",
        "quxiao_guanbi",
        "tuichu",
        "fanhui2",
        "fanhui1",
        "gengduo",
        "yichang_weixian",
        "zhengchang_anquan",
        "jindu_shalou",
        "jilu2",
        "shibai2",
        "chenggong2",
        "jinggao_tixing",
        "cuowu_shibai",
        "zhengque_chenggong",
        "duankaizhuangtai",
        "lianjiezhuangtai",
        "yincang",
        "xianshi",
        "zhankai1",
        "shouqi1",
        "yinhang",
        "wuliao_wuzi",
        "liebiao2",
        "gongyingshangxiugai",
        "gongyingshang",
        "shijian_zhongbiao",
        "riqi_rili",
        "gongju",
        "jiankong",
        "dayinji",
        "wenjianjia",
        "ditu",
        "dingwei",
        "tubiaobing",
        "tubiaozhu",
        "tubiaoxian_tongyong_tongji",
        "qiyegongsi",
        "jituan",
        "liebiao",
        "hezuo",
        "gongzuotai",
        "shenfenzheng",
        "youjian",
        "shipin",
        "yinpin",
        "zhengshu_zizhi",
        "touxiangtongyong",
        "yonghu_zhanghao_wode",
        "mima",
        "jiesuo",
        "suoding",
        "lianjie",
        "tupian",
        "xinxi_jilu",
        "wendang1",
        "fujian",
        "erweima",
        "kefu_zixun",
        "pinglun",
        "xiaoxitongzhi",
        "zuqun_jiaose",
        "tongxunlu",
        "APP",
        "shouji",
        "dianhua",
        "qianming",
        "ziliao",
        "caidan",
        "yewu",
        "xiangmu",
        "zuzhijiagou1",
        "quanxian",
        "guanli",
        "shezhi2",
        "shouye1",
        "bangzhu",
        "",
      ],
      colours: [
        "baocun",
        "tupian1",
        "hangban",
        "gouwu",
        "jiudian1",
        "canshi",
        "jiaotong",
        "qinziyou",
        "xinfaluxian",
        "zhoubianyou2",
        "jingneiyou",
        "jingwaiyou",
        "ziyouhang1",
        "menpiao1",
        "jiudian",
        "zhoubianyou1",
        "menpiao",
        "ziyouhang",
        "zhoubianyou",
        "ziyuan15",
        "ziyuan13",
        "ziyuan4",
        "ziyuan3",
        "ziyuan2",
        "shezhi1",
        "wendang",
        "tongzhigonggao",
        "chuchaguanli",
        "shenpi",
        "gerenguanli",
        "shouwenguanli",
        "xiazai1",
        "richenganpai",
        "jiandu",
        "nigao",
        "gerenshezhi",
        "rili",
        "zuzhijiagou",
        "tongzhi",
        "huiyiguanli",
        "gongwenbao",
        "fawenguanli",
        "dangan",
        "gerenbangong",
        "fuchen",
        "xiaoyu",
        "leizhenyu",
        "daxue",
        "zhongyu",
        "wanduoyun",
        "zhongduwumai1",
        "yujiaxue",
        "zhongduwumai",
        "wanqingtian",
        "qingduwumai",
        "zhongxue",
        "xiaoxue",
        "qingtian",
        "yintian",
        "dayu",
        "wu",
        "shachen",
        "baoyu",
        "qiangduiliu",
        "duoyun",
        "bingbao",
        "baoxue",
        "dafeng",
        "xiazai",
        "qingkong",
        "saomiaoshijian",
        "yidaoheimingdan",
        "shezhi",
        "xianshitongji",
        "yidong",
        "tianjia",
        "shuaxin",
        "sousuo",
        "shanchu",
        "quxiaojiankong",
        "qiyong",
        "lingcunwei",
        "kelong",
        "jinyong",
        "jiarujiankong",
        "huifumoren",
        "gaojing",
        "dizhichitance",
        "daoru",
        "daochu",
        "",
      ],
      code: '<dr-icon icon="fawenguanli"></dr-icon>',
      parameter: [
        {
          parameterName: "icon",
          explain: "icon图标的名称",
          default: "__",
          choosable: "__",
          type: "String",
        },
      ],
    };
  },
  methods: {},
  created() {},
};
</script>

<style lang='less' scoped>
.icon_box {
  display: flex;
  flex-wrap: wrap;
  font-family: 宋体;
  font-size: 14px;
  justify-content: space-around;
  div {
    width: 17%;
    padding: 5px;
    text-align: center;
    &:hover {
      background-color: #f2f3f4;
    }
    .font {
      font-size: 30px;
    }
  }
}
</style>