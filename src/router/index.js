export default [
  {
    path: '/',
    redirect: {
      name: 'Index'
    },
    component: resolve => require(['views/index'], resolve),
    children: [
      {
        name: 'Index',
        path: 'index',
        meta: {
          hideMainHeader: false
        },
        component: resolve => require(['views/home'], resolve)
      },
      {
        name: 'user-cart',
        path: 'cart',
        meta: {
          name: '我的购物车',
          requestAuth: false,
          hideMainHeader: false
        },
        component: resolve => require(['views/user/user-cart'], resolve)
      },
      {
        name: 'order-confirm',
        path: 'confirm',
        meta: {
          name: '订单确认',
          requestAuth: true,
          hideMainHeader: false
        },
        component: resolve => require(['views/order/confirm'], resolve)
      },
      {
        name: 'order-payment',
        path: 'payment',
        meta: {
          name: '支付订单',
          requestAuth: true,
          hideMainHeader: false
        },
        component: resolve => require(['views/order/payment'], resolve)
      },
      {
        name: 'goods-detail',
        path: 'detail',
        meta: {
          name: '商品详情',
          requestAuth: false,
          hideMainHeader: false
        },
        component: resolve => require(['views/goods/goods-detail'], resolve)
      },
      {
        name: 'goods-list',
        path: 'list',
        meta: {
          name: '商品列表',
          requestAuth: false,
          hideMainHeader: false
        },
        component: resolve => require(['views/goods/goods-list'], resolve)
      },
      {
        name: 'order-detail',
        path: 'orderDetail',
        meta: {
          name: '订单详情',
          requestAuth: true,
          hideMainHeader: false
        },
        component: resolve => require(['views/order/detail'], resolve)
      },
      {
        name: 'oper-result',
        path: 'result',
        meta: {
          name: '操作结果',
          hideMainHeader: true
        },
        component: resolve => require(['views/result'], resolve)
      },
      {
        name: 'user-center',
        path: 'center',
        meta: {
          name: '个人中心',
          requestAuth: true,
          hideMainHeader: false
        },
        component: resolve => require(['views/user/user-center'], resolve)
      },
      {
        name: 'user-center-update',
        path: 'updateUser',
        meta: {
          name: '修改个人信息',
          requestAuth: true,
          hideMainHeader: false
        },
        component: resolve => require(['views/user/user-center-update'], resolve)
      },
      {
        name: 'user-order',
        path: 'order',
        meta: {
          name: '我的订单',
          requestAuth: true,
          hideMainHeader: false
        },
        component: resolve => require(['views/user/user-order'], resolve)
      },
      {
        name: 'user-pass-update',
        path: 'updateUserPwd',
        meta: {
          name: '修改密码',
          requestAuth: true,
          hideMainHeader: false
        },
        component: resolve => require(['views/user/user-pass-update'], resolve)
      },
      {
        name: 'about',
        path: 'aboutMe',
        meta: {
          name: '关于老师好在线',
          hideMainHeader: false
        },
        component: resolve => require(['views/about'], resolve)
      },
      {
        name: 'question',
        path: 'question',
        meta: {
          name: '常见问题',
          hideMainHeader: false
        },
        component: resolve => require(['views/about/question'], resolve)
      },
      {
        name: 'register',
        path: 'register',
        meta: {
          name: '新用户注册',
          hideMainHeader: false
        },
        component: resolve => require(['views/about/register'], resolve)
      },
      {
        name: 'payonline',
        path: 'payonline',
        meta: {
          name: '在线支付',
          hideMainHeader: false
        },
        component: resolve => require(['views/about/payonline'], resolve)
      },
      {
        name: 'invoice',
        path: 'invoice',
        meta: {
          name: '开具发票',
          hideMainHeader: false
        },
        component: resolve => require(['views/about/invoice'], resolve)
      },
      {
        name: 'howtostudy',
        path: 'howtostudy',
        meta: {
          name: '如何上课',
          hideMainHeader: false
        },
        component: resolve => require(['views/about/howtostudy'], resolve)
      },
      {
        name: 'business',
        path: 'business',
        meta: {
          name: '商务合作',
          hideMainHeader: false
        },
        component: resolve => require(['views/about/business'], resolve)
      },
      {
        name: 'refund',
        path: 'refund',
        meta: {
          name: '退换课规则',
          hideMainHeader: false
        },
        component: resolve => require(['views/about/refund'], resolve)
      },
      {
        name: 'download',
        path: 'download',
        meta: {
          name: '客户端下载',
          hideMainHeader: false
        },
        component: resolve => require(['views/about/download'], resolve)
      },
      {
        name: 'zhaomu',
        path: 'zhaomu',
        meta: {
          name: '入驻流程',
          hideMainHeader: true
        },
        component: resolve => require(['views/about/zhaomu'], resolve)
      },
      {
        name: 'privacy',
        path: 'about/privacy',
        meta: {
          name: '隐私政策',
          hideMainHeader: false
        },
        component: resolve => require(['views/about/privacy'], resolve)
      },
      {
        name: 'disclaimer',
        path: 'about/disclaimer',
        meta: {
          name: '免责声明',
          hideMainHeader: false
        },
        component: resolve => require(['views/about/disclaimer'], resolve)
      }
    ]
  },
  {
    name: 'error',
    path: '*',
    redirect: {
      name: '404'
    },
    component: resolve => require(['views/error/404'], resolve)
  }
];
