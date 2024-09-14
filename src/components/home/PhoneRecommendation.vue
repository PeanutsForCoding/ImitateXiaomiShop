<script setup>
import { ChevronRightCircleIcon } from 'tdesign-icons-vue-next'
import { getImg } from '&utils/getImg'
</script>

<template>
  <div class="phone-recommendation-wrapper">
    <div class="phone-recommendation-header flex items-center justify-between">
      <div class="phone-recommendation-title text-[22px] h-[100%] leading-[58px]">手机</div>
      <div
        class="phone-recommendation-more text-theme3 flex items-center h-[100%] leading-[58px] cursor-pointer hover:text-theme1">
        <div class="text-[16px] mr-[5px]">查看更多</div>
        <ChevronRightCircleIcon size="18" />
      </div>
    </div>
    <div class="phone-recommendation-main flex">
      <div class="phone-recommendation-left hover:shadow-xl w-[234px]">
        <router-link :to="path">
          <img class="h-[100%] w-[234px]" :src="getImg('phone_banner')" alt="">
        </router-link>
      </div>
      <div class="phone-recommendation-right h-[100%] flex-1 flex flex-wrap gap-y-[11px]">
        <div class="phone-recommendation-item hover:shadow-xl flex flex-col items-center cursor-pointer">
          <img class="h-[160px] w-[160px] mb-[18px]" :src="getImg('phone_demo')" alt="">
          <div class="text-theme3 mb-[2px]">Xiaomi Civi 4 Pro</div>
          <div class="truncate w-[214px] text-text2 mb-[10px]">徕卡光学Summilux镜头 | 5000万徕卡人像镜头</div>
          <div class="text-theme1">
            <span>2799</span>元起
          </div>
        </div>
        <div class="phone-recommendation-item hover:shadow-xl flex flex-col items-center cursor-pointer">
          <img class="h-[160px] w-[160px] mb-[18px]" :src="getImg('phone_demo')" alt="">
          <div class="text-theme3 mb-[2px]">Xiaomi Civi 4 Pro</div>
          <div class="truncate w-[214px] text-text2 mb-[10px]">徕卡光学Summilux镜头 | 5000万徕卡人像镜头</div>
          <div class="text-theme1">
            <span>2799</span>元起
          </div>
        </div>
        <div class="phone-recommendation-item hover:shadow-xl flex flex-col items-center cursor-pointer">
          <img class="h-[160px] w-[160px] mb-[18px]" :src="getImg('phone_demo')" alt="">
          <div class="text-theme3 mb-[2px]">Xiaomi Civi 4 Pro</div>
          <div class="truncate w-[214px] text-text2 mb-[10px]">徕卡光学Summilux镜头 | 5000万徕卡人像镜头</div>
          <div class="text-theme1">
            <span>2799</span>元起
          </div>
        </div>
        <div class="phone-recommendation-item hover:shadow-xl flex flex-col items-center cursor-pointer">
          <img class="h-[160px] w-[160px] mb-[18px]" :src="getImg('phone_demo')" alt="">
          <div class="text-theme3 mb-[2px]">Xiaomi Civi 4 Pro</div>
          <div class="truncate w-[214px] text-text2 mb-[10px]">徕卡光学Summilux镜头 | 5000万徕卡人像镜头</div>
          <div class="text-theme1">
            <span>2799</span>元起
          </div>
        </div>
        <div class="phone-recommendation-item hover:shadow-xl flex flex-col items-center cursor-pointer">
          <img class="h-[160px] w-[160px] mb-[18px]" :src="getImg('phone_demo')" alt="">
          <div class="text-theme3 mb-[2px]">Xiaomi Civi 4 Pro</div>
          <div class="truncate w-[214px] text-text2 mb-[10px]">徕卡光学Summilux镜头 | 5000万徕卡人像镜头</div>
          <div class="text-theme1">
            <span>2799</span>元起
          </div>
        </div>
        <div class="phone-recommendation-item hover:shadow-xl flex flex-col items-center cursor-pointer">
          <img class="h-[160px] w-[160px] mb-[18px]" :src="getImg('phone_demo')" alt="">
          <div class="text-theme3 mb-[2px]">Xiaomi Civi 4 Pro</div>
          <div class="truncate w-[214px] text-text2 mb-[10px]">徕卡光学Summilux镜头 | 5000万徕卡人像镜头</div>
          <div class="text-theme1">
            <span>2799</span>元起
          </div>
        </div>
        <div class="phone-recommendation-item hover:shadow-xl flex flex-col items-center cursor-pointer">
          <img class="h-[160px] w-[160px] mb-[18px]" :src="getImg('phone_demo')" alt="">
          <div class="text-theme3 mb-[2px]">Xiaomi Civi 4 Pro</div>
          <div class="truncate w-[214px] text-text2 mb-[10px]">徕卡光学Summilux镜头 | 5000万徕卡人像镜头</div>
          <div class="text-theme1">
            <span>2799</span>元起
          </div>
        </div>
        <div class="phone-recommendation-item hover:shadow-xl flex flex-col items-center cursor-pointer">
          <img class="h-[160px] w-[160px] mb-[18px]" :src="getImg('phone_demo')" alt="">
          <div class="text-theme3 mb-[2px]">Xiaomi Civi 4 Pro</div>
          <div class="truncate w-[214px] text-text2 mb-[10px]">徕卡光学Summilux镜头 | 5000万徕卡人像镜头</div>
          <div class="text-theme1">
            <span>2799</span>元起
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang='less' scoped>
.phone-recommendation {
  &-wrapper {
    width: 1226px;
    margin: 0 auto;
  }

  &-header {
    height: 58px;
  }

  &-title {}

  &-more {}

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
    transition: all .3s linear;
  }

  &-right {
    box-sizing: border-box;
  }
}
</style>