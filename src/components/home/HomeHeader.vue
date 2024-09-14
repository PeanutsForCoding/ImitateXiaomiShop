<script setup>
import { ref } from 'vue';

const navBarList = ref([
  {
    id: 1,
    title: '小米官网',
  },
  {
    id: 2,
    title: '小米商城',
  },
  {
    id: 3,
    title: '文档',
  },
  {
    id: 4,
    title: '关于',
  },
  {
    id: 5,
    title: '文档',
  },
  {
    id: 6,
    title: '关于',
  },
  {
    id: 7,
    title: '文档',
  },
  {
    id: 8,
    title: '关于',
  },
  {
    id: 9,
    title: '文档',
  },
  {
    id: 10,
    title: '关于',
  }
]);
</script>

<template>
  <t-header>
    <div class="home-page-navbar-wrapper flex flex-row items-center">
      <ul class="home-page-navbar-list flex flex-row">
        <li class="home-page-navbar-item flex flex-row items-center" v-for="item in navBarList" :key="item.id">{{
          item.title }}
        </li>
        <li class="app-down-item">下载app</li>
      </ul>
      <ul class="home-page-toolsbar-list flex flex-row gap-x-[.5em]">
        <li class="flex flex-row">登录</li>
        <li class="flex flex-row">注册</li>
        <li class="flex flex-row">消息通知</li>
      </ul>
      <div class="home-page-shopcar-btn">购物车</div>
    </div>
  </t-header>
</template>

<style lang='less' scoped>
.navbar-item-hover(@textColor: var(--color-theme2)) {
  cursor: pointer;

  &:hover {
    color: @textColor;
  }
}

.space-vertical-line {
  .navbar-item-hover();

  &::after {
    content: '|';
    display: block;
    margin: 0 .5em;
    color: var(--color-text3);
  }

  &:last-child {
    &::after {
      content: '';
    }
  }
}

.t-layout__header {
  height: 40px;
  line-height: 40px;
  color: var(--color-text2);
  background: var(--color-theme3);
  border-top-left-radius: 8px;
}

.home-page-navbar {
  &-wrapper {
    margin: 0 auto;
    height: 100%;
    width: 1226px;
    font-size: 12px;
    color: var(--color-text2);
  }

  &-list {
    margin-right: auto;

    .app-down-item {
      .navbar-item-hover()
    }
  }

  &-item {
    .space-vertical-line()
  }
}

.home-page-toolsbar-list {
  li {
    .space-vertical-line()
  }
}

.home-page-shopcar-btn {
  margin-left: 15px;
  height: 40px;
  width: 120px;
  line-height: 40px;
  text-align: center;
  cursor: pointer;
  background: var(--color-text3);
  .navbar-item-hover(var(--color-theme1));

  &:hover {
    background: var(--color-theme2);
  }
}
</style>