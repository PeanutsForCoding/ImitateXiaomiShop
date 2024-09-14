<script setup>
import { ref } from 'vue';
import { SearchIcon } from 'tdesign-icons-vue-next'

const emit = defineEmits(['handleMouseEvent'])

const navMenuList = ref([
  {
    id: 1,
    name: 'Xiaomi手机',
  },
  {
    id: 2,
    name: 'Redmi手机',
  },
  {
    id: 3,
    name: '电视',
  },
  {
    id: 4,
    name: '平板',
  },
  {
    id: 5,
    name: '笔记本',
  },
  {
    id: 6,
    name: '家电',
  },
  {
    id: 7,
    name: '路由器',
  },
])

function handleEnter() {
  emit('handleMouseEvent', true)
}
function handleLeave() {
  emit('handleMouseEvent', false)
}
</script>

<template>
  <div class="home-page-subnavbar-wrapper flex flex-row items-center">
    <div class="logo">
      <a href="https://www.mi.com/" title="小米官网"></a>
    </div>
    <ul class="menu-list flex flex-row items-center gap-x-[20px]">
      <li class="menu-item" v-for="item in navMenuList" :key="item.id" @mouseenter.stop="handleEnter"
        @mouseleave.stop="handleLeave">{{
          item.name }}</li>
      <li class="menu-item">社区</li>
      <li class="menu-item">服务中心</li>
    </ul>
    <div class="search-wrapper">
      <t-form>
        <t-form-item name="searchShop" initial-data="手机">
          <t-input placeholder="手机">
            <template #suffixIcon>
              <div class="search-icon flex items-center justify-center">
                <search-icon />
              </div>
            </template>
          </t-input>
        </t-form-item>
      </t-form>
    </div>
  </div>
</template>

<style lang='less' scoped>
.home-page-subnavbar-wrapper {
  height: 100px;
  background: var(--color-theme2);

  .logo {
    margin-right: 128px;
    width: 62px;
    height: 56px;
    background: url('@/assets/images/logo-mi2.png') no-repeat top right / contain;
  }

  .menu-list {
    margin-right: auto;

    .menu-item {
      height: 100px;
      line-height: 100px;
      cursor: pointer;

      &:hover {
        color: var(--color-theme1);
      }
    }
  }

  .search-wrapper {
    :deep(.t-form__controls) {
      margin-left: 0 !important;
      display: block;
    }

    :deep(.t-input) {
      height: 50px;
      width: 298px;
      padding-right: 0;
    }

    :deep(.t-input--focused) {
      box-shadow: none;
    }

    .search-icon {
      height: 50px;
      width: 52px;
      border: 1px solid var(--td-border-level-2-color);
      border-right: none;
      cursor: pointer;

      &:hover {
        background: var(--color-theme1);
        color: var(--color-theme2)
      }
    }

    &:hover {
      .search-icon {
        border-color: var(--color-theme1);
      }
    }
  }
}
</style>