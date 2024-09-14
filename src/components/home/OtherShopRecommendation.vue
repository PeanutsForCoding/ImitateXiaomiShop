<script setup>
import { ref } from 'vue'
import { getImg } from '&utils/getImg'
import { ChevronRightCircleIcon } from 'tdesign-icons-vue-next'

const tabList = ref([
  {
    id: '1',
    label: '小米手机',
  },
  {
    id: '2',
    label: '小米手机',
  },
  {
    id: '3',
    label: '小米手机',
  },
])

const activeTab = ref({
  id: '1',
  label: '小米手机',
})

function handleMouseEnter(item) {
  activeTab.value = item
}
</script>

<template>
  <div class="other-recommendation-wrapper">
    <div class="other-recommendation-header flex items-center">
      <div class="other-recommendation-title mr-auto text-[22px] h-[100%] leading-[58px]">手机</div>
      <div class="other-recommendation-tabs text-theme3 flex items-center">
        <div :class="item.id === activeTab.id && 'tab-active'" class="other-recommendation-tab cursor-pointer ml-[30px]"
          v-for="item in tabList" :key="item.id" @mouseenter="handleMouseEnter(item)">{{ item.label }}
        </div>
      </div>
    </div>
    <div class="other-recommendation-main flex">
      <div class="other-recommendation-left flex flex-col gap-y-[12px] w-[234px]">
        <router-link :to="path">
          <div class="other-recommendation-banner flex-1 hover:shadow-xl">
            <img class="h-[100%] w-[100%]" :src="getImg('water_banner')" alt="">
          </div>
        </router-link>
        <router-link :to="path">
          <div class="other-recommendation-banner flex-1 hover:shadow-xl">
            <img class="h-[100%] w-[100%]" :src="getImg('range_ hood_banner')" alt="">
          </div>
        </router-link>
      </div>
      <div class="other-recommendation-right h-[100%] flex-1 flex flex-wrap gap-y-[12px]">
        <div class="other-recommendation-item hover:shadow-xl flex flex-col items-center cursor-pointer">
          <img class="h-[160px] w-[160px] mb-[18px]" :src="getImg('phone_demo')" alt="">
          <div class="text-theme3 mb-[2px]">Xiaomi Civi 4 Pro</div>
          <div class="truncate w-[214px] text-text2 mb-[10px]">徕卡光学Summilux镜头 | 5000万徕卡人像镜头</div>
          <div class="text-theme1">
            <span>2799</span>元起
          </div>
        </div>
        <div class="other-recommendation-item hover:shadow-xl flex flex-col items-center cursor-pointer">
          <img class="h-[160px] w-[160px] mb-[18px]" :src="getImg('phone_demo')" alt="">
          <div class="text-theme3 mb-[2px]">Xiaomi Civi 4 Pro</div>
          <div class="truncate w-[214px] text-text2 mb-[10px]">徕卡光学Summilux镜头 | 5000万徕卡人像镜头</div>
          <div class="text-theme1">
            <span>2799</span>元起
          </div>
        </div>
        <div class="other-recommendation-item hover:shadow-xl flex flex-col items-center cursor-pointer">
          <img class="h-[160px] w-[160px] mb-[18px]" :src="getImg('phone_demo')" alt="">
          <div class="text-theme3 mb-[2px]">Xiaomi Civi 4 Pro</div>
          <div class="truncate w-[214px] text-text2 mb-[10px]">徕卡光学Summilux镜头 | 5000万徕卡人像镜头</div>
          <div class="text-theme1">
            <span>2799</span>元起
          </div>
        </div>
        <div class="other-recommendation-item hover:shadow-xl flex flex-col items-center cursor-pointer">
          <img class="h-[160px] w-[160px] mb-[18px]" :src="getImg('phone_demo')" alt="">
          <div class="text-theme3 mb-[2px]">Xiaomi Civi 4 Pro</div>
          <div class="truncate w-[214px] text-text2 mb-[10px]">徕卡光学Summilux镜头 | 5000万徕卡人像镜头</div>
          <div class="text-theme1">
            <span>2799</span>元起
          </div>
        </div>
        <div class="other-recommendation-item hover:shadow-xl flex flex-col items-center cursor-pointer">
          <img class="h-[160px] w-[160px] mb-[18px]" :src="getImg('phone_demo')" alt="">
          <div class="text-theme3 mb-[2px]">Xiaomi Civi 4 Pro</div>
          <div class="truncate w-[214px] text-text2 mb-[10px]">徕卡光学Summilux镜头 | 5000万徕卡人像镜头</div>
          <div class="text-theme1">
            <span>2799</span>元起
          </div>
        </div>
        <div class="other-recommendation-item hover:shadow-xl flex flex-col items-center cursor-pointer">
          <img class="h-[160px] w-[160px] mb-[18px]" :src="getImg('phone_demo')" alt="">
          <div class="text-theme3 mb-[2px]">Xiaomi Civi 4 Pro</div>
          <div class="truncate w-[214px] text-text2 mb-[10px]">徕卡光学Summilux镜头 | 5000万徕卡人像镜头</div>
          <div class="text-theme1">
            <span>2799</span>元起
          </div>
        </div>
        <div class="other-recommendation-item hover:shadow-xl flex flex-col items-center cursor-pointer">
          <img class="h-[160px] w-[160px] mb-[18px]" :src="getImg('phone_demo')" alt="">
          <div class="text-theme3 mb-[2px]">Xiaomi Civi 4 Pro</div>
          <div class="truncate w-[214px] text-text2 mb-[10px]">徕卡光学Summilux镜头 | 5000万徕卡人像镜头</div>
          <div class="text-theme1">
            <span>2799</span>元起
          </div>
        </div>
        <div
          class="other-recommendation-more-card hover:shadow-xl flex gap-x-[10px] items-center justify-center cursor-pointer">
          <div>
            <div class="text-[20px] mb-[8px]">浏览更多</div>
            <div class="text-theme3 truncate max-w-[100px]">{{ activeTab.label }}</div>
          </div>
          <ChevronRightCircleIcon size="50" color="var(--color-theme1)" />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang='less' scoped>
.other-recommendation {
  &-wrapper {
    width: 1226px;
    margin: 0 auto;
  }

  &-header {
    height: 58px;
  }

  &-title {}

  &-tabs {
    padding-top: 16px;
    box-sizing: border-box;
    min-width: 180px;

    .tab-active {
      color: #ff6700;
      border-bottom: 2px solid #ff6700;
    }
  }

  &-main {
    height: 614px;
    box-sizing: border-box;
  }

  &-item {
    height: 301px;
    width: 234px;
    margin-left: 14px;
    background: var(--color-theme2);
    transition: all .3s linear;
  }

  &-left {
    .other-recommendation-banner {
      transition: all .3s linear;
    }
  }

  &-right {
    box-sizing: border-box;
  }

  &-more-card {
    height: 301px;
    width: 234px;
    margin-left: 14px;
    background: var(--color-theme2);
    transition: all .3s linear;
  }
}
</style>