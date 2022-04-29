import Vue from "vue";

// 引入app，router，store
import App from "./App.vue";
import router from "./router";
import store from "./store";

// 引入normalize
import "normalize.css/normalize.css"; // A modern alternative to CSS resets

// 引入view-design
import ViewUI from "view-design";
// 引入自定义主题
import "@/styles/theme/ivu-default.less";
Vue.use(ViewUI);

// 引入全局index样式
import "@/styles/index.less";

// 引入icon图标和权限
import "@/icons";
import "./permission";

// 引入vue-meta-info
import MetaInfo from "vue-meta-info";
Vue.use(MetaInfo);

// 全局组件
Vue.component("PageHeader", () => import("@/components/PageHeader"));
Vue.component("ILink", () => import("@/components/ILink"));

// 组织vue在启动时生成生产提示
Vue.config.productionTip = false;

// 创建Vue实例
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
