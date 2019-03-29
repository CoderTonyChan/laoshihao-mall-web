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
              <li>Q：师生如何及时沟通？</li>
              <li>A：学员以手机号注册，请教师组织学员，可在老师好App的班级群里互发消息进行沟通，也可建立QQ或微信群进行沟通。</li>
              <li>Q：登录不上老师好App或界面显示一张空白页？</li>
              <li>A：请检查您的设备是否连接上WiFi并保持网络的通畅？这是用户容易忽略而又经常发生的问题。</li>
              <li>Q：一次课后作业添加几道习题合适？</li>
              <li>A：一般不要超过15道题，习题太多会影响显示速度。</li>
              <li>Q：都有哪些常用的手势操作？</li>
              <li>A：
                <br><span style="margin-left: 20px;">1）翻页：双指上下滑动或滚动鼠标中键；</span>
                <br><span style="margin-left: 20px;">2）橡皮擦：三指以上滑动；</span>
                <br><span style="margin-left: 20px;">3）查看作业答案：双指左右滑动或鼠标左键双击。</span>
              </li>


              <li>Q：我没有Pad，如何手写作业？</li>
              <li>A：可在纸上写完作业后，通过手机拍照插入作业（图片）。友情提示：可先由板书定位光标，然后再打开“选项”菜单，选择“插入图片”，则图片左上角与光标左上角自动对齐。</li>
              <li>Q：是用随笔还是板书功能在Pad上手写作业？</li>
              <li>A：如果您的Pad支持使用Apple pencil 那样精度高的电容笔，当然用随笔更方便，感觉就像在纸上手写作业；如果您使用的是普通电容笔，建议用板书功能，可以全屏手写，不必费眼死盯着屏幕，手写的大字会自动缩小进入文本框，并可在文本框内逐字编辑手写字。</li>
              
              <li>Q：板书功能如何换行、退格和输入空格？</li>
              <li>A：
                <br><span style="margin-left: 20px;">1）翻页：双指上下滑动或滚动鼠标中键；或者，一笔手写一个换行符，即先写一竖，顺势再从右到左写一横；</span>
                <br><span style="margin-left: 20px;">2）退格：从右到左写一横；</span>
                <br><span style="margin-left: 20px;">3）空格：一笔手写一个空格符，即先写一竖，顺势再从左到右写一横、从下到上写一竖。</span>
              </li>

              <li>Q：填空题可以自动批改吗？</li>
              <li>A：填空内容如果全部是键盘可输入的国标字符，可进行全文比对自动批改，并且如果填空题全为数字，系统还提供了手写数字字符串识别功能，方便用户手写输入数字。</li>

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
