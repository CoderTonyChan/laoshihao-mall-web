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
    <div class="list-wrap w" v-if="update">
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
                    <a
                      @click="reloadtype(1)"
                      v-bind:class="{seleted: (1 == queryInfo.firstTypeId)}"
                    >
                      <i></i>
                      同步课
                    </a>
                    <!---->
                  </li>
                  <li>
                    <a
                      @click="reloadtype(2)"
                      v-bind:class="{seleted: (2 == queryInfo.firstTypeId)}"
                    >
                      <i></i>
                      定向提升
                    </a>
                  </li>
                  <!-- <li>
                    <a @click="reloadtype(2)" v-bind:class="{seleted: (2 === queryInfo.type)}">
                      <i></i>
                      一卡通
                    </a>
                  </li>-->
                  <!-- <li>
                    <a @click="reloadtype(3)" v-bind:class="{seleted: (3 === queryInfo.type)}">
                      <i></i>
                      精华优课
                    </a>
                  </li>-->
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div v-if="update" class="J_selectorLine s-line J_selectorFold">
          <div class="sl-wrap">
            <div class="sl-key">
              <span>机构：</span>
            </div>
            <div class="sl-value">
              <div class="sl-v-list">
                <ul class="J_valueList">
                  <li v-for="organ in selectorsData.organs" :key="organ.id">
                    <a
                      @click="reloadOrganData(organ)"
                      v-bind:class="{seleted: (organ.id == queryInfo.organId)}"
                    >
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
        <div v-if="update" class="J_selectorLine s-line J_selectorFold">
          <div class="sl-wrap">
            <div class="sl-key">
              <span>年级：</span>
            </div>
            <div class="sl-value">
              <div class="sl-v-list">
                <ul class="J_valueList">
                  <li v-for="grade in selectorsData.grades">
                    <a
                      @click="reloadGradeData(grade)"
                      v-bind:class="{seleted: (grade.id == queryInfo.gradeId)}"
                    >
                      <i></i>
                      {{grade.name}}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div v-if="update" class="J_selectorLine s-line J_selectorFold">
          <div class="sl-wrap">
            <div class="sl-key">
              <span>学科：</span>
            </div>
            <div class="sl-value">
              <div class="sl-v-list">
                <ul class="J_valueList">
                  <li v-for="subject in selectorsData.subjects" :key="subject.id">
                    <a
                      @click="reloadSubjectData(subject)"
                      v-bind:class="{seleted: (subject.id === queryInfo.subjectId)}"
                    >
                      <i></i>
                      {{subject.name}}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div v-if="update" class="J_selectorLine s-line J_selectorFold">
          <div class="sl-wrap">
            <div class="sl-key">
              <span>学期：</span>
            </div>
            <div class="sl-value">
              <div class="sl-v-list">
                <ul class="J_valueList">
                  <li v-for="secondType in selectorsData.secondTypes" :key="secondType.id">
                    <a
                      @click="reloadSecondTypeData(secondType)"
                      v-bind:class="{seleted: (secondType.id === queryInfo.secondTypeId)}"
                    >
                      <i></i>
                      {{secondType.name}}
                    </a>
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
                    <a
                      @click="reloadCategoryData(value)"
                      v-bind:class="{seleted: (value.id === queryInfo.categoryId)}"
                    >
                      <i></i>
                      {{value.name}}
                    </a>
                    <!-- <a
                      v-if="value.id === queryInfo.categoryId"
                      @click="reloadCancelCategoryData(value)"
                    >X</a>-->
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
                    <a
                      @click="reloadSpecsData(spec,value)"
                      v-bind:class="{seleted: ((spec.id + '_' +value.id) === queryInfo.spec)}"
                    >
                      <i></i>
                      {{value.name}}
                    </a>
                    <!-- <a
                      v-if="(spec.id + '_' +value.id) === queryInfo.spec"
                      @click="reloadCancelSpecsData(spec,value)"
                    >X</a>-->
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
      <ul class="p-list-con">
        <pc-goods-list/>
      </ul>
      <div class="pagination"></div>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
import pcGoodsList from "components/goods/list";

export default {
  data() {
    return {
      update: true,
      sortActive: true,
      isAsc: false,
      isDesc: false,
      orderBy: "name asc",
      selectorsData: {
        organs: [{ id: '3', name: "老师好教育" }, { id: '4', name: "精华学校" }],
        grades: [
          { id: '1', name: "一年级" },
          { id: '2', name: "二年级" },
          { id: '3', name: "三年级" },
          { id: '4', name: "四年级" },
          { id: '5', name: "五年级" },
          { id: '6', name: "六年级" },
          { id: '7', name: "初一" },
          { id: '8', name: "初二" },
          { id: '9', name: "初三" },
          { id: '11', name: "高一" },
          { id: '14', name: "高二" },
          { id: '17', name: "高三" }
        ],
        subjects: [
          { id: '101', name: "语文" },
          { id: '102', name: "数学" },
          { id: '103', name: "英语" },
          { id: '104', name: "物理" },
          { id: '105', name: "化学" },
          { id: '106', name: "生物" },
          { id: '107', name: "历史" },
          { id: '108', name: "地理" },
          { id: '109', name: "政治" }
        ],
        secondTypes: [
          { id: '15', name: "秋季课" },
          { id: '16', name: "寒假课" },
          { id: '17', name: "春季课" },
          { id: '18', name: "暑假课" }
        ],
        categorys: [],
        specs: []
      },
      queryInfo: {
        // firstTypeId,
        // categoryId,
        // keyword,
        // pageNum: "1",
        // pageSize: "10",
        // organId: organId,
        // secondTypeId,
        // subjectId,
        // gradeId
      },
      pcGoodsListKey: 1
    };
  },
  created() {
    // console.error(`goods-list---created`);
    // const categoryId = this.getUrlParam("categoryId");
    // const keyword = this.getUrlParam("keyword");
    // const organId = this.getUrlParam("organId");
    // const secondTypeId = this.getUrlParam("secondTypeId");
    // const subjectId = this.getUrlParam("subjectId");
    // const teacherId = this.getUrlParam("teacherId");
    // const knowledgeId = this.getUrlParam("knowledgeId");
    // const firstTypeId = this.getUrlParam("firstTypeId");
    // const gradeId = this.getUrlParam("gradeId");
    // console.log(organId, gradeId);
    // this.selectorsData.grades[0].seleted = true;
    // this.selectorsData.grades.forEach(grade => {
    //   grade.seleted = (gradeId == grade.id);
    //   console.log(gradeId);
    //   console.log(grade.id);
    //   console.log(grade.seleted);
      
    // });
  },
  beforeRouteEnter(to, from, next) {
    // getPost(to.params.id, (err, post) => {
    //   next(vm => vm.setData(err, post))
    // })
    next();
    window.scrollTo(0, 0);
    // console.error(`goods-list---beforeRouteEnter`);
  },
  // 路由改变前，组件就已经渲染完了
  // 逻辑稍稍不同
  beforeRouteUpdate(to, from, next) {
    next();
    this.$pcBus.$emit("searchProduct");
    // this.querySelectorsData(res => {
    //   if (res.code === 200) {
    //     this.selectorsData = res.result;
    //     console.log(res.result);
    //   } else {
    //     alert("加载主页面失败");
    //   }
    // });
    // console.error(`goods-list---beforeRouteUpdate`);
    
    // this.selectorsData.grades.splice(12)
  },
  activated() {
    // this.querySelectorsData(res => {
    //   if (res.code === 200) {
    //     this.selectorsData = res.result;
    //     console.log(res.result);
    //   } else {
    //     alert("加载主页面失败");
    //   }
    // });
    // this.selectorsData.grades[0].seleted = true;
    // console.log(`activated`);
    this.queryInfo.categoryId = this.getUrlParam("categoryId");
    this.queryInfo.keyword = this.getUrlParam("keyword");
    this.queryInfo.organId = this.getUrlParam("organId");
    this.queryInfo.secondTypeId = this.getUrlParam("secondTypeId");
    this.queryInfo.subjectId = this.getUrlParam("subjectId");
    this.queryInfo.teacherId = this.getUrlParam("teacherId");
    this.queryInfo.knowledgeId = this.getUrlParam("knowledgeId");
    this.queryInfo.firstTypeId = this.getUrlParam("firstTypeId");
    this.queryInfo.gradeId = this.getUrlParam("gradeId");
    // console.log(this.queryInfo);
    // fix : https://segmentfault.com/q/1010000011495273
    this.selectorsData.grades.splice(this.selectorsData.grades.length);
    this.selectorsData.organs.splice(this.selectorsData.organs.length);
    this.selectorsData.subjects.splice(this.selectorsData.subjects.length);
  },
  methods: {
    reloadCanceltype() {
      this.queryInfo.firstTypeId = null;
      this.loadPage("goods-list", this.queryInfo);
    },
    reloadtype(firstTypeId) {
      if (firstTypeId === this.queryInfo.firstTypeId) {
        this.reloadCanceltype();
        return;
      }
      this.queryInfo.firstTypeId = firstTypeId;
      this.queryInfo.categoryId = this.getUrlParam("categoryId");
      this.queryInfo.keyword = null;

      this.loadPage("goods-list", this.queryInfo);
    },
    reloadCancelSpecsData(spec, organ) {
      this.queryInfo.keyword = null;
      this.queryInfo.spec = null;
      this.loadPage("goods-list", this.queryInfo);
    },
    reloadSpecsData(spec, organ) {
      if (spec.id + "_" + organ.id === this.queryInfo.spec) {
        this.reloadCancelSpecsData(spec, organ);
        return;
      }
      this.queryInfo.spec = spec.id + "_" + organ.id;
      this.queryInfo.keyword = null;
      this.loadPage("goods-list", this.queryInfo);
    },
    reloadCancelCategoryData(organ) {
      this.queryInfo.categoryId = null;
      this.queryInfo.keyword = null;
      this.loadPage("goods-list", this.queryInfo);
    },
    reloadCategoryData(organ) {
      if (organ.id === this.queryInfo.categoryId) {
        this.reloadCancelCategoryData(organ);
        return;
      }
      this.queryInfo.categoryId = organ.id;
      this.queryInfo.keyword = null;
      this.loadPage("goods-list", this.queryInfo);
    },
    reloadCancelGradeData(grade) {
      this.queryInfo.categoryId = null;
      this.queryInfo.keyword = null;
      this.queryInfo.gradeId = null;
      this.loadPage("goods-list", this.queryInfo);
    },
    reloadGradeData(grade) {
      if (grade.id === this.queryInfo.gradeId) {
        this.reloadCancelGradeData(grade);
        return;
      }
      this.queryInfo.categoryId = null;
      this.queryInfo.keyword = null;
      this.queryInfo.gradeId = grade.id;
      this.loadPage("goods-list", this.queryInfo);
    },
    reloadCancelOrganData(organ) {
      this.queryInfo.categoryId = null;
      this.queryInfo.keyword = null;
      this.queryInfo.organId = null;
      this.loadPage("goods-list", this.queryInfo);
    },
    reloadOrganData(organ) {
      if (organ.id === this.queryInfo.organId) {
        this.reloadCancelOrganData(organ);
        return;
      }
      this.queryInfo.categoryId = null;
      this.queryInfo.keyword = null;
      this.queryInfo.organId = organ.id;
      this.loadPage("goods-list", this.queryInfo);
    },
    reloadCancelSubjectData(subject) {
      this.queryInfo.categoryId = null;
      this.queryInfo.keyword = null;
      this.queryInfo.subjectId = null;
      this.loadPage("goods-list", this.queryInfo);
    },
    reloadSubjectData(subject) {
      if (subject.id === this.queryInfo.subjectId) {
        this.reloadCancelSubjectData(subject);
        return;
      }
      this.queryInfo.categoryId = null;
      this.queryInfo.keyword = null;
      this.queryInfo.subjectId = subject.id;
      this.loadPage("goods-list", this.queryInfo);
    },
    reloadCancelSecondTypeData(secondType) {
      this.queryInfo.categoryId = null;
      this.queryInfo.keyword = null;
      this.queryInfo.secondTypeId = null;
      this.loadPage("goods-list", this.queryInfo);
    },
    reloadSecondTypeData(secondType) {
      if (secondType.id === this.queryInfo.secondTypeId) {
        this.reloadCancelSecondTypeData(secondType);
        return;
      }
      this.queryInfo.categoryId = null;
      this.queryInfo.keyword = null;
      this.queryInfo.secondTypeId = secondType.id;
      this.loadPage("goods-list", this.queryInfo);
    },
    querySelectorsData(resolve) {
      this.queryInfo.categoryId = this.getUrlParam("categoryId");
      this.queryInfo.keyword = null;
      this.queryInfo.organId = this.getUrlParam("organId");
      this.queryInfo.spec = this.getUrlParam("spec");
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
.selector .sl-v-list li a.seleted {
  background-color: #7ecef4;
  color: white;
}
/* .selector .sl-v-list li a.noSeleted{
  background-color: clear;
  color: #337ab7;
} */
</style>
