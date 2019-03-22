<template>
  <div>
    <div class="crumb">
      <div class="w">
        <div class="crumb-con">
          <a class="link" href="/">老师好在线</a>
          <span>></span>
          <span class="link-text">{{$route.meta.name}}</span>
        </div>
      </div>
    </div>
    <div class="about-wrap w">
      <div>
        <h1 style="text-align: center;">关于我们</h1>
        <p class="origin-content">北京道明科技有限公司自2014年5月4日成立以来，利用多年积累的原创技术，面向K12学校教育，秉承让更多的孩子尤其是教育落后地区的孩子，能充分享受优质教育服务的理念，开发了老师好App，隆重推出名师微课/Pad教室->课后无纸化写作业->自动批改作业->在线考试->在线一对一辅导的闭环在线教学模式，打通了K12课外辅导从线下走到线上的最后一公里，让线上课外辅导与线下一个样；老师好在线（www.lshao.cn），让更多的教育培训机构推广自己优质的在线课程，并用老师好App做在线教学，有效地提高在线教学水平并减轻老师的工作量。</p>
        <ul style="margin-right: 20px;font-size: 17px;float: right;margin-bottom: 80px;">
          <li>联系方式：</li>
          <li>电话：010-52262815</li>
          <li>地址：北京市丰台区星火路1号昌宁大厦Q502</li>
          <li>上班时间：周一至周五9:00-18:00</li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
export default {
  data() {
    return {};
  },
  created() {},
  methods: {
    test() {}
  },
  components: {}
};
</script>
<style rel="stylesheet/scss" lang="scss">
.origin-content {
  font-size: 20px;
}
</style>
