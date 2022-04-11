<template>
  <div class="app-container">
    <!-- 页面标题 -->
    <PageHeader>
      <template slot="logo">
        <Avatar
          class="dashboard-header-logo"
          :src="require('../../assets/head.png')"
          size="large"
        />
      </template>
      <template slot="title">
        <div class="dashboard-header-title">欢迎{{ name }}登录！</div>
      </template>
      <template slot="content">
        <div class="dashboard-header-content">今天周一，多云</div>
      </template>
    </PageHeader>
  </div>
</template>
<script>
import { mapGetters } from "vuex";

export default {
  name: "Dashboard",
  computed: {
    ...mapGetters(["name"]),
  },
};
</script>

<style lang="less" scoped>
.app-container {
  // 登录欢迎信息
  .dashboard-header {
    &-logo {
      width: 64px;
      height: 64px;
      border-radius: 50%;
    }
    &-title {
      color: #17233d;
    }
    &-content {
      color: #808695;
    }
  }

  // 主要信息
  .main-container {
    margin-top: 0px;
  }
}
</style>
