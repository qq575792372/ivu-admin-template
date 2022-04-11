import Layout from "@/layout";
import ParentView from "@/components/ParentView";

/**
 * 异步路由列表，模拟后台加载菜单后生成的路由数据
 */
export const asyncRoutes = [
  // 列表页面
  {
    path: "/table",
    component: Layout,
    redirect: "/table/basic-table",
    meta: {
      title: "列表页面",
      icon: "ivu-icon-md-list-box",
    },
    alwaysShow: true,
    children: [
      {
        path: "basic-table",
        name: "BasicTable",
        component: () => import("@/views/table/basic-table"),
        meta: {
          title: "基础列表",
        },
      },
    ],
  },

  // 多级菜单
  {
    path: "/netsted",
    component: Layout,
    redirect: "/netsted/menu1/menu1-1",
    meta: {
      title: "多级菜单",
      icon: "ivu-icon-md-menu",
    },
    alwaysShow: true,
    children: [
      {
        path: "menu1",
        name: "menu1",
        meta: {
          title: "菜单1",
        },
        // 多级菜单，需要设置parent的组件为ParentView才可以
        component: ParentView,
        children: [
          {
            path: "menu1-1",
            name: "menu1-1",
            meta: {
              title: "菜单1-1",
            },
            component: () => import("@/views/netsted/menu1/menu1-1"),
          },
          {
            path: "menu1-2",
            name: "menu1-2",
            meta: {
              title: "菜单1-2",
            },
            component: () => import("@/views/netsted/menu1/menu1-2"),
          },
        ],
      },
      {
        path: "menu2",
        name: "menu2",
        meta: {
          title: "菜单2",
        },
        component: () => import("@/views/netsted/menu2"),
      },
    ],
  },

  // 跳转外部链接
  {
    path: "https://cn.bing.com",
    name: "linkBiying",
    meta: { title: "当前窗口打开", icon: "ivu-icon-md-share" },
  },
  {
    path: "https://www.baidu.com",
    name: "linkBaidu",
    meta: { title: "打开新窗口", icon: "ivu-icon-md-link", target: "_blank" },
  },
];
