<template>
  <div>
    <div class="ad">
      <div class="w radius">
        <div class="radius-left">
          <div class="top">
            <span>小学科目</span>
            <ul>
              <li class="link" href="javascript:void(0)" @click="goGoodsListPage('','小学')">数学</li>
              <li class="link" href="javascript:void(0)" @click="goGoodsListPage('','英语')">英语</li>
              <li class="link" href="javascript:void(0)" @click="goGoodsListPage('','语文')">语文</li>
            </ul>
          </div>
          <div class="mid">
            <span>初中科目</span>
            <ul>
              <li class="link" href="javascript:void(0)" @click="goGoodsListPage('','数学')">数学</li>
              <li class="link" href="javascript:void(0)" @click="goGoodsListPage('','英语')">英语</li>
              <li class="link" href="javascript:void(0)" @click="goGoodsListPage('','语文')">语文</li>
              <li class="link" href="javascript:void(0)" @click="goGoodsListPage('','物理')">物理</li>
              <li class="link" href="javascript:void(0)" @click="goGoodsListPage('','化学')">化学</li>
              <li class="link" href="javascript:void(0)" @click="goGoodsListPage('','政治')">政治</li>
              <li class="link" href="javascript:void(0)" @click="goGoodsListPage('','历史')">历史</li>
              <li class="link" href="javascript:void(0)" @click="goGoodsListPage('','地理')">地理</li>
              <li class="link" href="javascript:void(0)" @click="goGoodsListPage('','生物')">生物</li>
              <li class="link" href="javascript:void(0)" @click="goGoodsListPage('','信息科技')">信息科技</li>
            </ul>
          </div>
          <div class="botton">
            <span>高中科目</span>
            <ul>
              <li class="link" href="javascript:void(0)" @click="goGoodsListPage('','数学')">数学</li>
              <li class="link" href="javascript:void(0)" @click="goGoodsListPage('','英语')">英语</li>
              <li class="link" href="javascript:void(0)" @click="goGoodsListPage('','语文')">语文</li>
              <li class="link" href="javascript:void(0)" @click="goGoodsListPage('','物理')">物理</li>
              <li class="link" href="javascript:void(0)" @click="goGoodsListPage('','化学')">化学</li>
              <li class="link" href="javascript:void(0)" @click="goGoodsListPage('','政治')">政治</li>
              <li class="link" href="javascript:void(0)" @click="goGoodsListPage('','历史')">历史</li>
              <li class="link" href="javascript:void(0)" @click="goGoodsListPage('','地理')">地理</li>
              <li class="link" href="javascript:void(0)" @click="goGoodsListPage('','生物')">生物</li>
              <li class="link" href="javascript:void(0)" @click="goGoodsListPage('','信息科技')">信息科技</li>
            </ul>
          </div>
        </div>

        <div class="radius-right">
          <!-- 123 -->
        <pc-banner></pc-banner>
        </div>
      </div>
      <div class="p-max-width-wrap p-content">
        <div class="p-title-wrap">
          <div class="p-title">热门课程</div>
          <ul class="p-tabs-list" id="jp-solive-tabs-wrap">
            <li
              class="p-item"
              @mouseenter="hotItemIndex = 0"
              :class="hotItemIndex === 0?'p-selected':'p-no-selected'"
            >全部</li>
            <li
              class="p-item"
              @mouseenter="hotItemIndex = 1"
              :class="hotItemIndex === 1?'p-selected':'p-no-selected'"
            >小学</li>
            <li
              class="p-item"
              @mouseenter="hotItemIndex = 2"
              :class="hotItemIndex === 2?'p-selected':'p-no-selected'"
            >初中</li>
            <li
              class="p-item"
              @mouseenter="hotItemIndex = 3"
              :class="hotItemIndex === 3?'p-selected':'p-no-selected'"
            >高中</li>
            <!-- <li class="p-item" @mouseenter="hotItemIndex = 4"  :class="hotItemIndex === 4?'p-selected':'p-no-selected'">四六级</li>
            <li class="p-item" @mouseenter="hotItemIndex = 5"  :class="hotItemIndex === 5?'p-selected':'p-no-selected'">小语种</li>
            <li class="p-item" @mouseenter="hotItemIndex = 6"  :class="hotItemIndex === 6?'p-selected':'p-no-selected'">英语能力</li>-->
          </ul>
          <a class="p-more-link" href="http://zhibo.koolearn.com/list/0" target="_blank"></a>
        </div>
        <transition name="fade">
          <div class="p-class-wrap">
            <ul class="p-class-list p-selected" v-show="hotItemIndex === 0">
              <li class="p-item">
                <a class="p-link link" @click="goProductDetailPage(32)" target="_blank">
                  <img
                    class="p-img"
                    src="https://uploadimg.koolearn.com/upload/2019-01-25/e779e60cc78824667a98629ef1577476.jpg"
                    alt
                  >
                  <div class="p-info-wrap">
                    <p class="p-title">2019年上教师资格证笔试冲刺救急班（小学）</p>
                    <p class="p-time">
                      <img
                        src="http://oss.lshao.cn/images/people.png"
                        alt
                        style="bottom: 1px;position: relative;"
                      > 259&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;课时数：32
                    </p>
                    <div class="p-item-footer">
                      <span class="p-price">
                        <em class="p-unit">￥</em>9.90
                      </span>
                    </div>
                  </div>
                </a>
              </li>
              <li class="p-item">
                <a class="p-link link" @click="goProductDetailPage(32)" target="_blank">
                  <img
                    class="p-img"
                    src="https://uploadimg.koolearn.com/upload/2019-01-25/b0684af9926be01171ba5a5b1a833e6f.jpg"
                    alt
                  >
                  <div class="p-info-wrap">
                    <p class="p-title">2019年上教师资格证笔试冲刺救急班（中学）</p>
                    <p class="p-time">今天 19:00-21:00</p>
                    <div class="p-item-footer">
                      <span class="p-teacher">主讲 范志明</span>
                      <span class="p-price">
                        <em class="p-unit">￥</em>9.90
                      </span>
                    </div>
                  </div>
                </a>
              </li>
              <li class="p-item">
                <a class="p-link link" @click="goProductDetailPage(32)" target="_blank">
                  <img
                    class="p-img"
                    src="https://uploadimg.koolearn.com/upload/2019-02-17/bfe4595957cc35220154edc49fc19194.jpg"
                    alt
                  >
                  <div class="p-info-wrap">
                    <p class="p-title">乔治老师托福词汇营【第2期】</p>
                    <p class="p-time">明天 19:50-21:00</p>
                    <div class="p-item-footer">
                      <span class="p-teacher">主讲 李冰洁</span>
                      <span class="p-price">
                        <em class="p-unit">￥</em>1.00
                      </span>
                    </div>
                  </div>
                </a>
              </li>
              <li class="p-item">
                <a class="p-link link" @click="goProductDetailPage(32)" target="_blank">
                  <img
                    class="p-img"
                    src="https://uploadimg.koolearn.com/upload/2019-02-15/840c47963cbfb4f1210a32966691e8d9.png"
                    alt
                  >
                  <div class="p-info-wrap">
                    <p class="p-title">新东方雅思3月公益课</p>
                    <p class="p-time">2019-03-04</p>
                    <div class="p-item-footer">
                      <span class="p-teacher">主讲 王煦</span>
                      <span class="p-price">
                        <em class="p-unit">￥</em>1.00
                      </span>
                    </div>
                  </div>
                </a>
              </li>
              <li class="p-item">
                <a class="p-link link" @click="goProductDetailPage(32)" target="_blank">
                  <img
                    class="p-img"
                    src="https://uploadimg.koolearn.com/upload/2019-01-04/431b551e8ccc5160e03ee00d634dfb8a.jpg"
                    alt
                  >
                  <div class="p-info-wrap">
                    <p class="p-title">【期末冲刺满分】六年级应用题重点突破</p>
                    <p class="p-time">2019-01-12</p>
                    <div class="p-item-footer">
                      <span class="p-teacher">主讲 许秋琦</span>
                      <span class="p-price">观看回放</span>
                    </div>
                  </div>
                </a>
              </li>
            </ul>

            <ul class="p-class-list p-selected" v-show="hotItemIndex === 1">
              <li class="p-item">
                <a class="p-link link" @click="goProductDetailPage(32)" target="_blank">
                  <img
                    class="p-img"
                    src="https://uploadimg.koolearn.com/upload/2019-01-02/3aae374be24db0e90a244d48ed7eac08.jpg"
                    alt
                  >
                  <div class="p-info-wrap">
                    <p class="p-title">考研规划●报考策略 20讲</p>
                    <p class="p-time">2019-01-28</p>
                    <div class="p-item-footer">
                      <span class="p-price">观看回放</span>
                    </div>
                  </div>
                </a>
              </li>
              <li class="p-item">
                <a class="p-link link" @click="goProductDetailPage(32)" target="_blank">
                  <img
                    class="p-img"
                    src="https://uploadimg.koolearn.com/upload/2019-01-17/8211fdc034b67b2dbd2e284e5bfd7b79.jpg"
                    alt
                  >
                  <div class="p-info-wrap">
                    <p class="p-title">2020考研英语进阶全程班超级班会</p>
                    <p class="p-time">2019-01-23</p>
                    <div class="p-item-footer">
                      <span class="p-price">观看回放</span>
                    </div>
                  </div>
                </a>
              </li>
              <li class="p-item">
                <a class="p-link link" @click="goProductDetailPage(32)" target="_blank">
                  <img
                    class="p-img"
                    src="https://uploadimg.koolearn.com/upload/2018-12-13/e1070d50678785e05028beaf115c5b41.jpg"
                    alt
                  >
                  <div class="p-info-wrap">
                    <p class="p-title">2019考研真题解析</p>
                    <p class="p-time">2018-12-23</p>
                    <div class="p-item-footer">
                      <span class="p-teacher">主讲 阮晔</span>
                      <span class="p-price">观看回放</span>
                    </div>
                  </div>
                </a>
              </li>
            </ul>
            <ul class="p-class-list p-selected" v-show="hotItemIndex === 2">
              <li class="p-item">
                <a class="p-link link" @click="goProductDetailPage(32)" target="_blank">
                  <img
                    class="p-img"
                    src="https://uploadimg.koolearn.com/upload/2019-02-01/f1454f923444e6e512e1a791df4cac44.jpg"
                    alt
                  >
                  <div class="p-info-wrap">
                    <p class="p-title">能不能读普高高考班来申请美国本科</p>
                    <p class="p-time">今天 19:55-21:00</p>
                    <div class="p-item-footer">
                      <span class="p-teacher">主讲 张仪</span>
                      <span class="p-price">免费领取</span>
                    </div>
                  </div>
                </a>
              </li>
              <li class="p-item">
                <a class="p-link link" @click="goProductDetailPage(32)" target="_blank">
                  <img
                    class="p-img"
                    src="https://uploadimg.koolearn.com/upload/2019-01-22/aa48d19c0edb2c0eff6766045f03e008.jpg"
                    alt
                  >
                  <div class="p-info-wrap">
                    <p class="p-title">新东方GMAT2月公益课</p>
                    <p class="p-time">今天 20:00-21:00</p>
                    <div class="p-item-footer">
                      <span class="p-teacher">主讲 周谢慧</span>
                      <span class="p-price">
                        <em class="p-unit">￥</em>1.00
                      </span>
                    </div>
                  </div>
                </a>
              </li>
              <li class="p-item">
                <a class="p-link link" @click="goProductDetailPage(32)" target="_blank">
                  <img
                    class="p-img"
                    src="https://uploadimg.koolearn.com/upload/2019-02-17/bfe4595957cc35220154edc49fc19194.jpg"
                    alt
                  >
                  <div class="p-info-wrap">
                    <p class="p-title">乔治老师托福词汇营【第2期】</p>
                    <p class="p-time">明天 19:50-21:00</p>
                    <div class="p-item-footer">
                      <span class="p-teacher">主讲 李冰洁</span>
                      <span class="p-price">
                        <em class="p-unit">￥</em>1.00
                      </span>
                    </div>
                  </div>
                </a>
              </li>
              <li class="p-item">
                <a class="p-link link" @click="goProductDetailPage(32)" target="_blank">
                  <img
                    class="p-img"
                    src="https://uploadimg.koolearn.com/upload/2019-02-14/b82c9dc362c21d770fd2da4f22fc265a.jpg"
                    alt
                  >
                  <div class="p-info-wrap">
                    <p class="p-title">新东方托福3月公益课-第6期</p>
                    <p class="p-time">2019-03-01</p>
                    <div class="p-item-footer">
                      <span class="p-teacher">主讲 吴奇</span>
                      <span class="p-price">
                        <em class="p-unit">￥</em>1.00
                      </span>
                    </div>
                  </div>
                </a>
              </li>
              <li class="p-item">
                <a class="p-link link" @click="goProductDetailPage(32)" target="_blank">
                  <img
                    class="p-img"
                    src="https://uploadimg.koolearn.com/upload/2019-02-15/840c47963cbfb4f1210a32966691e8d9.png"
                    alt
                  >
                  <div class="p-info-wrap">
                    <p class="p-title">新东方雅思3月公益课</p>
                    <p class="p-time">2019-03-04</p>
                    <div class="p-item-footer">
                      <span class="p-teacher">主讲 王煦</span>
                      <span class="p-price">
                        <em class="p-unit">￥</em>1.00
                      </span>
                    </div>
                  </div>
                </a>
              </li>
            </ul>
            <ul class="p-class-list p-selected" v-show="hotItemIndex === 3">
              <li class="p-item">
                <a class="p-link link" @click="goProductDetailPage(32)" target="_blank">
                  <img
                    class="p-img"
                    src="https://uploadimg.koolearn.com/upload/2019-01-04/0cbbc0076e9ea8cc2196b70f6b1c4084.jpg"
                    alt
                  >
                  <div class="p-info-wrap">
                    <p class="p-title">【期末冲刺满分】四年级期末重点知识串讲</p>
                    <p class="p-time">2019-01-12</p>
                    <div class="p-item-footer">
                      <span class="p-teacher">主讲 张海彬</span>
                      <span class="p-price">观看回放</span>
                    </div>
                  </div>
                </a>
              </li>
              <li class="p-item">
                <a class="p-link link" @click="goProductDetailPage(32)" target="_blank">
                  <img
                    class="p-img"
                    src="https://uploadimg.koolearn.com/upload/2019-01-04/ee99809cca0923a94f4896df1c5d1dea.jpg"
                    alt
                  >
                  <div class="p-info-wrap">
                    <p class="p-title">【期末冲刺满分】五年级期末重点知识串讲</p>
                    <p class="p-time">2019-01-12</p>
                    <div class="p-item-footer">
                      <span class="p-teacher">主讲 邵春楠</span>
                      <span class="p-price">观看回放</span>
                    </div>
                  </div>
                </a>
              </li>
              <li class="p-item">
                <a class="p-link link" @click="goProductDetailPage(32)" target="_blank">
                  <img
                    class="p-img"
                    src="https://uploadimg.koolearn.com/upload/2019-01-04/431b551e8ccc5160e03ee00d634dfb8a.jpg"
                    alt
                  >
                  <div class="p-info-wrap">
                    <p class="p-title">【期末冲刺满分】六年级应用题重点突破</p>
                    <p class="p-time">2019-01-12</p>
                    <div class="p-item-footer">
                      <span class="p-teacher">主讲 许秋琦</span>
                      <span class="p-price">观看回放</span>
                    </div>
                  </div>
                </a>
              </li>
              <li class="p-item">
                <a class="p-link link" @click="goProductDetailPage(32)" target="_blank">
                  <img
                    class="p-img"
                    src="https://uploadimg.koolearn.com/upload/2018-09-27/65e0ebc8cd939753a0a422dcb10a95a6.jpg"
                    alt
                  >
                  <div class="p-info-wrap">
                    <p class="p-title">【小升初冲刺】较复杂的分数应用</p>
                    <p class="p-time">2018-10-07</p>
                    <div class="p-item-footer">
                      <span class="p-teacher">主讲 许秋琦</span>
                      <span class="p-price">
                        <em class="p-unit">￥</em>19.90
                      </span>
                    </div>
                  </div>
                </a>
              </li>
              <li class="p-item">
                <a class="p-link link" @click="goProductDetailPage(32)" target="_blank">
                  <img
                    class="p-img"
                    src="https://uploadimg.koolearn.com/upload/2018-09-27/7bc712ff73311270bd8b49023d0fd72d.jpg"
                    alt
                  >
                  <div class="p-info-wrap">
                    <p class="p-title">【高考数学】函数难点不再难</p>
                    <p class="p-time">2018-10-07</p>
                    <div class="p-item-footer">
                      <span class="p-teacher">主讲 程玲海</span>
                      <span class="p-price">
                        <em class="p-unit">￥</em>19.90
                      </span>
                    </div>
                  </div>
                </a>
              </li>
            </ul>
            <ul class="p-class-list" :class="hotItemIndex === 4?'p-selected':'p-no-selected'">
              <li class="p-item">
                <a class="p-link link" @click="goProductDetailPage(32)" target="_blank">
                  <img
                    class="p-img"
                    src="https://uploadimg.koolearn.com/upload/2019-02-01/8dff0d6758ff243448a43babd918df7d.png"
                    alt
                  >
                  <div class="p-info-wrap">
                    <p class="p-title">黄金备考：四六级出分吐槽&amp;逆袭规划</p>
                    <p class="p-time">2019-03-04</p>
                    <div class="p-item-footer">
                      <span class="p-teacher">主讲 潘赟</span>
                      <span class="p-price">免费领取</span>
                    </div>
                  </div>
                </a>
              </li>
              <li class="p-item">
                <a class="p-link link" @click="goProductDetailPage(32)" target="_blank">
                  <img
                    class="p-img"
                    src="https://uploadimg.koolearn.com/upload/2019-01-23/2d7a9a32ae71ceb1cd0860ce96530687.jpg"
                    alt
                  >
                  <div class="p-info-wrap">
                    <p class="p-title">四六级新年过级通关宝典</p>
                    <p class="p-time">2019-01-31</p>
                    <div class="p-item-footer">
                      <span class="p-teacher">主讲 王江海</span>
                      <span class="p-price">观看回放</span>
                    </div>
                  </div>
                </a>
              </li>
              <li class="p-item">
                <a class="p-link link" @click="goProductDetailPage(32)" target="_blank">
                  <img
                    class="p-img"
                    src="https://uploadimg.koolearn.com/upload/2019-01-08/16014183f7ff7ee491f6a5146d93ff7b.png"
                    alt
                  >
                  <div class="p-info-wrap">
                    <p class="p-title">四六级寒假备考规划</p>
                    <p class="p-time">2019-01-20</p>
                    <div class="p-item-footer">
                      <span class="p-teacher">主讲 唐迟</span>
                      <span class="p-price">观看回放</span>
                    </div>
                  </div>
                </a>
              </li>
              <li class="p-item">
                <a class="p-link link" @click="goProductDetailPage(32)" target="_blank">
                  <img
                    class="p-img"
                    src="https://uploadimg.koolearn.com/upload/2018-12-29/8c9d4511f6715308abd025dbb3e35bb7.jpg"
                    alt
                  >
                  <div class="p-info-wrap">
                    <p class="p-title">四六级真题高频词串讲</p>
                    <p class="p-time">2019-01-09</p>
                    <div class="p-item-footer">
                      <span class="p-teacher">主讲 李卓然</span>
                      <span class="p-price">
                        <em class="p-unit">￥</em>19.90
                      </span>
                    </div>
                  </div>
                </a>
              </li>
            </ul>
            <ul class="p-class-list" :class="hotItemIndex === 5?'p-selected':'p-no-selected'">
              <li class="p-item">
                <a class="p-link link" @click="goProductDetailPage(32)" target="_blank">
                  <img
                    class="p-img"
                    src="https://uploadimg.koolearn.com/upload/2018-04-28/c97ca0dd3eda71b860e992ad80a5c1d1.jpg"
                    alt
                  >
                  <div class="p-info-wrap">
                    <p class="p-title">【热门课程】德福听力技巧点拨</p>
                    <p class="p-time">2019-03-01</p>
                    <div class="p-item-footer">
                      <span class="p-teacher">主讲 朱敏</span>
                      <span class="p-price">
                        <em class="p-unit">￥</em>1.00
                      </span>
                    </div>
                  </div>
                </a>
              </li>
              <li class="p-item">
                <a class="p-link link" @click="goProductDetailPage(32)" target="_blank">
                  <img
                    class="p-img"
                    src="https://uploadimg.koolearn.com/upload/2018-04-28/3c2fbd4f3bcc3947b1fd443f4d2384c7.jpg"
                    alt
                  >
                  <div class="p-info-wrap">
                    <p class="p-title">【热门课程】德福阅读技巧点拨</p>
                    <p class="p-time">2019-03-02</p>
                    <div class="p-item-footer">
                      <span class="p-teacher">主讲 傅强</span>
                      <span class="p-price">
                        <em class="p-unit">￥</em>1.00
                      </span>
                    </div>
                  </div>
                </a>
              </li>
              <li class="p-item">
                <a class="p-link link" @click="goProductDetailPage(32)" target="_blank">
                  <img
                    class="p-img"
                    src="https://uploadimg.koolearn.com/upload/2018-04-28/a28b86baf1eff0dddcf64f5e4d2abc58.jpg"
                    alt
                  >
                  <div class="p-info-wrap">
                    <p class="p-title">【热门课程】德福写作技巧点拨</p>
                    <p class="p-time">2019-03-09</p>
                    <div class="p-item-footer">
                      <span class="p-teacher">主讲 傅强</span>
                      <span class="p-price">
                        <em class="p-unit">￥</em>1.00
                      </span>
                    </div>
                  </div>
                </a>
              </li>
              <li class="p-item">
                <a class="p-link link" @click="goProductDetailPage(32)" target="_blank">
                  <img
                    class="p-img"
                    src="https://uploadimg.koolearn.com/upload/2018-04-28/fe694db5eedbdd2796138d6fd8683862.jpg"
                    alt
                  >
                  <div class="p-info-wrap">
                    <p class="p-title">【热门课程】德福口语技巧点拨</p>
                    <p class="p-time">2019-03-14</p>
                    <div class="p-item-footer">
                      <span class="p-teacher">主讲 张夏娃</span>
                      <span class="p-price">
                        <em class="p-unit">￥</em>1.00
                      </span>
                    </div>
                  </div>
                </a>
              </li>
              <li class="p-item">
                <a class="p-link link" @click="goProductDetailPage(32)" target="_blank">
                  <img
                    class="p-img"
                    src="https://uploadimg.koolearn.com/upload/2018-04-28/dfe443c5ac122429902adc968deec941.jpg"
                    alt
                  >
                  <div class="p-info-wrap">
                    <p class="p-title">【热门课程】德福阅读解题密训</p>
                    <p class="p-time">2019-03-16</p>
                    <div class="p-item-footer">
                      <span class="p-teacher">主讲 傅强</span>
                      <span class="p-price">
                        <em class="p-unit">￥</em>1.00
                      </span>
                    </div>
                  </div>
                </a>
              </li>
            </ul>
            <ul class="p-class-list" :class="hotItemIndex === 6?'p-selected':'p-no-selected'">
              <li class="p-item">
                <a class="p-link link" @click="goProductDetailPage(32)" target="_blank">
                  <img
                    class="p-img"
                    src="https://uploadimg.koolearn.com/upload/2018-12-29/c984487a525229954793313da171ee35.jpg"
                    alt
                  >
                  <div class="p-info-wrap">
                    <p class="p-title">限时1元：英语学习大作战（语音、口语、语法全突破）</p>
                    <p class="p-time">2019-03-02</p>
                    <div class="p-item-footer">
                      <span class="p-teacher">主讲 金格妃</span>
                      <span class="p-price">
                        <em class="p-unit">￥</em>1.00
                      </span>
                    </div>
                  </div>
                </a>
              </li>
              <li class="p-item">
                <a class="p-link link" @click="goProductDetailPage(32)" target="_blank">
                  <img
                    class="p-img"
                    src="https://uploadimg.koolearn.com/upload/2018-12-29/f65549e75a53cde46bc07400a0ac9c85.jpg"
                    alt
                  >
                  <div class="p-info-wrap">
                    <p class="p-title">初中新概念二册（上）：英语强化直播菁华班</p>
                    <p class="p-time">2019-03-02</p>
                    <div class="p-item-footer">
                      <span class="p-teacher">主讲 刘昭君</span>
                      <span class="p-price">
                        <em class="p-unit">￥</em>509.15
                      </span>
                    </div>
                  </div>
                </a>
              </li>
              <li class="p-item">
                <a class="p-link link" @click="goProductDetailPage(32)" target="_blank">
                  <img
                    class="p-img"
                    src="https://uploadimg.koolearn.com/upload/2018-12-20/a556d7f8b8daa5586d7ea73d4cd5bea4.jpg"
                    alt
                  >
                  <div class="p-info-wrap">
                    <p class="p-title">小学新概念一册（上）：英语基础直播菁华班</p>
                    <p class="p-time">2019-03-03</p>
                    <div class="p-item-footer">
                      <span class="p-teacher">主讲 刘萍</span>
                      <span class="p-price">
                        <em class="p-unit">￥</em>509.15
                      </span>
                    </div>
                  </div>
                </a>
              </li>
              <li class="p-item">
                <a class="p-link link" @click="goProductDetailPage(32)" target="_blank">
                  <img
                    class="p-img"
                    src="https://uploadimg.koolearn.com/upload/2018-12-05/c09bccefc08a51c17029ce982516310b.jpg"
                    alt
                  >
                  <div class="p-info-wrap">
                    <p class="p-title">一年带你读完柯林斯（2019年版）</p>
                    <p class="p-time">2019-03-07</p>
                    <div class="p-item-footer">
                      <span class="p-teacher">主讲 唐静</span>
                      <span class="p-price">
                        <em class="p-unit">￥</em>629.00
                      </span>
                    </div>
                  </div>
                </a>
              </li>
              <li class="p-item">
                <a class="p-link link" @click="goProductDetailPage(32)" target="_blank">
                  <img
                    class="p-img"
                    src="https://uploadimg.koolearn.com/upload/2019-02-26/7282129fb5eb8f88ad84d59cde48968a.jpg"
                    alt
                  >
                  <div class="p-info-wrap">
                    <p class="p-title">7天畅学：新概念二册精品体验课（3月4日开班）</p>
                    <p class="p-time">2019-03-09</p>
                    <div class="p-item-footer">
                      <span class="p-teacher">主讲 田静</span>
                      <span class="p-price">
                        <em class="p-unit">￥</em>1.00
                      </span>
                    </div>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </transition>
      </div>
    </div>
    <div class="section2">
      <div class="p-content p-max-width-wrap detail-top">
        <div class="p-left-imgs-wrap" id="jp-left-imgs-dx-wrap" style="background-image: url(http://oss.lshao.cn/images/primary_bg1.png);">
          <!-- <img
            class="p-title-img"
            src="//images.koolearn.com/shark/project/zt/2017/1205koolearn-home-gf/i/hot-course/hot-title-dx.png?f1cb1f"
            alt
          >
          <ul class="p-imgs-list jp-left-imgs-list">
            <li class="p-item p-selected">
              <a class="p-link" href="http://www.koolearn.com/ke/kaoyan2/" target="_blank">
                <img
                  class="p-course-img"
                  src="//file.koolearn.com/2018/0423/20180423111947336.jpg"
                  alt
                >
                <p class="p-course-title">2020考研（签约）全程班</p>
                <p class="p-course-info">零基础长线备考拼高分</p>
              </a>
            </li>
            <li class="p-item">
              <a class="p-link" href="http://www.koolearn.com/ke/kaoyan/" target="_blank">
                <img
                  class="p-course-img"
                  src="//file.koolearn.com/2017/1219/20171219053817588.png"
                  alt
                >
                <p class="p-course-title">2019考研复试</p>
                <p class="p-course-info">科学辅导逆袭通关</p>
              </a>
            </li>
            <li class="p-item">
              <a
                class="p-link"
                href="http://www.koolearn.com/ke/cet/?from=shouye_daxue"
                target="_blank"
              >
                <img
                  class="p-course-img"
                  src="//file.koolearn.com/2017/1219/20171219054016231.png"
                  alt
                >
                <p class="p-course-title">四六级</p>
                <p class="p-course-info">直击考点高分过级</p>
              </a>
            </li>
          </ul>
          <ul class="p-imgs-index jp-left-imgs-index-list">
            <li class="p-item p-selected"></li>
            <li class="p-item"></li>
            <li class="p-item"></li>
          </ul> -->
          <div class="top-banner">
            <p-school-banner />
          </div>
          <p class="botton-title link"  @click="goGoodsListPage('','小学')">更多课程 >></p>
        </div>
        <div class="p-middle-content-wrap">
          <ul class="p-course-list jp-get-hot-list-wrap" data-id="1281">
            <li class="p-item p-r-border p-b-border">
              <a class="p-link link" @click="goProductDetailPage(32)" target="_blank">
                <p class="p-title">
                  <span class="p-flag">NEW</span>2020考研英语进阶全程春季1班（一、二可选）
                </p>
                <p class="p-time">课时数：267</p>
                <ul class="p-teacher-list">
                  <li class="p-teacher-item">
                    <img
                      class="p-teacher-avatar"
                      src="http://oss.lshao.cn/images/teacher-icon2.jpg"
                      alt
                    >
                    <p class="p-teacher-name">王江海</p>
                  </li>

                  <!-- <li class="p-teacher-item">
                    <img
                      class="p-teacher-avatar"
                      src="//tfs.koolearn.com/class-teacher/img/201806/6410390927579287552_small.jpg"
                      alt
                    >
                    <p class="p-teacher-name">李旭</p>
                  </li>

                  <li class="p-teacher-item">
                    <img
                      class="p-teacher-avatar"
                      src="//teacher.koocdn.com/teacher/picture/201901/1548926701500_small.jpg"
                      alt
                    >
                    <p class="p-teacher-name">唐静</p>
                  </li> -->
                </ul>
              </a>
            </li>

            <li class="p-item p-r-border p-b-border">
              <a class="p-link link" @click="goProductDetailPage(32)" target="_blank">
                <p class="p-title">
                  <span class="p-flag">NEW</span>2020考研政治进阶全程班
                </p>
                <p class="p-time">课时数：125</p>
                <ul class="p-teacher-list">
                  <li class="p-teacher-item">
                    <img
                      class="p-teacher-avatar"
                      src="http://oss.lshao.cn/images/teacher-icon2.jpg"
                      alt
                    >
                    <p class="p-teacher-name">王江海</p>
                  </li>

                </ul>
              </a>
            </li>

            <li class="p-item p-b-border">
              <a class="p-link link" @click="goProductDetailPage(32)" target="_blank">
                <p class="p-title">
                  <span class="p-flag">NEW</span>大学英语四级全程2班【2019年6月】
                </p>
                <p class="p-time">课时数：131</p>
                <ul class="p-teacher-list">
                  <li class="p-teacher-item">
                    <img
                      class="p-teacher-avatar"
                      src="http://oss.lshao.cn/images/teacher-icon2.jpg"
                      alt
                    >
                    <p class="p-teacher-name">王江海</p>
                  </li>

                </ul>
              </a>
            </li>

            <li class="p-item p-r-border">
              <a class="p-link link" @click="goProductDetailPage(32)" target="_blank">
                <p class="p-title">
                  <span class="p-flag">NEW</span>大学英语六级全程2班【2019年6月】
                </p>
                <p class="p-time">课时数：131</p>
                <ul class="p-teacher-list">
                  <li class="p-teacher-item">
                    <img
                      class="p-teacher-avatar"
                      src="http://oss.lshao.cn/images/teacher-icon2.jpg"
                      alt
                    >
                    <p class="p-teacher-name">王江海</p>
                  </li>

                </ul>
              </a>
            </li>

            <li class="p-item p-r-border">
              <a class="p-link link" @click="goProductDetailPage(32)" target="_blank">
                <p class="p-title">
                  <span class="p-flag">NEW</span>大学英语六级全程2班【2019年6月】
                </p>
                <p class="p-time">课时数：131</p>
                <ul class="p-teacher-list">
                  <li class="p-teacher-item">
                    <img
                      class="p-teacher-avatar"
                      src="http://oss.lshao.cn/images/teacher-icon2.jpg"
                      alt
                    >
                    <p class="p-teacher-name">王江海</p>
                  </li>

                </ul>
              </a>
            </li>

            <li class="p-item">
              <a class="p-link link" @click="goProductDetailPage(32)" target="_blank">
                <p class="p-title">
                  <span class="p-flag">NEW</span>大学英语六级全程2班【2019年6月】
                </p>
                <p class="p-time">课时数：131</p>
                <ul class="p-teacher-list">
                  <li class="p-teacher-item">
                    <img
                      class="p-teacher-avatar"
                      src="http://oss.lshao.cn/images/teacher-icon2.jpg"
                      alt
                    >
                    <p class="p-teacher-name">王江海</p>
                  </li>

                </ul>
              </a>
            </li>
          </ul>
          <ul class="p-gg-imgs-list">
            <li class="p-item p-part1">
              <a @click="goProductDetailPage(32)" class="p-link link" target="_blank">
                <img class="p-bg-img" src="http://oss.lshao.cn/images/1-alpha-edit.png" alt>
                <p class="p-title">2020考研政治进阶全程班</p>
                <p class="p-info">阮晔 徐涛 刘源泉</p>
              </a>
            </li>
            <li class="p-item p-part1">
              <a @click="goProductDetailPage(32)" class="p-link link" target="_blank">
                <img class="p-bg-img" src="http://oss.lshao.cn/images/2-alpha-edit.png" alt>
                <p class="p-title">2020考研英语进阶全程班</p>
                <p class="p-info">王江海 李旭 唐静</p>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div class="p-content p-max-width-wrap detail-mid">
        <div class="p-left-imgs-wrap" id="jp-left-imgs-dx-wrap"  style="background-image: url(http://oss.lshao.cn/images/junior_bg1.png);">
          
          <div class="top-banner">
            <j-school-banner />
          </div>
          <p class="botton-title link"  @click="goGoodsListPage('','初中')">更多课程 >></p>
        </div>
        <div class="p-middle-content-wrap">
          <ul class="p-course-list jp-get-hot-list-wrap" data-id="1281">
            <li class="p-item p-r-border p-b-border">
              <a class="p-link link" @click="goProductDetailPage(32)" target="_blank">
                <p class="p-title">
                  <span class="p-flag">NEW</span>2020考研英语进阶全程春季1班（一、二可选）
                </p>
                <p class="p-time">课时数：267</p>
                <ul class="p-teacher-list">
                  <li class="p-teacher-item">
                    <img
                      class="p-teacher-avatar"
                      src="http://oss.lshao.cn/images/teacher-icon2.jpg"
                      alt
                    >
                    <p class="p-teacher-name">王江海</p>
                  </li>

                </ul>
              </a>
            </li>

            <li class="p-item p-r-border p-b-border">
              <a class="p-link link" @click="goProductDetailPage(32)" target="_blank">
                <p class="p-title">
                  <span class="p-flag">NEW</span>2020考研政治进阶全程班
                </p>
                <p class="p-time">课时数：125</p>
                <ul class="p-teacher-list">
                  <li class="p-teacher-item">
                    <img
                      class="p-teacher-avatar"
                      src="http://oss.lshao.cn/images/teacher-icon2.jpg"
                      alt
                    >
                    <p class="p-teacher-name">王江海</p>
                  </li>

                </ul>
              </a>
            </li>

            <li class="p-item p-b-border">
              <a class="p-link link" @click="goProductDetailPage(32)" target="_blank">
                <p class="p-title">
                  <span class="p-flag">NEW</span>大学英语四级全程2班【2019年6月】
                </p>
                <p class="p-time">课时数：131</p>
                <ul class="p-teacher-list">
                  <li class="p-teacher-item">
                    <img
                      class="p-teacher-avatar"
                      src="http://oss.lshao.cn/images/teacher-icon2.jpg"
                      alt
                    >
                    <p class="p-teacher-name">王江海</p>
                  </li>

                </ul>
              </a>
            </li>

            <li class="p-item p-r-border">
              <a class="p-link link" @click="goProductDetailPage(32)" target="_blank">
                <p class="p-title">
                  <span class="p-flag">NEW</span>大学英语六级全程2班【2019年6月】
                </p>
                <p class="p-time">课时数：131</p>
                <ul class="p-teacher-list">
                  <li class="p-teacher-item">
                    <img
                      class="p-teacher-avatar"
                      src="http://oss.lshao.cn/images/teacher-icon2.jpg"
                      alt
                    >
                    <p class="p-teacher-name">王江海</p>
                  </li>

                </ul>
              </a>
            </li>

            <li class="p-item p-r-border">
              <a class="p-link link" @click="goProductDetailPage(32)" target="_blank">
                <p class="p-title">
                  <span class="p-flag">NEW</span>大学英语六级全程2班【2019年6月】
                </p>
                <p class="p-time">课时数：131</p>
                <ul class="p-teacher-list">
                  <li class="p-teacher-item">
                    <img
                      class="p-teacher-avatar"
                      src="http://oss.lshao.cn/images/teacher-icon2.jpg"
                      alt
                    >
                    <p class="p-teacher-name">王江海</p>
                  </li>

                </ul>
              </a>
            </li>

            <li class="p-item">
              <a class="p-link link" @click="goProductDetailPage(32)" target="_blank">
                <p class="p-title">
                  <span class="p-flag">NEW</span>大学英语六级全程2班【2019年6月】
                </p>
                <p class="p-time">课时数：131</p>
                <ul class="p-teacher-list">
                  <li class="p-teacher-item">
                    <img
                      class="p-teacher-avatar"
                      src="http://oss.lshao.cn/images/teacher-icon2.jpg"
                      alt
                    >
                    <p class="p-teacher-name">王江海</p>
                  </li>

                </ul>
              </a>
            </li>
          </ul>
          <ul class="p-gg-imgs-list">
            <li class="p-item p-part1">
              <a @click="goProductDetailPage(32)" class="p-link link" target="_blank">
                <img class="p-bg-img" src="http://oss.lshao.cn/images/1-alpha-edit.png" alt>
                <p class="p-title">2020考研政治进阶全程班</p>
                <p class="p-info">阮晔 徐涛 刘源泉</p>
              </a>
            </li>
            <li class="p-item p-part1">
              <a @click="goProductDetailPage(32)" class="p-link link" target="_blank">
                <img class="p-bg-img" src="http://oss.lshao.cn/images/2-alpha-edit.png" alt>
                <p class="p-title">2020考研英语进阶全程班</p>
                <p class="p-info">王江海 李旭 唐静</p>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div class="p-content p-max-width-wrap detail-bottom">
        <div class="p-left-imgs-wrap" id="jp-left-imgs-dx-wrap"   style="background-image: url(http://oss.lshao.cn/images/high_bg1.png);">
          
          <div class="top-banner">
            <h-school-banner />
          </div>
          <p class="botton-title link"  @click="goGoodsListPage('','高中')">更多课程 >></p>
        </div>
        <div class="p-middle-content-wrap">
          <ul class="p-course-list jp-get-hot-list-wrap" data-id="1281">
            <li class="p-item p-r-border p-b-border">
              <a class="p-link link" @click="goProductDetailPage(32)" target="_blank">
                <p class="p-title">
                  <span class="p-flag">NEW</span>2020考研英语进阶全程春季1班（一、二可选）
                </p>
                <p class="p-time">课时数：267</p>
                <ul class="p-teacher-list">
                  <li class="p-teacher-item">
                    <img
                      class="p-teacher-avatar"
                      src="http://oss.lshao.cn/images/teacher-icon2.jpg"
                      alt
                    >
                    <p class="p-teacher-name">王江海</p>
                  </li>

                </ul>
              </a>
            </li>

            <li class="p-item p-r-border p-b-border">
              <a class="p-link link" @click="goProductDetailPage(32)" target="_blank">
                <p class="p-title">
                  <span class="p-flag">NEW</span>2020考研政治进阶全程班
                </p>
                <p class="p-time">课时数：125</p>
                <ul class="p-teacher-list">
                  <li class="p-teacher-item">
                    <img
                      class="p-teacher-avatar"
                      src="http://oss.lshao.cn/images/teacher-icon2.jpg"
                      alt
                    >
                    <p class="p-teacher-name">王江海</p>
                  </li>

                </ul>
              </a>
            </li>

            <li class="p-item p-b-border">
              <a class="p-link link" @click="goProductDetailPage(32)" target="_blank">
                <p class="p-title">
                  <span class="p-flag">NEW</span>大学英语四级全程2班【2019年6月】
                </p>
                <p class="p-time">课时数：131</p>
                <ul class="p-teacher-list">
                  <li class="p-teacher-item">
                    <img
                      class="p-teacher-avatar"
                      src="http://oss.lshao.cn/images/teacher-icon2.jpg"
                      alt
                    >
                    <p class="p-teacher-name">王江海</p>
                  </li>

                </ul>
              </a>
            </li>

            <li class="p-item p-r-border">
              <a class="p-link link" @click="goProductDetailPage(32)" target="_blank">
                <p class="p-title">
                  <span class="p-flag">NEW</span>大学英语六级全程2班【2019年6月】
                </p>
                <p class="p-time">课时数：131</p>
                <ul class="p-teacher-list">
                  <li class="p-teacher-item">
                    <img
                      class="p-teacher-avatar"
                      src="http://oss.lshao.cn/images/teacher-icon2.jpg"
                      alt
                    >
                    <p class="p-teacher-name">王江海</p>
                  </li>

                </ul>
              </a>
            </li>

            <li class="p-item p-r-border">
              <a class="p-link link" @click="goProductDetailPage(32)" target="_blank">
                <p class="p-title">
                  <span class="p-flag">NEW</span>大学英语六级全程2班【2019年6月】
                </p>
                <p class="p-time">课时数：131</p>
                <ul class="p-teacher-list">
                  <li class="p-teacher-item">
                    <img
                      class="p-teacher-avatar"
                      src="http://oss.lshao.cn/images/teacher-icon2.jpg"
                      alt
                    >
                    <p class="p-teacher-name">王江海</p>
                  </li>

                </ul>
              </a>
            </li>

            <li class="p-item">
              <a class="p-link link" @click="goProductDetailPage(32)" target="_blank">
                <p class="p-title">
                  <span class="p-flag">NEW</span>大学英语六级全程2班【2019年6月】
                </p>
                <p class="p-time">课时数：131</p>
                <ul class="p-teacher-list">
                  <li class="p-teacher-item">
                    <img
                      class="p-teacher-avatar"
                      src="http://oss.lshao.cn/images/teacher-icon2.jpg"
                      alt
                    >
                    <p class="p-teacher-name">王江海</p>
                  </li>
                </ul>
              </a>
            </li>
          </ul>
          <ul class="p-gg-imgs-list">
            <li class="p-item p-part1">
              <a @click="goProductDetailPage(32)" class="p-link link" target="_blank">
                <img class="p-bg-img" src="http://oss.lshao.cn/images/1-alpha-edit.png" alt>
                <p class="p-title">2020考研政治进阶全程班</p>
                <p class="p-info">阮晔 徐涛 刘源泉</p>
              </a>
            </li>
            <li class="p-item p-part1">
              <a @click="goProductDetailPage(32)" class="p-link link" target="_blank">
                <img class="p-bg-img" src="http://oss.lshao.cn/images/2-alpha-edit.png" alt>
                <p class="p-title">2020考研英语进阶全程班</p>
                <p class="p-info">王江海 李旭 唐静</p>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <!-- 为什么选择老师好 -->
      <div class="w">
        <div class="capital">
          <div class="capital-ti">
            <img
              class="capital-ti__img"
              src="http://oss.lshao.cn/images/title1.png"
            >
          </div>
          <div class="capital-list">
            <div class="capital-list-box">
              <a>
                <img class="capital-list-box__img" src="http://oss.lshao.cn/images/why_icon1.png">
                <div class="p-capital-info">
                  <h3 class="capital-list-box__h">三大平台终端</h3>
                  <p class="capital-list-box__p">多客户端支持
                    <br>Windows / Android / iOS平台
                  </p>
                </div>
              </a>
            </div>
            <div class="capital-list-box">
              <a>
                <img class="capital-list-box__img" src="http://oss.lshao.cn/images/why_icon2.png">
                <div class="p-capital-info">
                  <h3 class="capital-list-box__h">闭环在线辅导</h3>
                  <p class="capital-list-box__p">微课视频、虚拟教室、无纸化写作业
                    <br>在线考试、在线1对1、成绩统计
                  </p>
                </div>
              </a>
            </div>
            <div class="capital-list-box">
              <a>
                <img class="capital-list-box__img" src="http://oss.lshao.cn/images/why_icon3.png">
                <div class="p-capital-info">
                  <h3 class="capital-list-box__h">手写作业编辑</h3>
                  <p class="capital-list-box__p">Pad上手写作业并能编辑
                    <br>笔迹、自动批改作业、查看答案和填空题数字识别
                  </p>
                </div>
              </a>
            </div>
            <div class="capital-list-box">
              <a>
                <img class="capital-list-box__img" src="http://oss.lshao.cn/images/why_icon4.png">
                <div class="p-capital-info">
                  <h3 class="capital-list-box__h">双师课堂教学</h3>
                  <p class="capital-list-box__p">双师课堂: 名师精品课
                    <br>辅导老师闭环在线教、随时随地学
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>

      <!-- 优质合作机构 -->
      <div class="w" style="padding-bottom: 60px;">
        <div class="capital">
          <div class="capital-ti">
            <img
              class="capital-ti__img"
              src="http://oss.lshao.cn/images/title2.png"
            >
          </div>
          <ul class="coop">
            <li class="item">
              <img src="//images.koolearn.com/fe_upload/2018/1/2018-1-9-1515489909341.png">
            </li>
            <li class="item">
              <img src="//images.koolearn.com/shark/project/zt/2017/0918koolearn-home-gf/i/content/outfit_duona.png?3236a6">
            </li>
            <li class="item">
              <img src="//images.koolearn.com/fe_upload/2018/1/2018-1-9-1515489909341.png">
            </li>
            <li class="item">
              <img src="//images.koolearn.com/shark/project/zt/2017/0918koolearn-home-gf/i/content/outfit_duona.png?3236a6">
            </li>
            <li class="item">
              <img src="//images.koolearn.com/fe_upload/2018/1/2018-1-9-1515489909341.png">
            </li>
            <li class="item">
              <img src="//images.koolearn.com/shark/project/zt/2017/0918koolearn-home-gf/i/content/outfit_duona.png?3236a6">
            </li>
            <li class="item">
              <img src="//images.koolearn.com/fe_upload/2018/1/2018-1-9-1515489909341.png">
            </li>
            <li class="item">
              <img src="//images.koolearn.com/shark/project/zt/2017/0918koolearn-home-gf/i/content/outfit_duona.png?3236a6">
            </li>

          </ul>
        </div>
      </div>

      <!-- <div class="w detail-top debug">abc</div> -->
    </div>
    <ul class="top-float">
      <li class="item blue link" @click.prevent="loadPage('download')">
        <img class="float-img" src="http://oss.lshao.cn/images/download1.png" alt="">
        <p class="float-title" >下载</p>
      </li>
      <li class="item link" onclick="alert('正在规划')">
        <img class="float-img" src="http://oss.lshao.cn/images/help1.png" alt="">
        <p class="float-title">帮助</p>
      </li>
      <li class="item link " onclick="alert('正在规划')">
        <img class="float-img consult1" src="http://oss.lshao.cn/images/consult1.png" alt="">
        <p class="float-title">咨询</p>
      </li>
      <li class="item link" onclick="alert('正在规划')">
        <img class="float-img" src="http://oss.lshao.cn/images/feedback1.png" alt="">
        <p class="float-title">反馈</p>
      </li>
    </ul>
  </div>
</template>
<script type="text/ecmascript-6">
import "video.js/dist/video-js.css";
import pcBanner from "components/banner";
import { videoPlayer } from "vue-video-player";

import pSchoolBanner from "components/banner/pSchoolBanner";
import jSchoolBanner from "components/banner/jSchoolBanner";
import hSchoolBanner from "components/banner/hSchoolBanner";

export default {
  data() {
    return {
      hotItemIndex: 0,
      videos: [
        "https://lshao.oss-cn-beijing.aliyuncs.com/lshao2.0.mp4",
        "https://lshao.oss-cn-beijing.aliyuncs.com/%E8%80%81%E5%B8%88%E5%A5%BD%E6%93%8D%E4%BD%9C%E6%8C%87%E5%8D%975.0%28%E9%AB%98%E6%B8%85%29.mp4",
        "https://lshao.oss-cn-beijing.aliyuncs.com/%E4%BA%92%E5%8A%A8%E8%AF%BE%E5%A0%82.mp4"
      ],
      playerOptions: {
        // videojs options //static/images/author.jpg
        autoplay: "muted",
        height: "341px",
        width: "814px",
        muted: true,
        language: "en",
        playbackRates: [0.7, 1.0, 1.5, 2.0],
        sources: [
          {
            type: "video/mp4",
            src: "https://lshao.oss-cn-beijing.aliyuncs.com/lshao2.0.mp4"
          }
        ],
        poster: "http://lshao.cn/images/mainpage.jpg"
      },
      categoryData: [
        {
          categoryId: "",
          categoryName: "",
          productTeacherDtoList: [
            {
              id: "",
              categoryId: "",
              categoryName: ""
            }
          ]
        }
      ]
    };
  },
  mounted() {
    // 动态设置背景图的高度为浏览器可视区域高度
    // 首先在Virtual DOM渲染数据时，设置下背景图的高度．
    // this.playerOptions.width = `${document.documentElement.clientHeight * 0.5 }px`;
    // this.playerOptions.height = `${document.documentElement.clientHeight * 0.5 * 0.7}px`;
    // // 然后监听window的resize事件．在浏览器窗口变化时再设置下背景图高度．
    // const that = this;
    // window.onresize = function temp() {
    //   that.playerOptions.width = `${document.documentElement.clientHeight * 0.5 }px`;
    //   that.playerOptions.height = `${document.documentElement.clientHeight * 0.5 * 0.7 }px`;
    // };
  },
  created() {},
  activated() {
    this.queryCategoryData(res => {
      if (res.code === 200) {
        this.categoryData = res.result;
      } else {
        alert("加载主页面失败");
      }
    });
  },
  methods: {
    // listen event
    chooseVideo(number) {
      // this.playerOptions.sources[0].src = this.videos[number];
      // this.$refs.videoPlayer.player.pause();
      // this.$refs.videoPlayer.player.play();
      // console.log(`chooseVideo`);
      // console.log(this.$refs.videoPlayer.player);
      // if (number === 0) {
      //   this.playerOptions.sources[0].src = 'https://lshao.oss-cn-beijing.aliyuncs.com/lshao2.0.mp4';
      //   this.$refs.videoPlayer.player.play();
      // }else{
      //   this.playerOptions.sources[0].src = '';
      // } @click="goProductDetailPage(item.id)

      this.playerOptions.sources[0].src = this.videos[number];
      // this.$refs.videoPlayer.player.play();
    },
    onPlayerPlay(player) {
      console.log("player play!", player);
    },
    onPlayerPause(player) {
      console.log("player pause!", player);
    },
    // ...player event

    // or listen state event
    playerStateChanged(playerCurrentState) {
      console.log("player current update state", playerCurrentState);
    },

    // player is ready
    playerReadied(player) {
      console.log("the player is readied", player);
      // you can use it to do something...
      // player.[methods]
      setTimeout(() => {
        player.play();
      }, 10);
    },
    goProductDetailPage(productId) {
      this.loadPage("goods-detail", { productId: productId });
    },
    changeCateID(ID) {
      this.queryCategoryDataByID(ID, res => {
        if (res.code === 200) {
          this.categoryData = res.result;
        } else {
          alert("加载主页面失败");
        }
      });
    },
    getImage(index1, index2) {
      return require("../../assets/image/floor/floor" +
        (index1 + 1) +
        "-" +
        (index2 + 1) +
        ".jpg");
    },
    goGoodsListPage(categoryId, keyword, organId) {
      let param = {};
      param.categoryId = categoryId;
      param.keyword = keyword;
      param.organId = organId;
      this.loadPage("goods-list", param);
    },
    checkVersion() {
      // 这里全部小写
      var userAgent = navigator.userAgent.toLowerCase();
      var name = "Unknown";
      var version = "Unknown";
      if (userAgent.indexOf("win") > -1) {
        name = "Windows";
        if (userAgent.indexOf("windows nt 5.0") > -1) {
          version = "Windows 2000";
        } else if (
          userAgent.indexOf("windows nt 5.1") > -1 ||
          userAgent.indexOf("windows nt 5.2") > -1
        ) {
          version = "Windows XP";
        } else if (userAgent.indexOf("windows nt 6.0") > -1) {
          version = "Windows Vista";
        } else if (
          userAgent.indexOf("windows nt 6.1") > -1 ||
          userAgent.indexOf("windows 7") > -1
        ) {
          version = "Windows 7";
        } else if (
          userAgent.indexOf("windows nt 6.2") > -1 ||
          userAgent.indexOf("windows 8") > -1
        ) {
          version = "Windows 8";
        } else if (userAgent.indexOf("windows nt 6.3") > -1) {
          version = "Windows 8.1";
        } else if (
          userAgent.indexOf("windows nt 6.2") > -1 ||
          userAgent.indexOf("windows nt 10.0") > -1
        ) {
          version = "Windows 10";
        } else {
          version = "Unknown";
        }
      } else if (userAgent.indexOf("iphone") > -1) {
        name = "Iphone";
      } else if (userAgent.indexOf("ipad") > -1) {
        name = "iPad";
      } else if (userAgent.indexOf("mac") > -1) {
        name = "Mac";
      } else if (
        userAgent.indexOf("x11") > -1 ||
        userAgent.indexOf("unix") > -1 ||
        userAgent.indexOf("sunname") > -1 ||
        userAgent.indexOf("bsd") > -1
      ) {
        name = "Unix";
      } else if (userAgent.indexOf("linux") > -1) {
        if (userAgent.indexOf("android") > -1) {
          name = "Android";
        } else {
          name = "Linux";
        }
      } else {
        name = "Unknown";
      }
      var os = new Object();
      os.name = name;
      os.version = version;
      if (os.name === "Iphone" || os.name === "iPad") {
        window.open("https://itunes.apple.com/us/app/id1265741384");
      } else {
        this.errorTips("请在Safari中打开");
      }
    },
    queryCategoryData(resolve) {
      this.ajax({
        type: "GET",
        // url: `/uac/auth/category/getProductCategoryDtoByPid/0`,
        url: `/uac/auth/category/getCategoryAndProductDtoByPid/0`,
        success: resolve
      });
    },
    queryCategoryDataByID(ID, resolve) {
      this.ajax({
        type: "GET",
        // url: `/uac/auth/category/getProductCategoryDtoByPid/0`,
        url: `/uac/auth/category/getCategoryAndProductDtoById/${ID}`,
        success: resolve
      });
    }
  },
  components: {
    pcBanner,
    pSchoolBanner,
    jSchoolBanner,
    hSchoolBanner,
    videoPlayer
  },
  computed: {
    player() {
      return this.$refs.videoPlayer.player;
    }
  }
};
</script>
<style rel="stylesheet/scss" lang="scss">
.w .btm-enter-wrap {
  float: left;
  width: 110px;
  text-align: center;
  margin: 0 19px;
  position: relative;
  height: 80px;
}
.w .btm-enter-wrap .btm-word {
  font-size: 15px;
  color: #000;
  padding-top: 11px;
  padding-bottom: 3px;
}
.w .btm-enter-wrap .btm-enter {
  color: #fd4f02;
  font-size: 14px;
  border: 1px solid #fd4f02;
  padding: 5px 10px;
  border-radius: 20px;
  text-decoration: none;
}

.orgin {
  font-size: 20px;
  text-align: right;
}
.panel-body {
  margin-top: -30px;
}

h3.title {
  font-size: 22px;
}
.lead {
  margin-top: -30px;
  margin-left: 50px;
}
.titlePhoto {
  // width: 70%;
  // width: 70px;
  // height: 70px;
  margin-top: -40px;
  margin-left: 50px;
  max-width: 70%;
  // max-height: 70%;
  display: inline-block;
  text-align: center;
}
.video-js .vjs-big-play-button {
  top: 50%;
  left: 50%;
  margin-top: -0.7em;
  margin-left: -1.5em;
}
// .p-course-list .p-item {
//   float: left;
//   box-sizing: border-box;
//   width: 216px;
//   height: 192px;
//   border-left: 1px solid #c0c4cc;
//   border-top: 1px solid #c0c4cc;
//   border-bottom: 1px solid #c0c4cc;
// }
// .p-course-list .p-item:last-child {
//   border-right: 1px solid #c0c4cc;
// }

// .p-course-list .p-item .p-title {
//   height: 34px;
//   font-size: 14px;
//   line-height: 16px;
//   color: #545e64;
//   word-break: break-all;
//   overflow: hidden;
// }

.p-course-list .p-item .p-title .p-flag {
  display: inline-block;
  padding: 3px;
  margin-right: 5px;
  font-size: 12px;
  line-height: 12px;
  color: #fff;
  border-radius: 3px;
  background-color: #54d2d5;
}

.p-course-list .p-item .p-time {
  height: 32px;
  overflow: hidden;
  margin-top: 6px;
  font-size: 12px;
  line-height: 16px;
  color: #4d7fff;
}
.p-course-list .p-item .p-price {
  color: #29d;
}

.p-course-list .p-item .p-link {
  display: inline-block;
  box-sizing: border-box;
  width: 237px;
  height: 192px;
  padding: 25px 40px 0 25px;
  text-decoration: none;
}
.p-course-list .p-item .p-teacher-list .p-teacher-item:first-child {
  margin-left: 0;
}
.p-course-list .p-item .p-teacher-list .p-teacher-item {
  float: left;
  width: 40px;
  height: 66px;
  margin-left: 10px;
  text-align: center;
  overflow: hidden;
}
.p-course-list .p-item .p-teacher-list .p-teacher-item .p-teacher-avatar {
  display: inline-block;
  width: 38px;
  height: 38px;
  border: 1px solid #f4f4f4;
}
.p-course-list .p-item .p-teacher-list .p-teacher-item .p-teacher-name {
  margin-top: 8px;
  font-size: 12px;
  line-height: 12px;
  color: #828282;
}
h4 {
  font-size: 18px;
  margin-top: 0px;
  margin-left: 565px;
}

.radius {
  width: 1080px;
  height: 450px;
  background-color: red;
  border-radius: 24px;
}

.radius .radius-left {
  width: 240px;
  height: 450px;
  background-color: #2b333b;
}

.radius .radius-left span {
  width: 70px;
  height: 17px;
  font-size: 18px;
  font-weight: normal;
  font-stretch: normal;
  letter-spacing: 0px;
  color: #e2ebff;
  top: 27px;
  position: relative;
}

.radius .radius-left ul {
  position: relative;
  top: 20px;
}

.radius .radius-left ul li {
  margin-right: 20px;
  margin-top: 20px;
  float: left;
  height: 14px;

  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  letter-spacing: 0px;
  color: #e2ebff;
}

.radius .radius-left .top {
  margin-left: 20px;
  margin-right: 20px;
  height: 104px;
  // background-color: yellow;
  border-bottom: 1px solid rgba($color: #e7e7e7, $alpha: 0.12);
}

.radius .radius-left .mid {
  height: 164px;
  margin-left: 20px;
  margin-right: 20px;
  border-bottom: 1px solid rgba($color: #e7e7e7, $alpha: 0.12);
}

.radius .radius-left .botton {
  margin-left: 20px;
  margin-right: 20px;
  height: 182px;
}
                                                                   
.radius .radius-right {
    width: 840px;
    height: 450px;
    background-color: green;
    /* border-radius: 24px; */
    position: absolute;
    top: 0;
    right: 0;
}

.p-content {
  margin-top: 20px;
}

body .p-max-width-wrap {
  box-sizing: border-box;
  width: 1080px;
  margin: 0 auto;
  padding-top: 60px;
}

.p-content .p-title-wrap {
  position: relative;
  line-height: 20px;
  padding: 0 15px;
}
.p-content .p-title-wrap .p-title:before {
  content: "";
  display: inline-block;
  height: 16px;
  width: 4px;
  margin-right: 10px;
  background-color: #4d7fff;
}

.p-content .p-title-wrap .p-title {
  display: inline-block;
  margin-right: 43px;
  font-size: 20px;
  color: #4d7fff;
}
.p-content .p-title-wrap .p-tabs-list {
  display: inline-block;
  vertical-align: text-bottom;
}

.p-content .p-title-wrap .p-tabs-list > .p-item.p-selected,
.p-content .p-title-wrap .p-tabs-list > .p-item:hover {
  color: #4d7fff;
}

// .p-content .p-title-wrap .p-tabs-list > .p-item.p-selected {
  // display: block;
// }

.p-content .p-title-wrap .p-tabs-list > .p-item.p-no-selected {
  // display: none;
  color: #9fadb5;
}

.p-content .p-title-wrap .p-tabs-list > .p-item:first-child {
  margin-left: 0;
}
.p-content .p-title-wrap .p-tabs-list > .p-item {
  float: left;
  margin-left: 30px;
  line-height: 20px;
  font-size: 14px;
  color: #9fadb5;
  cursor: pointer;
}

.p-content .p-title-wrap .p-more-link {
  position: absolute;
  right: 15px;
  top: 9px;
  display: inline-block;
  width: 32px;
  height: 10px;
  background-position: -190px 0;
  text-decoration: none;
}

.p-content .p-class-wrap {
  position: relative;
  min-height: 296px;
  padding-top: 12px;
}

.p-content .p-class-wrap .p-class-list.p-selected {
  z-index: 2;
  display: block;
}

.p-content .p-class-wrap .p-class-list.p-no-selected {
  display: none;
}
.p-content .p-class-wrap .p-class-list {
  position: absolute;
  z-index: 1;
  width: 100%;
  display: none;
}

.p-content .p-class-wrap .p-class-list .p-item {
  box-sizing: border-box;
  width: 20%;
  padding-top: 20px;
  float: left;
}

.p-content .p-class-wrap .p-class-list .p-item:first-child .p-link,
.p-content .p-class-wrap .p-class-list .p-item:hover .p-link {
  border-left-color: #fff;
}

.p-content .p-class-wrap .p-class-list .p-item .p-link {
  box-sizing: border-box;
  display: inline-block;
  width: 100%;
  padding-left: 15px;
  padding-right: 15px;
  text-decoration: none;
}
body a,
body a:active,
body a:hover {
  outline: 0 !important;
  text-decoration: none;
}

.p-content .p-class-wrap .p-class-list .p-item .p-link .p-img {
  width: 200px;
  height: 130px;
  border-radius: 10px;
}
fieldset,
img {
  border: 0;
}

.p-content .p-class-wrap .p-class-list .p-item .p-link .p-info-wrap {
  box-sizing: border-box;
  padding: 20px 10px;
  text-align: left;
  width: 200px;
}

.p-content .p-class-wrap .p-class-list .p-item .p-link .p-info-wrap .p-title {
  height: 32px;
  word-break: break-all;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 14px;
  line-height: 16px;
  color: #545e64;
}

.p-content .p-class-wrap .p-class-list .p-item .p-link .p-info-wrap .p-time {
  margin-top: 15px;
  font-size: 12px;
  line-height: 12px;
  color: #999999;
}

.p-content
  .p-class-wrap
  .p-class-list
  .p-item
  .p-link
  .p-info-wrap
  .p-item-footer {
  position: relative;
  margin-top: 12px;
  height: 23px;
  line-height: 22px;
}

.p-content
  .p-class-wrap
  .p-class-list
  .p-item
  .p-link
  .p-info-wrap
  .p-item-footer
  .p-teacher {
  display: inline-block;
  font-size: 12px;
  color: #828282;
  vertical-align: middle;
  width: 96px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.p-content
  .p-class-wrap
  .p-class-list
  .p-item
  .p-link
  .p-info-wrap
  .p-item-footer
  .p-price {
  position: absolute;
  right: 2px;
  top: 0;
  display: inline-block;
  font-size: 22px;
  color: #ff8330;
}

.p-content
  .p-class-wrap
  .p-class-list
  .p-item
  .p-link
  .p-info-wrap
  .p-item-footer
  .p-price
  .p-unit {
  font-size: 14px;
}
ol,
ul {
  margin-top: 0;
  margin-bottom: 0px;
}
.ad {
  background-color: #ffffff;
}

.section2 {
  background-color: #f5f8fb;
  padding-top: 60px;
}

.section2 .detail-top {
  padding-top: 60px;
  height: 380px;
}

.section2 .detail-mid {
  margin-top: 60px;
  height: 380px;
}

.section2 .detail-bottom {
  margin-top: 60px;
  height: 380px;
}

.debug {
  background-color: red;
  height: 1000px;
}
img {
  display: inline;
}
.p-item {
  transition: all 0.3s linear;
  -webkit-transition: all 0.3s linear;
  -ms-transition: all 0.3s linear;
  -moz-transition: all 0.3s linear;
  -o-transition: all 0.3s linear;
}
// 动画不生效
.fade-enter-active,
.fade-leave-active {
  transition: all 2s ease-out;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

.p-hot-course-wrap.p-green-wrap .p-content {
  border-bottom: 1px solid #54d2d5;
}
.p-content {
  position: relative;
  height: 384px;
  background-color: #fff;
}
body .p-max-width-wrap {
  box-sizing: border-box;
  width: 1080px;
  margin: 0 auto;
}
.p-hot-course-wrap.p-green-wrap .p-content .p-left-imgs-wrap,
.p-hot-course-wrap.p-green-wrap .p-content .p-middle-content-wrap .p-flag {
  background-color: #54d2d5;
  
}
.p-content .p-left-imgs-wrap {
  position: absolute;
  left: 0;
  top: 0;
  display: inline-block;
  width: 226px;
  height: 380px;
  text-align: center;
  vertical-align: top;
  cursor: default;
  background-color: green;
}
.p-content .p-left-imgs-wrap .p-title-img {
  margin-top: 25px;
}
.p-content .p-left-imgs-wrap .p-imgs-list {
  position: relative;
  margin-top: 35px;
  height: 250px;
  overflow: hidden;
  background-image: url(//images.koolearn.com/shark/project/zt/2017/1205koolearn-home-gf/i/hot-course/left-imgs-bg.png?b0bf3d);
  background-repeat: no-repeat;
  background-position: center;
}
.p-content .p-left-imgs-wrap .p-imgs-list {
  position: relative;
  margin-top: 35px;
  height: 250px;
  overflow: hidden;
  background-image: url(//images.koolearn.com/shark/project/zt/2017/1205koolearn-home-gf/i/hot-course/left-imgs-bg.png?b0bf3d);
  background-repeat: no-repeat;
  background-position: center;
}
.p-content .p-left-imgs-wrap .p-imgs-list .p-item {
  text-align: center;
  position: absolute;
  left: 240px;
  width: 188px;
  filter: alpha(opacity=0);
  -moz-opacity: 0;
  opacity: 0;
  z-index: 0;
}
.p-content .p-left-imgs-wrap .p-imgs-list .p-item {
  text-align: center;
  position: absolute;
  left: 240px;
  width: 188px;
  filter: alpha(opacity=0);
  -moz-opacity: 0;
  opacity: 0;
  z-index: 0;
}
.p-content .p-left-imgs-wrap .p-imgs-list .p-item .p-link {
  position: relative;
  left: 0;
  display: inline-block;
  width: 188px;
  height: 250px;
  box-sizing: border-box;
  padding: 0 24px;
  border-radius: 5px;
  overflow: hidden;
}
.p-content .p-left-imgs-wrap .p-imgs-list .p-item .p-course-img {
  position: absolute;
  left: 0;
  right: 0;
  width: 188px;
  height: 250px;
}
.p-content .p-left-imgs-wrap .p-imgs-list .p-item .p-course-title {
  position: relative;
  margin-top: 25px;
  font-size: 14px;
  line-height: 20px;
}
.p-hot-course-wrap.p-green-wrap .p-content .p-left-imgs-wrap .p-course-title,
.p-hot-course-wrap.p-green-wrap .p-content .p-middle-content-wrap .p-time {
  color: #00b2b8;
}
.p-content .p-left-imgs-wrap .p-imgs-list .p-item .p-course-info {
  position: relative;
  font-size: 12px;
  line-height: 20px;
  color: #828282;
}
.p-content .p-middle-content-wrap {
  position: absolute;
  display: inline-block;
  box-sizing: border-box;
  width: 854px;
  left: 226px;
  top: 0px;
}
.p-content .p-middle-content-wrap .p-course-list {
  display: inline-block;
  width: 672px;
  margin-right: 227px;
}
.p-content .p-middle-content-wrap .p-course-list .p-item.p-b-border {
  border-bottom: 1px solid #f4f4f4;
}
.p-content .p-middle-content-wrap .p-course-list .p-item.p-r-border {
  border-right: 1px solid #f4f4f4;
}
.p-content .p-middle-content-wrap .p-course-list .p-item {
  float: left;
  box-sizing: border-box;
  width: 215px;
  height: 192px;
}
.p-content .p-middle-content-wrap .p-course-list .p-item .p-link {
  display: inline-block;
  box-sizing: border-box;
  width: 237px;
  height: 192px;
  padding: 25px 40px 0 25px;
}
.p-content .p-middle-content-wrap .p-course-list .p-item .p-title {
  height: 34px;
  font-size: 14px;
  line-height: 16px;
  color: #545e64;
  word-break: break-all;
  overflow: hidden;
}
.p-content .p-middle-content-wrap .p-course-list .p-item .p-title .p-flag {
  display: inline-block;
  padding: 3px;
  margin-right: 5px;
  font-size: 12px;
  line-height: 12px;
  color: #fff;
  border-radius: 3px;
}
.p-hot-course-wrap.p-green-wrap .p-content .p-left-imgs-wrap,
.p-hot-course-wrap.p-green-wrap .p-content .p-middle-content-wrap .p-flag {
  background-color: #54d2d5;
}

.p-content .p-middle-content-wrap .p-course-list .p-item .p-time {
  height: 32px;
  overflow: hidden;
  margin-top: 6px;
  font-size: 12px;
  line-height: 16px;
}
.p-hot-course-wrap.p-green-wrap .p-content .p-left-imgs-wrap .p-course-title,
.p-hot-course-wrap.p-green-wrap .p-content .p-middle-content-wrap .p-time {
  color: #00b2b8;
}
.p-content .p-middle-content-wrap .p-course-list .p-item .p-teacher-list {
  margin-top: 15px;
}
.p-content
  .p-middle-content-wrap
  .p-course-list
  .p-item
  .p-teacher-list
  .p-teacher-item:first-child {
  margin-left: 0;
}
.p-content
  .p-middle-content-wrap
  .p-course-list
  .p-item
  .p-teacher-list
  .p-teacher-item {
  float: left;
  width: 40px;
  height: 66px;
  margin-left: 10px;
  text-align: center;
  overflow: hidden;
}
.p-content
  .p-middle-content-wrap
  .p-course-list
  .p-item
  .p-teacher-list
  .p-teacher-item
  .p-teacher-avatar {
  display: inline-block;
  width: 38px;
  height: 38px;
  border: 1px solid #f4f4f4;
    object-fit: cover;
    object-position: 50% 0%;
}
.p-content
  .p-middle-content-wrap
  .p-course-list
  .p-item
  .p-teacher-list
  .p-teacher-item
  .p-teacher-name {
  margin-top: 8px;
  font-size: 12px;
  line-height: 12px;
  color: #828282;
}

.p-content .p-middle-content-wrap .p-gg-imgs-list {
  position: absolute;
  right: 0;
  top: 0;
  display: inline-block;
  box-sizing: border-box;
}

.p-content .p-middle-content-wrap .p-gg-imgs-list .p-item {
  height: 190px;
}

.p-content .p-middle-content-wrap .p-gg-imgs-list .p-item .p-link {
  position: relative;
  display: inline-block;
  box-sizing: border-box;
  width: 210px;
  height: 192px;
  padding: 25px 20px 0 25px;
  word-break: break-all;
  overflow: hidden;
}
.p-content .p-middle-content-wrap .p-gg-imgs-list .p-item .p-bg-img {
  position: absolute;
  left: 0;
  top: 0;
  z-index: 0;
  height: 190px;
  width: 237px;
}
.p-content .p-middle-content-wrap .p-gg-imgs-list .p-item .p-bg-img {
  position: absolute;
  left: 0;
  top: 0;
  z-index: 0;
  height: 190px;
  width: 237px;
}
.p-hot-course-wrap.p-green-wrap
  .p-content
  .p-middle-content-wrap
  .p-gg-imgs-list
  .p-item
  .p-info {
  color: #8295af;
}
.p-content .p-middle-content-wrap .p-gg-imgs-list .p-item .p-info {
  position: relative;
  left: 0;
  margin-top: 6px;
  font-size: 12px;
  line-height: 12px;
}

.capital {
  width: 1190px;
  padding-top: 60px;
  margin: 0 auto;
  clear: both;
  float: none;
}
.capital .capital-ti {
  text-align: center;
}
fieldset,
img {
  border: 0;
}

.capital .capital-list .capital-list-box:first-child {
  margin-left: 0;
}
.capital .capital-list .capital-list-box {
  width: 262px;
  height: 262px;
  // display: inline-block;
  box-sizing: border-box;
  float: left;
  margin-left: 10px;
  padding-top: 58px;
  text-align: center;
}

.capital .capital-list .capital-list-box .p-pr23 {
  padding-right: 23px !important;
}

.capital .capital-list .capital-list-box .capital-list-box__img {
  height: 70px;
  width: 70px;
}

.capital .capital-list .capital-list-box .p-capital-info {
  // display: inline-block;
  text-align: center;
}
.capital .capital-list .capital-list-box .p-capital-info .capital-list-box__h {
  color: #545e64;
  font-size: 18px;
  line-height: 18px;
}
.capital .capital-list .capital-list-box .p-capital-info .capital-list-box__p {
  line-height: 20px;
  color: #9fadb5;
  font-size: 14px;
}
.capital .coop{
  margin-top: 20px;
  margin-bottom: 40px;
  color: #9fadb5;
}
.capital .coop .item{
  float: left;
    margin-right: 93px;
    margin-top: 22px;
}
.top-float{
  position: fixed;
  right: 0px;
  top: 260px;
  box-shadow: 0px 4px 12px 0px rgba(34, 23, 20, 0.1);
}

.top-float .item{
	width: 60px;
	height: 60px;
	background-color: #ffffff;
}
.top-float .blue{
	background-color: #4d7fff;
}
.float-title{
  position: relative;
    top: 17px;
    left: 20px;
    color: #ccc;
}

.float-img{
  position: relative;
    top: 10px;
    left: 24px;
}
.float-img.consult1{
  position: relative;
    top: 10px;
    left: 21px;
}


.section2 .top-banner {
    left: 22px;
    bottom: 80px;
    width: 150px;
    height: 180px;
    background-color: #ffffff;
    border-radius: 8px;
    position: absolute;
}

.section2 .botton-title {
    bottom: 29px;
    position: absolute;
    width: 66px;
    height: 12px;
    font-size: 12px;
    font-weight: normal;
    font-stretch: normal;
    letter-spacing: 0px;
    color: #ffffff;
    left: 25px;
}


</style>
