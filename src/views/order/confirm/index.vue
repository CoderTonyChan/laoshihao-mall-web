<template>
  <div>
    <div class="crumb">
      <div class="w">
        <div class="crumb-con">
          <a class="link" href="javascript:void(0)" @click.prevent="goHome">老师好在线</a>
          <span>></span>
          <span class="link-text">{{$route.meta.name}}</span>
        </div>
      </div>
    </div>
    <div class="confirm-wrap w">
      <!-- <div class="panel panel-color panel-padding">
        <h1 class="panel-title panel-padding">收货地址</h1>
        <div class="panel-body address-list panel-padding">
          <template v-if="addressList.length">
            <pc-address-list :addressList="addressList" :selectAddress="selectAddress"/>
          </template>
        </div>
      </div> -->
      <div class="panel panel-color panel-padding">
        <h1 class="panel-title panel-padding">商品清单</h1>
        <div class="panel-body product-con panel-padding">
          <pc-product-list :orderItemVoList="orderItemVoList"/>
        </div>
        <div class="submit-con" v-show="orderItemVoList.length > 0">
          <span>订单总价:</span>
          <span class="submit-total">{{productTotalPrice | formatMoney }}</span>
          <span class="btn order-submit" @click="createOrderDoc">提交订单</span>
        </div>
      </div>
    </div>
    <div class="modal-wrap">

    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  import pcNavSide from 'components/layout/nav-side';
  import pcProductList from 'components/order/product-list';
  import pcAddressList from 'components/order/address-list';

  export default {
    data() {
      return {
        addressList: [],
        orderItemVoList: [],
        productTotalPrice: 0,
        addressId: '',
        queryInfo: {}
      };
    },
    created() {
      // this.queryAddressList();
      this.queryOrderItemVoList();
    },
    methods: {
      selectAddress(addressId) {
        console.info(addressId);
        this.addressId = addressId;
      },
      queryAddressList() {
        this.ajax({
          url: `/omc/shipping/queryUserShippingListWithPage`,
          data: {
            pageNum: 1,
            pageSize: 50
          },
          success: (res) => {
            if (res.code === 200) {
              this.addressList = res.result.list;
            }
          }
        });
      },
      //   <!-- TODO -->
      queryOrderItemVoList() {
        this.queryInfo.productId = this.getUrlParam("productId");
        this.queryInfo.adCode = this.getUrlParam("adCode");
        this.ajax({
          // url: `/omc/order/getOrderCartProduct`,
          url: `/omc/order/getOrderConfirmInfo`,
          data: this.queryInfo,
          success: (res) => {
            if (!res || res.code !== 200) {
              this.loadPage('user-order');
            } else {
              this.productTotalPrice = res.result.productTotalPrice;
              this.orderItemVoList = res.result.orderItemVoList;
              this.queryInfo.adCode = res.result.orderItemVoList[0].adCode||this.getUrlParam("adCode");
            }
          }
        });
      },
      createOrderDoc() {
        // if (!this.addressId) {
        //   alert('请选择发货地址');
        //   return;
        // }
        this.addressId = 0;
        // let newwindow = window.open("#","_blank");
        this.ajax({
          // url: `/omc/order/createOrderDoc/` + this.addressId,
          url: `/omc/order/createOrder`,
          data: this.queryInfo,
          success: (res) => {
            let orderVo = res.result;
            if (res.code === 200 && orderVo.orderNo) {
              // 清空购物车
              this.$store.dispatch('clear_cart');
              console.info('提交订单 order=', orderVo.orderNo);
              // this.loadPage('order-payment', {'orderNo': orderVo.orderNo});
              this.ajax({
                url: `/omc/pay/createAlipayForm/` + orderVo.orderNo,
                success: (res) => {
                  if (res.code === 200) {
                    // 支付
                    // newwindow.document.write(res.result);
                    // this.optUploadFileRespDto = res.result;
                    const div=document.createElement('divform');
                    div.innerHTML=res.result;
                    document.body.appendChild(div);
                    document.forms[0].acceptCharset='utf-8';//保持与支付宝默认编码格式一致，如果不一致将会出现：调试错误，请回到请求来源地，重新发起请求，错误代码 invalid-signature 错误原因: 验签出错，建议检查签名字符串或签名私钥与应用公钥是否匹配
                    document.forms[0].submit();
                  }
                }
              });
            } else {
              alert('支付失败');
              this.loadPage('user-order');
            }
          }
        });
      }
    },
    components: {
      pcNavSide,
      pcProductList,
      pcAddressList
    }
  };
</script>
