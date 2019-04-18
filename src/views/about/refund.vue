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
        <h1 style="text-align: center;">退换课规则</h1>
        <ul style="font-size: 20px;">
              <li>1、课程的课时总次数只有1次的，一经购买不可进行退换；</li>
              <li>2、课时总次数在2次以上的（包含2次），在学完课时1后，如果学员选择退课，则课程费不足100元的，我方将不退款，超过100元的，我方只扣除100元，其余课程费退还给学员；如果学员选择继续上课时2后，不可进行退换；</li>
              <li>3、课程已过期不可进行退换。</li>
              <li>4、根据各教育机构对视频课的流量限制的不同，老师好在线制定了对应的视频流量限制策略，但保证学员观看所有视频课的时长不低于该时长的3倍，以确保学员有充足的时间反复观看疑难点。</li>
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
