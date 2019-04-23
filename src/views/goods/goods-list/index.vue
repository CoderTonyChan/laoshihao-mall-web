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
    <div class="list-wrap w" v-if="selectorsData">
      <div class="selector" id="J_selector">
        <div class="J_selectorLine s-line J_selectorFold">
          <div class="sl-wrap">
            <div class="sl-key">
              <span>类型：</span>
            </div>
            <div class="sl-value">
              <div class="sl-v-list">
                <ul class="J_valueList">
                  <li>
                    <a @click="reloadtype(0)" v-bind:class="{seleted: (0 === queryInfo.type)}">
                      <i></i>
                      同步课
                    </a>
                    <!---->
                  </li>
                  <li>
                    <a @click="reloadtype(1)" v-bind:class="{seleted: (1 === queryInfo.type)}">
                      <i></i>
                      定向提升
                    </a>
                    <!---->
                  </li>
                  <li>
                    <a @click="reloadtype(2)" v-bind:class="{seleted: (2 === queryInfo.type)}">
                      <i></i>
                      一卡通
                    </a>
                    <!---->
                  </li>
                  <li>
                    <a @click="reloadtype(3)" v-bind:class="{seleted: (3 === queryInfo.type)}">
                      <i></i>
                      精华优课
                    </a>
                    <!---->
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div v-if="selectorsData.organs" class="J_selectorLine s-line J_selectorFold">
          <div class="sl-wrap">
            <div class="sl-key">
              <span>机构：</span>
            </div>
            <div class="sl-value">
              <div class="sl-v-list">
                <ul class="J_valueList">
                  <li v-for="organ in selectorsData.organs" :key="organ.id"  >
                    <a @click="reloadOrganData(organ)" v-bind:class="{seleted: (organ.id === queryInfo.organId)}">
                      <i></i>
                      {{organ.name}}
                    </a>
                    <!-- <a v-if="organ.id === queryInfo.organId" @click="reloadCancelOrganData(organ)">X</a> -->
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div
          class="J_selectorLine s-line J_selectorFold"
          v-for="category in selectorsData.categorys"
          :key="category.id"
        >
          <div class="sl-wrap">
            <div class="sl-key">
              <span>{{category.name}}：</span>
            </div>
            <div class="sl-value">
              <div class="sl-v-list">
                <ul class="J_valueList">
                  <li v-for="value in category.list" :key="value.id">
                    <a @click="reloadCategoryData(value)" v-bind:class="{seleted: (value.id === queryInfo.categoryId)}">
                      <i></i>
                      {{value.name}}
                    </a>
                    <!-- <a
                      v-if="value.id === queryInfo.categoryId"
                      @click="reloadCancelCategoryData(value)"
                    >X</a> -->
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div
          class="J_selectorLine s-line J_selectorFold"
          v-for="spec in selectorsData.specs"
          :key="spec.id"
        >
          <div class="sl-wrap">
            <div class="sl-key">
              <span>{{spec.name}}：</span>
            </div>
            <div class="sl-value">
              <div class="sl-v-list">
                <ul class="J_valueList">
                  <li v-for="value in spec.values" :key="value.id">
                    <a @click="reloadSpecsData(spec,value)" v-bind:class="{seleted: ((spec.id + '_' +value.id) === queryInfo.spec)}">
                      <i></i>
                      {{value.name}}
                    </a>
                    <!-- <a
                      v-if="(spec.id + '_' +value.id) === queryInfo.spec"
                      @click="reloadCancelSpecsData(spec,value)"
                    >X</a> -->
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="list-wrap w">
      <ul class="sort-con">
        <li
          :class="{'sort-item': true, 'active': sortActive}"
          data-type="default"
          @click="changeSort('default')"
        >默认排序</li>
        <li
          :class="{'sort-item': true, 'active': !sortActive, 'asc': isAsc, 'desc': isDesc}"
          data-type="price"
          @click="changeSort('price')"
        >
          <span>价格</span>
          <i class="fa fa-sort-asc"></i>
          <i class="fa fa-sort-desc"></i>
        </li>
      </ul>
      <!-- list 容器 -->
      <ul class="p-list-con">
        <pc-goods-list :key="pcGoodsListKey"/>
      </ul>
      <!-- 分页容器 -->
      <div class="pagination"></div>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
import pcGoodsList from "components/goods/list";

export default {
  data() {
    return {
      sortActive: true,
      isAsc: false,
      isDesc: false,
      orderBy: "name asc",
      selectorsData: { organs: [], categorys: [], specs: [] },
      queryInfo: {
        categoryId: "",
        keyword: "",
        pageNum: "1",
        pageSize: "10",
        organId: "",
        spec: "",
        type: null,
      },
      pcGoodsListKey: 1
    };
  },
  created() {
    console.error(`goods-list---created`);
  },
  beforeRouteEnter(to, from, next) {
    // getPost(to.params.id, (err, post) => {
    //   next(vm => vm.setData(err, post))
    // })
    next();

    window.scrollTo(0, 0);
    console.error(`goods-list---beforeRouteEnter`);
  },
  // 路由改变前，组件就已经渲染完了
  // 逻辑稍稍不同
  beforeRouteUpdate(to, from, next) {
    next();
    this.querySelectorsData(res => {
      if (res.code === 200) {
        this.selectorsData = res.result;
        console.log(res.result);
        this.$pcBus.$emit("searchProduct");
      } else {
        alert("加载主页面失败");
      }
    });
    console.error(`goods-list---beforeRouteUpdate`);
  },
  activated() {
    this.querySelectorsData(res => {
      if (res.code === 200) {
        this.selectorsData = res.result;
        console.log(res.result);
      } else {
        alert("加载主页面失败");
      }
    });
  },
  methods: {
    reloadCanceltype() {
      this.queryInfo.type = null;
      this.loadPage("goods-list", this.queryInfo);
    },
    reloadtype(type) {
      if (type === this.queryInfo.type) {
        this.reloadCanceltype();
        return;
      }
      this.queryInfo.type = type;
      this.queryInfo.categoryId = this.getUrlParam("categoryId");
      this.queryInfo.keyword = this.getUrlParam("keyword");
      this.loadPage("goods-list", this.queryInfo);
    },
    reloadCancelSpecsData(spec, organ) {
      console.log(organ);
      this.queryInfo.keyword = this.getUrlParam("keyword");
      this.queryInfo.spec = null;
      this.loadPage("goods-list", this.queryInfo);
    },
    reloadSpecsData(spec, organ) {
      if ((spec.id + "_" + organ.id) === this.queryInfo.spec) {
        this.reloadCancelSpecsData(spec, organ);
        return;
      }

      console.log(organ);
      this.queryInfo.spec = spec.id + "_" + organ.id;
      this.queryInfo.keyword = this.getUrlParam("keyword");
      this.loadPage("goods-list", this.queryInfo);
    },
    reloadCancelCategoryData(organ) {
      console.log(organ);
      this.queryInfo.categoryId = null;
      this.queryInfo.keyword = this.getUrlParam("keyword");
      this.loadPage("goods-list", this.queryInfo);
    },
    reloadCategoryData(organ) {
      if (organ.id === this.queryInfo.categoryId) {
        this.reloadCancelCategoryData(organ);
        return;
      }
      console.log(organ);
      this.queryInfo.categoryId = organ.id;
      this.queryInfo.keyword = this.getUrlParam("keyword");
      console.log(organ.id);
      this.loadPage("goods-list", this.queryInfo);
    },
    reloadCancelOrganData(organ) {
      console.log(organ);
      this.queryInfo.categoryId = this.getUrlParam("categoryId");
      this.queryInfo.keyword = this.getUrlParam("keyword");
      this.queryInfo.organId = null;
      console.log(`reloadCancelOrganData id`);
      this.loadPage("goods-list", this.queryInfo);
    },
    reloadOrganData(organ) {
      console.log(organ);
      if (organ.id === this.queryInfo.organId) {
        this.reloadCancelOrganData(organ);
        return;
      }

      this.queryInfo.categoryId = this.getUrlParam("categoryId");
      this.queryInfo.keyword = this.getUrlParam("keyword");
      this.queryInfo.organId = organ.id;
      console.log(`reloadOrganData id`);
      console.log(organ.id);
      this.loadPage("goods-list", this.queryInfo);
    },
    querySelectorsData(resolve) {
      this.queryInfo.categoryId = this.getUrlParam("categoryId");
      this.queryInfo.keyword = this.getUrlParam("keyword");
      this.queryInfo.organId = this.getUrlParam("organId");
      this.queryInfo.spec = this.getUrlParam("spec");
      console.log(`querySelectorsData id`);
      console.log(this.queryInfo.organId);
      this.ajax({
        type: "POST",
        url: `/uac/auth/product/getSelectors`,
        data: this.queryInfo,
        success: resolve
      });
    },
    changeSort(sort) {
      if (sort === "price") {
        this.sortActive = false;
        if (!this.isAsc && !this.isDesc) {
          this.isAsc = true;
          this.orderBy = "price asc";
        } else {
          if (this.isAsc) {
            this.isAsc = false;
            this.isDesc = true;
            this.orderBy = "price desc";
          } else {
            this.isAsc = true;
            this.isDesc = false;
            this.orderBy = "price asc";
          }
        }
      } else {
        this.sortActive = !this.sortActive;
        this.orderBy = "name asc";
      }
      this.$pcBus.$emit("productSort", this.orderBy);
    }
  },
  components: {
    pcGoodsList
  }
};
</script>
<style>
.selector .s-title {
  border-bottom: 1px solid #ddd;
  background: #f1f1f1;
  line-height: 34px;
  height: 65px;
  overflow: hidden;
  zoom: 1;
}
.selector .s-title h3 b {
  color: #e4393c;
  margin-right: 5px;
}
.selector .sl-wrap {
  position: relative;
  _zoom: 1;
  line-height: 34px;
  border-bottom: 1px dashed #eee;
}
.selector .sl-key {
  float: left;
  width: 100px;
  padding-left: 10px;
  color: #999;
}
.selector .sl-value {
  margin-left: 110px;
  padding-right: 130px;
  padding-left: 10px;
  overflow: hidden;
  zoom: 1;
}
.selector .sl-v-list {
  overflow: hidden;
  zoom: 1;
  padding-top: 4px;
}
.selector .sl-v-list ul {
  float: left;
  overflow: hidden;
  zoom: 1;
  position: relative;
  height: 30px;
}
.selector .sl-v-list li {
  margin-right: 50px;
}
.selector .sl-v-list li {
  float: left;
  _display: inline;
  margin-right: 16px;
  margin-bottom: 4px;
  height: 26px;
  line-height: 26px;
}

.selector .sl-v-list li a {
  float: left;
  white-space: nowrap;
  zoom: 1;
  cursor: pointer;
}
.selector .sl-v-list li a.seleted{
  background-color: #7ecef4;
  color: white;
}
/* .selector .sl-v-list li a.noSeleted{
  background-color: clear;
  color: #337ab7;
} */
</style>
