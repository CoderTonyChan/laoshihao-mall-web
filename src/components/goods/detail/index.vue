<template xmlns="http://www.w3.org/1999/html">
  <div class="detail page-container w">
    <p v-show="!isShowProduct" class="err-tip">很抱歉，实在找不到您要的商品。</p>
    <div v-show="isShowProduct">
      <div class="intro-wrap">
        <div class="p-img-con">
          <div class="main-img-con">
            <!-- <img class="main-img" v-lazy="mainImage" alt="name"/> -->
            <video-player
              class="video-player-box"
              ref="videoPlayer"
              :options="playerOptions"
              :playsinline="true"
              customEventName="customstatechangedeventname"
              @play="onPlayerPlay($event)"
              @pause="onPlayerPause($event)"
              @statechanged="playerStateChanged($event)"
              @ready="playerReadied"
            ></video-player>
          </div>
          <!-- <ul class="p-img-list">
            <li class="p-img-item" v-for="url in subImages" :key="url">
              <img @mouseenter="changeMainImg(url)" class="p-img" v-lazy="url"/>
            </li>
          </ul>-->
        </div>
        <div class="p-info-con">
          <h1 class="p-name">{{product.name}}</h1>
          <p class="p-subtitle">{{product.subtitle}}</p>
          <div class="p-info-item p-price-con p-price">
            <span class="label">{{product.price | formatMoney}}</span>
            <!-- <span class="info">{{product.price | formatMoney}}</span> -->
          </div>
          <span class="p-subtitle-2">教育机构：
            <span class="p-subtitle-3">{{product.organName}}</span>
          </span>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <span v-if="product.qq" class="p-subtitle-2">联系方式：</span>
          <span v-if="product.qq" class="p-subtitle-3">QQ&nbsp;{{product.qq}}</span>
          <span v-if="product.qq">
            <a
              target="_blank"
              v-bind:href="'http://wpa.qq.com/msgrd?v=3&uin='+this.product.qq+'&site=qq&menu=yes'"
            >
              <img
                class="qqimg"
                border="0"
                src="http://wpa.qq.com/pa?p=2:178899573:51"
                alt="点击这里给我发消息"
                title="点击这里给我发消息"
                style="height: 17px;"
              >
            </a>
          </span>
          <!-- <span v-if="product.qq" ><a target="_blank" v-bind:href="'tencent://message/?uin='+this.product.qq+'&Site=Sambow&Menu=yes'"><img class="qqimg" border="0" src="http://wpa.qq.com/pa?p=2:178899573:51" alt="点击这里给我发消息" title="点击这里给我发消息"/></a></span> -->
          <!-- <div class="p-info-item">
            <span class="label">库存:</span>
            <span class="info">{{product.stock}}</span>
          </div>
          <div class="p-info-item p-count-con">
            <span class="label">数量:</span>
            <input class="p-count" :value="buyCount" readonly=""/>
            <span class="p-count-btn plus" @click="changeBuyCount('plus')">+</span>
            <span class="p-count-btn minus" @click="changeBuyCount('minus')">-</span>
          </div>-->
          <div class="p-product-info">
            <p>课时：{{product.period}}<span v-show="product.validTime">&nbsp;&nbsp;&nbsp;&nbsp;有效期： {{this.dataString}}</span></p>
            <p>难度：<span style="font-weight: bold; font-size: 16px; color: #f39800; letter-spacing: 2px;">{{stars}}</span>&nbsp;&nbsp;&nbsp;&nbsp; <span v-show="product.homework===1">含课后作业</span></p>
            <p class="teacher">
              主讲老师：
              <a
                v-for="(teacher, index) in product.teacherList"
                :key="teacher.id"
                target="_blank"
                class="link"
                @click="loadPage('goods-list', {teacherId : teacher.id})"
              >
                {{teacher.name}}
                <span v-if="index !== product.teacherList.length - 1">、</span>
              </a>
            </p>
          </div>
          <div class="p-info-item-2">
            <a class="btn cart-add" @click="addCartClick">{{!product.canBuy?"已经购买":product.canBuy===1? "立刻报名":"立刻付款"}}</a>
            <el-dialog
              title="提示"
              :visible.sync="dialogVisible"
              width="30%"
              :before-close="handleClose">
              <el-cascader
                expand-trigger="hover"
                :options="options"
                v-model="selectedOptions"
                @change="handleChange"
                >
              </el-cascader>
              <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="addCart">确 定</el-button>
              </span>
            </el-dialog>
          </div>
        </div>
      </div>
      <div class="detail-wrap">
        <img src="http://lshaomall.oss-cn-shenzhen.aliyuncs.com/website/img/333.png" alt="">
      </div>
      <div class="detail-wrap">
        <div class="detail-tab-con">
          <ul class="tab-list">
            <li class="tab-item active">
              <a href="#intro">课程介绍</a>
            </li>
            <li class="tab-item active">
              <a href="#table">课程大纲</a>
            </li>
            <li class="tab-item active">
              <a href="#teacher">名师介绍</a>
            </li>
            <li class="tab-item active">
              <a @click.prevent="loadPage('refund')">退换课须知</a>
            </li>
          </ul>
        </div>
        <div class="detail-con">
          <div id="intro"></div>
          <div id="table" v-html="product.detail"></div>

          <div id="audition" class="product-info-path p-course-trial">
            <p class="pi-path-title" id="teacher">
              <em></em>名师介绍
            </p>
            <div class="course-list">
              <div class="course-list-inner" id="jp-course-list-wrap">
                <div class="course-item" v-for="(teacher, index) in product.teacherList" :key="teacher.id">
                  <h1>{{teacher.name}}</h1>
                  <img :src="teacher.avatar" alt>

                  <div class="info" style="font-size: 20px;">
                    <p v-html="introduceString(teacher.introduce)"></p>
                  </div>
                </div>
              </div>
            </div>
            <div class="page-control" id="jp-course-list-control"></div>
          </div>

          <!-- <div class="product-info-path p-course-return">
            <p class="pi-path-title" id="div4">
              <em></em>退换课规则
            </p>
            <ul>
              <li>1、直播课程总次数只有1次的，一经购买不可进行退换。</li>
              <li>2、直播总次数在2次以上的（包含2次），在第2次直播开课后不可进行退换。</li>
              <li>3、在第2次直播开课后购买的，一经购买不可进行退换。</li>
              <li>4、如所退换课程包含资料等成本费用需在办理退款时一并扣除。</li>
              <li>5、课程已过期不可进行退换。</li>
            </ul>
          </div> -->

          <!-- <div class="product-info-path p-course-return">
            <p class="pi-path-title">
              <em></em>常见问题
            </p>
            <ul>
              <li>Q：师生如何及时沟通？</li>
              <li>A：可在老师好App的班级群里互发消息进行沟通，也可建立QQ或微信群进行沟通。</li>
              <li>Q：我的Pad没有电容笔，去哪里购买？</li>
              <li>A：请在天猫或京东商城购买，推荐使用kmoso电容笔。</li>
              <li>Q：怎么听不见声音、看不到视频？</li>
              <li>A：有几种可能：
                <br>1）耳机和麦克配置不正确；
                <br>2）系统提示：“想使用您的摄像机和麦克风”时，您没有选择“允许”，请在系统设置中重新为老师好App勾选相关的权限。
              </li>
              <li>Q：手写笔迹时感觉有点“卡”、笔迹失真？</li>
              <li>A：请先使用第三方软件测试手写笔迹是否也“卡”？如果不“卡”，请与我们联系解决问题；如果也“卡”，可能是您的Pad硬件对手写笔迹的支持不够。</li>
            </ul>
          </div> -->
        </div>
      </div>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
// require styles
import "video.js/dist/video-js.css";

import { videoPlayer } from "vue-video-player";

export default {
  data() {
    return {
      options: [{
          value: 'zhinan',
          label: '指南',
          children: [{
            value: 'shejiyuanze',
            label: '设计原则',
            children: [{
              value: 'yizhi',
              label: '一致'
            }, {
              value: 'fankui',
              label: '反馈'
            }, {
              value: 'xiaolv',
              label: '效率'
            }, {
              value: 'kekong',
              label: '可控'
            }]
          }, {
            value: 'daohang',
            label: '导航',
            children: [{
              value: 'cexiangdaohang',
              label: '侧向导航'
            }, {
              value: 'dingbudaohang',
              label: '顶部导航'
            }]
          }]
        }, {
          value: 'zujian',
          label: '组件',
          children: [{
            value: 'basic',
            label: 'Basic',
            children: [{
              value: 'layout',
              label: 'Layout 布局'
            }, {
              value: 'color',
              label: 'Color 色彩'
            }, {
              value: 'typography',
              label: 'Typography 字体'
            }, {
              value: 'icon',
              label: 'Icon 图标'
            }, {
              value: 'button',
              label: 'Button 按钮'
            }]
          }, {
            value: 'form',
            label: 'Form',
            children: [{
              value: 'radio',
              label: 'Radio 单选框'
            }, {
              value: 'checkbox',
              label: 'Checkbox 多选框'
            }, {
              value: 'input',
              label: 'Input 输入框'
            }, {
              value: 'input-number',
              label: 'InputNumber 计数器'
            }, {
              value: 'select',
              label: 'Select 选择器'
            }, {
              value: 'cascader',
              label: 'Cascader 级联选择器'
            }, {
              value: 'switch',
              label: 'Switch 开关'
            }, {
              value: 'slider',
              label: 'Slider 滑块'
            }, {
              value: 'time-picker',
              label: 'TimePicker 时间选择器'
            }, {
              value: 'date-picker',
              label: 'DatePicker 日期选择器'
            }, {
              value: 'datetime-picker',
              label: 'DateTimePicker 日期时间选择器'
            }, {
              value: 'upload',
              label: 'Upload 上传'
            }, {
              value: 'rate',
              label: 'Rate 评分'
            }, {
              value: 'form',
              label: 'Form 表单'
            }]
          }, {
            value: 'data',
            label: 'Data',
            children: [{
              value: 'table',
              label: 'Table 表格'
            }, {
              value: 'tag',
              label: 'Tag 标签'
            }, {
              value: 'progress',
              label: 'Progress 进度条'
            }, {
              value: 'tree',
              label: 'Tree 树形控件'
            }, {
              value: 'pagination',
              label: 'Pagination 分页'
            }, {
              value: 'badge',
              label: 'Badge 标记'
            }]
          }, {
            value: 'notice',
            label: 'Notice',
            children: [{
              value: 'alert',
              label: 'Alert 警告'
            }, {
              value: 'loading',
              label: 'Loading 加载'
            }, {
              value: 'message',
              label: 'Message 消息提示'
            }, {
              value: 'message-box',
              label: 'MessageBox 弹框'
            }, {
              value: 'notification',
              label: 'Notification 通知'
            }]
          }, {
            value: 'navigation',
            label: 'Navigation',
            children: [{
              value: 'menu',
              label: 'NavMenu 导航菜单'
            }, {
              value: 'tabs',
              label: 'Tabs 标签页'
            }, {
              value: 'breadcrumb',
              label: 'Breadcrumb 面包屑'
            }, {
              value: 'dropdown',
              label: 'Dropdown 下拉菜单'
            }, {
              value: 'steps',
              label: 'Steps 步骤条'
            }]
          }, {
            value: 'others',
            label: 'Others',
            children: [{
              value: 'dialog',
              label: 'Dialog 对话框'
            }, {
              value: 'tooltip',
              label: 'Tooltip 文字提示'
            }, {
              value: 'popover',
              label: 'Popover 弹出框'
            }, {
              value: 'card',
              label: 'Card 卡片'
            }, {
              value: 'carousel',
              label: 'Carousel 走马灯'
            }, {
              value: 'collapse',
              label: 'Collapse 折叠面板'
            }]
          }]
        }, {
          value: 'ziyuan',
          label: '资源',
          children: [{
            value: 'axure',
            label: 'Axure Components'
          }, {
            value: 'sketch',
            label: 'Sketch Templates'
          }, {
            value: 'jiaohu',
            label: '组件交互文档'
          }]
        }],
        selectedOptions: [],
      dialogVisible: false,
      isShowProduct: true,
      // stars: true,
      buyCount: 1,
      product: {},
      mainImage: "",
      subImages: [],
      video: "",
      playerOptions: {
        // videojs options //static/images/author.jpg
        height: "340px",
        width: "500px",
        muted: true,
        language: "en",
        playbackRates: [0.7, 1.0, 1.5, 2.0],
        sources: [
          {
            type: "video/mp4",
            src:
              "https://cdn.theguardian.tv/webM/2015/07/20/150716YesMen_synd_768k_vp8.webm"
            // src: 'http://www.w3school.com.cn/i/movie.ogg'
          }
        ],
        poster: "http://file.koolearn.com/2018/1112/20181112113959687.png"
      }
    };
  },
  created() {},
  activated() {
    this.loadDetail();
    this.isShowProduct = true;
  },
  mounted() {
    // console.log("this is current player instance object", this.player);
    
  },
  methods: {
    introduceString(introduce){
      var reg=new RegExp("\n","g");
      // console.log(introduce);
      return introduce.replace(reg,"<br>");;
    },
      handleChange(value) {
        // 不需要监听 直接使用this.selectedOptions
        console.log(this.selectedOptions);
        // console.log(value);

      },
    // listen event
    onPlayerPlay(player) {
      // console.log('player play!', player)
    },
    onPlayerPause(player) {
      // console.log('player pause!', player)
    },
    // ...player event

    // or listen state event
    playerStateChanged(playerCurrentState) {
      // console.log('player current update state', playerCurrentState)
    },
    handleClose(done) {
        this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {});
      },
    // player is ready
    playerReadied(player) {
      // console.log("the player is readied", player);
      // you can use it to do something...
      // player.[methods]
    },
    addCartClick(){
      if (!this.product.canBuy) {
        this.$pcMessage('不能重复购买');
        return;
      }else if (this.product.canBuy === 2) {
        this.loadPage("order-detail", { orderNo: this.product.orderNo });
        return;
      }
      this.dialogVisible = true;
      this.$http({
        url: `/uac/auth/address/organ/${this.product.organId}`,
      }).then((res) => {
        if (res.code === 200) {
          this.dialogVisible = true;
          this.options = res.result;
          let tmpArray = [];
          let first = res.result[0];
          tmpArray.push(first.value);
          if (first.children) {
            tmpArray.push(first.children[0].value);
            if (first.children[0].children) {
             tmpArray.push(first.children[0].children[0].value);
            }
          }
          // console.log(tmpArray);
          this.selectedOptions = tmpArray;
        }else {
          this.$pcMessage(res);
        }
      }).catch(() => {
      });
    },
    addCart() {
      if (!this.selectedOptions.length) {
        this.$pcMessage(`请选中地区`);
        return;
      }

      this.dialogVisible = false;
      // 2019.5.8 去掉购物车
      // let userCart = {};
      // console.info("this.product", this.product);
      // let productId = this.product.id;
      // this.$store.dispatch("check_product", { productId });
      // if (this.$store.getters.getCurIndex !== -1) {
      //   this.$store.dispatch("plus_count");
      // } else {
      //   userCart.productId = this.product.id;
      //   userCart.quantity = this.buyCount;
      //   userCart.productName = this.product.name;
      //   userCart.productPrice = this.product.price;
      //   userCart.mainImage = this.product.mainImage;
      //   userCart.adCode = this.selectedOptions.pop();
        
      //   userCart.checked = 1;
      //   this.$store.dispatch("push_cart", { userCart });
      // }
      // this.loadPage("oper-result", { type: "user-cart" });
      this.loadPage("order-confirm", { adCode:this.selectedOptions.pop(),productId:this.product.id });

    },
    changeMainImg(img) {
      this.mainImage = img;
    },
    changeBuyCount(type) {
      if (!type) {
        alert("操作错误");
      }
      if (type === "minus") {
        this.buyCount !== 1 ? this.buyCount-- : (this.buyCount = 1);
      }
      if (type === "plus") {
        this.buyCount !== this.product.stock
          ? this.buyCount++
          : (this.buyCount = this.product.stock);
      }
    },
    loadDetail() {
      let productId = this.getUrlParam("productId");
      if (!productId) {
        this.goHome();
        return;
      }
      this.ajax({
        type: "GET",
        url: `/uac/auth/product/queryProductDetail/` + productId,
        success: res => {
          if (res.code === 200) {
            this.product = res.result;
            console.log(this.product);
            
            // this.product.difficulty = 5;
            this.mainImage = this.product.mainImage;
            if (this.product.subImages) {
              let subImages = this.product.subImages;
              let array = subImages.split(",");
              for (let index in array) {
                this.subImages.push(array[index]);
              }
            }
            this.playerOptions.sources[0].src = this.product.video;
            this.playerOptions.poster = this.product.mainImage;
          } else {
            this.isShowProduct = false;
          }
        }
      });
    }
  },
  components: {
    videoPlayer
  },
  computed: {
    dataString() {
      var date = new Date(this.product.validTime); //如果date为13位不需要乘1000
      var Y = date.getFullYear() + "-";
      var M =
        (date.getMonth() + 1 < 10
          ? "0" + (date.getMonth() + 1)
          : date.getMonth() + 1) + "-";
      var D =
        (date.getDate() < 10 ? "0" + date.getDate() : date.getDate()) + " ";
      // var h = (date.getHours() < 10 ? '0' + date.getHours() : date.getHours()) + ':';
      // var m = (date.getMinutes() <10 ? '0' + date.getMinutes() : date.getMinutes()) + ':';
      // var s = (date.getSeconds() <10 ? '0' + date.getSeconds() : date.getSeconds());
      return Y + M + D;
    },
    stars: function () {
        if (this.product.difficulty === 1) {
          return '★☆☆☆☆'
        }else if (this.product.difficulty === 2) {
          return '★★☆☆☆'
        }else if (this.product.difficulty === 3) {
          return '★★★☆☆'
        }else if (this.product.difficulty === 4) {
          return '★★★★☆'
        }else if (this.product.difficulty === 5) {
          return '★★★★★'
        }
        return '★★★☆☆';
    },
    player() {
      return this.$refs.videoPlayer.player;
    },
    url() {
      return `http://wpa.qq.com/msgrd?v=3&uin=${
        this.product.qq
      }&site=qq&menu=yes`;
    },
  }
};
</script>
<style rel="stylesheet/scss" lang="scss">

.detail table {
    background-color: transparent;
    border-collapse: collapse;
    width: 100%;
    text-align: center;
    font-size: 16px;
}

.detail th {
    padding: 0;
    line-height: 52px;
    color: #727171;
    border: 1px solid #dcdddd;
    text-align: center;
    background: #eee;
}

.detail td {
    padding: 0;
    line-height: 52px;
    color: #727171;
    border: 1px solid #dcdddd;
}

.box-title {
  height: 40px;
  line-height: 40px;
  border-left: 8px solid #0090f5;
  font-size: 30px;
  text-indent: 10px;
  color: #0090f5;
  font-weight: 700;
}
.pro-list li {
  width: 124px;
  height: 130px;
  float: left;
  margin: 0 20px 20px 0;
  background: 0 0;
}
.pro-list li .top {
  width: 124px;
  height: 124px;
  -webkit-border-radius: 100%;
  -moz-border-radius: 100%;
  border-radius: 100%;
  background: #0090f5;
  position: relative;
  overflow: hidden;
}
.pro-list li .top img {
  margin: 10px auto 6px;
}
.pro-list li .top .index-p {
  height: 20px;
  line-height: 20px;
  font-size: 18px;
  color: #fff;
  font-weight: 700;
  text-align: center;
}
.pro-list li .top .title {
  height: 30px;
  line-height: 30px;
  font-size: 18px;
  color: #fff;
  font-weight: 700;
  text-align: center;
}
p {
  margin: 0px;
  margin-top: 10px;
}

.detail-con {
  padding: 35px 30px 30px;
}

.product-info-path .pi-path-title {
  height: 44px;
  line-height: 44px;
  font-size: 20px;
  color: #686868;
  position: relative;
}
.product-info-path .pi-path-title em {
  display: inline-block;
  *display: inline;
  *zoom: 1;
  width: 7px;
  height: 17px;
  background: #0cacbb;
  margin-right: 18px;
  vertical-align: middle;
}

.detail-wrap .p-course-return li {
  padding: 10px 0;
  line-height: 22px;
  font-size: 16px;
}

.qqimg {
  display: inline;
}

.detail-wrap .detail-title {
  padding-top: 20px;
  background: clear;
}
.detail-wrap .detail-title img {
  display: block;
  margin: 0 auto;
}

.video-js .vjs-big-play-button {
  top: 50%;
  left: 50%;
  margin-top: -0.7em;
  margin-left: -1.5em;
}
// .p-product-info {
// padding: 20px 0 20px;
// border-bottom: 1px solid #dedfe1;
// }
.p-product-info a {
  color: #828282;
  text-decoration: none;
}

.cart-add {
  display: inline-block;
  /* padding: 0 120px; */
  line-height: 56px;
  vertical-align: middle;
  border: none;
  background: #337ab7;
  font-size: 19px;
  font-weight: bold;
  color: #fff;
  outline: none;
  cursor: pointer;
  text-decoration: none;
  /* width: 200px; */
  width: 220px;
  height: 56px;
  background-color: #ff6e6e;
}
.detail-wrap .tab-list .tab-item a {
  color: #eee;
  text-decoration: none;
}
</style>
