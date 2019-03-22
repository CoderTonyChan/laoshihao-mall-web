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
        <h1 style="text-align: center;">常见问题</h1>
        <ul style="font-size: 20px;">
              <li>Q：登录不上老师好App或界面显示一张空白页？</li>
              <li>A：请检查您的设备是否连接上WiFi并保持网络的通畅？这是用户容易忽略而又经常发生的问题。</li>
              <li>Q：师生如何及时沟通？</li>
              <li>A：<em style="color: red;">学员以手机号注册，请教师组织学员</em>，可在老师好App的班级群里互发消息进行沟通，也可建立QQ或微信群进行沟通。</li>
              <li>Q：我的Pad没有电容笔，去哪里购买？</li>
              <li>A：请在天猫或京东商城购买，推荐使用kmoso电容笔。</li>
              <li>Q：怎么听不见声音、看不到视频？</li>
              <li>A：有几种可能：
                <br><span style="margin-left: 20px;">1）耳机和麦克配置不正确；</span>
                <br><span style="margin-left: 20px;">2）系统提示：“想使用您的摄像机和麦克风”时，您没有选择“允许”，请在系统设置中重新为老师好App勾选相关的权限。</span>
              </li>
              <li>Q：手写笔迹时感觉有点“卡”、笔迹失真？</li>
              <li>A：请先使用第三方软件测试手写笔迹是否也“卡”？如果不“卡”，请与我们联系解决问题；如果也“卡”，可能是您的Pad硬件对手写笔迹的支持不够。</li>
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
