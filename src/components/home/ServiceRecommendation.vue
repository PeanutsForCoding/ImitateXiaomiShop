<script setup>
import { ref } from 'vue';
import { RouterLink } from 'vue-router'
import { getImg } from '&utils/getImg'


const serviceRecommendList = ref([
  {
    icon: 'guarantee_ service',
    name: '保障服务',
    path: '/'
  },
  {
    icon: 'group_ buying',
    name: '企业团购',
    path: '/'

  },
  {
    icon: 'F_code',
    name: 'F码通道',
    path: '/'
  },
  {
    icon: 'phone_card',
    name: '米粉卡',
    path: '/'
  },
  {
    icon: 'old_to_new',
    name: '以旧换新',
    path: '/'
  },
  {
    icon: 'phone_credit',
    name: '话费充值',
    path: '/'
  },
])
</script>

<template>
  <div class="service-recommendation-wrapper">
    <ul class="h-[100%] grid grid-cols-3 grid-rows-2 gap-4 grid-flow-col">
      <li class="flex flex-col items-center justify-center text-theme2 opacity-70 hover:opacity-100"
        v-for="({ icon, name, path }, index) in serviceRecommendList" :key="index">
        <router-link :to="path" class="flex flex-col items-center justify-center gap-y-[5px]">
          <img :src="getImg(icon)" :alt="icon" class="w-[24px] h-[24px]">
          <div>{{ name }}</div>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<style lang='less' scoped>
.service-recommendation-wrapper {
  padding: 5px;
  height: 100%;
  width: 234px;
  background: #5f5750;
}
</style>