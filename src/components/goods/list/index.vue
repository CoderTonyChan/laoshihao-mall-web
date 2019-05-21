<template>
  <div>
    <ul class="p-list-con">
      <li
        class="p-item link"
        v-show="product.id !== ''"
        v-for="product in productList"
        :key="product.id"
        @click="goProductDetailPage(product.id)"
      >
        <div class="p-name-con">
          <a class="p-name" style="font-size: 16px;">{{product.name}}</a>
        </div>
        <div class="p-name-con">
          课时数：{{product.period}}
          <span v-show="product.homework===1">&nbsp;&nbsp;&nbsp;&nbsp;含课后作业</span>
        </div>
        <div class="p-name-con">
          难度：
          <span
            style="font-weight: bold; font-size: 14px; color: #f39800; letter-spacing: 2px;"
          >{{stars(product.difficulty)}}</span>
        </div>
        <ul class="p-teacher-list">
          <li
            class="p-teacher-item link"
            v-for="teacher in product.teacherList"
            :key="teacher.id"
            @click="loadPage('goods-list', {teacherId : teacher.id})"
          >
            <img class="p-teacher-avatar" :src="teacher.avatar" alt>
            <p class="p-teacher-name">{{teacher.name}}</p>
          </li>
        </ul>
        <span class="p-price" style="font-size: 22px;color: rgb(255, 131, 48);bottom: 8px;right: 30px;position: absolute;"><em class="p-unit">￥</em>{{product.price}}</span>
      </li>
      <p class="err-tip" v-show="productList === null || productList.length < 1">很抱歉，实在找不到您要的商品。</p>
    </ul>

    <div class="pagination" v-show="total">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="queryInfo.pageNum"
        :page-size="queryInfo.pageSize"
        layout="total, prev, pager, next"
        :total="total"
      ></el-pagination>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
export default {
  data() {
    return {
      total: 0,
      queryInfo: {
        categoryId: "",
        keyword: "",
        pageNum: 1,
        pageSize: 10,
        orderBy: null
      },
      productList: [
        {
          id: "",
          name: "",
          subtitle: "",
          mainImage: "",
          price: 0,
          status: "",
          imageHost: ""
        }
      ]
    };
  },
  created() {
    this.$pcBus.$on("productSort", orderBy => {
      console.info("$on('productSort'");
      this.queryInfo.orderBy = orderBy;
      this.queryProductList();
    });
    this.$pcBus.$on("searchProduct", () => {
      console.info("$on searchProduct");
      this.queryProductList();
    });
  },
  activated() {
    this.queryProductList();
  },
  methods: {
    stars: function(difficulty) {
      if (difficulty === 1) {
        return "★☆☆☆☆";
      } else if (difficulty === 2) {
        return "★★☆☆☆";
      } else if (difficulty === 3) {
        return "★★★☆☆";
      } else if (difficulty === 4) {
        return "★★★★☆";
      } else if (difficulty === 5) {
        return "★★★★★";
      }
      return "★★★☆☆";
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      this.queryInfo.pageNum = val;
      this.loadPage("goods-list", this.queryInfo);
    },
    goProductDetailPage(productId) {
      this.loadPage("goods-detail", { productId: productId });
    },
    queryProductList() {
      const pageNum = parseInt(this.getUrlParam("pageNum"));
      const pageSize = parseInt(this.getUrlParam("pageSize"));
      this.queryInfo.categoryId = this.getUrlParam("categoryId");
      this.queryInfo.keyword = this.getUrlParam("keyword");
      this.queryInfo.organId = this.getUrlParam("organId");
      this.queryInfo.secondTypeId = this.getUrlParam("secondTypeId");
      this.queryInfo.subjectId = this.getUrlParam("subjectId");
      this.queryInfo.teacherId = this.getUrlParam("teacherId");
      this.queryInfo.knowledgeId = this.getUrlParam("knowledgeId");
      this.queryInfo.firstTypeId = this.getUrlParam("firstTypeId");
      this.queryInfo.gradeId = this.getUrlParam("gradeId");
      this.queryInfo.pageNum = pageNum ? pageNum : 1;
      this.queryInfo.pageSize = pageSize ? pageSize : 10;
      this.ajax({
        url: `/uac/auth/product/queryProductListWithPage`,
        data: this.queryInfo,
        success: res => {
          if (res.code === 200) {
            if (res.result) {
              this.productList = res.result.list ? res.result.list : [];
              this.total = parseInt(res.result.total);
            } else {
              this.productList = [];
            }
          }
        }
      });
    }
  }
};
</script>
<style rel="stylesheet/scss" lang="scss">
.p-list-con .p-teacher-list .p-teacher-item:first-child {
  margin-left: 0;
}
.p-list-con .p-teacher-list .p-teacher-item {
  float: left;
  width: 40px;
  height: 66px;
  margin-left: 10px;
  text-align: center;
  overflow: hidden;
}
.p-list-con .p-teacher-list .p-teacher-item .p-teacher-avatar {
  display: inline-block;
  width: 38px;
  height: 38px;
  border: 1px solid #f4f4f4;
}
.p-list-con .p-teacher-list .p-teacher-item .p-teacher-name {
  margin-top: 8px;
  font-size: 12px;
  line-height: 12px;
  color: #828282;
}
</style>
